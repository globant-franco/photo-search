/** @jsxImportSource @emotion/react */
import cameraBackground from "../images/camera-background.png";
import { Link } from "react-router-dom";

export default function Landing() {
  return (
    <main
      css={{
        backgroundImage: `url(${cameraBackground})`,
        width: "100vw",
        height: "100vh",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        display: "flex",
      }}
    >
      <section
        css={{
          height: "35vh",
          width: "100%",
          background: "rgba(55, 51, 52, 0.7)",
          borderRadius: "30px 30px 0px 0px",
          alignSelf: "flex-end",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <h4
          css={{
            fontFamily: "Jua",
            fontSize: "2rem",
            lineHeight: "3rem",
            textAlign: "center",
            color: "white",
            textShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
            marginBottom: "0.2rem",
          }}
        >
          Photo Search
        </h4>
        <p
          css={{
            fontFamily: "Kalam",
            fontSize: "1.2rem",
            lineHeight: "2rem",
            textAlign: "center",
            color: "white",
            marginTop: 0,
          }}
        >
          Find your best photographer in the city
        </p>
        <Link to="/search">
          <button
            css={{
              background: "#AB7E57",
              border: "1px solid rgba(55, 51, 52, 0.7)",
              width: "45vw",
              height: "7vh",
              borderRadius: "40px",
              fontFamily: "Jua",
              fontSize: "2rem",
              color: "white",
            }}
          >
            Search
          </button>
        </Link>
      </section>
    </main>
  );
}
