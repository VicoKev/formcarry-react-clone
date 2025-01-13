import React, { useState } from "react";

const Spamtext = () => {
  return (
    <div style={{ fontSize: "14px", color: "#ff6f00", fontWeight: "bold" }}>
      SPAM, NON MERCI.
    </div>
  );
};

const Title = () => {
  return (
    <div style={{ fontSize: "3rem", lineHeight: "1.2", color: "#0a0a23" }}>
      Le meilleur de sa catégorie
      <br />
      <span style={{ display: "flex", alignItems: "center" }}>
        courrier indésirable{" "}
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
    </div>
  );
};

// Description principale
const Description = () => {
  return (
    <div
      style={{
        fontSize: "1rem",
        lineHeight: "1.5",
        color: "#0a0a23",
        marginTop: "40px",
      }}
    >
      Nous traitons les envois de spam et gardons votre boîte de réception
      <br />
      en sécurité avec un taux de précision de 98,6 %.
    </div>
  );
};


const Contenu = () => {
  return (
    <>
      <Spamtext />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "flex-end",
          }}
        >
          <Title />
          <Description />
        </div>
      </div>
    </>
  );
};


const Relevant = () => {
  const faqs = [
    {
      question: "What is formcarry?",
      answer:
        "Formcarry is a form (or endpoint) that allows you to collect submissions from your own HTML <form> without coding any bacnkend, it basically serves as an form backend. By usiqng formcarry you will instantly access the best features such as getting email notifications for each submission, file uploads, collectint payments with stripe and more",
    },
    {
      question: "Can I upload files from my form to formcarry?",
      answer:
        "Yes, you can upload files with minimun effort to formcarry",
    },
    {
      question: "Does formcarry block spam submissions?",
      answer:
        "Yes, formcarry has advanced in-built systems to block spam submissions",
    },
    {
      question: "What is form endpoint?",
      answer:
        "A form endpoint or form backend, is a unique URL that will process your forms and performs the neccesary actions to fultil your needings (spams blockin, email sending, file uploads) in a reliable, fast and secure way, Formcarry is the best form endpoint in the industry",
    },
    {
      question: "What happens if I exceed the monthly submission limit?",
      answer:
        "We will save your exceeded submissions in a secure place until the first day of next month, but you can't see them unless you upgrade your plan. By upgrading your plan you can recover those submissions, so don't worry we got your back!",
    },
    {
      question: "Does formcarry supports AJAX?",
      answer:
        "Yes, formcarry supports AJAX in all packages including the freemium package",
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div style={{ fontFamily: "'Arial', sans-serif", backgroundColor: "#f9fafc", padding: "20px" }}>
      <div style={{ textAlign: "center", color: "#0070f3", fontSize: "14px", fontWeight: "bold" }}>
        RELEVANT STUFF BLA BLA
      </div>

      <div style={{ display: "flex", justifyContent: "center", alignItems: "center", margin: "20px 0" }}>
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
            src="https://via.placeholder.com/150"
            alt="Illustration"
            style={{ borderRadius: "50%" }}
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
          >
            <div
              onClick={() => toggleAccordion(index)}
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <span style={{ fontSize: "1rem", color: "#0a0a23", fontWeight: "bold" }}>
                {faq.question}
              </span>
              <span style={{ fontSize: "1.5rem", color: "#0070f3" }}>
                {openIndex === index ? "▲" : "▼"}
              </span>
            </div>
            {openIndex === index && (
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
