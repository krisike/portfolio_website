// import React from 'react';

// const Contact = () => {
//   return <div className="contact"></div>;
// };

// export default Contact;

import React from 'react';
//import { aboutKrisi } from '../constants';

const ContactForm = () => (
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
        Send
      </a>
    </button>
  </form>
);

export default ContactForm;
