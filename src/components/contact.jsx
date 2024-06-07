import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser'
import ReCAPTCHA from "react-google-recaptcha";

function Contact() {
  const [captchaValue, setCaptchaValue] = useState(null);
    const form = useRef();

    const onChangeCaptcha = (value) => {
        setCaptchaValue(value);
    };
    
    const sendEmail = (e) => {
        e.preventDefault();        
        if (captchaValue) {
            emailjs
                .sendForm(t('config.emailServiceKey'), t('config.emailTemplateKey'), form.current, {
                    publicKey: t('config.emailPublicKey'),
                })
                .then(
                    () => {
                        console.log('SUCCESS!');
                        console.log('Mensaje enviado');
                    },
                    (error) => {
                        console.log('FAILED...', error.text);
                    },
                );
        } else {
            console.log('Por favor, completa el CAPTCHA.');
        }
    };
  return (
    <>
      <section className="text-gray-600 body-font relative">
        <div className="absolute inset-0 bg-gray-300">
          <iframe
            width="100%"
            height="100%"
            frameBorder="0"
            marginHeight="0"
            marginWidth="0"
            title="map"
            scrolling="no"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3764.383146996318!2d-77.60695613759268!3d37.497154934875326!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f530!3m3!1m2!1s0x89b16d7f234f05ff%3A0xa8abb6f08a9e62b5!2s411%20Branchway%20Rd%20%23218%2C%20North%20Chesterfield%2C%20VA%2023236%2C%20EE.%20UU.!5e0!3m2!1ses-419!2scr!4v1715807560653!5m2!1ses-419!2scr"
            
          ></iframe>
        </div>
        <div className="container px-5 py-24 flex">
          <div className="lg:w-1/3 md:w-1/2 bg-white rounded-lg p-8 flex flex-col md:ml-auto w-full mt-20 md:mt-5 relative z-10 shadow-md">
            <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">
              Send us a Email
            </h2>
            <form id="contactForm" onSubmit={sendEmail} ref={form}>
            <div className="relative mb-4">
              <label htmlFor="email" className="leading-7 text-sm text-gray-600">
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
              <label htmlFor="phone" className="leading-7 text-sm text-gray-600">
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
              <label htmlFor="message" className="leading-7 text-sm text-gray-600">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
              ></textarea>
            </div>
            <ReCAPTCHA sitekey={"6LeANfIpAAAAAMIopTky8pEB73V_cjbPwT7b5jE8"} onChange={onChangeCaptcha}/>
            <button className="text-white bg-indigo-500 mt-4 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
              <input type="submit" value="Send" />Button
            </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;
