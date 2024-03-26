module.exports = {
  title: "Test",
  icon: "icon.jpg",
  version: "1.6.0",
  menu: [{
    text: "script call",
    href: "script/index.json"
  }, {
    text: "args",
    href: "args/index.json"
  }, {
    text: "torch install",
    href: "script_run/install.json"
  }, {
    text: "torch shared install",
    href: "script_run/shared_venv_install.json"
  }, {
    text: "branch install",
    href: "script_run/branch_install.json"
  }, {
    text: "commit install",
    href: "script_run/commit_install.json"
  }, {
    text: "latest install",
    href: "script_run/latest_install.json"
  }, {
    text: "Start/Stop",
    menu: [{
      text: "start",
      href: "script_stop/start.json"
    }, {
      text: "stop",
      href: "script_stop/stop.json"
    }]
  }, {
    text: "Loop",
    menu: [{
      text: "loop until",
      href: "loop/loop_until_condition.json"
    }]
  }, {
    text: "Multi Install",
    menu: [{
      text: "Install",
      href: "multi-install/install.json"
    }, {
      text: "Start",
      href: "multi-install/start.json"
    }, {
      text: "Run",
      href: "multi-install/run.json"
    }, {
      text: "Handle Stop",
      href: "multi-install/handle_stop.json"
    }, {
      text: "Run and Stop",
      href: "multi-install/run_and_stop.json"
    }]
  }, {
    text: "Variables",
    menu: [{
      text: "script.exists",
      href: "vars/script/index.json"
    }, {
      text: "when(script.exists)",
      href: "vars/script/dynamic_when.json"
    }, {
      text: "script.running",
      href: "vars/script/script_running.json"
    }, {
      text: "script.running cwd",
      href: "vars/script/script_running_self.json"
    }, {
      text: "script.local",
      href: "vars/script/script_local.json"
    }, {
      text: "script.download",
      href: "vars/script/script_download.json"
    }]
  }, {
    text: "jump",
    menu: [{
      text: "jump to id",
      href: "jump/jump_id.json"
    }, {
      text: "jump to index",
      href: "jump/jump_index.json"
    }, {
      text: "jump with params",
      href: "jump/jump_with_params.json"
    }, {
      text: "loop",
      href: "jump/jump_dynamic.json"
    }]
  }, {
    text: "fs",
    menu: [{
      text: "fs.copy",
      href: "fs/fs_copy.js"
    }, {
      text: "fs.copy_git",
      href: "fs/fs_copy_git.js"
    }, {
      text: "fs.rm",
      href: "fs/fs_rm.js"
    }, {
      text: "fs.rm_git",
      href: "fs/fs_rm_git.js"
    }, {
      text: "fs.write",
      href: "fs/fs_write.js"
    }, {
      text: "fs.download_dir",
      href: "fs/fs_download_dir.js"
    }, {
      text: "fs.download_dir_git",
      href: "fs/fs_download_dir_git.js"
    }, {
      text: "fs.download",
      href: "fs/fs_download.js"
    }, {
      text: "fs.download_git",
      href: "fs/fs_download_git.js"
    }, {
      text: "fs.write json array",
      href: "fs/array.json"
    }, {
      text: "fs.write json",
      href: "fs/json.json"
    }, {
      text: "fs.write text",
      href: "fs/text.json"
    }, {
      text: "fs.write buffer",
      href: "fs/buffer.json"
    }, {
      text: "fs.link venv",
      href: "fs/link_venv.json"
    }, {
      text: "fs.link drive",
      href: "fs/link_drive.json"
    }]
  }, {
    text: "update",
    href: "update.json"
  }]
}
