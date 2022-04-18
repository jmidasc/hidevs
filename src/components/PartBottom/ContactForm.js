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
            <input
              type="submit"
              value="Submit"
              id="submit-form"
              className="submitnuhome-2 w-button"
            ></input>
          </form>
        </div>
      </div>
    </section>
  );
};
