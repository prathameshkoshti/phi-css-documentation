import React, {useState} from 'react';
import { motion } from 'framer-motion';
import miniCodeEditorStyles from '../../css/modules/mini-code-editor.module.css';

export default function TypographyFeature() {
    const [classInputValue, setClassInputValue] = useState('');
    const [visibility, setVisibility] = useState(true);

    const classList = ['contrast-style-1', 'contrast-style-2'];
    const [className, setClassName] = useState('');
    const handleClassNameInput = (event) => {
        const value = event.currentTarget.value;
        setClassInputValue(value);

        if (classList.includes(value)) {
            setVisibility(false);
            setTimeout(() => {
                setClassName(value);
                setVisibility(true);
            },400)
        }
        else if (value === 'contrast-style-') {
            setVisibility(false);
            setTimeout(() => {
                setClassName('');
                setVisibility(true);
            },400)
        }
        // else {
        //     setClassName('');
        // }
    }

    const variants = {
        invisible: {
            opacity: 0
        },
        visible: {
            opacity: 1
        }
    }

    return (
        <section className="">
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
            <article className={`flex flex-column justify-content-center ${className}`}>
                <motion.div
                    initial={visibility ? 'visible' : 'invisible'}
                    animate={visibility ? 'visible' : 'invisible'}
                    transition={{duration: 0.3}}
                    variants={variants}
                >
                    <h3>Typography</h3>
                    <p>
                    This framework supports fluid typography (try resizing this window if you are using a desktop browser). Also, you can utilize the contrasting typographical feature as per your requirement. Try any one of the following classes <code>.contrast-style-1</code> and <code>.contrast-style-2</code> in the editable text field and see the magic!
                    </p>
                </motion.div>
            </article>
        </section>
    )
}
