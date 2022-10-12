import React from 'react';
import { GrLinkedin } from 'react-icons/gr';
import { BsGithub } from 'react-icons/bs';
import { SiHackerrank } from 'react-icons/si';
const HeaderSocails = () => {
  return (
    <div className="header__socials">
      <a href="https://github.com/Pethkar-Tushar-Narendra" target="_blank">
        <GrLinkedin />
      </a>
      <a
        href="https://www.linkedin.com/in/pethkar-tushar-narendra-0902b7233/"
        target="_blank"
      >
        <BsGithub />
      </a>
      <a href="https://www.hackerrank.com/pethkartusharna1" target="_blank">
        <SiHackerrank />
      </a>
    </div>
  );
};

export default HeaderSocails;
