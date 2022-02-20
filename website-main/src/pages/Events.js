import * as React from "react";
import Section1 from "../components/Section1";
import Section2 from "../components/Section2";
import Navigation from "../components/Navigation";

export default function Events() {
  const upcomingEvents = [
    {
      title: "Polygon",
      description: "This is an event with Polygoon",
      image: "me.png",
      link: "RSVP Link",
    },
    {
      title: "Polygon",
      description: "This is an event with Polygoon",
      image: "me.png",
      link: "RSVP Link",
    },
    {
      title: "Polygon",
      description: "This is an event with Polygoon",
      image: "me.png",
      link: "RSVP Link",
    },
    {
      title: "Polygon",
      description: "This is an event with Polygoon",
      image: "me.png",
      link: "RSVP Link",
    },
  ];

  const pastEvents = [
    {
      title: "Polygon",
      description: "This is an event with Polygoon",
      image: "me.png",
      link: "RSVP Link",
    },
    {
      title: "Polygon",
      description: "This is an event with Polygoon",
      image: "me.png",
      link: "RSVP Link",
    },
    {
      title: "Polygon",
      description: "This is an event with Polygoon",
      image: "me.png",
      link: "RSVP Link",
    },
    {
      title: "Polygon",
      description: "This is an event with Polygoon",
      image: "me.png",
      link: "RSVP Link",
    },
  ];
  return (
    <>
      <Navigation></Navigation>
      <Section1
        image="main.png"
        title="Events"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Id
            labore voluptas dolore repellat natus reiciendis quae a
            reprehenderit fugiat voluptatum vitae omnis nostrum consequatur
            non rem officiis, quibusdam ipsa aliquid!"
      ></Section1>

      <Section2
        title="Upcoming Events"
        data={upcomingEvents}
        link_title="RSVP"
      ></Section2>
      <Section2
        title="Past Events"
        data={pastEvents}
        link_title="Watch Recording"
      ></Section2>
    </>
  );
}
