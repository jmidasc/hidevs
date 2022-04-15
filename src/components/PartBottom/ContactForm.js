import React from "react";

export default () => {
  return (
    <section id="ContactForm" class="contactspace-2 wf-section">
      <div class="formtitlecontainer w-container">
        <div class="wraptitle">
          <p class="hsnew-2">Everything starts with “hello”</p>
          <div class="div-block-83"></div>
          <h2 class="hdrivers-2">Let us know about your project</h2>
        </div>
      </div>
      <div class="formcontainer w-container">
        <div class="formblockdesktop w-form">
          <form
            id="wf-form-New-Home-Form"
            name="wf-form-New-Home-Form"
            data-name="New Home Form"
            redirect="/thank-you-arkusnexus-form"
            data-redirect="/thank-you-arkusnexus-form"
            method="get"
            class="formnuhomed"
            aria-label="New Home Form"
          >
            <div class="columnsform w-row">
              <div class="colform1 w-col w-col-4">
                <input
                  type="text"
                  class="textfieldhome w-input"
                  maxlength="256"
                  name="First-Name"
                  data-name="First Name"
                  placeholder="First name"
                  id="First-Name"
                  required=""
                />
              </div>
              <div class="w-col w-col-4">
                <input
                  type="text"
                  class="textfieldhome w-input"
                  maxlength="256"
                  name="Last-Name"
                  data-name="Last Name"
                  placeholder="Last name"
                  id="Last-Name"
                  required=""
                />
              </div>
              <div class="column-76 w-col w-col-4">
                <textarea
                  id="Message-3"
                  name="Message"
                  maxlength="5000"
                  data-name="Message"
                  placeholder="What can we help you with?"
                  required=""
                  class="homeareaform w-input"
                ></textarea>
              </div>
            </div>
            <div class="columnsform w-row">
              <div class="colform1 w-col w-col-4">
                <input
                  type="tel"
                  class="textfieldhome w-input"
                  maxlength="256"
                  name="Phone"
                  data-name="Phone"
                  placeholder="Phone"
                  id="Phone-4"
                  required=""
                />
              </div>
              <div class="w-col w-col-4">
                <input
                  type="email"
                  class="textfieldhome w-input"
                  maxlength="256"
                  name="Business-Email"
                  data-name="Business Email"
                  placeholder="Business email"
                  id="Business-Email"
                  required=""
                />
              </div>
              <div class="column-78 w-col w-col-4"></div>
            </div>
            <div
              data-sitekey="6Lfek8gcAAAAAFMwbTbotxbVFZ0fQWiGrZu-Of8c"
              class="w-form-formrecaptcha recaptcha-3 g-recaptcha g-recaptcha-error g-recaptcha-disabled"
            >
              <div style="width: 304px; height: 78px;">
                <div>
                  <iframe
                    title="reCAPTCHA"
                    src="https://www.google.com/recaptcha/api2/anchor?ar=1&amp;k=6Lfek8gcAAAAAFMwbTbotxbVFZ0fQWiGrZu-Of8c&amp;co=aHR0cHM6Ly93d3cuYXJrdXNuZXh1cy5jb206NDQz&amp;hl=en&amp;v=6pQzWaE1NP-gB4FrqRViKjM-&amp;size=normal&amp;cb=uhkjukdpaegn"
                    width="304"
                    height="78"
                    role="presentation"
                    name="a-9bs0xsqk6nax"
                    frameborder="0"
                    scrolling="no"
                    sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-top-navigation allow-modals allow-popups-to-escape-sandbox"
                  ></iframe>
                </div>
                <textarea
                  id="g-recaptcha-response"
                  name="g-recaptcha-response"
                  class="g-recaptcha-response"
                  style="width: 250px; height: 40px; border: 1px solid rgb(193, 193, 193); margin: 10px 25px; padding: 0px; resize: none; display: none;"
                ></textarea>
              </div>
            </div>
            <input
              type="submit"
              value="Submit"
              data-wait="Please wait..."
              id="submit-form"
              data-w-id="38736ca2-239f-1b4f-2810-5aa7e8b59e8b"
              class="submitnuhome-2 w-button"
              style="transform: translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg); transform-style: preserve-3d;"
            ></input>
          </form>
        </div>
      </div>
    </section>
  );
};
