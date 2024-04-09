import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer
      style={{
        background: "#8b5cf6",
        color: "#fff",
        padding: "20px",
        textAlign: "center",
      }}
    >
      <div className="footer-content">
        <h3 style={{ fontSize: "2rem", fontWeight: "200" }}>InsightInk</h3>
        <p style={{ maxWidth: "700px", margin: "10px auto", lineHeight: "25px", fontSize: "15px" }}>
          Unlock the power of collaboration and creativity with InsightInk. Whether you&apos;re an aspiring author with a story to tell or a seasoned publisher seeking fresh talent, our platform is your gateway to success in the dynamic world of publishing.
        </p>
        <ul className="socials" style={{ listStyle: "none", display: "flex", justifyContent: "center", margin: "1rem 0" }}>
          <li style={{ margin: "0 10px" }}><a href="a"><FaFacebookF className="text-lg text-white" /></a></li>
          <li style={{ margin: "0 10px" }}><a href="a"><FaTwitter className="text-lg text-white" /></a></li>
          <li style={{ margin: "0 10px" }}><a href="a"><FaInstagram className="text-lg text-white" /></a></li>
          <li style={{ margin: "0 10px" }}><a href="a"><FaYoutube className="text-lg text-white" /></a></li>
        </ul>
        <ul className="menu" style={{ display: "flex", justifyContent: "center", alignItems: "center", margin: "6px 0", flexWrap: "wrap" }}>
          <li style={{ margin: "0 10px" }}><Link className="text-white" to="/">Home</Link></li>
          <li style={{ margin: "0 10px" }}><Link className="text-white" to="/about">About</Link></li>
          <li style={{ margin: "0 10px" }}><Link className="text-white" to="/plans">Plans</Link></li>
          <li style={{ margin: "0 10px" }}><Link className="text-white" to="/contact">Contact</Link></li>
        </ul>
      </div>
      <div className="footer-bottom pt-4" style={{  display: "flex", justifyContent: "center" }}>
        <p style={{ fontSize: "12px", color: "#fff" }}>
          &copy;2024 InsightInk. All Rights Reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;

