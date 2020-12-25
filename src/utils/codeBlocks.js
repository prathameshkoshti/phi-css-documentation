import utilities from "../pages/docs/utilities"

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
        code: '<div class="phi-container"></div>',
        language: 'html',
        isOutputVisible: false,
    },
    fullWidthContainerCode: {
        code: '<div class="phi-container-full"></div>',
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
    <div class="phi-col-2"></div>
    <div class="phi-col-3"></div>
</div>`,
        language: 'html',
        isOutputVisible: true,
    },

    colCombo2Code: {
        code: `<div class="row">
    <div class="phi-col-2"></div>
    <div class="phi-col-4"></div>
    <div class="phi-col-5"></div>
</div>`,
        language: 'html',
        isOutputVisible: true,
    },


    colCombo3Code: {
        code: `<div class="row">
    <div class="phi-col-2"></div>
    <div class="phi-col-5"></div>
    <div class="phi-col-6"></div>
    <div class="phi-col-6"></div>
    <div class="phi-col-7"></div>
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
    <div class="phi-col-3"></div>
    <div class="phi-col-4"></div>
    <div class="phi-col-4"></div>
    <div class="phi-col-5"></div>
</div>`,
        language: 'html',
        isOutputVisible: true,
    },

    colCombo6Code: {
        code: `<div class="row">
    <div class="phi-col-5"></div>
    <div class="phi-col-4"></div>
    <div class="phi-col-4"></div>
    <div class="phi-col-4"></div>
    <div class="phi-col-5"></div>
</div>`,
        language: 'html',
        isOutputVisible: true,
    },

    colCombo7Code: {
        code: `<div class="row justify-content-space-between">
    <div class="phi-col-4"></div>
    <div class="phi-col-4"></div>
    <div class="phi-col-4"></div>
    <div class="phi-col-4"></div>
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

    codeCodeBlock: {
        code: `<code>&lt;code&gt;</code>`,
        language: 'html',
        isOutputVisible: true,
    },

    kbdCodeBlock: {
        code: `<kbd>ctl + ,</kbd>`,
        language: 'html',
        isOutputVisible: true,
    },

    sampCodeBlock: {
        code: `<samp>This is an output.</samp>`,
        language: 'html',
        isOutputVisible: true,
    },

    varCodeBlock: {
        code: `<var>a + b</var>`,
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
        code: `<span>This is how a <a class="link link-primary" href="#">Link</a> looks like</span>`,
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
    inputTextCodeBlock: {
        code: `<div class="form-input">
    <label for="name">Name</label>
    <input id="name" type="text" placeholder="Prathamesh Koshti" value="Prathamesh Koshti" />
</div>`,
        language: 'html',
        isOutputVisible: true
    },

    checkboxCodeBlock: {
        code: `<div class="form-checkbox">
    <input id="accept-checkbox" type="checkbox" checked />
    <label for="accept-checkbox">I accept the terms and conditions</label>
</div>`,
        language: 'html',
        isOutputVisible: true
    },

    radioCodeBlock: {
        code: `<div class="form-radio">
    <input id="one" name="size" type="radio" checked />
    <label for="one">One</label>
</div>
<div class="form-radio">
    <input id="two" name="size" type="radio" />
    <label for="two">Two</label>
</div>`,
        language: 'html',
        isOutputVisible: true
    }
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

export const utilitiesCodeBlocks = {
    fullWidthCodeBlock: {
        code: '<div class="phi-full-width"></div>',
        language: 'html',
        isOutputVisible: false,
    },

    cssVariableFontsCodeBlock: {
        code: `--serif-font: "Playfair Display", Times, serif;
--sans-serif-font: "Poppins", Arial, Helvetica, sans-serif;
--monospace-font: "Fira Code", Courier, monospace;`,
        language: 'css',
        isOutputVisible: false,
    },

    cssVariablePhiCodeBlock: {
        code: `--phi: 1.618;
--rem-mul-phi: 1rem * $phi;
--rem-div-phi: 1rem / $phi;`,
        language: 'css',
        isOutputVisible: false,
    },

    cssVariableTransitionCodeBlock: {
        code: `--transition: 0.3s ease-in-out;`,
        language: 'css',
        isOutputVisible: false,
    },

    cssVariableColorsCodeBlock: {
        code: `--dark: #242831;
--light: #F8F8FF;

--accent: #7A65FB;
--accent-tint: #CCC4FD;
--accent-shade: #2f2760;

--info: #3EAEFF;
--info-tint: #B5E0FF;
--info-shade: #184261;

--success: #00DD8D;
--success-tint: #9EF2D3;
--success-shade: #005436;

--error: #FF6666;
--error-tint: #FFC5C5;
--error-shade: #612727;

--warning: #FF9559;
--warning-tint: #FFD7C0;
--warning-shade: #613922;

--grey: #B5B5B5;
--grey-tint: #E3E3E3;
--grey-shade: #454545;`,
        language: 'css',
        isOutputVisible: false,
    }
}

export const darkModeCodeBlocks = {
    importDarkMode: {
        code: `import 'phi-css/dist/phi.css';`,
        language: 'javascript',
        isOutputVisible: false,
    },
    includeDarkMode: {
        code: `<link href="https://unpkg.com/phi-css@1.0.0/dist/phi.css" rel="stylesheet">`,
        language: 'html',
        isOutputVisible: false,
    },
    bodyClassCodeBlock: {
        code: '<body className="dark"></body>',
        language: 'html',
        isOutputVisible: false,
    },
    divClassCodeBlock: {
        code: '<div className="dark"></div>',
        language: 'html',
        isOutputVisible: false,
    }
}

export const customizationsCodeBlocks = {
    gitCloneCodeBlock: {
        code: 'git clone https://github.com/phi-css/phi-css.git',
        language: 'command',
        isOutputVisible: false,
    },

    phiVariableCodeBlock: {
        code: '$phi: 1.618',
        language: 'css',
        isOutputVisible: false,
    },

    colorVariablesCodeBlock: {
        code: `$dark: #242831;
$light: #F8F8FF;
$accent: #7A65FB;
$info: #3EAEFF;
$success: #00DD8D;
$error: #FF6666;
$warning: #FF9559;
$grey: #B5B5B5;
`,
        language: 'css',
        isOutputVisible: false,
    },

    fontFamiliesCodeBlock: {
        code: `$sansSerifFont: "Poppins", Arial, Helvetica, sans-serif;
$serifFont: "Playfair Display", Times, serif;
$monospaceFont: "Fira Code", Courier, monospace;`,
        language: 'css',
        isOutputVisible: false,
    },

    transitionVariableCodeBlock: {
        code: '$transition: 0.3s ease-in-out;',
        language: 'css',
        isOutputVisible: false,
    },

    gulpCommandCodeBlock: {
        code: 'gulp',
        language: 'command',
        isOutputVisible: false,
    }
}

export const ideaCodeBlocks = {
    baseVariablesCodeBlock: {
        code: `$phi: 1.618;
$remMulPhi: 1rem * $phi
$remDivPhi: 1rem / $phi`,
        language: 'css',
        isOutputVisible: false,
    },

    gridGenerationCodeBlock: {
        code: `$base: 100%; /* classes: .phi-col-base and .phi-col-0 */
$phiCol2: $base / $phi; /* classes: .phi-col-lg and .phi-col-2 */
$phiCol3: $base - $phiCol2; /* classes: .phi-col-md and .phi-col-3 */
$phiCol4: $phiCol3 / $phi; /* classes: .phi-col-sm and .phi-col-4 */
$phiCol5: $phiCol3 - $phiCol4; /* classes: .phi-col-xs and .phi-col-5 */
$phiCol6: $phiCol5 / $phi; /* class: .phi-col-6 */
$phiCol7: $phiCol5 - $phiCol6; /* class: .phi-col-7 */`,
        language: 'css',
        isOutputVisible: false,
    },

    col1GenerationCodeBlock: {
        code: `$phiCol1: $base - ($phiCol6 + $phiCol6); /* classes: .phi-col-xl and .phi-col-1 */`,
        language: 'css',
        isOutputVisible: false,
    },

    headersCodeBlock: {
        code: `$h5: 1rem;
$h4: $h5 * $phi;
$h3: $h4 * $phi;
$h2: $h3 * $phi;
$h1: $h2 * $phi;
$h6: $h5 / $phi;`,
        language: 'css',
        isOutputVisible: false,
    },

    fluidTypographyCodeBlock: {
        code: `font-size: calc(14px + (16 - 14) * ((100vw - 360px) / (1440 - 320)));`,
        language: 'css',
        isOutputVisible: false,
    },
}