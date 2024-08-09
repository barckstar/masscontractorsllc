import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import ReCAPTCHA from "react-google-recaptcha";
import { Fade } from "react-awesome-reveal";
import data from "@/lib/data.json";

function Contact() {
  const [captchaValue, setCaptchaValue] = useState(null);
  const form = useRef();
  const key = "6LeANfIpAAAAAMIopTky8pEB73V_cjbPwT7b5jE8";

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
            <div className="container px-5 py-10 flex justify-center">
              <div className="bg-white rounded-lg p-8 flex flex-col w-full shadow-2xl">
                <h2 className="text-gray-900 text-center text-4xl mb-8 font-medium title-font">
                  Send us an Email
                  <div className="h-1 w-1/5 mx-auto bg-green-400 rounded"></div>
                </h2>
                <form id="contactForm" onSubmit={sendEmail} ref={form}>
                  <div className="flex flex-wrap -mx-3 mb-4">
                    <div className="w-full md:w-1/2 px-3 mb-4 md:mb-0">
                      <label
                        htmlFor="first_name"
                        className="leading-7 text-xl font-medium text-gray-600"
                      >
                        First Name
                      </label>
                      <input
                        type="text"
                        id="first_name"
                        name="user_first_name"
                        required
                        className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                      />
                    </div>
                    <div className="w-full md:w-1/2 px-3">
                      <label
                        htmlFor="last_name"
                        className="leading-7 text-xl font-medium text-gray-600"
                      >
                        Last Name
                      </label>
                      <input
                        type="text"
                        id="last_name"
                        name="user_last_name"
                        required
                        className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                      />
                    </div>
                  </div>
                  <div className="flex flex-wrap -mx-3 mb-4">
                    <div className="w-full md:w-1/2 px-3 mb-4 md:mb-0">
                      <label
                        htmlFor="email"
                        className="leading-7 text-xl font-medium text-gray-600"
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
                    <div className="w-full md:w-1/2 px-3">
                      <label
                        htmlFor="phone"
                        className="leading-7 text-xl font-medium text-gray-600"
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
                  </div>
                  <div className="relative mb-4">
                    <label
                      htmlFor="subject"
                      className="leading-7 text-xl font-medium text-gray-600"
                    >
                      Subject
                    </label>
                    <select
                      id="subject"
                      name="user_subject"
                      required
                      defaultValue="default"
                      className="w-full text-xl bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    >
                      <option value="default" disabled>
                        Select a subject
                      </option>
                      {data.contect_services.map((service, index) => (
                        <option key={service.title} value={service.title2}>
                          {service.title2}
                        </option>
                      ))}
                      {data.specialties.map((specialties, index) => (
                        <option
                          key={specialties.title}
                          value={specialties.title}
                        >
                          {specialties.title}
                        </option>
                      ))}
                      <option value="General Inquiry">General Inquiry</option>
                      <option value="Support">Support</option>
                      <option value="Feedback">Feedback</option>
                    </select>
                  </div>
                  <div className="relative mb-4">
                    <label
                      htmlFor="message"
                      className="leading-7 text-xl font-medium text-gray-600"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                    ></textarea>
                  </div>
                  <div className="flex my-4 justify-center">
                    <ReCAPTCHA sitekey={key} onChange={onChangeCaptcha} />
                  </div>
                  <div className="flex justify-center">
                    <button className="text-white bg-green-500 mt-4 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 mx-auto rounded text-xl font-medium w-11/12">
                      <input type="submit" value="Send" className="hidden" />
                      Send Email
                    </button>
                  </div>
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
