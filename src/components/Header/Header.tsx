'use client'
import React, { useEffect, useState } from "react";
import { ButtonYellow, ButtonGray } from "../UI/Button";
import Link from "next/link";
import { usePathname } from 'next/navigation';
import "./header.css";
import { instance } from "../axios";
function Header() {
    const [menu, setMenu] = useState(false)
    const [token, setToken] = useState(false)
    const pathname = usePathname();
    console.log(pathname)
    function showBurgerMenu(e: any) {
        e.preventDefault()
        setMenu(!menu)
    }

    return (
        <div className={`${pathname === '/login' || pathname === '/register' || pathname === '/reset-password' || pathname === '/hall' ? 'hidden' : "headers"} z-[51] relative`}>
            <div className="header">
                <div className="container">
                    <div className="header__inner">
                        <div className="header__logo">Logo</div>
                        <div className="header__nav">
                            <div className="nav__link">
                                <Link className={pathname === '/' ? 'active' : ''} href="/">Афиша</Link>
                                <Link className={pathname === '/repertuares' ? 'active' : ''} href="/repertuares">Репертуары</Link>
                                <Link className={pathname === '/news' ? 'active' : ''} href="/news">Новости</Link>
                                <Link className={pathname === '/gallery' ? 'active' : ''} href="/gallery">Галерея</Link>
                                <Link className={pathname === '/about' ? 'active' : ''} href="/about">О театре</Link>
                                <Link className={pathname === '/contact' ? 'active' : ''} href="/contact">Контакты</Link>
                            </div>
                            <div className="header__btns">
                                <div>
                                    <svg
                                        className="hover:stroke-red-700 cursor-pointer"
                                        width="30.000000"
                                        height="30.000000"
                                        viewBox="0 0 30 30"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <defs>
                                            <clipPath id="clip5_36595">
                                                <rect
                                                    id="Linear / Search / Magnifer"
                                                    width="30.000000"
                                                    height="30.000000"
                                                    fill="white"
                                                    fill-opacity="0"
                                                />
                                            </clipPath>
                                        </defs>
                                        <g clip-path="url(#clip5_36595)">
                                            <circle
                                                id="Vector"
                                                cx="14.375000"
                                                cy="14.375000"
                                                r="11.875000"
                                                stroke="#515151"
                                                stroke-opacity="1.000000"
                                                stroke-width="1.500000"
                                            />
                                            <path
                                                id="Vector"
                                                d="M23.125 23.125L27.5 27.5"
                                                stroke="#515151"
                                                stroke-opacity="1.000000"
                                                stroke-width="1.500000"
                                                stroke-linecap="round"
                                            />
                                        </g>
                                    </svg>
                                </div>
                                <Link href={token === false ? '/login' : '/profile'}>
                                    <svg
                                        width="30.000000"
                                        height="30.000000"
                                        viewBox="0 0 30 30"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                        xmlnsXlink="http://www.w3.org/1999/xlink"
                                    >
                                        <defs>
                                            <clipPath id="clip5_36599">
                                                <rect
                                                    id="Linear / Users / User Circle"
                                                    width="30.000000"
                                                    height="30.000000"
                                                    fill="white"
                                                    fill-opacity="0"
                                                />
                                            </clipPath>
                                        </defs>
                                        <g clip-path="url(#clip5_36599)">
                                            <circle
                                                id="Vector"
                                                cx="15.000000"
                                                cy="11.250000"
                                                r="3.750000"
                                                stroke="#515151"
                                                stroke-opacity="1.000000"
                                                stroke-width="1.500000"
                                            />
                                            <circle
                                                id="Vector"
                                                cx="15.000000"
                                                cy="15.000000"
                                                r="12.500000"
                                                stroke="#515151"
                                                stroke-opacity="1.000000"
                                                stroke-width="1.500000"
                                            />
                                            <path
                                                id="Vector"
                                                d="M22.4629 25C22.2637 21.3828 21.1562 18.75 15 18.75C8.84375 18.75 7.73828 21.3828 7.53906 25"
                                                stroke="#515151"
                                                stroke-opacity="1.000000"
                                                stroke-width="1.500000"
                                                stroke-linecap="round"
                                            />
                                        </g>
                                    </svg>
                                </Link>
                                <div className="w-[201px] h-[43px] ml-1 rounded-md">
                                    <ButtonYellow className='rounded-md text-gray-600 hover:bg-yellow-400'>Купить билеты</ButtonYellow>
                                </div>

                            </div>
                            <div className="burger-menu" >
                                <img src={"/svg/burgerMenu.svg"} alt="" onClick={showBurgerMenu} />
                                {<div className={`window_burger-menu ${menu ? 'open' : ''}`}>
                                    <div className="window_burger-menu-head">
                                        <div className="window_logo">Logo</div>
                                        <div className="close_menu"><img onClick={showBurgerMenu} src={"/svg/close.svg"} alt="" /></div></div>
                                    <div className="window_burger-menu-btns">
                                        <div className="w-[291px] h-[48px] rounded-6 mx-auto" onClick={()=>{window.location.replace('/login')}}>
                                            <ButtonGray >Войти</ButtonGray>
                                        </div>
                                        <div className="w-[291px] h-[48px] rounded-6 mx-auto" >
                                            <ButtonGray>Зарегистрироваться</ButtonGray>
                                        </div>
                                    </div>
                                    <nav className="modal_burger-menu-nav">
                                        <Link className={pathname === '/' ? 'active' : ''} href="/" >Афиша</Link>
                                        <Link className={pathname === '/repertuares' ? 'active' : ''} href="/repertuares">Репертуары</Link>
                                        <Link className={pathname === '/news' ? 'active' : ''} href="/news">Новости</Link>
                                        <Link className={pathname === '/gallery' ? 'active' : ''} href="/gallery">Галерея</Link>
                                        <Link className={pathname === '/about' ? 'active' : ''} href="/about">О театре</Link>
                                        <Link className={pathname === '/contact' ? 'active' : ''} href="/contact">Контакты</Link>
                                    </nav>
                                    <div className="window_burger-menu-btns mx-auto">
                                        <div className="w-[291px] h-[48px] rounded-md mx-auto">
                                            <ButtonYellow className='rounded-md text-gray-600 hover:bg-yellow-400 mx-auto'>Купить билеты</ButtonYellow>
                                        </div>
                                    </div>
                                </div>}
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;
