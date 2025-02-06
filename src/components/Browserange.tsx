import React from "react";
import Image from "next/image";
import { browseRange } from "@/constant/browseRange";

function BrowseRange() {
  return (
    <section className="mt-14 px-4 sm:px-8 md:px-16 lg:px-20 xl:px-28 max-w-7xl mx-auto mb-40 font-poppins">
      {/* Top Heading */}
      <div className="flex flex-col items-center text-center">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black">
          Browse The Range
        </h1>
        <p className="text-lg sm:text-xl text-black mt-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
      </div>

      {/* Card Body */}
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 place-items-center">
        {browseRange.map((item, index) => (
          <div className="flex flex-col items-center" key={index}>
            {/* Image */}
            <div className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg h-auto relative">
              <Image
                src={item.src}
                alt={item.name}
                width={400} // Default size
                height={500} // Default size
                className="w-full h-auto rounded-lg object-cover"
              />
            </div>

            {/* Card Text */}
            <h2 className="mt-4 text-lg sm:text-xl font-semibold text-black">
              {item.name}
            </h2>
          </div>
        ))}
      </div>
    </section>
  );
}

export default BrowseRange;
