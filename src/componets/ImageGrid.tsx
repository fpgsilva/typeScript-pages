import React from "react";
import "./ImageGrid.css"; // Importing the CSS file

const ImageGrid = () => {
  const alunos = [
    { name: "Diogo Pinto", imageUrl: "link_to_image1.jpg", number: "67535" },
    {
      name: "Francisco Silva",
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScYIRIPFI7BnaFgEJyon4_vceBFkhJMg_AHQ&s",
      number: "70525",
    },
    {
      name: "Martim Latas",
      imageUrl:
        "https://cdn.discordapp.com/attachments/1286243088364474394/1289988349590900838/mirav2.png?ex=66fad2c5&is=66f98145&hm=f1eea7e625b517e300ee10d69a51aaba6c001838ddd1c8f947fd3165c3b93c20&",
      number: "70596",
    },
    {
      name: "Rodrigo Costa",
      imageUrl:
        "https://cdn.discordapp.com/attachments/1286243088364474394/1289990939812696134/e691cf03-d70d-4ae6-a09b-4d4b38286ff7.jpg?ex=66fad52e&is=66f983ae&hm=e7116a9fc979a3394f6ae6561bef9b2281bd3c2865bbee875ade512a113b0151&",
      number: "63703",
    },
  ];

  return (
    <div className="page-container">
      {/* Logo at the top */}
      <div className="logo-container">
        <img
          src="https://cdn.discordapp.com/attachments/1288781193172488256/1288856362436001873/image_2024-09-26_143400473-removebg-preview.png?ex=66faa906&is=66f95786&hm=7e473305b5a7d7af2af0d671b358c2b50a201abfe9b565252e2b79e4c0ade809&" // Replace with your logo's link
          alt="Logo"
          className="logo"
        />
      </div>

      {/* Group name */}
      <div className="group-name">
        <h1>GRUPO 31</h1>
      </div>

      {/* Student details grid */}
      <div className="image-grid">
        {alunos.map((aluno, index) => (
          <div className="image-item" key={index}>
            <img
              src={aluno.imageUrl}
              alt={aluno.name}
              className="aluno-image"
            />
            <p className="aluno-description">{aluno.name}</p>
            <p className="aluno-description">{aluno.number}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageGrid;
