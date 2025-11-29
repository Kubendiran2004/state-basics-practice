import { useState } from "react";

const Image = () => {
  const [img, setImg] = useState("/pradeep.jpg");

  const ChangeImg = () => {
    setImg(img === "/pradeep.jpg" ? "/dhanush.jpeg" : "/pradeep.jpg");
  };

  return (
    <>
      <div style={{ textAlign: "center" }}>
        <img
          src={img}
          alt="hero"
          width="250"
          style={{ borderRadius: "10px" }}
        />

        <br />

        <button
          onClick={ChangeImg}
          style={{
            marginTop: "20px",
            padding: "10px 20px",
            background: "skyblue",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Change Image: {img === "/pradeep.jpg" ? "Show Dhanush" : "Show Pradeep"}
        </button>
      </div>
    </>
  );
};

const Txt = () => {
  const [text, setText] = useState("Vanakkam Chennai");

  const ChangeText = () => {
    setText(
      text === "Vanakkam Chennai"
        ? "andariki namaskaram"
        : "Vanakkam Chennai"
    );
  };

  return (
    <>
      <div style={{ textAlign: "center", marginTop: "20px" }}>
        <h3>Change Text: {text}</h3>

        <button
          onClick={ChangeText}
          style={{
            marginTop: "20px",
            padding: "10px 20px",
            background: "skyblue",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          {text === "Vanakkam Chennai" ? "Telugu" : "Tamil"}
        </button>
      </div>
    </>
  );
};

export default Image;
export { Txt };
