import React, {useState} from 'react';
import miniCodeEditorStyles from '../../css/modules/mini-code-editor.module.css';

export default function TypographyFeature() {
    const [classInputValue, setClassInputValue] = useState('');
    const classList = ['contrast-style-1', 'contrast-style-2'];
    const [className, setClassName] = useState('');
    const handleClassNameInput = (event) => {
        const value = event.currentTarget.value;
        setClassInputValue(value);

        if(classList.includes(value)) {
            setClassName(value);
        }
        else {
            setClassName('');
        }
    }
    return (
        <section className="">
            <article className={`flex flex-column justify-content-center ${className}`}>
                <h2>Typography</h2>
                <p>
                    This framework supports fluid typography. Also,
                    you can also utilize the typographical feature as per your requirement. Try any one of the following classes <code>.contrast-style-1</code> and <code>.contrast-style-2</code> in the editable textfield and see the magic!
                </p>
            </article>
            <article className="flex justify-content-center align-items-center">
                <pre className={miniCodeEditorStyles.miniCodeEditor}>
                    <code className={miniCodeEditorStyles.defaultCodeStyle}>
                        <div>
                            <code>&lt;</code><code className={miniCodeEditorStyles.tagStyle}>div</code> <code className={miniCodeEditorStyles.attributeStyle}>class</code>="<code className={miniCodeEditorStyles.valueStyle}><input className={miniCodeEditorStyles.classInput} onKeyUp={handleClassNameInput} defaultValue={classInputValue}></input></code>"
                            <code>&gt;
                            </code>
                        </div>
                        <div>
                            &nbsp;&nbsp;&nbsp;&nbsp;.
                        </div>
                        <div>
                            &nbsp;&nbsp;&nbsp;&nbsp;.
                        </div>
                        <div>
                            &nbsp;&nbsp;&nbsp;&nbsp;.
                        </div>
                        <div>
                            <code>&lt;/</code><code className={miniCodeEditorStyles.tagStyle}>div</code><code>&gt;</code>
                        </div>
                    </code>
                </pre>
            </article>
        </section>
    )
}
