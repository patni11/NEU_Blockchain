import * as React from "react";
import Section1 from "../components/Section1";
import Section2 from "../components/Section2";
import Navigation from "../components/Navigation";
//import axios from "axios";
// import { useEffect } from "react";
// import { useState } from "react";
//import { google } from "googleapis";

// export async function getServerSideData() {
//
//   const auth = await google.auth.getClient({
//     scopes: ["https://www.googleapis.com/auth/spreadsheets.readonly"],
//   });

//   const sheets = google.sheets({ version: "v4", auth: auth });
//   const response = await sheets.spreadsheets.get({ auth, spreadsheetID });

//   return response;
// }

// function cleanJson(json_obj) {
//   var new_json = json_obj.map((item) => {
//     return {
//       id: item.id,
//       title: item.snippet.title.slice(17), // because the first part is just [NEU Blockchain] always
//       date: item.snippet.publishedAt.split("T")[0],
//       link: "https://www.youtube.com/watch?v=" + item.id,
//       image: item.snippet.thumbnails.high.url,
//       description: item.snippet.description,
//     };
//   });
//   return new_json;
// }

export default function Events() {
  // const [data, setData] = useState([]);

  // useEffect(() => {
  //   //console.log(getServerSideData());
  // }, []);

  //console.log(data);
  const upcomingEvents = [
    // {
    //   title: "Polygon",
    //   description: "This is an event with Polygoon",
    //   image: "me.png",
    //   link: "RSVP Link",
    //   id: 1,
    // },
    // {
    //   title: "Polygon",
    //   description: "This is an event with Polygoon",
    //   image: "me.png",
    //   link: "RSVP Link",
    //   id: 2,
    // },
    // {
    //   title: "Polygon",
    //   description: "This is an event with Polygoon",
    //   image: "me.png",
    //   link: "RSVP Link",
    //   id: 3,
    // },
    // {
    //   title: "Polygon",
    //   description: "This is an event with Polygoon",
    //   image: "me.png",
    //   link: "RSVP Link",
    //   id: 4,
    // },
  ];
  // const jsonData = require("../../static/videos.json");
  // const pastEvents = cleanJson(jsonData);
  // const pastEvents = [
  //   {
  //     title: "Polygon",
  //     description: "This is an event with Polygoon",
  //     image: "me.png",
  //     link: "RSVP Link",
  //     id: 4,
  //   },
  // ];
  return (
    <>
      <Navigation></Navigation>
      <Section1
        image="main.png"
        title="Events"
        description="Every Monday, we invite industry leaders in DeFi, NFTs, Security, Privacy, Gaming, and much more to talk about their respective fields and give us some alpha to make it in the cryptoverse."
      ></Section1>

      <Section2 title="Upcoming Events" data={upcomingEvents} link_title="RSVP">
        <div>
          <br />
          <br />
          <br />
          <h3 className="alternate_section2_text">
            <i>
              Currently we do not have any upcoming Events. Checkout our past
              events below.
            </i>
          </h3>
        </div>
      </Section2>
      <Section2
        title="Past Events"
        // data={["hi"]}
        link_title="Checkout Our YouTube Channel"
        bg="#f0ffff"
      >
        <div>
          <br />
          <br />
          <a
            href="https://www.youtube.com/channel/UCe2CYeEvZvf0Z5WCfA4-qGA"
            className="card-info-link"
          >
            Checkout Our YouTube Channel
          </a>
        </div>
      </Section2>
    </>
  );
}
