Self-hosted files for the optional "Remove background" switch. Nothing here is loaded
until the switch is first turned on; no third-party request is made at run time.

u2netp.onnx            4,574,861 bytes
  Source:  https://github.com/danielgatis/rembg/releases/download/v0.0.0/u2netp.onnx
  sha256:  309c8469258dda742793dce0ebea8e6dd393174f89934733ecc8b14c76f4ddd8
  md5:     8e83ca70e441ab06c318d82300c84806 (matches the md5 published in rembg/sessions/u2netp.py)
  Model:   U^2-Net-small (u2netp), https://github.com/xuebinqin/U-2-Net
  Licence: Apache-2.0, https://raw.githubusercontent.com/xuebinqin/U-2-Net/master/LICENSE
           (repo-level licence; the README states no separate weight licence). See LICENSE-u2netp.txt.
           ONNX conversion is distributed by rembg (MIT), https://github.com/danielgatis/rembg

ort.wasm.min.js        145,070 bytes   onnxruntime-web 1.17.3 (MIT)
  Source:  https://registry.npmjs.org/onnxruntime-web/-/onnxruntime-web-1.17.3.tgz  (package/dist/ort.wasm.min.js)
  sha256:  654435ead2d823e56d5893ec53be49f6ddb7e827096561aae63501071470cf23
ort-wasm-simd.wasm     10,551,547 bytes  onnxruntime-web 1.17.3 (MIT), single-thread SIMD WebAssembly
  Source:  same tarball (package/dist/ort-wasm-simd.wasm)
  sha256:  6783fcd6647ce1b426a527c31412a9c40894552faa609e9c931b3239a3438071
  Licence: MIT, https://raw.githubusercontent.com/microsoft/onnxruntime/v1.17.3/LICENSE. See LICENSE-onnxruntime.txt.
  npm tarball integrity: sha512-MSDrNUWgc1biP0YzY488OJ9n/jTMS9EXysgm9Aw4CUj2A836ALbO2J1sgzguWJeVUHTlM6p7tRzo8IGAgaXWKw==
