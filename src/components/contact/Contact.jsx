import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { MdOutlineEmail } from "react-icons/md";
import { useNavigate } from "react-router-dom";

import "./contact.css";

const Contact = () => {
  const [message, setMessage] = useState(false);
  const [name, setName] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const history = useNavigate();

  const formRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setMessage(true);
    emailjs
      .sendForm(
        "service_k2qawqh",
        "template_c6rkpn6",
        formRef.current,
        "X7K7ebhIeOy3YwHki"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    e.target.reset();
  };

  // const handleNameChange = (e) => {
  //   setName(e.target.value);
  // };

  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>shivanirajeshnikam2003@gmail.com</h5>
            <a href="mailto:shivanirajeshnikam2003@gmail.com">Send a message</a>
          </article>
        </div>
        {submitted ? (
          history(`/thankyou/${name}`)
        ) : (
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Your Full Name"
              name="user_name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <input
              type="text"
              placeholder="Your Email"
              name="user_email"
              required
            />
            <textarea
              placeholder="Your message"
              rows="7"
              name="message"
              required
            ></textarea>
            <button type="submit" className="btn btn-primary">
              Send Message
            </button>
          </form>
        )}
      </div>
    </section>
  );
};

export default Contact;
