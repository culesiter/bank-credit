import React from 'react';
import { useTranslation } from "react-i18next";
import './widgets.scss'

export default function Footer() {
  return (
    <div className="footer custom-container">
      <div className="ac-gf-content"><section className="ac-gf-footer">
        <div className="ac-gf-footer-shop" x-ms-format-detection="none">
          More ways to shop: <a href="https://www.apple.com/uk/retail/" data-analytics-title="find an apple store">find an Apple Store</a> or <a href="https://locate.apple.com/uk/en/" data-analytics-title="other retailers or resellers" data-analytics-exit-link="">other retailer</a> near you. Or call 0800 048 0408.
        </div>
        <div className="ac-gf-footer-legal">
          <div className="ac-gf-footer-legal-copyright">Copyright © 2022 Apple Inc. All rights reserved.
          </div>
          <div className="ac-gf-footer-legal-links">
            <a className="ac-gf-footer-legal-link" href="https://www.apple.com/uk/legal/privacy/" data-analytics-title="privacy policy">Privacy Policy</a>
            <a className="ac-gf-footer-legal-link" href="https://www.apple.com/legal/privacy/en-ww/cookies/" data-analytics-title="use of cookies">Use of Cookies</a>
            <a className="ac-gf-footer-legal-link" href="https://www.apple.com/uk/legal/terms/site.html" data-analytics-title="terms of use">Terms of Use</a>
            <a className="ac-gf-footer-legal-link" href="https://www.apple.com/uk/shop/goto/help/sales_refunds" data-analytics-title="sales and refunds">Sales and Refunds</a>
            <a className="ac-gf-footer-legal-link" href="https://www.apple.com/uk/legal/" data-analytics-title="legal">Legal</a>
            <a className="ac-gf-footer-legal-link" href="https://www.apple.com/uk/sitemap/" data-analytics-title="site map">Site Map</a>
          </div>
        </div>
      </section>
      </div>
    </div>
  );
}
