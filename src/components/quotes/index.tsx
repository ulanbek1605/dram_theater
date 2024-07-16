"use client";
import React, { useState } from "react";

interface Quote {
  name: string;
  title: string;
  description: string;
}

const Duotes: React.FC = () => {
  const data: Quote[] = [
    {
      name: "ЧЫНГЫЗ  АЙТМАТОВ",
      title: "Белый пороход",
      description: `«Не должна повториться война, когда жизнь приходилось употреблять на одноразовое дело - на одну атаку, на один бросок гранаты под танк…
        Каждый должен иметь возможность долго жить на белом свете, дорожить и свободно распоряжаться лишь однажды дарованным и цезарю, и пастуху счастьем полнокровного существования. Никто не вправе лишать человека такой благодати от сотворения - жить и приумножаться на земле в нескончаемом возвышении духа и разума.»`,
    },
    {
      name: "ААЛЫ ТОКОМБАЕВ",
      title: "Сказка о том, что я видел и слышал",
      description: `«Есть поговорка: «Если сын не опередит отца - наступит конец света». Вот так и вы опередили нас, а вас опередят ваши потомки, поэтому конец света не наступит…»`,
    },
  ];

  const [index, setIndex] = useState<number>(0);

  const handlePrev = (): void => {
    setIndex(index === 0 ? data.length - 1 : index - 1);
  };

  const handleNext = (): void => {
    setIndex(index === data.length - 1 ? 0 : index + 1);
  };

  return (
    <div className="duotes flex flex-col  items-center max-w-[1920px] px-[15px] py-[140px] mx-auto">
      <img src="/svg/quotes.svg" alt="" />
      <div className="flex justify-between items-center w-full max-800:h-auto max-800:mb-h-[300px] max-800:mt-[30px] mt-[86px] max-800:mb-[52px] mb-[148px]">
        <button className="max-800:hidden" onClick={handlePrev}>
          <img src="\svg\prev.svg" alt="Previous" />
        </button>
        <p className="w-5/6 italic max-800:w-full h-auto max-800:text-[14px] text-[20px] font-medium text-[#515151]">
          {data[index].description}
        </p>
        <button className="max-800:hidden" onClick={handleNext}>
          <img src="\svg\next.svg" alt="Next" />
        </button>
      </div>
      <div className="flex items-center gap-[34px]">
        <span className="w-[192px] h-[1px] block bg-[#515151]"></span>
        <h4 className="text-[30px] max-800:w-[145px] max-800:text-[14px] text-[#515151] font-medium">
          {data[index].name}
        </h4>
        <span className="w-[192px] h-[1px] block bg-[#515151]"></span>
      </div>
      <h5 className="text-[25px] max-800:text-[12px] text-[#515151] text-center font-medium pt-[24px] italic">
        {data[index].title}
      </h5>
    </div>
  );
};

export default Duotes;
