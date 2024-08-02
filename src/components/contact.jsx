import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import ReCAPTCHA from "react-google-recaptcha";
import { Fade } from "react-awesome-reveal";

function Contact() {
  const [captchaValue, setCaptchaValue] = useState(null);
  const form = useRef();
  const key = "6Lcz5rQZAAAAAH17FgXW0yjN-vXjsCYM8nx9krI9";
  const onChangeCaptcha = (value) => {
    setCaptchaValue(value);
  };

  const sendEmail = (e) => {
    e.preventDefault();
    if (captchaValue) {
      emailjs
        .sendForm("service_dat04vh", "template_iu7wwvs", form.current, {
          publicKey: "LQG9Wl4SBYDG3uuo4",
        })
        .then(
          () => {
            console.log("SUCCESS!");
            console.log("Mensaje enviado");
          },
          (error) => {
            console.log("FAILED...", error.text);
          }
        );
    } else {
      console.log("Por favor, completa el CAPTCHA.");
    }
  };
  return (
    <>
      <Fade>
        <section className="text-gray-600 body-font relative">
          <Fade delay={200}>
            <div className="container px-5 py-24 flex">
              <div className="lg:w-1/3 md:w-1/2 bg-white rounded-lg p-8 flex flex-col md:ml-auto w-full mt-20 md:mt-5 relative z-10 shadow-md">
                <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">
                  Send us a Email
                </h2>
                <form id="contactForm" onSubmit={sendEmail} ref={form}>
                  <div className="relative mb-4">
                    <label
                      htmlFor="name"
                      className="leading-7 text-sm text-gray-600"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="user_name"
                      required
                      className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                  </div>
                  <div className="relative mb-4">
                    <label
                      htmlFor="email"
                      className="leading-7 text-sm text-gray-600"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="user_email"
                      required
                      className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                  </div>
                  <div className="relative mb-4">
                    <label
                      htmlFor="phone"
                      className="leading-7 text-sm text-gray-600"
                    >
                      Phone
                    </label>
                    <input
                      type="phone"
                      id="phone"
                      name="user_phone"
                      required
                      className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                  </div>
                  <div className="relative mb-4">
                    <label
                      htmlFor="message"
                      className="leading-7 text-sm text-gray-600"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                    ></textarea>
                  </div>
                  <ReCAPTCHA sitekey={key} onChange={onChangeCaptcha} />
                  <button className="text-white bg-indigo-500 mt-4 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                    <input type="submit" value="Send" />
                    Button
                  </button>
                </form>
              </div>
            </div>
          </Fade>
        </section>
      </Fade>
    </>
  );
}

export default Contact;
