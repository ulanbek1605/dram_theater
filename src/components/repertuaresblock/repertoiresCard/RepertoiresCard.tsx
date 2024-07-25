import React, { useState } from "react";
import "./repertoiresCard.css";
import { ButtonBrown, ButtonGray, ButtonOutline, ButtonYellow } from "@/components/UI/Button";
function Repertoirescard(props: any) {
  const { name, description, image, data, time, price ,id} = props;
  console.log(props);

  return (
    <div className="repertoirescard">
      <div className="repertoirescard_container">
        <div className="repertuar_card_left">
          <div className="repertuar_card_left_title">{name}</div>
          <p className="description">описание:</p>
          <p className="description-content">{description}</p>
          <div className="btn_container">
            <div className="btn_card_repert" onClick={() => window.location.replace(`/detailed/${id}`)}>
              <ButtonOutline>Далее</ButtonOutline>
            </div>
          </div>
        </div>
        <div className="card_center">
          <img src={image} alt="img" />
        </div>
        <div className="card_right">
          <div className="card_right_info">
            <div>
              <div className="repert_date">Дата</div>
              <div className="repert_time">
                <p>{data}</p>
                <p>{time}</p>
              </div>
            </div>
            <div className="repert_card_price">

              <p className="price_title">Цена</p>
              <p className="repert_price">{price}c</p>
            </div>
          </div>
          <div className="btn_right_card">
            <ButtonOutline>Купить билеты</ButtonOutline>
          </div>
          <div className="btn_right_card_yellow">
            <ButtonYellow>Купить билеты</ButtonYellow>
          </div>
          <div className="btn_right_gray">
            <ButtonBrown>Подробнее</ButtonBrown>
          </div>
        </div>
      </div>
    </div>

  );
}

export default Repertoirescard;
