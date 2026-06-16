module.exports = {
  run: [{
    method: "log",
    params: {
      raw: "> torch_backend: {{torch_backend}}\r\n"
    }
  }, {
    method: "log",
    params: {
      raw: "> gpu: {{gpu}}\r\n> gpu_model: {{gpu_model}}\r\n> vram: {{vram}}\r\n"
    }
  }, {
    method: "log",
    params: {
      raw: "> valid torch backend? {{['cuda', 'rocm', 'mps', 'xpu', 'cpu'].includes(torch_backend)}}\r\n"
    }
  }, {
    when: "{{torch_backend === 'cuda'}}",
    method: "log",
    params: {
      raw: "API_TEST_OK torch_backend_cuda\r\n"
    }
  }, {
    when: "{{torch_backend === 'rocm'}}",
    method: "log",
    params: {
      raw: "API_TEST_OK torch_backend_rocm\r\n"
    }
  }, {
    when: "{{torch_backend === 'mps'}}",
    method: "log",
    params: {
      raw: "API_TEST_OK torch_backend_mps\r\n"
    }
  }, {
    when: "{{torch_backend === 'xpu'}}",
    method: "log",
    params: {
      raw: "API_TEST_OK torch_backend_xpu\r\n"
    }
  }, {
    when: "{{torch_backend === 'cpu'}}",
    method: "log",
    params: {
      raw: "API_TEST_OK torch_backend_cpu\r\n"
    }
  }, {
    when: "{{!['cuda', 'rocm', 'mps', 'xpu', 'cpu'].includes(torch_backend)}}",
    method: "log",
    params: {
      raw: "API_TEST_INVALID torch_backend {{torch_backend}}\r\n"
    }
  }]
}
