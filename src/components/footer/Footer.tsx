'use client'
import React from "react";
import "./footer.css";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

function Footer() {
  const pathname = usePathname();
  return (
    <div className={pathname === '/login'|| pathname === '/register' || pathname === '/reset-password' || pathname === '/hall' ? 'hidden' : 'footer'}>
      <div className="footer_info">
        <div className={pathname === '/contacts' ? 'footer-container' : 'footer_container'}>
          <div className="footer_info_logo">LOGO</div>
          <div className="footer_info_data">
            <p className="name">
              Национальный драматический <br /> театр им. С. Ибраимова
            </p>
            <p className="phone">+996 778 888 888</p>
            <p className="email">kyrgyzdram@theater.kg</p>
          </div>
          <div className='footer_info_nav'>
            <nav>
              <Link href="">Афиша</Link>
              <Link href="">Репертуары</Link>
              <Link href="">О театре</Link>
            </nav>
            <nav>
              <Link href="">Новости</Link>
              <Link href="">Контакты</Link>
              <Link href="">Профиль</Link>
            </nav>
          </div>
        </div>
        <div className={pathname === '/contacts' ? 'footer-bottom' : 'footer_bottom'}>
          <span>©Prolab@gmail.com</span>
          <span>Privacy Policy | Terms & Conditions</span>
        </div>
      </div>
      <div className={pathname === '/contacts' ? 'hidden' : 'footer_map'}>
        <iframe
          className="map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9923.36336961447!2d72.78608156196317!3d40.5198917065817!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38bdadb74c2200d5%3A0xe605283782feea14!2z0JTRgNCw0LzQsCDRgtC10LDRgtGA!5e0!3m2!1sru!2skg!4v1707984498789!5m2!1sru!2skg"
          width="100%"
          height="100%"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <div className="footer_bottom_mobile">
        <span>©Prolab@gmail.com</span>
        <span>Privacy Policy | Terms & Conditions</span>
      </div>
    </div>
  );
}

export default Footer;

