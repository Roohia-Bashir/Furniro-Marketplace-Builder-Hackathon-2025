import React from "react";
import Image from "next/image";
import { browseRange } from "@/constant/browseRange";

function Browserange() {
  return (
    <>
      <section className="mt-[56.47px] w-[1183px] pl-[131px] pr-[126px] m-auto mb-40 font-poppins">
        {/* top heading */}
        <div className="flex justify-center flex-col items-center">
          <h1 className="text-[32px] leading-[48px] font-bold text-black text-center">
            Browse The Range
          </h1>
          <p className="text-[20px] leading-[30px] text-black text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </div>

        {/* card body */}

        <div className="mt-[62.29px] flex  items-center  justify-center  gap-[20px] w-full ">
          {browseRange.map((item, index) => {
            return (
              <div
                className="flex items-center justify-center flex-col"
                key={index}
              >
                {/* top image */}
                <div className="w-[381px] h-[480px] ">
                  <Image
                    src={item.src}
                    alt="dining"
                    width={"381"}
                    height={"480"}
                  ></Image>
                </div>

                {/* card text */}

                <div>
                  <h1 className="text-[24px] leading-[36px] font-semibold text-black text-center">
                    {item.name}
                  </h1>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}

export default Browserange;
