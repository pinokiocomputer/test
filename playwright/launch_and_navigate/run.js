module.exports = {
  daemon: true,
  run: [
    // Delete this step if your project does not use torch
    {
      method: "script.start",
      params: {
        uri: "torch.js",
        params: {
          venv: "env",                // Edit this to customize the venv folder path
          // xformers: true   // uncomment this line if your project requires xformers
        }
      }
    },
    // Edit this step with your custom install commands
    {
      method: "shell.run",
      params: {
        venv: "env",                // Edit this to customize the venv folder path
        message: [
          "uv pip install transformers accelerate diffusers gradio devicetorch"
        ],
      }
    },
    {
      method: "shell.run",
      params: {
        venv: "env",
        message: [ "python app.py", ],
        on: [{
          "event": "/http:\/\/\\S+/",   
          "done": true
        }]
      }
    },
    {
      method: "local.set",
      params: {
        // the input.event is the regular expression match object from the previous step
        url: "{{input.event[0]}}"
      }
    },
    {
      uri: "launch.js",
      method: "open",
      params: {
        url: "{{local.url}}"
      }
    }
  ]
}
