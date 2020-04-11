import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import styles from '../styling/SocialLinks.module.css';

const SocialLinks = () => (
  <ul>
    <li>
      <a href="https://github.com/krisike" target="blank">
        <FaGithub className={styles.faIcons} />
      </a>
    </li>
    <li>
      <a href="https://www.linkedin.com/in/krisi-keranova/" target="blank">
        <FaLinkedin className={styles.faIcons} />
      </a>
    </li>
    <li>
      <a href="mailto:krisi.keranova@gmail.com">
        <FaEnvelope className={styles.faIcons} />
      </a>
    </li>
  </ul>
);

export default SocialLinks;
