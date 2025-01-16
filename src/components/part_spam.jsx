import React, { useState } from "react";
import image from '../assets/asset_29.png';

const Spamtext = () => {
  return (
    <div
      style={{
        fontSize: "14px",
        color: "#ff6f00",
        fontWeight: "bold",
        marginBottom: "10px",
        textTransform: "uppercase",
      }}
    >
      SPAM, NO THANKS.
    </div>
  );
};

const Title = () => {
  return (
    <div
      style={{
        fontSize: "3rem",
        lineHeight: "1.2",
        color: "#0a0a23",
        textAlign: "left",
      }}
    >
      <strong>
        Best in class
        <br />
        <span style={{ display: "flex", alignItems: "center" }}>
          spam{" "}
          <span
            style={{
              display: "inline-flex",
              justifyContent: "center",
              alignItems: "center",
              marginLeft: "10px",
              backgroundColor: "#ff6f00",
              color: "white",
              borderRadius: "50%",
              width: "24px",
              height: "24px",
              fontSize: "16px",
              fontWeight: "bold",
            }}
          >
            ⚡
          </span>{" "}
          protection.
        </span>
      </strong>
    </div>
  );
};

const Description = () => {
  return (
    <div
      style={{
        fontSize: "1rem",
        lineHeight: "1.5",
        color: "#0a0a23",
        marginLeft: "40px",
        textAlign: "left",
      }}
    >
      We handle spam submissions and keep your inbox
      <br />
      safe and sound with the accuracy rate of 98.6%
    </div>
  );
};

const Contenu = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "30vh",
        maxWidth: "900px",
        margin: "0 auto",
        gap: "30px",
        flexWrap: "wrap",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
        }}
      >
        <Spamtext />
        <Title />
      </div>
      <Description />
    </div>
  );
};

const Relevant = () => {
  const faqs = [
    {
      question: "What is formcarry?",
      answer:
        "Formcarry is a form (or endpoint) that allows you to collect submissions from your own HTML <form> without coding any backend, it basically serves as a form backend.",
    },
    {
      question: "Can I upload files from my form to formcarry?",
      answer: "Yes, you can upload files with minimal effort to formcarry.",
    },
    {
      question: "Does formcarry block spam submissions?",
      answer: "Yes, formcarry has advanced in-built systems to block spam submissions.",
    },
    {
      question: "What is form endpoint?",
      answer:
        "A form endpoint or form backend is a unique URL that processes your forms and performs the necessary actions like spam blocking, email sending, and file uploads.",
    },
    {
      question: "What happens if I exceed the monthly submission limit?",
      answer:
        "We will save your exceeded submissions in a secure place until the first day of next month. You can recover them by upgrading your plan.",
    },
    {
      question: "Does formcarry support AJAX?",
      answer: "Yes, formcarry supports AJAX in all packages including the free package.",
    },
  ];

  const [openAccordions, setOpenAccordions] = useState({});

  const toggleAccordion = (index) => {
    setOpenAccordions((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  return (
    <div style={{ fontFamily: "'Arial', sans-serif", backgroundColor: "#f9fafc", padding: "20px" }}>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center',color: "#0070f3", fontSize: "14px", fontWeight: "bold" }}>
        RELEVANT STUFF BLA BLA
      </div>

      <div style={{ display: "flex", justifyContent: "center", alignItems: "flex-start", margin: "20px 0" }}>
        <div style={{ textAlign: "left" }}>
          <h1 style={{ fontSize: "2.5rem", fontWeight: "bold", color: "#0a0a23", margin: "0" }}>
            Things, <span style={{ color: "#0070f3" }}>?</span> you
          </h1>
          <h1 style={{ fontSize: "2.5rem", fontWeight: "bold", color: "#0a0a23", margin: "0" }}>
            probably wonder.
          </h1>
        </div>
        <div style={{ marginLeft: "20px" }}>
          <img
            src={image}
            alt="Illustration"
            style={{ borderRadius: "50%", height: "120px" }}
          />
        </div>
      </div>

      <div style={{ maxWidth: "600px", margin: "0 auto", marginTop: "20px" }}>
        {faqs.map((faq, index) => (
          <div
            key={index}
            style={{
              backgroundColor: "#fff",
              padding: "15px",
              margin: "10px 0",
              borderRadius: "8px",
              boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
              cursor: "pointer",
            }}
            onClick={() => toggleAccordion(index)}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <span style={{ fontSize: "1rem", color: "#0a0a23", fontWeight: "bold" }}>
                {faq.question}
              </span>
              <span style={{ fontSize: "1.5rem", color: "#000" }}>
                {openAccordions[index] ? "▲" : "▼"}
              </span>
            </div>
            {openAccordions[index] && (
              <div style={{ marginTop: "10px", fontSize: "0.9rem", color: "#4a4a4a" }}>
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

const Content = () => {
  return (
    <>
      <Contenu />
      <Relevant />
    </>
  );
};

export default Content;
