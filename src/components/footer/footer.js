import React from "react";
import "./footer.css";

function Footer() {
  return (
    <div className="main-footer">
      <div className="container">
        <div className="row">
          <p className="col-sm">
            &copy;{new Date().getFullYear()} Ruby
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;