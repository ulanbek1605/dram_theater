"use client";
import "./index.css";
import { instance } from "@/components/axios";
import Card from "@/components/cards/Card";
import Calendar from "@/components/deteils/Calendar";
import { useParams } from "next/navigation";
import React, { useEffect, useRef, useState } from "react";
const page = () => {
  const params = useParams()
  
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [data, setData] = useState<{ [key: string]: any }>({});
  const [loading, setLoading] = useState<Boolean>(false);
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
    if (!params.id) return
    const fetchData = async () => {
      try {
        setLoading(true);
        const res = await instance.get(`/repertoires/${params.id}/`);
        setData(res.data);
        setLoading(false);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  const [results, setResults] = useState<any[]>([]);
  async function showData() {
    try {
      const response = await instance.get(`/repertoires/${params.id}/`);

      setResults([response.data]);
    } catch (error) {
      console.log("error", error);
    }
  }

  useEffect(() => {
    showData();
  }, []);

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
          <div className="movie-preview w-[30%] max-1000:hidden">
            <img
              className="w-full object-cover h-full"
              src={data?.image}
              alt=""
            />
          </div>
        </div>
        <div className="content max-700:px-[12px] max-1000:pb-0 max-1600:px-10 flex pt-24 max-1000:gap-14 max-1000:flex-col-reverse pb-20 px-20">
          {!loading ? <Calendar seances={data?.seances} /> : <Calendar />}
          <div className="w-[30%] max-1000:w-full">
            <div>
              <p className="text-[22px] text-[#515151] max-1000:text-[18px] font-normal">
                Жанр: {data?.genres?.map((item:any) => formatDuration(item.name))}
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
                {data.actors?.map((item:any) => (
                  <span>{item.full_name},</span>
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
                    price={`${price[0].price} - ${price[1].price}`}
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
