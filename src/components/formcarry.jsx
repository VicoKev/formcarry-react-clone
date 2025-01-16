import React from "react";
import image1 from '../assets/asset_30.png';
import image2 from '../assets/asset_31.png';
import image3 from '../assets/asset_32.png';


const Title = () => {
  return (
    <div style={{ textAlign: "center", color: "#0070f3", fontSize: "14px", fontWeight: "bold" }}>
       FORMCARRY BLOG
    </div>
  );
};

const Header = () => {
  return (
    <div style={{ textAlign: "center", fontSize: "3rem", fontWeight: "bold", color: "#0a0a23", margin: "10px 0" }}>
      Useful to read
    </div>
  );
};

const Card = ({ image, title, description }) => {
  return (
    <div
      style={{
        backgroundColor: "#ffffff",
        borderRadius: "10px",
        padding: "20px",
        width: "340px",
        height: "400px", 
        boxShadow: "0 1px 4px rgba(0,0,0,0.08)", 
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
        padding: '20px'
        
      }}
    >
      <div
        style={{
          width: "100%",
          height: "200px",
          marginBottom: "15px",
        }}
      >
        <img
          src={image}
          alt={title}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            borderRadius: "10px",
          }}
        />
      </div>
      <h3 style={{ fontSize: "1.2rem", fontWeight: "bold", color: "#0a0a23" }}>{title}</h3>
      <p style={{ fontSize: "0.9rem", color: "#666", lineHeight: "1.5" }}>{description}</p>
    </div>
  );
};

const Content = () => {
  const cards = [
    {
      image: image1,
      title: "How to create a working contact form with HTML",
      description:
        "Contact forms are one of the best ways to convert more leads, and get the information you need...",
    },
    {
      image: image2,
      title: "How to create a file upload form with formcarry in 5 steps",
      description:
        "One of the most time consuming thing about forms is definitely uploading files, sometimes...",
    },
    {
      image: image3,
      title: "How to upload files from your HTML form using Base64 encoding",
      description:
        "Uploading files using Base64 encoding is a common practice, the usage of the technique has...",
    },
  ];

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-around", 
        alignItems: "flex-start", 
        flexWrap: "wrap", 
        gap: "20px", 
        padding: "20px", 
      }}
    >
      {cards.map((card, index) => (
        <Card key={index} {...card} />
      ))}
    </div>
  );
};


const Formcarry = () => {
  return (
    <div style={{ fontFamily: "'Arial', sans-serif", padding: "20px" }}>
      <Title />
      <Header />
      <Content />
    </div>
  );
};

export default Formcarry;
