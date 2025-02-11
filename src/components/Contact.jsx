import emailjs from "emailjs-com";
import  { useState } from "react";
import CCard from "./ContactCard";
const Contact = () => {

  const [name, setName] = useState("");
  const [mailid, setMailid] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Send feedback email using EmailJS
    const serviceId = "service_n1ey9yj";
    const templateId = "template_kvvz1ef";
    const userId = "NdH0JvocYEk8LX5o0";

    const templateParams = {
      name: name,
      mailid: mailid,
      message: message,
    };

    emailjs.send(serviceId, templateId, templateParams, userId)
      .then((result) => {
        console.log("Email sent successfully!", result.text);
        alert("Thank you for your feedback!");
      })
      .catch((error) => {
        console.error("Error sending feedback email:", error);
        alert("There was an error submitting your feedback. Please try again.");
      });

    // Reset form fields
    setName("");
    setMailid("");
    setMessage("");
  };


    return (
        <>
      <div className="grid lg:grid-cols-2 md:grid-cols-1 items-center justify-center min-h-screen bg-gray-100">
         <div className="justify-items-center px-12 w-full flex items-center justify-center">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d971.8402656409237!2d80.23218782211498!3d13.012664103142429!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5267044d8d4ee9%3A0x6aa9c1a22cb468a7!2sCentre%20for%20Excellence!5e0!3m2!1sen!2sin!4v1684605124973!5m2!1sen!2sin"
          height="400" // Set the desired height here
          style={{ border: "0", width: "100%" }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
        <div className="min-h-screen flex items-center justify-center">
          <div className="max-w-md w-full mx-auto p-8 bg-white rounded-md shadow-md">
            <h2 className="text-3xl font-bold mb-6 text-blue-900">Contact Us</h2>
            <form onSubmit={handleSubmit} >
              <div className="mb-4">
                <label className="block text-gray-700 text-base font-bold mb-2" htmlFor="name">
                  Name
                </label>
                <input
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
                  type="text"
                  id="name"
                  name="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Your name"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-base font-bold mb-2" htmlFor="email">
                  Email
                </label>
                <input
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
                  type="email"
                  id="mailid"
                  name="mailid"
                  value={mailid}
                  onChange={(e) => setMailid(e.target.value)}
                  placeholder="Your email"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-base font-bold mb-2" htmlFor="message">
                  Message
                </label>
                <textarea
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
                  id="message"
                  name="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  rows="4"
                  placeholder="Your message"
                ></textarea>
              </div>
              <button
                className="bg-blue-900 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out"
                type="submit"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
  
      </div>
      
      <CCard/>
      </>
    );
  };
  export default Contact;
  