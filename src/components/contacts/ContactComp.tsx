import React from "react";
import "./contactComp.css";
function Contactscomponent() {
  return (
    <div className="contacts">
      <div className="container">
        <div className="contacts_title">
          <h2>Контакты</h2>
        </div>
        <div className="contacts_info">
          <div className="contacts_details">
            <div className="contacts_details_connection">
              <span>Свяжитесь с нами</span>
              <a type="tel" href="tel: +996778888888">
                +996 778 888 888
              </a>
              <a type="email" href="kyrgyzdram@theater.kg">
                kyrgyzdram@theater.kg
              </a>
            </div>
            <div className="contacts_details_time">
              <span>Мы открыты</span>
              <p>ПН - ВС: 09:00-18:00</p>
            </div>
            <div className="contacts_details_address">
              <span>Мы находимся</span>
              <p>
                ​улица Ленина, 243​ <br />
                Курманжан датка, 162​ <br />
                Ош
              </p>
            </div>
          </div>
          <div className="contacts_map">
            <div className="contacts_map_iframe">
              <iframe
                className="map_contacts"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9923.36336961447!2d72.78608156196317!3d40.5198917065817!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38bdadb74c2200d5%3A0xe605283782feea14!2z0JTRgNCw0LzQsCDRgtC10LDRgtGA!5e0!3m2!1sru!2skg!4v1707984498789!5m2!1sru!2skg"
                width="100%"
                height="100%"
                referrerPolicy="no-referrer-when-downgrade"
                sandbox="allow-scripts allow-same-origin"
              ></iframe>
              {/* <div className="text-around-map"> ПОСЕТИТЕ НАС/ПОСЕТИТЕ НАС</div> */}
            </div>
            <div className="contacts_map_a"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contactscomponent;
