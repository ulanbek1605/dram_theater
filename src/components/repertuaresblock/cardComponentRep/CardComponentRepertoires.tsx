import React from 'react'
import './cardComponentRepertoires.css'
import { ButtonYellow } from '@/components/UI/Button'
import Link from 'next/link'


interface CardProps {
    name: string
    description: string
    image: string
    data: string
    time: string
    id: number
    price: string | undefined
}


const months = [
    "января",
    "февраля",
    "марта",
    "апреля",
    "мая",
    "июня",
    "июля",
    "августа",
    "сентября",
    "октября",
    "ноября",
    "декабря"
];
const weekDays = [
    "воскресенье",
    "понедельник",
    "вторник",
    "среда",
    "четверг",
    "пятница",
    "суббота"
]
function CardComponentRepertoires({ name, description, image, data, time, price ,id}: CardProps) {

    const date = new Date(data);
    const day = date.getDate();
    const monthIndex = date.getMonth();
    const weekIndex = date.getDay()
    const formattedDate = `${day}-${months[monthIndex]}`;
    const formattedTime = `${weekDays[weekIndex]}, ${time}`


  return (
	  <div className="card_componentRep">
            <img className="card_img_rep" src={image}alt="" />
            <div className="card_info_rep">
                <div className="card_inforep_title">
                    <h3>{name}</h3>
                    <div className="card_inforep_text">
                        <p className="text-base">
                            Жанр: опера-балет, опера-сериа, лирическая трагедия
                        </p>
                        <p className="text-base opacity-80">
                          {description}
                        </p>
                    </div>
                </div>
                <div className="card_inforep_inner">
                    <div className="card_inforep_date">
                        <div className="card_inforep-info">
                            <img
                                src={"/svg/calendar.svg"}
                                alt="img"
                            />
                            <span>{formattedDate}</span>
                        </div>
                        <div className="card_inforep-info">
                            <img
                                src={"/svg/price.svg"}
                                alt="img"
                            />
                            <span>{price} сом</span>
                        </div>
                        <div className="card_inforep-info">
                            <img
                                src={"/svg/calendar.svg"}
                                alt="img"
                            />
                            <span>{formattedTime}</span>
                        </div>
                    </div>
                    <div className="card_inforep_btn">
                        <div className="card_btn_container w-[239px] h-[80px]">
                            <ButtonYellow className="text-black bg-yellow-500 ">
                                Купить билеты
                            </ButtonYellow>
                        </div>
                        <div className="cardrep_details">
                            <Link href={`/detailed/${id}`}>Подробнее</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default CardComponentRepertoires