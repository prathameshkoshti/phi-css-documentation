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
    code: '<link href="https://unpkg.com/phi-css@1.0.0/dist/phi.min.css" rel="stylesheet">',
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

export const baseCodeBlocks = {
    containerCode: {
        code: '<div class="container"></div>',
        language: 'html',
        isOutputVisible: false,
    },
    responsiveImageCode: {
        code: '<img class="phi-image" src="/images/M101.jpg"></img>',
        language: 'html',
        isOutputVisible: true,
    }
}

export const gridCodeBlocks = {
    rowCode: {
        code: '<div class="row"></div>',
        language: 'html',
        isOutputVisible: false,
    },

    colCombo1Code: {
        code: `<div class="row">
    <div class="phi-col-10"></div>
    <div class="phi-col-9"></div>
</div>`,
        language: 'html',
        isOutputVisible: true,
    },

    colCombo2Code: {
        code: `<div class="row">
    <div class="phi-col-10"></div>
    <div class="phi-col-8"></div>
    <div class="phi-col-7"></div>
</div>`,
        language: 'html',
        isOutputVisible: true,
    },


    colCombo3Code: {
        code: `<div class="row">
        <div class="phi-col-10"></div>
        <div class="phi-col-7"></div>
        <div class="phi-col-6"></div>
        <div class="phi-col-6"></div>
        <div class="phi-col-5"></div>
</div>`,
        language: 'html',
        isOutputVisible: true,
    },

    colCombo4Code: {
        code: `<div class="row">
    <div class="phi-col-md"></div>
    <div class="phi-col-md"></div>
    <div class="phi-col-sm"></div>
</div>`,
        language: 'html',
        isOutputVisible: true,
    },

    colCombo5Code: {
        code: `<div class="row">
    <div class="phi-col-9"></div>
    <div class="phi-col-8"></div>
    <div class="phi-col-8"></div>
    <div class="phi-col-7"></div>
</div>`,
        language: 'html',
        isOutputVisible: true,
    },

    colCombo6Code: {
        code: `<div class="row">
    <div class="phi-col-7"></div>
    <div class="phi-col-8"></div>
    <div class="phi-col-8"></div>
    <div class="phi-col-8"></div>
    <div class="phi-col-7"></div>
</div>`,
        language: 'html',
        isOutputVisible: true,
    }
}