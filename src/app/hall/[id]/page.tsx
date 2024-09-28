"use client";
import Cart from "@/components/cart";
import InfoSeances from "@/components/info-seances";
import axios from "axios";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import "./index.css";
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

interface Repertoires {
  id: number;
  genres: Genre[];
  director: Director;
  actors: Actor[];
  created_at: string;
  updated_at: string;
  name: string;
  description: string;
  duration: string;
  pg: string;
  scriptwriter: string;
  image?: string;
  status: string;
  performance_hall?: number;
}

interface Ticket {
  id: number;
  repertoire_name: string;
  is_sold: boolean;
  seat_number: number;
  row_number: number;
  type: number;
  price: number;
}

interface TicketType {
  id: number;
  from_row: number;
  to_row: number;
  tickets: Ticket[];
  hex_code: string;
  price?: string;
}

interface Row {
  id: number;
  number: number;
  seats?: Seat[];
  empty_spaces?: EmptySpace[];
}

interface EmptySpaceAndSeat {
  from_seat?: number;
  empty_spots?: number;
  seat_number?: number;
  row_number?: number;
}

interface Seat {
  seat_number: number;
  row_number: number;
}

interface EmptySpace {
  from_seat: number;
  empty_spots: number;
}

interface Repertoire {
  id: number;
  ticket_types: TicketType[];
  time?: string;
  date?: string;
}

interface Hall {
  rows: Row[];
}

const Page = () => {
  const params = useParams();
  const [hall, setHall] = useState<null | Hall>(null);
  const [repertoiresSeanc, setRepertoiresSeanse] = useState<null | Repertoire>(
    null
  );
  const [repertoires, setRepertoires] = useState<null | Repertoires>(null);
  const [cart, setCart] = useState<[] | Ticket[]>([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          "https://dramatheatre.pythonanywhere.com/api/v1/halls/6/"
        );
        setHall(res.data);
      } catch (error) {
        console.error("Ошибка при получении данных о зале:", error);
      }
    };

    const fetchRepertoiresData = async () => {
      try {
        const res = await axios.get(
          `https://dramatheatre.pythonanywhere.com/api/v1/repertoire-seances/${params.id}/`
        );
        setRepertoiresSeanse(res.data);
      } catch (error) {
        console.error("Ошибка при получении данных репертуаров:", error);
      }
    };

    const fetchRepertoires = async () => {
      try {
        const res = await axios.get(
          `https://dramatheatre.pythonanywhere.com/api/v1/repertoires/${localStorage.getItem(
            "repertoires"
          )}/`
        );
        setRepertoires(res.data);
      } catch (error) {
        console.error("Ошибка при получении данных репертуаров:", error);
      }
    };

    fetchData();
    fetchRepertoiresData();
    fetchRepertoires();
  }, [params.id]);

  const getTicketDetails = (rowNumber: number, seatNumber: number): Ticket => {
    if (!repertoiresSeanc) {
      return {} as Ticket;
    }

    const ticketType = repertoiresSeanc.ticket_types.find(
      (ticketType) =>
        rowNumber >= ticketType.from_row &&
        rowNumber <= ticketType.to_row &&
        ticketType.tickets.some((ticket) => ticket.seat_number === seatNumber)
    );

    if (!ticketType) {
      return {} as Ticket;
    }

    const ticket = ticketType.tickets.find(
      (ticket) =>
        ticket.seat_number === seatNumber && ticket.row_number === rowNumber
    );

    return ticket || ({} as Ticket);
  };

  useEffect(() => localStorage.setItem("cart", JSON.stringify(cart)), [cart]);

  const buyTicket = (item: Ticket): void => {
    setCart((prevCart) =>
      prevCart.some((elem) => elem.id === item.id)
        ? prevCart.filter((elem) => elem.id !== item.id)
        : [...prevCart, item]
    );
  };

  const arrSort = (row: Row): EmptySpaceAndSeat[] => {
    const arr = [...(row?.seats || []), ...(row?.empty_spaces || [])].sort(
      (a, b) => {
        const seatNumberA = "seat_number" in a ? a.seat_number : a.from_seat;
        const seatNumberB = "seat_number" in b ? b.seat_number : b.from_seat;
        return seatNumberA - seatNumberB;
      }
    );

    return arr;
  };

  return (
    <div className=" bg-[#e8e8e8] min-h-screen">
      <div className="pt-5 px-4 max-w-[1700px] mx-auto shadow-[2px_11px_18px_0_rgba(0,0,0,0.1)]">
        <div className="flex ">
          <div className="max-w-[440px] text-[#515151] text-[20px] w-full flex justify-center py-3 before-app border-b-2 border-[#9d3434]">
            1. Выбор билетов
          </div>
          <div className="max-w-[440px] text-[#8c8c8c] text-[20px] w-full flex justify-center py-3 ">
            2. Контактные данные
          </div>
        </div>
      </div>
      <div className="pt-[80px] px-4 max-w-[1700px] mx-auto">
        <div className="pb-[80px]">
          <h2 className="font-medium text-[#515151] text-[28px] pt-[12px] max-800:text-[22px]">
            Продажа билетов
          </h2>
          <span className="text-[#515151] text-[22px] max-800:text-[18px]">
            Выберите места:
          </span>
        </div>
        <div className="fixed z-10 bg-[#fff] shadow-[2px_11px_8px_0_rgba(0,0,0,0.1)] p-4 flex flex-col gap-3 ">
          <div className="gap-3 flex items-center">
            <div
              className={`w-[30px] h-[30px] border border-[#b8b8b8] rounded-[2px] bg-[#b8b8b8]`}
            ></div>
            <span className="text-[18px] text-[#515151]">Недоступно</span>
          </div>
          {repertoiresSeanc?.ticket_types.map((item) => (
            <div className="gap-3 flex items-center">
              <div
                style={{
                  backgroundColor: `#${item.hex_code}`,
                }}
                className={`w-[30px] h-[30px] border border-[#b8b8b8] rounded-[2px] ]`}
              ></div>
              <span className="text-[18px] text-[#515151]">{item?.price}</span>
            </div>
          ))}
          <div className="gap-3 flex items-center">
            <div
              className={`w-[30px] h-[30px] border border-[#b8b8b8] rounded-[2px] bg-[#28a544]`}
            ></div>
            <span className="text-[18px] text-[#515151]">Корзина</span>
          </div>
        </div>
        <div className="overflow-x-auto">
          <div className="max-1200:w-[1200px]">
            <h3 className="font-bold max-1600:text-[23px] text-[31px] text-[#929292] text-center max-1600:pb-[14px] pb-[20px]">
              ПАРТЕР
            </h3>
            <div className="flex items-center justify-center max-1600:gap-[6px] gap-[10px] flex-col">
              {hall?.rows?.map((row, i: number) => (
                <ul
                  key={row.id}
                  className="flex max-1600:gap-1 gap-[6px] w-full justify-center"
                >
                  <li className="flex items-center justify-center max-1600:w-[23px] w-[31px] max-1600:h-[23px] h-[31px] rounded-[6px] max-1600:text-[17px] text-[23px] text-[#929292]">
                    {row?.seats && row?.seats.length > 0
                      ? `${hall?.rows.length - i}`
                      : ""}
                  </li>
                  {arrSort(row).map((cell, j) =>
                    cell.from_seat ? (
                      [...Array(cell.empty_spots)].map((_, index) => (
                        <li
                          className="max-1600:w-[23px] w-[31px] max-1600:h-[23px] h-[31px]"
                          key={`empty-${index}-${row.number}`}
                        ></li>
                      ))
                    ) : cell.seat_number ? (
                      <li
                        onClick={() => {
                          if (
                            getTicketDetails(row.number, cell.seat_number || 0)
                              .is_sold
                          )
                            return;
                          const ticket = {
                            id: getTicketDetails(
                              row.number,
                              cell.seat_number || 0
                            ).id,
                            repertoire_name:
                              repertoiresSeanc?.id.toString() || "",
                            is_sold: getTicketDetails(
                              row.number,
                              cell.seat_number || 0
                            ).is_sold,
                            seat_number: cell.seat_number || 0,
                            row_number: row.number,
                            type: getTicketDetails(
                              row.number,
                              cell.seat_number || 0
                            ).type,
                            price: getTicketDetails(
                              row.number,
                              cell.seat_number || 0
                            ).price,
                          };

                          buyTicket(ticket);
                        }}
                        style={{
                          backgroundColor: `#${
                            repertoiresSeanc?.ticket_types.find(
                              (item) =>
                                getTicketDetails(
                                  row.number,
                                  cell.seat_number || 0
                                ).type == item.id
                            )?.hex_code
                          }`,
                          cursor: "pointer",
                          userSelect: "none",
                        }}
                        className={`group flex items-center justify-center relative max-1600:w-[23px] w-[31px] max-1600:h-[23px] h-[31px] rounded-[4px] font-normal max-1600:text-[14px] text-[19px] text-white ${
                          getTicketDetails(row.number, cell.seat_number).is_sold
                            ? "!bg-[#b8b8b8] !cursor-not-allowed"
                            : cart.some(
                                (item) =>
                                  item.id ===
                                  getTicketDetails(
                                    row.number,
                                    cell.seat_number || 0
                                  ).id
                              ) && "!bg-[#28a544]"
                        }`}
                        key={`seat-${cell.seat_number}-${row.number}`}
                      >
                        {cell.seat_number}
                        <div
                          className={`absolute bottom-[110%] text-center py-1 px-2 rounded-[8px] ${
                            !getTicketDetails(row.number, cell.seat_number)
                              .is_sold
                              ? "invisible bg-[#000000c9] group-hover:visible"
                              : "invisible"
                          }`}
                        >
                          <span className="pb-1 text-nowrap">
                            Ряд: {row.number} Место: {cell.seat_number}
                          </span>
                          <br />
                          <b className="pb-2">
                            {
                              getTicketDetails(row.number, cell.seat_number)
                                .price
                            }{" "}
                            сом
                          </b>
                        </div>
                      </li>
                    ) : (
                      <li
                        className="max-1600:w-[23px] w-[31px] order-[-1] max-1600:h-[23px] h-[31px]"
                        key={`empty-${row.number}-${Math.random()}`}
                      ></li>
                    )
                  )}
                  <li className="flex items-center justify-center max-1600:w-[23px] w-[31px] max-1600:h-[23px] h-[31px] rounded-[6px] max-1600:text-[17px] text-[23px] text-[#929292]">
                    {row?.seats && row?.seats.length > 0
                      ? `${hall?.rows.length - i}`
                      : ""}
                  </li>
                </ul>
              ))}
            </div>

            <div className="max-1600:py-[22px] mb-10 py-[30px] max-1600:rounded-[74PX_74PX_37PX_37PX] rounded-[98PX_98PX_49PX_49PX] max-1600:max-w-[800px] max-w-[1118px] bg-[#772a2a] flex items-center justify-center mx-auto max-1600:text-[23px] text-[31px] font-semibold text-[#fff] max-1600:mt-[83px] mt-[111px]">
              СЦЕНА
            </div>
          </div>
        </div>
      </div>

      <Cart buyTicket={buyTicket} cart={cart} />
      <InfoSeances
        key={"123123"}
        name={repertoires?.name || ""}
        date={repertoiresSeanc?.date || ""}
        time={repertoiresSeanc?.time || ""}
      />
      {/*  */}
    </div>
  );
};

export default Page;
