import React from 'react'

export default () => {
    return (
        <div className="navigation">
            <div className="container-navigation">
                <div className="navigation-block-left">
                <h1 style={{ color: "#702518" }}>Hi-DEVs</h1>
                </div>
                <div className="navigation-link-wrap">
                    <a className="navigation-link-nu w-inline-block" href="#Our-Services">
                        <div className="navigation-text-nu">Services</div>
                    </a>
                    <a className="navigation-link-nu w-inline-block" href="#who-we-work">
                        <div className="navigation-text-nu">Support</div>
                    </a>
                    <a className="navigation-link-nu w-inline-block" href="#ContactForm">
                        <div className="navigation-text-nu">Contact Us</div>
                    </a>
                </div>
            </div>
        </div>
    )
}