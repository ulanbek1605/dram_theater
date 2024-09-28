import React from "react";

interface InfoSeancesProps {
  name: string;
  date: string;
  time: string;
}

const InfoSeances: React.FC<InfoSeancesProps> = ({ name, date, time }) => {
  return(
    <div className="fixed flex flex-col max-w-[420px] w-full right-0 top-[10px] h-[244px] bg-[#e8e8e8]">
      <div className="bg-[#9d3434] w-full rounded-tl-[5px] rounded-tr-[5px] shadow-[2px_11px_18px_0_rgba(0,0,0,0.1)] px-[14px] py-3 text-white text-[28px] font-medium">
        Подробнее
      </div>
      <div className="flex-1 px-[14px] py-3 flex gap-[24px] shadow-[2px_11px_18px_0_rgba(0,0,0,0.1)]">
        <div className="h-full w-[122px]">
          <img
            className="w-full h-full object-cover object-center"
            src="/svg/defaultImage.svg"
            alt=""
          />
        </div>
        <div className="flex flex-col">
          <b className="text-[18px] text-[#515151]">Название</b>
          <b className="text-[18px] font-normal text-[#515151]">{name}</b>
          <div className="flex items-center gap-1">
            <img src="/svg/kalendar.svg" alt="" />
            <div className="text-[18px] text-[#515151] flex flex-col">
              <span>{date}</span>
              <span>{time}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoSeances;
