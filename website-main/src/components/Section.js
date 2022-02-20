import React from 'react'


const Section = ({ children, title }) => {
    return (
        <div className="py-10 ">
      <div class="sm:w-3/4 lg:w-5/12 mx-auto px-2">
        <h1 class="text-3xl text-center text-nub-red">{title}</h1>
      </div>
        <div class="relative mt-20">
            <div class="container flex flex-col lg:flex-row items-center justify-center gap-x-24">
              {children}
            </div>
        </div>
      </div>
    );


}

export default Section;