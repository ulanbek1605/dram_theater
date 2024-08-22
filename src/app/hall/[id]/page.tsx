"use client";
import axios from "axios";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";

interface Seat {
  id: number;
  seat_number: number;
  row_number: number;
  row: number;
}

interface EmptySpace {
  id: number;
  from_seat: number;
  empty_spots: number;
  to_seat: number;
  row: number;
}

interface HallRow {
  id: number;
  seats: Seat[];
  empty_spaces: EmptySpace[];
  created_at: string;
  updated_at: string;
  length: number;
  number: number;
  hall: number;
}

interface Hall {
  id: number;
  rows: HallRow[];
  created_at: string;
  updated_at: string;
  name: string;
  image: string;
}

interface Genre {
  id: number;
  name: string;
}

interface Director {
  id: number;
  full_name: string;
}

interface Actor {
  id: number;
  full_name: string;
}

interface TicketType {
  id: number;
  price: number;
  from_row: number;
  to_row: number;
  seance: number;
  tickets: any[];
}

interface PerformanceSeance {
  id: number;
  time: string;
  date: string;
  ticket_types: TicketType[];
}

interface Repertoire {
  id: number;
  genres: Genre[];
  director: Director;
  actors: Actor[];
  seances: PerformanceSeance[];
  created_at: string;
  updated_at: string;
  name: string;
  description: string;
  duration: number;
}

const Page: React.FC = () => {
  const params = useParams();
  const [hall, setHall] = useState<Hall | null>(null);
  const [repertoires, setRepertoires] = useState<Repertoire | null>(null);
  console.log(repertoires);
  console.log(hall);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get<Hall>(
          "https://dramatheatre.pythonanywhere.com/api/v1/halls/6/"
        );
        setHall(res.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    const fetchRepertoiresData = async () => {
      try {
        const res = await axios.get<Repertoire>(
          `https://dramatheatre.pythonanywhere.com/api/v1/repertoire-seances/${params.id}/`
        );
        setRepertoires(res.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
    fetchRepertoiresData();
  }, [params.id]);

  return (
    <div className="mt-[100px]">
      <div className="overflow-x-auto">
        <div className=" max-1200:w-[1200px]">
          <h3 className="font-bold max-1600:text-[23px] text-[31px] text-[#929292] text-center max-1600:pb-[14px] pb-[20px]">
            ПАРТЕР
          </h3>
          <div className=" flex items-center justify-center max-1600:gap-[6px] gap-[10px] flex-col">
            {hall?.rows?.map((row, i) => (
              <ul
                key={row.id}
                className="flex max-1600:gap-1 gap-[6px] w-full justify-center"
              >
                <li className="flex items-center justify-center  max-1600:w-[23px] w-[31px] max-1600:h-[23px] h-[31px] rounded-[6px] max-1600:text-[17px] text-[23px] text-[#929292]">
                  {row?.seats.length > 0 ? `${hall?.rows.length - i}` : ""}
                </li>
                {[...row?.seats, ...row?.empty_spaces]
                  .sort((a, b) => {
                    const seatNumberA =
                      (a as Seat).seat_number ?? (a as EmptySpace).from_seat;
                    const seatNumberB =
                      (b as Seat).seat_number ?? (b as EmptySpace).from_seat;
                    return seatNumberA - seatNumberB;
                  })
                  .map((cell, j) =>
                    (cell as EmptySpace).from_seat ? (
                      [...Array((cell as EmptySpace).empty_spots)].map(
                        (_, index) => (
                          <li
                            className="max-1600:w-[23px] w-[31px] max-1600:h-[23px] h-[31px]"
                            key={`empty-${index}-${Math.random()}`}
                          ></li>
                        )
                      )
                    ) : (cell as Seat).seat_number ? (
                      <li
                        className={`bg-[#b8b8b8] flex items-center justify-center max-1600:w-[23px] w-[31px] max-1600:h-[23px] h-[31px] rounded-[4px] font-normal  max-1600:text-[14px] text-[19px] text-white `}
                        key={Math.random()}
                      >
                        {(cell as Seat).seat_number}
                      </li>
                    ) : (
                      <li
                        className="max-1600:w-[23px] w-[31px] order-[-1] max-1600:h-[23px] h-[31px]"
                        key={Math.random()}
                      ></li>
                    )
                  )}
                <li className="flex items-center justify-center  max-1600:w-[23px] w-[31px] max-1600:h-[23px] h-[31px] rounded-[6px] max-1600:text-[17px] text-[23px] text-[#929292]">
                  {row?.seats.length > 0 ? `${hall?.rows.length - i}` : ""}
                </li>
              </ul>
            ))}
          </div>
          <div className="max-1600:py-[22px] py-[30px]  max-1600:rounded-[74PX_74PX_37PX_37PX] rounded-[98PX_98PX_49PX_49PX]  max-1600:max-w-[800px] max-w-[1118px] bg-[#772a2a] flex items-center justify-center mx-auto max-1600:text-[23px] text-[31px] font-semibold text-[#fff] max-1600:mt-[83px] mt-[111px]">
            СЦЕНА
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
