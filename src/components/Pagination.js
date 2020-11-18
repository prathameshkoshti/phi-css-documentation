import React, { Component } from 'react';
import Link from 'next/link';
import paginationStyles from '../css/modules/pagination.module.css';
import { docsLinks } from '../utils/siteData';
import { isObjectEmpty } from '../utils/functions';

export default class Pagination extends Component {
    constructor(props) {
        super(props);

        this.state = {
            currentPageObject: {},
            prevPageObject: {},
            nextPageObject: {}
        }
    }

    componentDidMount() {
        const currentPageId = this.props.currentPageId;

        let currentPageObject = {},
            prevPageObject = {},
            nextPageObject = {};

        if (!this.props.parentPageId) {
            const currentPageIndex = docsLinks.findIndex(docsLink => {
                currentPageObject = docsLink;
                return docsLink.id === currentPageId
            });

            const prevPageIndex = currentPageIndex - 1;
            const nextPageIndex = currentPageIndex + 1;
            if (prevPageIndex !== -1) {
                prevPageObject = docsLinks[prevPageIndex];

                if(prevPageObject.subLinks) {
                    prevPageObject = JSON.parse(JSON.stringify(prevPageObject.subLinks[prevPageObject.subLinks.length - 1]));

                    prevPageObject.link = `${docsLinks[prevPageIndex].id}/${prevPageObject.link}`;
                }
            }

            if (nextPageIndex < docsLinks.length) {
                nextPageObject = docsLinks[nextPageIndex];

                if(nextPageObject.subLinks) {
                    nextPageObject = JSON.parse(JSON.stringify(nextPageObject.subLinks[0]));

                    nextPageObject.link = `${docsLinks[nextPageIndex].id}/${nextPageObject.link}`;
                }
            }
        }
        else {
            const parentPageId = this.props.parentPageId;
            let parentPageObject = {}
            const parentPageIndex = docsLinks.findIndex(docsLink => {
                parentPageObject = docsLink;
                return docsLink.id === parentPageId
            });

            const currentPageIndex = parentPageObject.subLinks.findIndex(subLink => {
                currentPageObject = subLink;
                return subLink.id === currentPageId
            });

            const prevPageIndex = currentPageIndex - 1;
            const nextPageIndex = currentPageIndex + 1;

            if(prevPageIndex !== -1) {
                prevPageObject = JSON.parse(JSON.stringify(parentPageObject.subLinks[prevPageIndex]));
                prevPageObject.link = `${parentPageObject.id}/${prevPageObject.link}`;
            }
            else {
                prevPageObject = docsLinks[parentPageIndex - 1];
            }
            if(nextPageIndex < parentPageObject.subLinks.length) {
                nextPageObject = JSON.parse(JSON.stringify(parentPageObject.subLinks[nextPageIndex]));
                nextPageObject.link = `${parentPageObject.id}/${nextPageObject.link}`
            }
            else {
                nextPageObject = docsLinks[parentPageIndex + 1];
            }
        }

        if (isObjectEmpty(nextPageObject)) {
            nextPageObject = {
                id: 'examples',
                title: 'Examples',
                link: 'examples',
            }
        }

        this.setState({
            nextPageObject,
            prevPageObject
        });
    }

    render() {
        let nextLink = this.state.nextPageObject.link;
        if (this.state.nextPageObject && this.state.nextPageObject.link && this.state.nextPageObject.link.includes('examples')) {
            nextLink = "/examples";
        }
        else {
            nextLink = `/docs/${this.state.nextPageObject.link}`
        }
        return (
            <div className={paginationStyles.paginationContainer}>
                <div>
                {
                isObjectEmpty(this.state.prevPageObject) ?
                    '' :
                        <Link href={`/docs/${this.state.prevPageObject.link}`}>
                            <a className={paginationStyles.paginationPrev}>
                                <div className={paginationStyles.arrowLink}>
                                    <img src="/icons/prev.svg" width="20px" />
                                    <small className={paginationStyles.paginationLabel}>prev</small>
                                </div>
                                <h5 className={paginationStyles.paginationTitle}>{this.state.prevPageObject.title}</h5>
                            </a>
                        </Link>
                }
                </div>
                <div>
                {
                isObjectEmpty(this.state.nextPageObject) ?
                    '' :
                        <Link href={nextLink}>
                            <a className={paginationStyles.paginationNext}>
                                <div className={paginationStyles.arrowLink}>
                                    <small className={paginationStyles.paginationLabel}>next</small>
                                    <img src="/icons/next.svg" width="20px" />
                                </div>
                                <h5 className={`${paginationStyles.paginationNextPageTitle} ${paginationStyles.paginationTitle}`}>{this.state.nextPageObject.title}</h5>
                            </a>
                        </Link>
                }
                </div>
            </div>
        )
    }
}
