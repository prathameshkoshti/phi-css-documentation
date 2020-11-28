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
    },

    colCombo7Code: {
        code: `<div class="row justify-content-space-between">
    <div class="phi-col-8"></div>
    <div class="phi-col-8"></div>
    <div class="phi-col-8"></div>
    <div class="phi-col-8"></div>
</div>`,
        language: 'html',
        isOutputVisible: true,
    }
}

export const typographyCodeBlocks = {
    headingCodeBlock: {
        code: `<h1>Heading 1</h1>
<h2>Heading 2</h2>
<h3>Heading 3</h3>
<h4>Heading 4</h4>
<h5>Heading 5</h5>
<h6>Heading 6</h6>`,
        language: 'html',
        isOutputVisible: true,
    },

    unorderedListcodeBlock: {
        code: `<ul>
    <li>List item 1</li>
    <li>List item 2</li>
    <li>List item 3</li>
    <li>List item 4</li>
    <li>List item 5</li>
</ul>`,
        language: 'html',
        isOutputVisible: true,
    },

    orderedListCodeBlock: {
        code: `<ol>
    <li>List item 1</li>
    <li>List item 2</li>
    <li>List item 3</li>
    <li>List item 4</li>
    <li>List item 5</li>
</ol>`,
            language: 'html',
            isOutputVisible: true,
    },

    blockquoteCodeBlock: {
        code: `<blockquote>
        If you’re curious about this, it’s a garbled quotation from Cicero’s De Finibus Bonorum et Malorum (On the Ends of Good and Bad), book 1, paragraph 32, which reads, “Neque porro quisquam est, qui dolorem ipsum, quia dolor sit, amet, consectetur, adipisci velit,” meaning, “There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain.”
</blockquote>`,
        language: 'html',
        isOutputVisible: true,
    },

    contrastinFont1CoddeBlock: {
        code: `<div class="contrast-style-1">
    <h3>Heading</h3>
    <p>
        If you’re curious about this, it’s a garbled quotation from Cicero’s De Finibus Bonorum et Malorum (On the Ends of Good and Bad), book 1, paragraph 32, which reads, “Neque porro quisquam est, qui dolorem ipsum, quia dolor sit, amet, consectetur, adipisci velit,” meaning, “There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain.”
    </p>
</div>`,
        language: 'html',
        isOutputVisible: true
    },

    contrastinFont2CoddeBlock: {
        code: `<div class="contrast-style-2">
    <h3>Heading</h3>
    <p>
        If you’re curious about this, it’s a garbled quotation from Cicero’s De Finibus Bonorum et Malorum (On the Ends of Good and Bad), book 1, paragraph 32, which reads, “Neque porro quisquam est, qui dolorem ipsum, quia dolor sit, amet, consectetur, adipisci velit,” meaning, “There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain.”
    </p>
</div>`,
        language: 'html',
        isOutputVisible: true
    }
}

export const linksCodeBlocks = {
    linkCodeBlock: {
        code: `<span>This is how a <a class="link" href="#">Link</a> looks like</span>`,
        language: 'html',
        isOutputVisible: true
    },

    secondaryLinkCodeBlock: {
        code: '<a href="#" className="link link-secondary">Secondary link</a>',
        language: 'html',
        isOutputVisible: false
    },

    infoLinkCodeBlock: {
        code: '<a href="#" className="link link-info">Info link</a>',
        language: 'html',
        isOutputVisible: false
    },

    successLinkCodeBlock: {
        code: '<a href="#" className="link link-success">Success link</a>',
        language: 'html',
        isOutputVisible: false
    },

    warningLinkCodeBlock: {
        code: '<a href="#" className="link link-warning">Warning link</a>',
        language: 'html',
        isOutputVisible: false
    },

    errorLinkCodeBlock: {
        code: '<a href="#" className="link link-error">Error link</a>',
        language: 'html',
        isOutputVisible: false
    },

    greyLinkCodeBlock: {
        code: '<a href="#" className="link link-grey">Grey link</a>',
        language: 'html',
        isOutputVisible: false
    },
}

export const buttonsCodeBlocks = {
    buttonCodeBlock: {
        code: `<button class="button">Button</button>`,
        language: 'html',
        isOutputVisible: false
    },

    secondaryButtonCodeBlock: {
        code: `<button class="button button-secondary">Button</button>`,
        language: 'html',
        isOutputVisible: false
    },

    ghostButtonCodeBlock: {
        code: `<button class="button button-ghost">Button</button>`,
        language: 'html',
        isOutputVisible: false
    },

    infoButtonCodeBlock: {
        code: `<button class="button button-info">Button</button>`,
        language: 'html',
        isOutputVisible: false
    },

    successButtonCodeBlock: {
        code: `<button class="button button-success">Button</button>`,
        language: 'html',
        isOutputVisible: false
    },

    warningButtonCodeBlock: {
        code: `<button class="button button-warning">Button</button>`,
        language: 'html',
        isOutputVisible: false
    },

    errorButtonCodeBlock: {
        code: `<button class="button button-error">Button</button>`,
        language: 'html',
        isOutputVisible: false
    },

    greyButtonCodeBlock: {
        code: `<button class="button button-grey">Button</button>`,
        language: 'html',
        isOutputVisible: false
    },

    disabledButtonCodeBlock: {
        code: `<button class="button button-disabled">Button</button>`,
        language: 'html',
        isOutputVisible: false
    }
}

export const formComponenetCodeBlocks = {

}

export const tableCodeBlocks= {
    simpleTableCodeBlock: {
        code: `<table class="table">
    <thead>
        <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Height</th>
            <th>Location</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Stephen Curry</td>
            <td>27</td>
            <td>1,91</td>
            <td>Akron</td>
        </tr>
        <tr>
            <td>Klay Thompson</td>
            <td>25</td>
            <td>2,01</td>
            <td>Los Angeles</td>
        </tr>
        <tr>
            <td>Dave Gamache</td>
            <td>43</td>
            <td>1,89</td>
            <td>San Francisco</td>
        </tr>
        <tr>
            <td>Dwayne Johnson</td>
            <td>50</td>
            <td>2,05</td>
            <td>Hayward</td>
        </tr>
    </tbody>
</table>`,
        language: 'html',
        isOutputVisible: true,
    },

    responsiveTableCodeBlock: {
        code: `<div class="table-responsive">
    <table class="table">
        <thead>
            <tr>
                <th>Name</th>
                <th>Age</th>
                <th>Height</th>
                <th>Location</th>
                <th>Gender</th>
                <th>Occupation</th>
                <th>Reputation</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>Olivia Curry</td>
                <td>27</td>
                <td>1,91</td>
                <td>Akron</td>
                <td>Female</td>
                <td>Doctor</td>
                <td>20000</td>
            </tr>
            <tr>
                <td>Klay Thompson</td>
                <td>25</td>
                <td>2,01</td>
                <td>Los Angeles</td>
                <td>Male</td>
                <td>Professor</td>
                <td>400040</td>
            </tr>
            <tr>
                <td>Dave Gamache</td>
                <td>43</td>
                <td>1,89</td>
                <td>San Francisco</td>
                <td>Male</td>
                <td>Software Engineer</td>
                <td>4359809</td>
            </tr>
            <tr>
                <td>Diana Johnson</td>
                <td>50</td>
                <td>2,05</td>
                <td>Hayward</td>
                <td>Female</td>
                <td>Software Engineer</td>
                <td>324567</td>
            </tr>
        </tbody>
    </table>
</div>`,
        language: 'html',
        isOutputVisible: true,
    }
}