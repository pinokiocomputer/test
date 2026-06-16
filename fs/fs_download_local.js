module.exports = {
  run: [{
    method: "fs.remove",
    params: {
      path: ".pinokio-test/downloads"
    }
  }, {
    uri: "../_assert.js",
    method: "startHttpServer",
    params: {
      id: "fs_download_local",
      routes: {
        "/path.txt": "download by explicit path",
        "/one.txt": "download one",
        "/two.txt": "download two"
      }
    }
  }, {
    method: "local.set",
    params: {
      fs_download_local_url: "{{input.url}}"
    }
  }, {
    method: "fs.download",
    params: {
      url: "{{local.fs_download_local_url}}path.txt",
      path: ".pinokio-test/downloads/path.txt"
    }
  }, {
    method: "fs.read",
    params: {
      path: ".pinokio-test/downloads/path.txt",
      encoding: "utf8"
    }
  }, {
    uri: "../_assert.js",
    method: "assertInputEquals",
    params: {
      equals: "download by explicit path",
      name: "fs_download_explicit_path"
    }
  }, {
    method: "fs.download",
    params: {
      url: [
        "{{local.fs_download_local_url}}one.txt",
        "{{local.fs_download_local_url}}two.txt"
      ],
      dir: ".pinokio-test/downloads/array"
    }
  }, {
    uri: "../_assert.js",
    method: "assertFileText",
    params: {
      path: ".pinokio-test/downloads/array/one.txt",
      equals: "download one",
      name: "fs_download_array_one"
    }
  }, {
    uri: "../_assert.js",
    method: "assertFileText",
    params: {
      path: ".pinokio-test/downloads/array/two.txt",
      equals: "download two",
      name: "fs_download_array_two"
    }
  }, {
    uri: "../_assert.js",
    method: "stopHttpServer",
    params: {
      id: "fs_download_local"
    }
  }, {
    method: "fs.rm",
    params: {
      path: ".pinokio-test"
    }
  }]
}
