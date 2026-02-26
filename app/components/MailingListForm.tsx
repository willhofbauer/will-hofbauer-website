"use client"

export default function MailingListForm() {
  return (
    <div className="w-full max-w-xs">
      <div id="mc_embed_signup">
        <form
          action="https://willhofbauer.us8.list-manage.com/subscribe/post?u=6abdc054180e57c9e8cce7074&amp;id=2c2fcb6eec&amp;f_id=00d012e1f0"
          method="post"
          id="mc-embedded-subscribe-form"
          name="mc-embedded-subscribe-form"
          className="validate"
          target="_self"
        >
          <div id="mc_embed_signup_scroll" className="space-y-3">
            <div className="mc-field-group">
              <input
                type="email"
                name="EMAIL"
                className="required email w-full p-2 border-2 border-purple-400 rounded-md text-purple-800 font-bold text-sm"
                id="mce-EMAIL"
                placeholder="Enter your email"
                required
              />
            </div>
            <div className="mc-field-group">
              <input
                type="text"
                name="FNAME"
                className="text w-full p-2 border-2 border-purple-400 rounded-md text-purple-800 font-bold text-sm"
                id="mce-FNAME"
                placeholder="Enter your name"
              />
            </div>
            <div hidden>
              <input type="hidden" name="tags" value="3300110" />
            </div>
            <div id="mce-responses" className="clear foot">
              <div className="response" id="mce-error-response" style={{ display: "none" }}></div>
              <div className="response" id="mce-success-response" style={{ display: "none" }}></div>
            </div>
            <div aria-hidden="true" style={{ position: "absolute", left: "-5000px" }}>
              <input type="text" name="b_6abdc054180e57c9e8cce7074_2c2fcb6eec" tabIndex={-1} />
            </div>
            <div className="clear foot">
              <input
                type="submit"
                name="subscribe"
                id="mc-embedded-subscribe"
                className="button w-full p-2 bg-pink-400 text-white rounded-md hover:bg-pink-500 transition-colors font-bold cursor-pointer"
                value="Sign up to the mailing list"
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}
