import * as React from "react";
import "../styles/research.css";
import { useState } from "react";
// import { useEffect } from "react";
// import Cube from "../components/Cube";
import Section1 from "../components/Section1";
import Section2 from "../components/Section2";
import Navigation from "../components/Navigation";

export default function Research() {
  const [data, setData] = useState([
    {
      id: 5,
      title: "The Cambrian Explosion of Stablecoins",
      description:
        "The rise of stablecoins is a recent phenomena and the ecosystem is fast evolving. In this report, we break down the stablecoin landscape today, the key measures of its growth, and the possible future paths for this burgeoning sector of the crypto-economy.",
      image:
        "https://images.unsplash.com/photo-1536623975707-c4b3b2af565d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80",
      link:
        "https://5264302.fs1.hubspotusercontent-na1.net/hubfs/5264302/The%20Cambrian%20Explosion%20of%20Stablecoins.pdf",
    },
    {
      id: 4,
      title: "NFTs: The Good, the Bad, and the Ugly…",
      description:
        "The article explores the value proporsition and utilitiy of NFTs. It also introduces NFTs to people who may have just heard of it before.",
      image: "https://miro.medium.com/max/1400/1*pXDmsEsVgD8R9gX083MiZA.png",
      link:
        "https://neublockchain.medium.com/nfts-the-good-the-bad-and-the-ugly-8da0949de6eb",
    },
    {
      id: 1,
      title: "Decoding Smart Contracts",
      description:
        "This article jumpstarts the discussion of smart contract technology and its industrial applications.",
      image:
        "https://images.unsplash.com/photo-1538170819641-15b741105cb3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2671&q=80",
      link:
        "https://neublockchain.medium.com/decoding-smart-contracts-an-introduction-to-self-executing-blockchain-agreements-931c6516f4e2",
    },
    {
      id: 2,
      title:
        "Leveraging Blockchain for Digital Identity: Shifting a Digital Paradigm",
      description:
        "This paper will serve as a comprehensive deep dive into digital identity, specifically how blockchains enable a paradigm shift in the way we interact online. The paper is multifaceted and covers dimensions such as context, use cases, infrastructure, implications, as well as the risks and limitations of these systems.",
      image:
        "https://images.unsplash.com/photo-1601723897234-327147304013?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2646&q=80",
      link:
        "https://drive.google.com/file/d/1yRA-fwM9l74y1x0flqI3rlxf7yrokHb3/view",
    },
    {
      id: 3,
      title: "Can Bitcoin Beat Ethereum in Its Own Game",
      description:
        "Bitcoin was created to improve the monetary system of the world and become the most valuable, trusted, and safest store of value. As the space developed, other projects emerged such as Ethereum which introduced the concept of smart contracts, and DeFi that are now trying to revolutionize the applications on the internet and finance.",
      image: "https://miro.medium.com/max/1400/1*C5d0_em1ABYWeEduIkqYNA.png",
      link:
        "https://medium.com/coinmonks/can-bitcoin-beat-ethereum-in-its-own-game-3ac1ff80b8fb",
    },
  ]);
  return (
    <>
      <Navigation></Navigation>
      <Section1
        image="me.png"
        title="Research"
        description="At NEU Blockchain, we have a whole division dedicated to producing world class research related to DeFi, NFTs, L1, L2, decentralized ledger techonology, security, and much more. We have over 10 teams churning out research in all of these fields in the form of articles and research papers"
      ></Section1>

      <Section2 title="" data={data} link_title="View Research"></Section2>
    </>
  );
}
