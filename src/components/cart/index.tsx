import Link from "next/link";
import React, { useEffect, useState } from "react";

interface Ticket {
  id: number;
  repertoire_name: string;
  is_sold: boolean;
  seat_number: number;
  row_number: number;
  type: number;
  price: number;
}

interface CartProps {
  cart: Ticket[];
  buyTicket: Function;
}

const Cart: React.FC<CartProps> = ({ cart, buyTicket }) => {
  const [IsActivePopUp, setIsActivePopUp] = useState(false);
  useEffect(() => localStorage.setItem("cart", JSON.stringify(cart)), []);

  return (
    <div
      className={`${
        !IsActivePopUp ? "translate-x-[100%]" : "translate-x-0"
      } transition-[.7s] fixed  max-w-[420px] z-10 max-600:max-w-full w-full right-0 top-[18vh] max-600:bg-[#e8e8e8] h-[80vh] max-600:top-[20vh] max-600:h-[calc(80vh)] flex flex-col`}
    >
      <h4 className="text-[22px] text-[#515151] mt-8 font-medium max-600:pl-4">
        Ваши билеты
      </h4>
      <div className="px-2 flex flex-col mt-2 relative shadow-[2px_11px_18px_0_rgba(0,01,0,0.1)] bg-[#e8e8e8] w-full max-600:pt-20 flex-1 pt-[30px]">
        <button
          onClick={() => setIsActivePopUp(!IsActivePopUp)}
          className={`border absolute left-[-45px]  top-0 bg-white border-[#b8b8b8] w-[35px] h-[35px] flex items-center justify-center rounded-[8px] shadow-[2px_11px_8px_0_rgba(0,0,0,0)]
            ${
              !IsActivePopUp
                ? "rotate-180 max-600:left-[-45px]"
                : "rotate-0 max-600:left-[20px]"
            }`}
        >
          <svg
            className="scale-50"
            width="30"
            height="31"
            viewBox="0 0 30 31"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12.1465 25.6365L21.8627 15.669C22.0334 15.494 22.1289 15.2592 22.1289 15.0147C22.1289 14.7702 22.0334 14.5354 21.8627 14.3603L12.1465 4.38905C12.067 4.30741 11.972 4.24251 11.867 4.19821C11.762 4.1539 11.6492 4.13107 11.5352 4.13107C11.4213 4.13107 11.3085 4.1539 11.2035 4.19821C11.0985 4.24251 11.0035 4.30741 10.924 4.38905C10.7605 4.55648 10.6689 4.78125 10.6689 5.0153C10.6689 5.24935 10.7605 5.47412 10.924 5.64155L20.0609 15.0147L10.924 24.3859C10.761 24.5533 10.6698 24.7776 10.6698 25.0112C10.6698 25.2448 10.761 25.4692 10.924 25.6365C11.0035 25.7182 11.0985 25.7831 11.2035 25.8274C11.3085 25.8717 11.4213 25.8945 11.5352 25.8945C11.6492 25.8945 11.762 25.8717 11.867 25.8274C11.972 25.7831 12.067 25.7182 12.1465 25.6365Z"
              fill="#515151"
            />
          </svg>
        </button>
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
                    onClick={() => {
                      buyTicket(item);
                      console.log("====================================");
                      console.log(131312313);
                      console.log("====================================");
                    }}
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
                    className="h-[94px] w-full absolute top-0 left-0  border-y scale-y-[1.2]"
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
              <Link
                href={"/by-ticket"}
                className="font-medium mb-[20px] text-[20px] text-[#fff] py-[18px] w-full bg-[#2cc657] block text-center shadow-[inset_3px_4px_22px_0_rgba(255,255,255,0.46),inset_-6px_-6px_13px_0_rgba(0,0,0,0.1),1px_13px_15px_0_rgba(0,0,0,0.1)]"
              >
                Оформить заказ
              </Link>
            </div>
          </>
        ) : (
          <h4 className="text-center pt-[50px] text-[36px] text-[#515151] font-medium">
            Пусто
          </h4>
        )}
      </div>
    </div>
  );
};

export default Cart;
