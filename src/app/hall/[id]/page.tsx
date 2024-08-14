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
          `https://dramatheatre.pythonanywhere.com/api/v1/repertoires/${params.id}/`
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
    <div className="mt-[100px] flex items-center justify-center gap-2 flex-col">
      {hall?.rows?.map((row, i) => (
        <ul key={row.id} className="flex gap-2 w-full justify-center">
          <li className="flex items-center justify-center text-black w-[31px] h-[31px] rounded-[6px] text-xs">
            {row?.seats.length > 0 ? `row ${hall?.rows.length - i}` : ""}
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
                [...Array((cell as EmptySpace).empty_spots)].map((_, index) => (
                  <li
                    className="w-[31px] h-[31px]"
                    key={`empty-${index}-${Math.random()}`}
                  ></li>
                ))
              ) : (cell as Seat).seat_number ? (
                <li
                  className={`bg-[#b8b8b8] flex items-center justify-center w-[31px] h-[31px] rounded-[4px] font-normal  text-[19px] text-white `}
                  key={Math.random()}
                >
                  {(cell as Seat).seat_number}
                </li>
              ) : (
                <li
                  className="w-[31px] order-[-1] h-[31px]"
                  key={Math.random()}
                ></li>
              )
            )}
          <li className="flex items-center justify-center text-black w-[31px] h-[31px] rounded-[6px] text-xs">
            {row?.seats.length > 0 ? `row ${hall?.rows.length - i}` : ""}
          </li>
        </ul>
      ))}
    </div>
  );
};

export default Page;
