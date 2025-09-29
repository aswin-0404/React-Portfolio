import React, { useRef } from "react";
import { FaGithub, FaLinkedin, FaInstagram, FaFacebook } from "react-icons/fa";
import emailjs from "emailjs-com";
import Footer from "./Footer";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_h5kf5p7",
        "template_n2jovs5",
        form.current,
        "dpbbOwLLkDpchqMfK"
      )
      .then(
        (result) => {
          alert("✅ Message sent successfully!");
          console.error(result.text);
        },
        (error) => {
          alert("❌ Failed to send message. Try again later.");
          console.error(error.text);
        }
      );

    e.target.reset(); 
  }; 

  return (
    <div>
      <section className="w-full bg-white py-20 px-6 md:px-20" id="Contact">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-gray-900">
            Get in <span className="text-indigo-600">Touch</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

            <div className="space-y-6 pt-25">
              <h3 className="text-2xl font-semibold text-gray-800">Contact Info</h3>
              <p className="text-gray-700 text-lg">
                Feel free to reach out to me anytime. Whether it’s for collaboration, opportunities, or just a quick hello!
              </p>

              <div className="space-y-4">
                <p className="text-gray-700">📞 <span className="font-medium">Phone:</span> +91 7594881205</p>
                <p className="text-gray-700">
                  📧 <span className="font-medium">Email:</span>{" "}
                  <a href="mailto:aswinofficial101@gmail.com" className="text-indigo-600 hover:underline">
                    aswinofficial101@gmail.com
                  </a>
                </p>
              </div>

              <div className="flex gap-6 mt-4">
                <a href="https://github.com/aswin-0404" target="_blank" rel="noreferrer" className="text-gray-600 hover:text-black text-2xl"><FaGithub /></a>
                <a href="https://linkedin.com/in/aswin-shivadas-1576a8375" target="_blank" rel="noreferrer" className="text-gray-600 hover:text-indigo-600 text-2xl"><FaLinkedin /></a>
                <a href="https://www.instagram.com/asw.inn___/" target="_blank" rel="noreferrer" className="text-gray-600 hover:text-red-600 text-2xl"><FaInstagram /></a>
                <a href="https://facebook.com/yourprofile" target="_blank" rel="noreferrer" className="text-gray-600 hover:text-indigo-600 text-2xl"><FaFacebook /></a>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h3 className="text-2xl font-semibold text-gray-800 mb-6">Send a Message</h3>
              <form ref={form} onSubmit={sendEmail} className="space-y-6">
                <input type="text" name="from_name" placeholder="Your Name" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 outline-none" required />
                <input type="email" name="from_email" placeholder="Your Email" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 outline-none" required />
                <textarea name="message" placeholder="Your Message" rows="5" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 outline-none" required></textarea>
                <button type="submit" className="w-full py-3 px-6 rounded-lg bg-indigo-600 text-white font-medium hover:bg-indigo-700 transition shadow">Send Message</button>
              </form>
            </div>
          </div>
        </div>
      </section>
      <Footer/>
    </div>
  );
};

export default Contact;
