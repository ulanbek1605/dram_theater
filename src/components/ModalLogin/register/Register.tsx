'use client'
import React, { useState } from 'react'
import { instance } from '@/components/axios'
import '../modalLogin.css'
function Register() {
  const [passwordShowOne, setPasswordShowOne] = useState(false)
  const [passwordShowTwo, setPasswordShowTwo] = useState(false)
  const [creationErrors, setCreationErrors] = useState<any>({})
  const [create, setCreate] = useState({
    email: null,
    first_name: null,
    password: null,
    confirmPassword: null
  })
  const passwordTypeOne = () => {
    setPasswordShowOne((prev) => !prev);
  };
  const passwordTypeTwo = () => {
    setPasswordShowTwo((prev) => !prev);
  };

  const getCreateError = (property: any) => {
    return Array.isArray(creationErrors?.[property])
      ? creationErrors?.[property]?.[0]
      : creationErrors?.[property]
  };

  const handleSubmitCreate = (e: any) => {
    e.preventDefault()
    if(create.confirmPassword != create.password){
      return setCreationErrors({password:'Пароли не совподают!'})
    }
    let {confirmPassword, ...createData} = create
    instance
      .post("/auth/register/", createData)
      .then((response) => {
        console.log(response);
        if (response.status == 200) {
          window.location.replace('/profile')
        }
      })
      .catch((error) => {
        setCreationErrors(error.response.data);
      });

  }



  const handleChangeCreate = (e: any) => {
    if (getCreateError(e.target.name))
      setCreationErrors((prev: any) => (delete prev?.[e.target.name], prev));
    setCreate({ ...create, [e.target.name]: e.target.value || null });
  }

/// Функция который направляет на другие страницы ///
function addNavigate(){
  window.location.replace('/login')
}
  return (
    <div className='login.container'>
      <div className="login_inner">
        <div className="login_img">
          <img src="/img/loginimg.png" alt="" />
        </div>
        <div className="login_form">
          <form className="form" onSubmit={handleSubmitCreate}>
            <h3 className="form_greetings">Добро пожаловать</h3>
            <p className="form_text">
              Введите данные, чтобы создать учетную запись
            </p>
            <div className="name_input">
              <input className="outline-none" type="text" placeholder="Имя" name="first_name" onChange={handleChangeCreate} />
            </div>
            {getCreateError("first_name") ? <p className="error">{getCreateError("first_name")}</p> : null}

            <div className="login_input">
              <input
                className="outline-none"
                type="text"
                placeholder="Емаил"
                name="email"
                onChange={handleChangeCreate}
              />
            </div>
            {getCreateError("email") ? <p className="error">{getCreateError("email")}</p> : null}
            <div className="password_input">
              <input
                className="outline-none"
                type={passwordShowOne ? "text" : "password"}
                placeholder="Пароль"
                name="password"
                onChange={handleChangeCreate}
              />
              <img src="/svg/eye.svg" alt="" onClick={passwordTypeOne} />
            </div>
            {getCreateError("password") ? <p className="error">{getCreateError("password")}</p> : null}
            <div className="password_input">
              <input
                className="outline-none"
                name="confirmPassword"
                type={passwordShowTwo ? "text" : "password"}
                placeholder="Пароль"
                onChange={handleChangeCreate}

              />
              <img src="/svg/eye.svg" alt="" onClick={passwordTypeTwo} />
            </div>
            {getCreateError("password") ? <p className="error">{getCreateError("password")}</p> : null}
            <div className="forgot_password">
              <span onClick={() => { }}>
                Забыли пароль
              </span>
            </div>
            <button className="entrance registerBtnStyle" type="submit">Зарегистрироваться</button>

            <div className="line_flex">
              <div className="line_or"></div>
              <p>или</p>
              <div className="line_or"></div>
            </div>
            <button className="btn_google">
              <img src="/svg/google.svg" alt="" />{" "}
              <span>Продолжить с Google</span>
            </button>
            <div className="switch_to_register">
              <span>
                {" "}
                У вас уже есть аккаунт?
                <span
                  className="registeracc"
                  onClick={() => addNavigate()}
                >
                  Войти в аккаунт
                </span>
              </span>
            </div>
          </form>
        </div>

      </div>
      <div className="curtain">
        <div className="curtain_left"></div>
        <div className="curtain_right"></div>
      </div>
    </div>
  )
}

export default Register