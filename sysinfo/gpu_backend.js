module.exports = {
  run: [{
    method: "log",
    params: {
      raw: "> gpu_backend: {{gpu_backend}}\r\n"
    }
  }, {
    method: "log",
    params: {
      raw: "> gpu: {{gpu}}\r\n> gpu_model: {{gpu_model}}\r\n> vram: {{vram}}\r\n"
    }
  }, {
    method: "log",
    params: {
      raw: "> valid backend? {{['cuda', 'rocm', 'mps', 'xpu', 'cpu'].includes(gpu_backend)}}\r\n"
    }
  }, {
    when: "{{gpu_backend === 'cuda'}}",
    method: "log",
    params: {
      raw: "API_TEST_OK gpu_backend_cuda\r\n"
    }
  }, {
    when: "{{gpu_backend === 'rocm'}}",
    method: "log",
    params: {
      raw: "API_TEST_OK gpu_backend_rocm\r\n"
    }
  }, {
    when: "{{gpu_backend === 'mps'}}",
    method: "log",
    params: {
      raw: "API_TEST_OK gpu_backend_mps\r\n"
    }
  }, {
    when: "{{gpu_backend === 'xpu'}}",
    method: "log",
    params: {
      raw: "API_TEST_OK gpu_backend_xpu\r\n"
    }
  }, {
    when: "{{gpu_backend === 'cpu'}}",
    method: "log",
    params: {
      raw: "API_TEST_OK gpu_backend_cpu\r\n"
    }
  }, {
    when: "{{!['cuda', 'rocm', 'mps', 'xpu', 'cpu'].includes(gpu_backend)}}",
    method: "log",
    params: {
      raw: "API_TEST_INVALID gpu_backend {{gpu_backend}}\r\n"
    }
  }]
}
