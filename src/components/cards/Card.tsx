'use client'
import React, { useState } from 'react';
import "./card.css";
import Image from "next/image";
import Link from "next/link";
import { ButtonYellow } from '@/components/UI/Button';

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
function Card({ name, description, image, data, time, price, id }: CardProps) {
    const date = new Date(data);
    const day = date.getDate();
    const monthIndex = date.getMonth();
    const weekIndex = date.getDay()
    const formattedDate = `${day}-${months[monthIndex]}`;
    const formattedTime = `${weekDays[weekIndex]}, ${time}`
    return (
        <div className="card_component">
            <img className="card_img object-cover" src={image} alt="" />
            <div className="card_info">
                <div className="card_info_title">
                    <h3>{name}</h3>
                    <div className="card_info_text">
                        <p className="text-base">
                            Жанр: опера-балет, опера-сериа, лирическая трагедия
                        </p>
                        <p className="text-base opacity-80">
                            {description}
                        </p>
                    </div>
                </div>
                <div className="card_info_inner">
                    <div className="card_info_date">
                        <div className="card_info-info">
                            <Image
                                src={"/svg/calendar.svg"}
                                width={28}
                                height={28}
                                alt="img"
                            />
                            <span>{formattedDate}</span>
                        </div>
                        <div className="card_info-info">
                            <Image
                                src={"/svg/price.svg"}
                                width={28}
                                height={28}
                                alt="img"
                            />
                            <span>{price} сом</span>
                        </div>
                        <div className="card_info-info">
                            <Image
                                src={"/svg/calendar.svg"}
                                width={28}
                                height={28}
                                alt="img"
                            />
                            <span>{formattedTime}</span>
                        </div>
                    </div>
                    <div className="card_info_btn">
                        <div className="card_btn_container w-[239px] h-[80px]">
                            <ButtonYellow className="text-black bg-yellow-500 ">
                                Купить билеты
                            </ButtonYellow>
                        </div>
                        <div className="card_details">
                            <Link href={`/detailed/${id}`}>Подробнее</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card