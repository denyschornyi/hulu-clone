import React from 'react';

import './Footer.css'

function Footer() {
    return (
        <div className="footer">
      <div className="footer-container">
        <p>
          Developed by Denys Chornyi.{" "}
          <a
            href="https://github.com/denyschornyi/hulu-clone"
            target="_blank"
            rel="noopener noreferrer"
          >
            Click
          </a>{" "}
          for source codes.
        </p>
      </div>
    </div>
    )
}

export default Footer
