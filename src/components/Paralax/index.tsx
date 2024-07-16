import React from "react";

const Paralax = () => {
  return (
    <div className="paralax  max-w-[1920px]  mx-auto w-full max-400:h-[1200px] max-700:h-[1400px] max-500:h-[1200px] max-1000:h-[1900px]  h-[2769px] relative">
      <div className="paralax sticky pt-[200px] max-1000:pt-0 top-[400px] pb-[100px] left-0  flex justify-center">
        <h1 className="font-normal max-700:text-[24px] text-[#515151] text-[70px] font-mySerif">
          PEOPLE FIRST
        </h1>
      </div>
      <div className="paralax-box max-1000:flex gap-y-[70px] justify-between flex-wrap ">
        <div className="max-1000:static  absolute max-1200:scale-[.7] max-1000:w-[48%] max-1000:aspect-square max-1000:h-auto max-1000:scale-1 w-[425px] h-[466px] top-[400px]  left-[35%]">
          <img
            src="/img/paralx1.png"
            className="w-full h-full object-cover"
            alt=""
          />
        </div>
        <div className="max-1000:static  absolute max-1200:scale-[.7] max-1000:w-[48%] max-1000:aspect-square max-1000:h-auto max-1000:scale-1 w-[425px] h-[536px] top-[600px]  left-[0]">
          <img
            src="/img/paralx2.png"
            className="w-full h-full object-cover"
            alt=""
          />
        </div>
        <div className="max-1000:static  absolute max-1200:scale-[.7] max-1000:w-[48%] max-1000:aspect-square max-1000:h-auto max-1000:scale-1 w-[425px] h-[536px] top-[600px] right-0">
          <img
            src="/img/paralx3.png"
            className="w-full h-full object-cover"
            alt=""
          />
        </div>
        <div className="max-1000:static  absolute max-1200:scale-[.7] max-1000:w-[48%] max-1000:aspect-square max-1000:h-auto max-1000:scale-1 w-[672px] h-[442px] top-[1368px] max-1200:left-[110px] left-[270px]">
          <img
            src="/img/paralx4.png"
            className="w-full h-full object-cover"
            alt=""
          />
        </div>
        <div className="max-1000:static  absolute max-1200:scale-[.7] max-1000:w-[48%] max-1000:aspect-square max-1000:h-auto max-1000:scale-1 w-[445px] h-[392px] top-[1589px] max-1200:right-[0px] right-[112px]">
          <img
            src="/img/paralx5.png"
            className="w-full h-full object-cover"
            alt=""
          />
        </div>
        <div className="max-1000:static  absolute max-1200:scale-[.7] max-1000:w-[48%] max-1000:aspect-square max-1000:h-auto max-1000:scale-1 w-[445px] h-[392px] top-[1989px] right-[30%]">
          <img
            src="/img/paralx6.png"
            className="w-full h-full object-cover"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Paralax;
