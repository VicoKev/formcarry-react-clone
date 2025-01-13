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
          <p>Frequently Asked Questions</p>
          <p>Pricing</p>
          <p>Dashboard</p>
          <p>Contact Us</p>
    
          <p style={{ fontWeight: "bold", color: "#0a0a23" }}>Form Generator</p>
          <p>Contact Form Generator</p>
          <p>Survey Form Generator</p>
          <p>RSVP Form Generator</p>
          <p>All Form Generators</p>
        </div>

        {/* Colonne 3 */}
        <div style={{ flex: "1 1 200px", margin: "10px" }}>
          <p style={{ fontWeight: "bold", color: "#0a0a23" }}>Guides</p>
          <p>How to add a contact form to your Shopify website</p>
          <p>How to build a simple HTML contact form</p>
          <p>How to create a file upload form</p>
          <p>How to upload files from your HTML form using Base64 Encoding</p>
          <p>How to create email templates</p>
        
          <p style={{ fontWeight: "bold", color: "#0a0a23" }}>Form Code Examples</p>
          <p>HTML Contact Form</p>

          <p>React Contact Form</p>

          <p>NextJS Contact Form</p>

          <p>Vue Contact Form</p>

          <p>Jekyll Contact Form</p>

          <p>Gridsome Contact Form</p>

          <p>Gatsby Contact Form</p>

          <p>AlpineJS Contact Form</p>

          <p>All Form Examples</p>
        </div>

        {/* Colonne 5 */}
        <div style={{ flex: "1 1 200px", margin: "10px" }}>
          <p style={{ fontWeight: "bold", color: "#0a0a23" }}>Integrations</p>
          <p>Google Sheets</p>
          <p>Mailchimp</p>
          <p>Airtable</p>
          <p>Discord</p>
          <p>Slack</p>
          <p>Notion</p>
          <p>Twilio</p>
          <p>All Apps & Integrations</p>
        </div>

        {/* Colonne 6 */}
        <div style={{ flex: "1 1 200px", margin: "10px" }}>
          <p style={{ fontWeight: "bold", color: "#0a0a23" }}>Resources</p>
          <p>Documentations</p>
          <p>Affiliate Program</p>
          <p>Press Kit</p>
          <p>Formcarry Blog</p>
          <p>System Status</p>
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
      {/* Texte de gauche */}
      <div style={{ color: "#6c757d", fontSize: "14px" }}>
        formcarry. all rights reserved
      </div>

      {/* Liens au centre */}
      <div style={{ display: "flex", gap: "20px", fontSize: "14px", color: "#6c757d" }}>
        <a href="#terms" style={{ textDecoration: "none", color: "#6c757d" }}>
          Terms of Service
        </a>
        <a href="#privacy" style={{ textDecoration: "none", color: "#6c757d" }}>
          Privacy Policy
        </a>
      </div>

      {/* Icônes sociales à droite */}
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

