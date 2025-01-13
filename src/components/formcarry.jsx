import React from "react";

const Navbar = () => {
  return (
    <div style={{ textAlign: "center", color: "#0070f3", fontSize: "14px", fontWeight: "bold" }}>
      BLOG DE FORMCARRY
    </div>
  );
};

const Header = () => {
  return (
    <div style={{ textAlign: "center", fontSize: "3rem", fontWeight: "bold", color: "#0a0a23", margin: "10px 0" }}>
      Utile à lire
    </div>
  );
};

const Card = ({ image, title, description }) => {
  return (
    <div
      style={{
        backgroundColor: "#f9f9f9",
        borderRadius: "10px",
        padding: "20px",
        width: "300px",
        boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
        textAlign: "center",
      }}
    >
      <div
        style={{
          backgroundColor: image,
          borderRadius: "10px",
          height: "150px",
          marginBottom: "15px",
        }}
      ></div>
      <h3 style={{ fontSize: "1.2rem", fontWeight: "bold", color: "#0a0a23" }}>{title}</h3>
      <p style={{ fontSize: "0.9rem", color: "#666", lineHeight: "1.5" }}>{description}</p>
    </div>
  );
};

const Content = () => {
  const cards = [
    {
      image: "#c2f6da", 
      title: "Comment créer un formulaire de contact avec Formcarry",
      description:
        "Les formulaires de contact sont l'un des meilleurs moyens de convertir plus de prospects et d'obtenir les informations dont vous avez besoin...",
    },
    {
      image: "#e3e5fc",
      title: "Comment créer un formulaire de téléchargement de fichiers avec formcarry en 5 étapes",
      description:
        "L’une des choses qui prennent le plus de temps dans les formulaires est certainement le téléchargement de fichiers, parfois...",
    },
    {
      image: "#fae4fc",
      title: "Comment télécharger des fichiers depuis votre formulaire HTML à l'aide du codage Base64",
      description:
        "Le téléchargement de fichiers à l'aide de l'encodage Base64 est une pratique courante, l'utilisation de cette technique a...",
    },
  ];

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: "20px",
        marginTop: "30px",
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
      <Navbar />
      <Header />
      <Content />
    </div>
  );
};

export default Formcarry;
