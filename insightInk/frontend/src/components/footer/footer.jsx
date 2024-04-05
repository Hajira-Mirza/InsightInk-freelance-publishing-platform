import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer
      style={{
        position: "absolute",
        bottom: "0",
        left: "0",
        right: "0",
        background: "#111",
        height: "auto",
        width: "100vw",
        paddingTop: "40px",
        color: "#fff",
      }}
    >
      <div
        className="footer-content"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          textAlign: "center",
        }}
      >
        <h3
          style={{
            fontSize: "2.1rem",
            fontWeight: "500",
            textTransform: "capitalize",
            lineHeight: "3rem",
          }}
        >
          InsightInk
        </h3>
        <p
          style={{
            maxWidth: "500px",
            margin: "15px auto",
            lineHeight: "28px",
            fontSize: "16px",
            color: "#cacdd2",
          }}
        >
          Raj Template is a blog website where you will find great tutorials on
          web design and development. Here each tutorial is beautifully
          described step by step with the required source code.
        </p>
        <ul
          className="socials"
          style={{
            listStyle: "none",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            margin: "1rem 0 1rem 0",
          }}
        >
          <a href="a" className="p-7">
            <FaFacebookF className="text-lg text-white" />
          </a>
          <a href="a" className="p-7">
            <FaTwitter className="text-lg text-white" />
          </a>
          <a href="a" className="p-7">
            <FaInstagram className="text-lg text-white" />
          </a>
          <a href="a" className="p-7">
            <FaYoutube className="text-lg text-white" />
          </a>
        </ul>
        <ul
          className="menu"
          style={{
            position: "relative",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            margin: "20px 0",
            flexWrap: "wrap",
          }}
        >
          <li className="menu__item">
            <Link
              className="menu__link"
              href="#"
              style={{
                fontSize: "1.2rem",
                color: "#fff",
                margin: "0 40px",
                display: "inline-block",
                transition: "0.5s",
                textDecoration: "none",
                opacity: "100",
                fontWeight: "300",
              }}
            to="/">
              Home
            </Link>
          </li>
          <li className="menu__item">
            <Link 
              className="menu__link"
          
              style={{
                fontSize: "1.2rem",
                color: "#fff",
                margin: "0 40px",
                display: "inline-block",
                transition: "0.5s",
                textDecoration: "none",
                opacity: "100",
                fontWeight: "300",
              }}
            to="about">
              About
            </Link>
          </li>
          <li className="menu__item">
            <Link
              className="menu__link"
              href="#"
              style={{
                fontSize: "1.2rem",
                color: "#fff",
                margin: "0 40px",
                display: "inline-block",
                transition: "0.5s",
                textDecoration: "none",
                opacity: "100",
                fontWeight: "300",
              }}
            to="plans">
              Plans
            </Link>
          </li>
          <li className="menu__item">
            <Link
              className="menu__link"
              href="#"
              style={{
                fontSize: "1.2rem",
                color: "#fff",
                margin: "0 40px",
                display: "inline-block",
                transition: "0.5s",
                textDecoration: "none",
                opacity: "100",
                fontWeight: "300",
              }}
            to="contact">
              Contact
            </Link>
          </li>
          <li className="menu__item">
            <a
              className="menu__link"
              href="#"
              style={{
                fontSize: "1.2rem",
                color: "#fff",
                margin: "0 40px",
                display: "inline-block",
                transition: "0.5s",
                textDecoration: "none",
                opacity: "100",
                fontWeight: "300",
              }}
            >
              Contact
            </a>
          </li>
        </ul>
        <p
          style={{
            color: "#fff",
            margin: "15px 0 10px 0",
            fontSize: "1rem",
            fontWeight: "300",
          }}
        />
      </div>
      <div
        className="footer-bottom"
        style={{
          background: "#000",
          width: "100vw",
          padding: "10px",
          paddingBottom: "10px",
          textAlign: "center",
        }}
      >
        <p
          style={{
            float: "center",
            fontSize: "14px",
            wordSpacing: "2px",
            textTransform: "capitalize",
          }}
        >
          <a
            href="#"
            style={{
              color: "#44bae8",
              fontSize: "16px",
              textDecoration: "none",
            }}
          >
            &copy;2021 All Rights Reserved
          </a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
