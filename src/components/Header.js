import React from 'react'
import './Header.scss'

export default () => {
    return (
        <div className="navigation">
            <div className="container-navigation">
                <div className="navigation-block-left">
                    <a href="/" className="logo-link w-inline-block w--current">

                    </a>
                </div>
                <div className="navigation-link-wrap">
                    <a className="navigation-link-nu w-inline-block">
                        <div className="navigation-text-nu">Services</div>
                    </a>
                    <a className="navigation-link-nu w-inline-block">
                        <div className="navigation-text-nu">Support</div>
                    </a>
                    <a className="navigation-link-nu w-inline-block">
                        <div className="navigation-text-nu">Contact Us</div>
                    </a>
                    <a className="navigation-link-nu w-inline-block">
                        <div className="navigation-text-nu">Our Work</div>
                    </a>
                    <a className="navigation-link-nu w-inline-block">
                        <div className="navigation-text-nu">Articles</div>
                    </a>
                    <a className="navigation-link-nu w-inline-block">
                        <div className="navigation-text-nu">Projects</div>
                    </a>
                </div>
            </div>
        </div>
    )
}