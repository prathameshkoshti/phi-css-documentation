import React from 'react';
import CommonDocsLayout from '../../../components/CommonDocsLayout';
import PrismCodeBlock from '../../../components/PrismCodeBlock';
import { formComponenetCodeBlocks } from '../../../utils/codeBlocks';

export default function form_components() {
    return (
        <CommonDocsLayout currentPageId="form_components" parentPageId="components" pageHeader="Form components">
            <section>
                <h4>Input field</h4>
                <p>
                    To render a input field, create a container which will hold the label and the input using a div with class <code>.form-input</code>. By default it will take whole width you can utilize the grid columns here to reduce the width.
                </p>
                <PrismCodeBlock codeBlock={formComponenetCodeBlocks.inputTextCodeBlock} />
                <p>Similarly, you can create password field, email field, search field, url field, tel field and number fields, select field and textarea</p>
                <div className="code-output">
                    <div className="form-input">
                        <label>Password</label>
                        <input type="password" placeholder="**********" defaultValue="**********" />
                    </div>
                    <div className="form-input">
                        <label>Email</label>
                        <input type="email" placeholder="prathameshkoshti@gmail.com" defaultValue="prathameshkoshti@gmail.com" />
                    </div>
                    <div className="form-input">
                        <label>Search</label>
                        <input type="search" placeholder="prathamesh koshti" defaultValue="prathamesh koshti" />
                    </div>
                    <div className="form-input">
                        <label>Number</label>
                        <input type="number" placeholder="123" defaultValue="123" />
                    </div>
                    <div className="form-input">
                        <label>Phone number</label>
                        <input type="tel" placeholder="1234567890" defaultValue="1234567890" />
                    </div>
                    <div className="form-input">
                        <label>Website</label>
                        <input type="url" placeholder="https://www.prathameshkoshti.com" defaultValue="https://www.prathameshkoshti.com" />
                    </div>
                    <div className="form-input">
                        <label>Select profession</label>
                        <select>
                            <option>Web developer</option>
                            <option>UI/UX designer</option>
                        </select>
                    </div>
                    <div className="form-input">
                        <label>About</label>
                        <textarea>
                            sometimes web developer...
                            sometimes ui/ux designer...
                        </textarea>
                    </div>
                </div>
                <p>
                    To create checkboxes erap the checkbox and the label inside a div having class as <code>.form-checkbox</code>.
                </p>
                <PrismCodeBlock codeBlock={formComponenetCodeBlocks.checkboxCodeBlock} />
                <p>
                    Similarly to above example, you can create a raio button by using the class <code>.form-radio</code>.
                </p>
                <PrismCodeBlock codeBlock={formComponenetCodeBlocks.radioCodeBlock} />
            </section>
        </CommonDocsLayout>
    )
}
