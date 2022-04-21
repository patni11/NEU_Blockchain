import React from "react";

const Section = ({ children, title }) => {
  return (
    <div className="py-10 ">
      <div className="sm:w-3/4 lg:w-5/12 mx-auto px-2">
        <h1 className="text-3xl text-center text-nub-red">{title}</h1>
      </div>
      <div className="relative mt-20">
        <div className="container flex flex-col lg:flex-row items-center justify-center gap-x-24">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Section;
