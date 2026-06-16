module.exports = {
  run: [{
    method: "fs.remove",
    params: {
      path: ".pinokio-test/fs"
    }
  }, {
    method: "fs.make",
    params: {
      path: ".pinokio-test/fs"
    }
  }, {
    method: "fs.append",
    params: {
      path: ".pinokio-test/fs/output.txt",
      text: "hello"
    }
  }, {
    method: "fs.append",
    params: {
      path: ".pinokio-test/fs/output.txt",
      text: "\nworld"
    }
  }, {
    method: "fs.read",
    params: {
      path: ".pinokio-test/fs/output.txt",
      encoding: "utf8"
    }
  }, {
    uri: "../_assert.js",
    method: "assertInputEquals",
    params: {
      equals: "hello\nworld",
      name: "fs_make_append_remove_content"
    }
  }, {
    method: "fs.remove",
    params: {
      path: ".pinokio-test/fs"
    }
  }, {
    uri: "../_assert.js",
    method: "assertNotExists",
    params: {
      path: ".pinokio-test/fs",
      name: "fs_make_append_remove"
    }
  }]
}
