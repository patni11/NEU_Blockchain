import * as React from "react"

import FiestaImg from "../images/logo.svg"
// markup
const Hero = () => {
    return (
        <div>
            <div className="container flex flex-col-reverse lg:flex-row items-center gap-12 mt-14">
                {/* diplay as row but with image then content in mobile*/}
                <div className="flex flex-1 flex-col items-center lg:items-start">
                    <h2 className="text-nub-red text-3xl md:text-4 lg:text-5xl text-center lg:text-left mb-6">
                        NEU Blockchain Club
                    </h2>
                    {/* Content */}
                    <p className="text-nub-grey text-lg text-center lg:text-left mb-6">
                        NEU Blockchain is a student-led organization dedicated to advancing blockchain education, development, and research.
                        Our mission is to foster an open community of thought leaders, developers, and researchers to support the development of blockchain and digitical currency technologies.
                        We are open to undergraduate students, graduate students, alumni, and industry professionals. Join us in working together to build the next blockchain-crypto hub at Northeastern.
                    </p>
                </div>
                {/* Image */}
                <div className="flex justify-center flex-1 mb-10 md:mb-16 lg:mb-0 z-10">
                    <img className="w-5/6 h-5/6 sm:w-3/4 sm:h-3/4 md:w-full md:h-full" src={FiestaImg}></img>
                </div>
            </div>
        </div>
    )
}

export default Hero
