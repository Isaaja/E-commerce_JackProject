import React from "react";

const Footer = () => {
  return (
    <footer className="footer footer-center bg-primary text-white p-4  mx-auto text-center">
      <aside>
        <p>
          Copyright © {new Date().getFullYear()} - All right reserved by ACME
          Industries Ltd
        </p>
      </aside>
    </footer>
  );
};

export default Footer;
