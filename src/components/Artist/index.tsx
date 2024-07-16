import React from "react";

const Artist = () => {
  return (
    <div className="py-36 px-4 max-w-[1920px]  w-full mx-auto">
      <h2 className="font-normal text-[44px] max-1000:text-[28px] text-[#515151] mb-20">
        О театре
      </h2>
      <div className="flex max-700:p-5 max-1000: max-1000:gap-10 max-1200:p-10 items-cente max-1600:gap-20 gap-44 border-[#515151] max-1600:px-20 max-1600:py-20 shadow-sm border py-[158px] px-40 max-1000:flex-col">
        <div className="img max-500:w-[90%] max-1000:mx-auto w-[308px] max-1000:w-[100%] aspect-[9/12] relative">
          <img
            className="w-full h-full object-cover object-center"
            src="/img/about.png"
            alt=""
          />
          <div className="w-full h-full absolute top-4 left-4 border border-[#515151]"></div>
        </div>

        <div>
          <div className="flex  max-1000:mb-8 max-1000:gap-0 items-center max-1000:justify-between justify-center gap-20 mb-24">
            <img className="scale-[.5]" src="\svg\arnament.svg" alt="" />
            <span className="italic text-center max-1000:text-[16px] text-[26px] font-normal text-[#515151]">
              СУЛТАН ИБРАИМОВ <br />
              ИБРАИМОВИЧ
            </span>
            <img className="scale-[.5]" src="\svg\arnament.svg" alt="" />
          </div>
          <p className="text-[22px] max-1000:text-[16px] max-w-[790px] font-normal text-[#515151] italic">
            Where can I get some? <br className="max-1000:hidden" /> There are
            many variations of passages of Lorem Ipsum available, but the
            majority have suffered alteration in some form, by injected humour,
            or randomised words which don't look even slightly believable. If
            you are going to use a passage of Lorem Ipsum, you need to be sure
            there isn't anything embarrassing hidden in the middle of text.{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Artist;
