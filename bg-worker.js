// Background remover worker: onnxruntime-web (single-thread WASM) running u2netp. Runs entirely on-device.
importScripts('vendor/ort.wasm.min.js');
const N = 320;   // model input size
let sess;
onmessage = async e => {
  const m = e.data;
  try {
    if (m.type === 'init') {
      ort.env.wasm.numThreads = 1; ort.env.wasm.proxy = false;
      ort.env.wasm.wasmPaths = { 'ort-wasm-simd.wasm': URL.createObjectURL(new Blob([m.wasm], { type: 'application/wasm' })) };
      sess = await ort.InferenceSession.create(new Uint8Array(m.model), { executionProviders: ['wasm'] });
      postMessage({ id: m.id, ok: true });
      return;
    }
    // m.img = RGBA bytes of the photo scaled to N x N
    const d = new Uint8Array(m.img), f = new Float32Array(3 * N * N), mean = [.485, .456, .406], sd = [.229, .224, .225];
    for (let i = 0; i < N * N; i++) for (let c = 0; c < 3; c++) f[c * N * N + i] = (d[i*4+c] / 255 - mean[c]) / sd[c];
    const res = await sess.run({ [sess.inputNames[0]]: new ort.Tensor('float32', f, [1, 3, N, N]) });
    const o = res[sess.outputNames[0]].data, mask = new Float32Array(N * N);
    let lo = Infinity, hi = -Infinity; for (const v of o) { if (v < lo) lo = v; if (v > hi) hi = v; }
    for (let i = 0; i < mask.length; i++) mask[i] = (o[i] - lo) / (hi - lo || 1);
    postMessage({ id: m.id, mask }, [mask.buffer]);
  } catch (err) { postMessage({ id: m.id, error: String(err) }); }
};
