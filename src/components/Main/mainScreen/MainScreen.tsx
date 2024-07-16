"use client";
import React from "react";
import Link from "next/link";
import "./mainScreen.css";
import { SwiperSlide, Swiper } from "swiper/react";
import "swiper/css";
import Image from "next/image";
import { Autoplay } from "swiper/modules";
import { ButtonYellow } from "@/components/UI/Button";
import { usePathname } from "next/navigation";
function MainScreen() {
    const pathname = usePathname();

    if( pathname == "/detailed" ) return ""
    return (
        <div className={pathname === '/login'|| pathname === '/register' || pathname === '/reset-password' || pathname === '/hall' ? 'hidden' : 'main'}>
            <div className="main__container relative">
                <Swiper
                    spaceBetween={0}
                    slidesPerView={1}
                    modules={[Autoplay]}
                    autoplay={{
                        delay: 2000,
                    }}
                    speed={1000}
                >
                    <SwiperSlide>
                        <div className={"block"}>
                            <Image src={"/img/main1.png"} layout="fill" alt="img" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className={"block"}>
                            <Image src={"/img/main2.png"} layout="fill" alt="img" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className={"block"}>
                            <Image src={"/img/main2.png"} layout="fill" alt="img" />
                        </div>
                    </SwiperSlide>
                </Swiper>
                <div className="main__info bg-opacity-80 bg-black">
                    <div className="main_info_left">
                        <h3>Название</h3>
                        <div className="main_info_text">
                            <p className="">
                                Жанр: опера-балет, опера-сериа, лирическая трагедия
                            </p>
                            <p className="">
                                Efficitur sapien accumsan in ornare dictum. Et in in
                                ornare arcu mollis mollis molestie vestibulum interdum
                                dictumst. Efficitur sapien accumsan in ornare dictum. Et
                                in in ornare arcu.
                            </p>
                        </div>
                    </div>
                    <div className="main_info_right">
                        <div className="info">
                            <div className="main_right-info">
                                <Image
                                    src={"/svg/calendar.svg"}
                                    width={28}
                                    height={28}
                                    alt="img"
                                    className="img-custom"
                                />
                                <span className="text-custom">24-марта</span>
                            </div>

                            <div className="main_right-info">
                                <Image
                                    src={"/svg/price.svg"}
                                    width={28}
                                    height={28}
                                    alt="img"
                                    className="img-custom"
                                />
                                <span className="text-custom">300-700 сом</span>
                            </div>
                            <div className="main_right-info">
                                <Image
                                    src={"/svg/calendar.svg"}
                                    width={28}
                                    height={28}
                                    alt="img"
                                    className="img-custom"
                                />
                                <span className="text-custom">Среда, 18:00</span>
                            </div>
                        </div>
                        <div className="main_info_btn">
                            <div className="main_info_btn w-[239px] h-[80px]">
                                <ButtonYellow className="btn-custom text-black bg-yellow-500 hover:bg-yellow-400">
                                    Купить билеты
                                </ButtonYellow>
                            </div>
                            <div className="details">
                                <Link href="">Подробнее</Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="main__info-mobile bg-opacity-80 bg-black">
                    <div className="main__info-mobile-inner">
                        <h3>Название</h3>
                        <div className="main_info-data">
                            <div className="main_right-info">
                                <Image
                                    src={"/svg/calendar.svg"}
                                    width={28}
                                    height={28}
                                    alt="img"
                                    className="img-custom"
                                />
                                <span className="text-custom">24-марта</span>
                            </div>

                            <div className="main_right-info">
                                <Image
                                    src={"/svg/calendar.svg"}
                                    width={28}
                                    height={28}
                                    alt="img"
                                    className="img-custom"
                                />
                                <span className="text-custom">Среда, 18:00</span>
                            </div>
                        </div>
                        <div className="main_info_btn w-[239px] h-[80px]">
                            <ButtonYellow className="btn-custom text-20 text-black bg-yellow-500 hover:bg-yellow-400">
                                От 300сом Купить билеты
                            </ButtonYellow>
                        </div>
                        <div className="details-mobile">
                            <Link href="">Подробнее</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MainScreen;
