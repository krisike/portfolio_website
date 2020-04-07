import React from 'react';

const ContactForm = () => (
  <form
    action="https://formspree.io/kpucu9@gmail.com"
    method="POST"
    className="contactForm"
  >
    <div className="personalForm">
      <input
        type="text"
        name="name"
        autoComplete="off"
        placeholder="Name"
        required
      />
      <input
        type="email"
        name="_replyto"
        autoComplete="off"
        placeholder="Email"
        required
      />
      <input
        type="phone"
        name="phone"
        autoComplete="off"
        placeholder="Phone Number"
      />
    </div>
    <textarea
      name="message"
      placeholder="Message"
      rows="10"
      cols="100"
      className="textAreaForm"
      required
    />
    <input
      type="hidden"
      name="_next"
      value="//krisikeranova.herokuapp.com/contact"
    />
    <input type="hidden" name="_subject" value="Website contact" />

    <button target="_blank" className="contactButtonForm" type="submit">
      <a href="kpucu9@gmail.com" alt="send">
        .
      </a>
    </button>
  </form>
);

export default ContactForm;
