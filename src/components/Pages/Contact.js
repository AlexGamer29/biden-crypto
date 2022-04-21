import React from "react";
import "../css/contact.css";

export const Contact = () => {
  return (
    <div className="page-content">
      <h1 style={{ marginBottom: '0px !important' }}>Contact</h1>
      <p>&nbsp;</p>
      <div className="gf_browser_safari gform_wrapper contact-leads_wrapper gform_legacy_markup_wrapper" id="gform_wrapper_1">
        <form method="post" encType="multipart/form-data" id="gform_1" className="contact-leads gform_legacy_markup" action="/contact/">
          <div className="gform_body gform-body">
            <ul id="gform_fields_1" className="gform_fields top_label form_sublabel_below description_above">
              <li id="field_1_1" className="gfield gfield_html gfield_html_formatted gfield_no_follows_desc field_sublabel_below field_description_above gfield_visibility_visible">
                <h2>Hi, there!</h2>
              </li>
              <li id="field_1_12" className="gfield leadstyle gfield_contains_required field_sublabel_below field_description_above gfield_visibility_visible">
                <label className="gfield_label" htmlFor="input_1_12">I'm contacting you because<span className="gfield_required"><span className="gfield_required gfield_required_asterisk">*</span></span></label>
                <div className="ginput_container ginput_container_select"><select name="input_12" id="input_1_12" className="large gfield_select" aria-required="true" aria-invalid="false">
                  <option value selected="selected" className="gf_placeholder">I'd like to proposition
                    you</option>
                  <option value="I have a question about a product">I have a question about a product
                  </option>
                  <option value="I have a question about your book">I have a question about your book
                  </option>
                  <option value="I can't even make a grilled cheese right now">I can't even make a
                    grilled cheese right now</option>
                  <option value="I'd like to request an interview">I'd like to request an interview
                  </option>
                  <option value="I want to give you a testimonial">I want to give you a testimonial
                  </option>
                  <option value="I'm an alien here to study your braaaainnnsssss">I'm an alien here to
                    study your braaaainnnsssss</option>
                  <option value="Just need some good, old-fashioned help">Just need some good,
                    old-fashioned help</option>
                  <option value="Amy Poehler sent me">Amy Poehler sent me</option>
                </select></div>
              </li>
              <li id="field_1_8" className="gfield leadstyle gfield_contains_required field_sublabel_below field_description_above gfield_visibility_visible">
                <label className="gfield_label" htmlFor="input_1_8">You can reply to me at<span className="gfield_required"><span className="gfield_required gfield_required_asterisk">*</span></span></label>
                <div className="ginput_container ginput_container_email">
                  <input name="input_8" id="input_1_8" type="text" defaultValue className="large" placeholder="your email" aria-required="true" aria-invalid="false" />
                </div>
              </li>
              <li id="field_1_13" className="gfield leadstyle gfield_contains_required field_sublabel_below field_description_above gfield_visibility_visible">
                <label className="gfield_label" htmlFor="input_1_13">as long as you promise not to<span className="gfield_required"><span className="gfield_required gfield_required_asterisk">*</span></span></label>
                <div className="ginput_container ginput_container_select"><select name="input_13" id="input_1_13" className="large gfield_select" aria-required="true" aria-invalid="false">
                  <option value selected="selected" className="gf_placeholder">Give my email address to
                    satan</option>
                  <option value="Give my email address to Satan">Give my email address to Satan
                  </option>
                  <option value="Write back with a your/you're error">Write back with a your/you're
                    error</option>
                  <option value="Reply like a generic robot">Reply like a generic robot</option>
                  <option value="Advise me to meditate">Advise me to meditate</option>
                  <option value="Tell me to manifest my desires">Tell me to manifest my desires
                  </option>
                  <option value="All of the above, LOL">All of the above, LOL</option>
                </select></div>
              </li>
              <li id="field_1_2" className="gfield leadstyle field_sublabel_below field_description_above gfield_visibility_visible">
                <label className="gfield_label" htmlFor="input_1_2">One quirky thing I think you should know about
                  me is</label>
                <div className="ginput_container ginput_container_text"><input name="input_2" id="input_1_2" type="text" defaultValue className="large" placeholder="your answer here" aria-invalid="false" /> </div>
              </li>
              <li id="field_1_19" className="gfield leadstyle gfield_contains_required field_sublabel_below field_description_above gfield_visibility_visible">
                <label className="gfield_label" htmlFor="input_1_19">But what I really wanted to write is this:<span className="gfield_required"><span className="gfield_required gfield_required_asterisk">*</span></span></label>
                <div className="ginput_container ginput_container_text"><input name="input_19" id="input_1_19" type="text" defaultValue className="large" aria-required="true" aria-invalid="false" /> </div>
              </li>
              <li id="field_1_15" className="gfield leadstyle gfield_contains_required field_sublabel_below field_description_above gfield_visibility_visible">
                <label className="gfield_label" htmlFor="input_1_15">Thanks!<span className="gfield_required"><span className="gfield_required gfield_required_asterisk">*</span></span></label>
                <div className="ginput_container ginput_container_select"><select name="input_15" id="input_1_15" className="medium gfield_select" aria-required="true" aria-invalid="false">
                  <option value="Irish Jig,">Irish Jig,</option>
                  <option value="Bow,">Bow,</option>
                  <option value="High five!">High five!</option>
                  <option value="Hell Yeah,">Hell Yeah,</option>
                  <option value="Wink,">Wink,</option>
                  <option value="Fierce + Fresh,">Fierce + Fresh,</option>
                  <option value="XOXO,">XOXO,</option>
                  <option value="Love,">Love,</option>
                  <option value="Truly Yours,">Truly Yours,</option>
                </select></div>
              </li>
              <li id="field_1_16" className="gfield leadstyle gfield_contains_required field_sublabel_below field_description_above hidden_label gfield_visibility_visible">
                <label className="gfield_label screen-reader-text" htmlFor="input_1_16">your full name<span className="gfield_required"><span className="gfield_required gfield_required_asterisk">*</span></span></label>
                <div className="ginput_container ginput_container_text"><input name="input_16" id="input_1_16" type="text" defaultValue className="large" placeholder="your full name" aria-required="true" aria-invalid="false" /> </div>
              </li>
            </ul>
          </div>
          <div className="gform_footer top_label"> <input type="submit" id="gform_submit_button_1" className="gform_button button" defaultValue="Catapult Your Message Across the Internet" onclick="if(window[&quot;gf_submitting_1&quot;]){return false;}  window[&quot;gf_submitting_1&quot;]=true;  " onkeypress="if( event.keyCode == 13 ){ if(window[&quot;gf_submitting_1&quot;]){return false;} window[&quot;gf_submitting_1&quot;]=true;  jQuery(&quot;#gform_1&quot;).trigger(&quot;submit&quot;,[true]); }" />
            <input type="hidden" className="gform_hidden" name="is_submit_1" defaultValue={1} />
            <input type="hidden" className="gform_hidden" name="gform_submit" defaultValue={1} />
            <input type="hidden" className="gform_hidden" name="gform_unique_id" defaultValue />
            <input type="hidden" className="gform_hidden" name="state_1" defaultValue="WyJbXSIsIjEyMTBjNDkwZGM0OWQ1OTAwZmFhNDIyNWNkYTk0ZDRhIl0=" />
            <input type="hidden" className="gform_hidden" name="gform_target_page_number_1" id="gform_target_page_number_1" defaultValue={0} />
            <input type="hidden" className="gform_hidden" name="gform_source_page_number_1" id="gform_source_page_number_1" defaultValue={1} />
            <input type="hidden" name="gform_field_values" defaultValue />
          </div>
        </form>
      </div>
      <div className="post-tags">
      </div>
    </div>
  );
};
