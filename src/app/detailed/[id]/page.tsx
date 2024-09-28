"use client";
import "./index.css";
import { instance } from "@/components/axios";
import Card from "@/components/cards/Card";
import Calendar from "@/components/deteils/Calendar";
import Link from "next/link";
import { useParams } from "next/navigation";
import React, { useEffect, useRef, useState } from "react";

interface TicketType {
  id: number;
  price: number;
  from_row: number;
  to_row: number;
  seance: number;
  tickets: number[];
}

interface Seance {
  id: number;
  time: string;
  date: string;
  ticket_types: TicketType[];
}

interface MinMaxCost {
  minPrice: number;
  maxPrice: number;
}

const page = () => {
  const params = useParams();

  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [data, setData] = useState<{ [key: string]: any }>({});
  const [dataSeances, setDataSeances] = useState<Seance[] | null>([]);
  const [loading, setLoading] = useState<Boolean>(false);
  const [minMaxCost, setMinMaxCost] = useState<MinMaxCost[] | null>([]);
  const togglePlay = () => {
    const video = videoRef.current;
    if (video) {
      if (video.paused) {
        video.play();
        setIsPlaying(true);
      } else {
        video.pause();
        setIsPlaying(false);
      }
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      if (!params.id) return;
      try {
        setLoading(true);
        const res = await instance.get(`/repertoires/${params.id}/`);
        setData(res.data);
        setResults([res.data]);
        setLoading(false);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [params.id]);

  const [results, setResults] = useState<any[]>([]);

  async function showData() {
    try {
      const response = await instance.get(`/repertoires/${params.id}/`);
      localStorage.setItem("repertoires", `${params.id}`)
      setResults([response.data]);
    } catch (error) {
      console.log("error", error);
    }
  }

  useEffect(() => {
    showData();
  }, []);

  const handleClick = async (date: string) => {
    if (!data.seances) return;

    const filteredSeances = data.seances.filter(
      (item: Seance) => item.date === date
    );

    const minMaxCost = filteredSeances
      .map((seance: Seance) => {
        const prices = seance.ticket_types.map(
          (ticketType) => ticketType.price
        );
        return {
          seance,
          minPrice: Math.min(...prices),
          maxPrice: Math.max(...prices),
        };
      })
      .sort(
        (a: { minPrice: number }, b: { minPrice: number }) =>
          a.minPrice - b.minPrice
      );

    setMinMaxCost(minMaxCost);
    setDataSeances(filteredSeances);
  };

  const formatDuration = (duration: string) => {
    return duration.replace("h", "час").replace("min", "мин");
  };
  return (
    <div className="bg-[#f5eade] max-700:px-0 px-20 max-1000:px-[50px] min-h-screen">
      <div className=" max-w-[1920px] w-full bg-white mx-auto">
        <div className="home flex">
          <div className="movie-trailer w-[70%] max-1000:w-full">
            <div className="w-full relative">
              <video
                ref={videoRef}
                src={`/video/document_5461161903113914296.mp4`}
                className="w-full object-cover object-center bg-black aspect-video"
                playsInline
              ></video>{" "}
              <div className="absolute bottom-20 max-1000:bottom-4 left-0 px-20 max-1000:px-8 w-full items-center justify-between flex ">
                <div>
                  <h3 className="text-[45px] max-1000:text-[28px] font-medium pb-5 max-1000:pb-1 text-white">
                    {data.name}
                  </h3>
                  <span className="text-[22px] font-medium text-white">
                    Your name, 2016
                  </span>
                </div>
                <div className="max-1000:hidden">
                  <button onClick={togglePlay}>
                    {isPlaying ? (
                      <img src="/svg/stop.svg" alt="" />
                    ) : (
                      <img src="/svg/play.svg" alt="" />
                    )}
                  </button>
                </div>
              </div>
              <div className="max-1000:w-full hidden max-1000:top-0 max-1000:left-0 max-1000:h-full max-1000:absolute max-1000:justify-center max-1000:items-center max-1000:flex">
                <button className="max-700:scale-[.7]" onClick={togglePlay}>
                  {isPlaying ? (
                    <img src="/svg/stop.svg" alt="" />
                  ) : (
                    <img src="/svg/play.svg" alt="" />
                  )}
                </button>
              </div>
            </div>
          </div>
          <div className="movie-preview w-[30%] aspect-[9/1.9]  max-1000:hidden">
            <img
              className="w-full object-cover h-full"
              src={data?.image}
              alt=""
            />
          </div>
        </div>
        <div className="content max-700:px-[12px] max-1000:pb-0 max-1600:px-10 flex pt-24 max-1000:gap-14 max-1000:flex-col-reverse pb-20 px-20">
          <div className="w-[70%] max-1000:w-full pr-24 max-1000:pr-0 max-1600:pr-8">
            {!loading ? (
              <Calendar HandleClick={handleClick} seances={data?.seances} />
            ) : (
              ""
            )}

            <div className="flex flex-col gap-10 pt-[60px]">
              {dataSeances
                ? dataSeances.map((item) => (
                    <div className="flex justify-between py-5 border-b items-center max-600:grid max-600:grid-cols-2 max-400:grid-cols-1 gap-4 text-center">
                      <span className="text-[30px] font-medium color-[#515151] max-1200:text-[22px]">
                        {item.date}
                      </span>
                      <div className="text-[18px] max-1200:text-[16px] max-600:px-[16px] max-600:py-1  font-medium color-[#515151] px-[15px] py-2 bg-[rgba(98,98,98,0.27)] rounded-[6px] max-1200:rounded-[4px]">
                        {item?.time}
                      </div>
                      <div className="text-[18px] max-1200:text-[14px] max-600:justify-center color-[#a7a7a7] flex items-center gap-1">
                        <img className="scale-50" src="\svg\som.svg" alt="" />
                        {minMaxCost
                          ? `
                      ${minMaxCost[0]?.minPrice} - ${minMaxCost[0]?.maxPrice}`
                          : ""}{" "}
                        сом
                      </div>

                      <Link
                        href={`/hall/${item.id}`}
                        className="bg-[#ffcd00] px-[35px] max-1200:px-[16px] py-2 max-1200:py-1  max-1200:text-[14px] text-[18px] text-[#575757] rounded-[6px]"
                      >
                        Купить билеты
                      </Link>
                    </div>
                  ))
                : ""}
            </div>
          </div>
          <div className="w-[30%] max-1000:w-full">
            <div>
              <p className="text-[22px] text-[#515151] max-1000:text-[18px] font-normal">
                Жанр:{" "}
                {data?.genres?.map((item: any) => formatDuration(item.name))}
              </p>
              <p className="text-[22px] text-[#515151] max-1000:text-[18px] font-normal flex gap-8">
                <span>13+</span>
                <span>{data?.duration}</span>
                {/* <span>05 / 03 / 2024</span> */}
              </p>
            </div>
            <p className="text-[22px] py-14 text-[#515151] font-normal py[60px]">
              {data?.description}
            </p>
            <div className="text-[22px] text-[#515151] font-normal">
              <span className="text-[#a7a7a7] max-1000:text-[18px]">
                В ролях
              </span>
              <p className="flex gap-1 flex-wrap max-1000:text-[18px]">
                {data.actors?.map((item: any) => (
                  <span key={Math.random()}>{item.full_name},</span>
                ))}
              </p>
            </div>
          </div>
        </div>
        <div>
          <h3 className="text-[44px]  text-[#515151] px-10 max-700:px-3 font-normal pt-12 max-1000:text-[28px]">
            Ближайшие премьеры
          </h3>
          <div className="premires_block ">
            {results?.map((item: any, index: number) => {
              let price: any = "";
              let data = "";
              let time = "";
              item.seances.forEach((element: any) => {
                data = element.date;
                time = element.time.split(":", 2).join(":");
                price = element.ticket_types.filter(
                  (elem: any) => elem.seance === element.id
                );
              });
              return (
                <div key={index}>
                  <Card
                    name={item.name}
                    description={item.description}
                    image={item.image}
                    data={data}
                    time={time}
                    id={item.id}
                    price={`${price[0]?.price} - ${price[1]?.price}`}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
