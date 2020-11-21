export const sampleCode = {
    code: `.class {
  property: value;
}
#id {
  property: value;
}
`,
    language: 'css',
    isOutputVisible: false
}

export const sampleHTMLCode = {
    code: `<div class="container"></div>`,
    language: 'html',
    isOutputVisible: true
}

export const includePhiCode = {
    code: `<link href="https://unpkg.com/phi-css@1.0.0/dist/phi.css" rel="stylesheet">`,
    language: 'html',
    isOutputVisible: false,
}

export const includePhiMinCode = {
    code: `<link href="https://unpkg.com/phi-css@1.0.0/dist/phi.min.css" rel="stylesheet">`,
    language: 'html',
    isOutputVisible: false,
}

export const npmInstallCmd = {
    code: 'npm install phi-css',
    language: 'command',
}

export const importCode = {
    code: "import 'phi-css/dist/phi.min.css'",
    language: 'javascript',
}