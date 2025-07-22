import React from "react";

const Footer = () => {
  return (
    <div className="grid sm:grid-cols-1 lg:grid-cols-2 content-center justify-items-center py-10 text-lg font-extralight">
      <div className="flex gap-5">
        <p>
          <a href="https://www.linkedin.com/in/santiagocanas/" target="_blank">
            Linkedin
          </a>
        </p>
        <p>
          <a href="https://github.com/caszofficial" target="_blank">
            Github
          </a>
        </p>
        <p>
          <a
            href="https://caszofficial.github.io/WebPortfolio/"
            target="_blank"
          >
            Portfolio
          </a>
        </p>
      </div>
      <div>
        <p>@caszofficial 2025</p>
      </div>
    </div>
  );
};

export default Footer;
