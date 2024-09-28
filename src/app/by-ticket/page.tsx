"use client";
import React, { useEffect, useState } from "react";
import "../hall/[id]/index.css";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
type pageProps = {};

interface Ticket {
  id: number;
  repertoire_name: string;
  is_sold: boolean;
  seat_number: number;
  row_number: number;
  type: number;
  price: number;
}

const page: React.FC<pageProps> = () => {
  const [cart, setCart] = useState<Ticket[]>([]);
  const navigate = useRouter();

  useEffect(() => {
    if (typeof window !== "undefined") {
      const savedCart = localStorage.getItem("cart");
      if (savedCart) {
        setCart(JSON.parse(savedCart));
      }
    }
  }, []);

  const buyTicket = (item: Ticket): void => {
    setCart((prevCart) =>
      prevCart.some((elem) => elem.id === item.id)
        ? prevCart.filter((elem) => elem.id !== item.id)
        : [...prevCart, item]
    );
    localStorage.setItem(
      "cart",
      JSON.stringify(
        cart.some((elem) => elem.id === item.id)
          ? cart.filter((elem) => elem.id !== item.id)
          : [...cart, item]
      )
    );
  };

  // function isAdult(birthDate: Date): boolean {
  //   const currentDate = new Date();
  //   const age = currentDate.getFullYear() - birthDate.getFullYear();
  //   const monthDiff = currentDate.getMonth() - birthDate.getMonth();
  //   if (
  //     monthDiff < 0 ||
  //     (monthDiff === 0 && currentDate.getDate() < birthDate.getDate())
  //   ) {
  //     return age - 1 >= 18;
  //   }
  //   return age >= 18;
  // }
  const [IsActivePopUp, setIsActivePopUp] = useState(false);
  const [isLoading, setisLoading] = useState(false);
  const [isSucsess, setisSucsess] = useState(false);

  const buy = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const name = formData.get("name");
    const email = formData.get("email");

    let tiketId = cart.map((item) => {
      return { ticket: item.id };
    });

    if (!localStorage.getItem("userId")) {
      setIsActivePopUp(true);
      return;
    }

    try {
      setisLoading(true);
      await axios.post(
        `https://dramatheatre.pythonanywhere.com/api/v1/carts/`,
        {
          tickets: tiketId,

          userId: localStorage.getItem("userId"),
          name: name,
          email: email,
        }
      );
      setisSucsess(true);
    } catch (error) {
      console.error("Ошибка при отправке запроса:", error);
    } finally {
      setisLoading(false);
      localStorage.setItem("cart", "");
      setCart([]);
    }
  };

  useEffect(() => {
    if (isSucsess) setTimeout(() => navigate.push("/"), 3000);
  }, [isSucsess]);

  return (
    <>
      {IsActivePopUp ? (
        <div className="fixed  z-[98] top-0 left-0 w-screen h-screen">
          <div className="w-full h-full flex justify-center items-center relative">
            <div className="relative z-[99] z- p-8 max-w-[400px]  w-full rounded-2xl border bg-white">
              <svg
                className="absolute right-4 top-4"
                onClick={() => setIsActivePopUp(false)}
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13.6743 12.7015C13.7382 12.7654 13.7888 12.8412 13.8234 12.9246C13.858 13.0081 13.8758 13.0975 13.8758 13.1879C13.8758 13.2782 13.858 13.3677 13.8234 13.4511C13.7888 13.5346 13.7382 13.6104 13.6743 13.6743C13.6104 13.7382 13.5346 13.7888 13.4511 13.8234C13.3677 13.858 13.2782 13.8758 13.1879 13.8758C13.0975 13.8758 13.0081 13.858 12.9246 13.8234C12.8412 13.7888 12.7654 13.7382 12.7015 13.6743L7.00038 7.97234L1.29929 13.6743C1.17029 13.8033 0.99532 13.8758 0.812882 13.8758C0.630445 13.8758 0.455479 13.8033 0.326476 13.6743C0.197473 13.5453 0.125 13.3703 0.125 13.1879C0.125 13.0054 0.197473 12.8305 0.326476 12.7015L6.02843 7.00038L0.326476 1.29929C0.197473 1.17029 0.125 0.99532 0.125 0.812882C0.125 0.630445 0.197473 0.455479 0.326476 0.326476C0.455479 0.197473 0.630445 0.125 0.812882 0.125C0.99532 0.125 1.17029 0.197473 1.29929 0.326476L7.00038 6.02843L12.7015 0.326476C12.8305 0.197473 13.0054 0.125 13.1879 0.125C13.3703 0.125 13.5453 0.197473 13.6743 0.326476C13.8033 0.455479 13.8758 0.630445 13.8758 0.812882C13.8758 0.99532 13.8033 1.17029 13.6743 1.29929L7.97234 7.00038L13.6743 12.7015Z"
                  fill="#BDBDBD"
                />
              </svg>
              <div className="text-[16px text-center text-[#515151]">
                Вы должны зарегистрироваться , чтобы купить билет.
              </div>
              <Link
                className="font-medium text-[16px] max-900:max-w-full text-[#fff] py-3 mt-10 bg-[#2cc657] block text-center shadow-[inset_3px_4px_22px_0_rgba(255,255,255,0.46),inset_-6px_-6px_13px_0_rgba(0,0,0,0.1),1px_13px_15px_0_rgba(0,0,0,0.1)]"
                href="/register"
              >
                зарегистрироваться
              </Link>{" "}
            </div>
            <div className="absolute z-[98] top-0 left-0 bg-[#acacacb2] w-full h-full"></div>
          </div>
        </div>
      ) : (
        ""
      )}
      {isLoading ? (
        <div className="fixed  z-[98] top-0 left-0 w-screen h-screen">
          <div className="w-full h-full flex justify-center items-center relative">
            <div className="relative z-[99] z- p-8 max-w-[400px]  w-full rounded-2xl border bg-white">
              <img src="img/preloader.gif" alt="" />
            </div>
            <div className="absolute z-[98] top-0 left-0 bg-[#acacacb2] w-full h-full"></div>
          </div>
        </div>
      ) : (
        ""
      )}

      {isSucsess ? (
        <div className="h-screen w-screen flex-col bg-[#e8e8e8] flex items-center justify-center gap-[46px]">
          <img src="img/sucsess.png" alt="" />

          <span className="text-[32px] text-[#165a25] font-light">
            Оплата произведена успешно!
          </span>
        </div>
      ) : (
        <div className="min-h-screen bg-[#e8e8e8]">
          <div className="flex max-w-[1700px] px-4 mx-auto">
            <div className="flex-1">
              <div className="pt-5shadow-[2px_11px_18px_0_rgba(0,0,0,0.1)]">
                <div className="flex ">
                  <div className="max-w-[440px] max-600:text-[16px] text-[#8c8c8c] text-[20px] w-full flex justify-center py-3 border-b-2 border-[#9d3434]">
                    1. Выбор билетов
                  </div>
                  <div className="max-w-[440px] max-600:text-[16px] text-[#515151] text-[20px] w-full flex justify-center py-3 before-app border-b-2 border-[#9d3434]">
                    2. Контактные данные
                  </div>
                </div>
              </div>
              <div className="pt-[100px]">
                <p className="text-[20px] text-[#515151]">
                  Ваши контактные данные для получения билетов и информации по
                  заказу
                </p>
                <form onSubmit={buy} className="flex flex-col gap-10 pt-[60px]">
                  <div className="flex flex-col gap-3">
                    <label className="text-[20px] text-[#717171]" htmlFor="">
                      ИМЯ
                    </label>
                    <input
                      className="max-w-[500px] text[20px] max-900:max-w-full text-[#515151] rounded-[10px] px-[10px] py-[13px]"
                      type="text"
                      name="name"
                      placeholder="########"
                      required
                    />
                  </div>
                  {/* <div className="flex flex-col gap-3">
                <label className="text-[20px] text-[#717171]" htmlFor="">
                  ДАТА РОЖДЕНИЯ
                </label>
                <input
                  className="max-w-[500px] text[20px] max-900:max-w-full text-[#515151] rounded-[10px] px-[10px] py-[13px]"
                  type="text"
                  placeholder="**.**.****"
                  required
                />
              </div> */}
                  <div className="flex flex-col gap-3">
                    <label className="text-[20px] text-[#717171]" htmlFor="">
                      e-mail
                    </label>
                    <input
                      name="email"
                      className="max-w-[500px] text[20px] max-900:max-w-full text-[#515151] rounded-[10px] px-[10px] py-[13px]"
                      type="email"
                      required
                      placeholder="####@###.###"
                    />
                  </div>
                  <button
                    disabled={!(cart.length > 0)}
                    className={`${
                      cart.length > 0
                        ? "bg-[#2cc657]"
                        : "bg-[#b6b2b2] cursor-not-allowed"
                    } font-medium  mb-[20px] text-[20px] max-900:max-w-full text-[#fff] py-[18px] max-w-[500px]  block text-center shadow-[inset_3px_4px_22px_0_rgba(255,255,255,0.46),inset_-6px_-6px_13px_0_rgba(0,0,0,0.1),1px_13px_15px_0_rgba(0,0,0,0.1)]`}
                  >
                    Оформить заказ
                  </button>
                </form>

                <div className="hidden max-900:block pt-10">
                  <div className="flex flex-col max-h-[400px] overflow-x-hidden  overflow-y-auto gap-10">
                    {cart?.map((item) => (
                      <div
                        key={item.id}
                        className="bg-no-repeat bg-center relative"
                      >
                        <button
                          className="absolute z-50 right-[-4px] top-0"
                          onClick={() => buyTicket(item)}
                        >
                          <svg
                            width="30"
                            height="30"
                            viewBox="0 0 30 30"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <rect
                              x="0.5"
                              y="0.5"
                              width="29"
                              height="29"
                              rx="14.5"
                              fill="#EEE9E3"
                            />
                            <rect
                              x="0.5"
                              y="0.5"
                              width="29"
                              height="29"
                              rx="14.5"
                              stroke="#C7C1BA"
                            />
                            <path d="M10 10L20 20" stroke="#98948F" />
                            <path d="M20 10L10 20" stroke="#98948F" />
                          </svg>
                        </button>
                        <img
                          className="h-[94px] w-full object-cover  absolute top-0 left-0  border-y scale-y-[1.2]"
                          src="/svg/tiket.svg"
                          alt=""
                        />
                        <div className="flex justify-between relative z-10 items-center py-4 px-8">
                          <div className="flex gap-3 items-center">
                            <img src="/svg/code.svg" alt="" />
                            <div className="flex-col text-[16px] text-[#515151] flex justify-center gap-2">
                              <span>Ряд {item.row_number}</span>
                              <span>Место {item.seat_number}</span>
                            </div>
                          </div>

                          <span className="text-[20px] uppercase text-[#9d3434]">
                            {item.price} сом
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="max-600:pb-5">
                    <div className="flex justify-between text-[18px] text-[#515151] p-4">
                      <span>В корзине:</span>
                      <span>
                        {cart.length > 1
                          ? `${cart.length} билетов`
                          : `${cart.length} билет`}
                      </span>
                    </div>
                    <div className="flex justify-between text-[18px] pt-[15px] pb-[20px] text-[#515151] p-4">
                      <span>Всего к опaлате::</span>
                      <span>
                        {cart.reduce((accum, item) => {
                          return accum + item.price;
                        }, 0)}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className={`w-[420px] max-900:hidden z-10 h-[98vh] max-600:bg-[#e8e8e8]  flex flex-col`}
            >
              <h4 className="text-[22px] text-[#515151] mt-8 font-medium max-600:pl-4">
                Ваши билеты
              </h4>
              <div className="px-2 flex flex-col mt-2 relative shadow-[2px_11px_18px_0_rgba(0,01,0,0.1)] bg-[#e8e8e8] w-full max-600:pt-20 flex-1 pt-[30px]">
                {cart.length > 0 ? (
                  <>
                    <div className="max-h-[calc(80vh-187px-99px)] overflow-y-auto asd">
                      {cart?.map((item) => (
                        <div
                          key={item.id}
                          className="bg-no-repeat bg-cover bg-center relative"
                        >
                          <button
                            className="absolute z-50 right-[-4px] top-0"
                            onClick={() => buyTicket(item)}
                          >
                            <svg
                              width="30"
                              height="30"
                              viewBox="0 0 30 30"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <rect
                                x="0.5"
                                y="0.5"
                                width="29"
                                height="29"
                                rx="14.5"
                                fill="#EEE9E3"
                              />
                              <rect
                                x="0.5"
                                y="0.5"
                                width="29"
                                height="29"
                                rx="14.5"
                                stroke="#C7C1BA"
                              />
                              <path d="M10 10L20 20" stroke="#98948F" />
                              <path d="M20 10L10 20" stroke="#98948F" />
                            </svg>
                          </button>
                          <img
                            className="h-[94px] w-full absolute top-0 left-0 scale-y-[1.2]"
                            src="/svg/tiket.svg"
                            alt=""
                          />
                          <div className="flex justify-between relative z-10 items-center py-4 px-8">
                            <div className="flex gap-3 items-center">
                              <img src="/svg/code.svg" alt="" />
                              <div className="flex-col text-[16px] text-[#515151] flex justify-center gap-2">
                                <span>Ряд {item.row_number}</span>
                                <span>Место {item.seat_number}</span>
                              </div>
                            </div>

                            <span className="text-[20px] uppercase text-[#9d3434]">
                              {item.price} сом
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="flex-1"></div>
                    <div className="max-600:pb-5">
                      <div className="flex justify-between text-[18px] text-[#515151] p-4">
                        <span>В корзине:</span>
                        <span>
                          {cart.length > 1
                            ? `${cart.length} билетов`
                            : `${cart.length} билет`}
                        </span>
                      </div>
                      <div className="flex justify-between text-[18px] pt-[15px] pb-[20px] text-[#515151] p-4">
                        <span>Всего к опaлате::</span>
                        <span>
                          {cart.reduce((accum, item) => {
                            return accum + item.price;
                          }, 0)}
                        </span>
                      </div>
                    </div>
                  </>
                ) : (
                  <h4 className="text-center pt-[50px] text-[36px] text-[#515151] font-medium">
                    Пусто
                  </h4>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
export default page;
