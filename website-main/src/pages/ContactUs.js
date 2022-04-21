import * as React from "react";
import Section1 from "../components/Section1";
import Navigation from "../components/Navigation";
import "../styles/contactus.css";

export function social_links() {
  // twitter, insta, newsletter, medium
  const links = [
    { img: "twitter.png", link: "https://twitter.com/NEU_Blockchain" },
    { img: "insta.png", link: "https://www.instagram.com/neublockchain/" },
    { img: "discord.png", link: "https://discord.gg/EP4yGCw9" },
    { img: "luma.webp", link: "https://lu.ma/neublockchain" },
  ];

  return (
    <div className="social_links">
      <ul className="social_links_list">
        {links.map((link) => {
          return (
            <li className="social_links_list_items">
              <a href={link.link} style={{ zIndex: "2" }}>
                <div>
                  <img src={link.img} alt="" className="social_links_images" />
                </div>
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default function ContactUs() {
  return (
    <>
      <Navigation></Navigation>
      <Section1
        image="main.png"
        title="Contact Us"
        description=""
        children={social_links()}
      ></Section1>
    </>
  );
}
