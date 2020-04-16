import React from 'react';

const ContactForm = () => (
  <div className="containerContact">
    <div className="contactGreeting">Thank you for reaching out!</div>
    <div>
      <form
        action="https://formspree.io/krisi.keranova@gmail.com"
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
            name="email"
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
        <button target="_blank" className="contactButtonForm" type="submit">
          <a href="krisi.keranova@gmail.com" alt="send">
            SEND
          </a>
        </button>
      </form>
    </div>
  </div>
);

export default ContactForm;
