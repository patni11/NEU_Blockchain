import * as React from "react";
import "../styles/research.css";
import Research_Card from "../components/Card";
import Research_Info from "../components/CardInfo";
import { useState } from "react";
import { useEffect } from "react";
import Cube from "../components/Cube";
import Section1 from "../components/Section1";
import Section2 from "../components/Section2";
import Navigation from "../components/Navigation";

export default function Research() {
  const [data, setData] = useState([
    {
      id: 1,
      title: "Identity",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas voluptate, molestiae optio laboriosam similique animi quas, molestias mollitia, necessitatibus rerum totam. Laboriosam soluta molestias voluptas reprehenderit suscipit amet nemo dolor!",
      image: "main.png",
      link: "adsfasdfsd",
    },
    {
      id: 2,
      title: "BTC vs ETH",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas voluptate, molestiae optio laboriosam similique animi quas, molestias mollitia, necessitatibus rerum totam. Laboriosam soluta molestias voluptas reprehenderit suscipit amet nemo dolor!",
      image: "main.png",
      link: "https://medium.com/",
    },
    {
      id: 3,
      title: "Identity",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto perspiciatis mollitia rerum, modi saepe assumenda maiores ab doloremque dicta nostrum deserunt cumque molestiae, rem veritatis obcaecati eveniet. Reiciendis itaque mollitia reprehenderit esse eos excepturi assumenda quibusdam iure minima pariatur, unde dolores nulla eligendi illo beatae? Enim eos fuga adipisci provident ad? Corporis culpa qui rerum veritatis fugit repellat ea molestias quam quisquam repudiandae nesciunt mollitia, excepturi quae exercitationem impedit provident in autem laborum temporibus iure incidunt debitis? Fuga nisi voluptate incidunt ducimus voluptas, molestiae laudantium eius reprehenderit rerum cupiditate voluptatem architecto rem dolorem sint fugiat iusto eaque tenetur. Itaque, modi.",
      image: "main.png",
      link: "adsfasdf",
    },
    {
      id: 4,
      title: "BTC vs ETH",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas voluptate, molestiae optio laboriosam similique animi quas, molestias mollitia, necessitatibus rerum totam. Laboriosam soluta molestias voluptas reprehenderit suscipit amet nemo dolor!",
      image: "main.png",
      link: "https://medium.com/",
    },
    {
      id: 5,
      title: "Identity",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas voluptate, molestiae optio laboriosam similique animi quas, molestias mollitia, necessitatibus rerum totam. Laboriosam soluta molestias voluptas reprehenderit suscipit amet nemo dolor!",
      image: "main.png",
      link: "asdfasf",
    },
    {
      id: 6,
      title: "BTC vs ETH",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas voluptate, molestiae optio laboriosam similique animi quas, molestias mollitia, necessitatibus rerum totam. Laboriosam soluta molestias voluptas reprehenderit suscipit amet nemo dolor!",
      image: "main.png",
      link: "https://medium.com/",
    },
  ]);
  return (
    <>
      <Navigation></Navigation>
      <Section1
        image="me.png"
        title="Research"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Id
                labore voluptas dolore repellat natus reiciendis quae a
                reprehenderit fugiat voluptatum vitae omnis nostrum consequatur
                non rem officiis, quibusdam ipsa aliquid!"
      ></Section1>

      <Section2
        title="Sort By"
        data={data}
        link_title="View Research"
      ></Section2>
    </>
  );
}
