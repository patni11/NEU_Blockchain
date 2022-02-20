import React from "react";

const Work = [
    {
        title:"Research",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eget tempus risus, sit amet eleifend neque. Sed fringilla quam neque, at sagittis lorem sodales quis. Curabitur suscipit sapien sed eros sodales, at dictum diam condimentum. Praesent vel ullamcorper dolor, sed vulputate tortor. Aliquam posuere nibh vitae lorem fermentum, vitae semper."
    },
    {
        title:"Events",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eget tempus risus, sit amet eleifend neque. Sed fringilla quam neque, at sagittis lorem sodales quis. Curabitur suscipit sapien sed eros sodales, at dictum diam condimentum. Praesent vel ullamcorper dolor, sed vulputate tortor. Aliquam posuere nibh vitae lorem fermentum, vitae semper."
    },
    {
        title:"Eduation",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eget tempus risus, sit amet eleifend neque. Sed fringilla quam neque, at sagittis lorem sodales quis. Curabitur suscipit sapien sed eros sodales, at dictum diam condimentum. Praesent vel ullamcorper dolor, sed vulputate tortor. Aliquam posuere nibh vitae lorem fermentum, vitae semper."
    },
    {
        title:"Development",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eget tempus risus, sit amet eleifend neque. Sed fringilla quam neque, at sagittis lorem sodales quis. Curabitur suscipit sapien sed eros sodales, at dictum diam condimentum. Praesent vel ullamcorper dolor, sed vulputate tortor. Aliquam posuere nibh vitae lorem fermentum, vitae semper."
    },


];

const Showcase = () => {
    return (
            <div class="grid  md:grid-cols-2 sm:grid-cols-1 lg:grid-cols-3">
                {Work.map((work) => (
                    <div className="flex flex-col items-start justify-center px-6 col-span-1">
                        <h2 className="cursor-pointer link link-underline link-underline-black text-2xl text-nub-white capatalize font-semibold">{work.title}</h2>
                        <p className="text-nub-grey py-5">{work.desc} </p>
                    </div>
                ))}
            </div>
    );
}


export default Showcase