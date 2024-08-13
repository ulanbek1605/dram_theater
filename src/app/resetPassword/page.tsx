'use client'
import React,{ useState } from "react";
import "./resetpass.css";
function ResetPassword() {
    const [passwordShowOne, setPasswordShowOne] = useState<boolean>(false);
    const [passwordShowTwo, setPasswordShowTwo] = useState<boolean>(false);

    const passwordTypeOne = () => {
        setPasswordShowOne((prev) => !prev);
      };
      const passwordTypeTwo = () => {
        setPasswordShowTwo((prev) => !prev);
      };
    
  return (
    <div>
      <div className="reset_password-container">
        <div className="reset_password_inner">
          <div className="reset_password_img">
            <img src="/img/loginimg.png" alt="" />
          </div>
          <div className="reset_password_form">
          <form className="form">
              <h3 className="form_greetings">Сброс пароля</h3>
              <p className="form_text">
                Введите новый пароль для доступа <br />к учетной записи
              </p>
              <div className="password_input">
                <input
                  className="outline-none"
                  type={passwordShowOne ? "text" : "password"}
                  placeholder="Пароль"
                />
                <img src="/svg/eye.svg" alt="" onClick={passwordTypeOne} />
              </div>
              <div className="password_input">
                <input
                  className="outline-none"
                  type={passwordShowTwo ? "text" : "password"}
                  placeholder="Пароль"
                />
                <img src="/svg/eye.svg" alt="" onClick={passwordTypeTwo} />
              </div>
              <div className="error_text_block">
                <span className="error_text">Неправильно введен код</span>
              </div>
              <button className="entrance_forgot" onClick={() => {}}>
                Готово
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ResetPassword;
