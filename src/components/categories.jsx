import React from "react";

const Footer = () => {
  return (
    <>
    <div
      style={{
        backgroundColor: "#f9f9f9",
        padding: "40px 20px",
        display: "flex",
        justifyContent: "center",
        borderTop: "1px solid #ddd",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          flexWrap: "wrap",
          maxWidth: "1200px",
          width: "100%",
        }}
      >
        {/* Colonne 1 */}
        <div style={{ flex: "1 1 200px", margin: "10px" }}>
          <p style={{ fontWeight: "bold", color: "#0a0a23" }}>Product</p>
          <p style={{ color: "#6b7280", margin: "5px 0", cursor: "pointer" }}>Frequently Asked Questions</p>
          <p style={{ color: "#6b7280", margin: "5px 0", cursor: "pointer" }}>Pricing</p>
          <p style={{ color: "#6b7280", margin: "5px 0", cursor: "pointer" }}>Dashboard</p>
          <p style={{ color: "#6b7280", margin: "5px 0", cursor: "pointer" }}>Contact Us</p>
          <br/>
    
          <p style={{ fontWeight: "bold", color: "#0a0a23" }}>Form Generator</p>
          <p style={{ color: "#6b7280", margin: "5px 0", cursor: "pointer" }}>Contact Form Generator</p>
          <p style={{ color: "#6b7280", margin: "5px 0", cursor: "pointer" }}>Survey Form Generator</p>
          <p style={{ color: "#6b7280", margin: "5px 0", cursor: "pointer" }}>RSVP Form Generator</p>
          <p style={{ color: "#6b7280", margin: "5px 0", cursor: "pointer" }}>All Form Generators</p>
        </div>


        <div style={{ flex: "1 1 200px", margin: "10px" }}>
          <p style={{ fontWeight: "bold", color: "#0a0a23" }}>Guides</p>
          <p style={{ color: "#6b7280", margin: "5px 0", cursor: "pointer" }}>How to add a contact form to your Shopify website</p>
          <p style={{ color: "#6b7280", margin: "5px 0", cursor: "pointer" }}>How to build a simple HTML contact form</p>
          <p style={{ color: "#6b7280", margin: "5px 0", cursor: "pointer" }}>How to create a file upload form</p>
          <p style={{ color: "#6b7280", margin: "5px 0", cursor: "pointer" }}>How to upload files from your HTML form using Base64 Encoding</p>
          <p style={{ color: "#6b7280", margin: "5px 0", cursor: "pointer" }}>How to create email templates</p><br/>
        
          <p style={{ fontWeight: "bold", color: "#0a0a23" }}>Form Code Examples</p>
          <p style={{ color: "#6b7280", margin: "5px 0", cursor: "pointer" }}>HTML Contact Form</p>

          <p style={{ color: "#6b7280", margin: "5px 0", cursor: "pointer" }}>React Contact Form</p>

          <p style={{ color: "#6b7280", margin: "5px 0", cursor: "pointer" }}>NextJS Contact Form</p>

          <p style={{ color: "#6b7280", margin: "5px 0", cursor: "pointer" }}>Vue Contact Form</p>

          <p style={{ color: "#6b7280", margin: "5px 0", cursor: "pointer" }}>Jekyll Contact Form</p>

          <p style={{ color: "#6b7280", margin: "5px 0", cursor: "pointer" }}>Gridsome Contact Form</p>

          <p style={{ color: "#6b7280", margin: "5px 0", cursor: "pointer" }}>Gatsby Contact Form</p>

          <p style={{ color: "#6b7280", margin: "5px 0", cursor: "pointer" }}>AlpineJS Contact Form</p>

          <p style={{ color: "#6b7280", margin: "5px 0", cursor: "pointer" }}>All Form Examples</p>
        </div>

        {/* Colonne 5 */}
        <div style={{ flex: "1 1 200px", margin: "10px" }}>
          <p style={{ fontWeight: "bold", color: "#0a0a23" }}>Integrations</p>
          <p style={{ color: "#6b7280", margin: "5px 0", cursor: "pointer" }}>Google Sheets</p>
          <p style={{ color: "#6b7280", margin: "5px 0", cursor: "pointer" }}>Mailchimp</p>
          <p style={{ color: "#6b7280", margin: "5px 0", cursor: "pointer" }}>Airtable</p>
          <p style={{ color: "#6b7280", margin: "5px 0", cursor: "pointer" }}>Discord</p>
          <p style={{ color: "#6b7280", margin: "5px 0", cursor: "pointer" }}>Slack</p>
          <p style={{ color: "#6b7280", margin: "5px 0", cursor: "pointer" }}>Notion</p>
          <p style={{ color: "#6b7280", margin: "5px 0", cursor: "pointer" }}>Twilio</p>
          <p style={{ color: "#6b7280", margin: "5px 0", cursor: "pointer" }}>All Apps & Integrations</p>
        </div>

        {/* Colonne 6 */}
        <div style={{ flex: "1 1 200px", margin: "10px" }}>
          <p style={{ fontWeight: "bold", color: "#0a0a23" }}>Resources</p>
          <p style={{ color: "#6b7280", margin: "5px 0", cursor: "pointer" }}>Documentations</p>
          <p style={{ color: "#6b7280", margin: "5px 0", cursor: "pointer" }}>Affiliate Program</p>
          <p style={{ color: "#6b7280", margin: "5px 0", cursor: "pointer" }}>Press Kit</p>
          <p style={{ color: "#6b7280", margin: "5px 0", cursor: "pointer" }}>Formcarry Blog</p>
          <p style={{ color: "#6b7280", margin: "5px 0", cursor: "pointer" }}>System Status</p>
        </div>
      </div>
    </div>
    <footer
      style={{
        backgroundColor: "#f8f9fc",
        padding: "20px 40px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        borderTop: "1px solid #ddd",
      }}
    >
      <div style={{ color: "#6c757d", fontSize: "14px" }}>
        formcarry. all rights reserved
      </div>

      <div style={{ display: "flex", gap: "20px", fontSize: "14px", color: "#6c757d" }}>
        <a href="#terms" style={{ textDecoration: "none", color: "#6c757d" }}>
          Terms of Service
        </a>
        <a href="#privacy" style={{ textDecoration: "none", color: "#6c757d" }}>
          Privacy Policy
        </a>
      </div>

    
      <div style={{ display: "flex", gap: "15px" }}>
        <a href="#twitter" aria-label="Twitter">
          <img
            src="https://cdn-icons-png.flaticon.com/512/733/733579.png"
            alt="Twitter"
            style={{ width: "20px", height: "20px" }}
          />
        </a>
        <a href="#facebook" aria-label="Facebook">
          <img
            src="https://cdn-icons-png.flaticon.com/512/733/733547.png"
            alt="Facebook"
            style={{ width: "20px", height: "20px" }}
          />
        </a>
        <a href="#github" aria-label="GitHub">
          <img
            src="https://cdn-icons-png.flaticon.com/512/733/733553.png"
            alt="GitHub"
            style={{ width: "20px", height: "20px" }}
          />
        </a>
      </div>
    </footer>
    </>
  );
};

export default Footer;

