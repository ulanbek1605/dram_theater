'use client'
import { instance } from '@/components/axios'
import React, { useState } from 'react'
import '../modalLogin.css'
function Login() {
	const [passwordShow, setPasswordShow] = useState<boolean>(false)
	const [loginData, setLoginData] = useState({
		email: null,
		password: null
	})
	const [errors, setErrors] = useState<any>({})
	/// Функция для показа пароля passwordType /// 
	const passwordType = () => {
		setPasswordShow((prev) => !prev);
	};

	/// Функция для отправки запроса на API для того что бы войти handleClick /// 
	function handleClick(e: any) {
		e.preventDefault()
		instance.post("/auth/login/", loginData)
			.then(response => {
				console.log(response);
				localStorage.setItem('TokenDram', response.data.token_key)
				window.location.replace('/profile')
			}).catch(e => {
				console.log('loginError', e);
				setErrors(e.response.data)
			})
	}

	/// Функция для установки данных и ошибок из input в state => handleChange///
	function handleChange(e: any) {
		if (getError(e.target.name))
			setErrors((prev: any) => (delete prev?.[e.target.name], prev));
		setLoginData({ ...loginData, [e.target.name]: e.target.value || null });
	}

	/// Функция для показа ошибок из state в form => getError///
	const getError = (property: any) => {
		return Array.isArray(errors?.[property])
			? errors?.[property]?.[0]
			: errors?.[property]
	};


	/// Функция который направляет на другие страницы ///
	function addNavigate(){
		window.location.replace('/register')
	}


	return (
		<div className='login.container'>
			<div className="login_inner">
				<div className="login_img">
					<img src="/img/loginimg.png" alt="" />
				</div>
				<div className="login_form">
					<form action="" className='form' onSubmit={handleClick}>
						<h3 className="form_greetings">Добро пожаловать</h3>
						<p className="form_text">
							Продолжить с Google или введите данные <br />
							для входа
						</p>
						<div className="login_input">
							<input
								className="outline-none"
								type="text"
								placeholder="Логин"
								name="email"
								onChange={handleChange}
							/>
						</div>
						{getError("email") ? <p className="error">{getError("email")}</p> : null}
						<div className="password_input">
							<input
								className="outline-none"
								type={passwordShow ? "text" : "password"}
								placeholder="Пароль"
								name="password"
								onChange={handleChange}
							/>
							<img src="/svg/eye.svg" alt="" onClick={passwordType} />
						</div>
						{getError("password") ? <p className="error">{getError("password")}</p> : null}
						{getError("massage") ? <p className="error">{getError("massage")}</p> : null}
						<div className="forgot_password">
							<span onClick={() => window.location.replace('/forgot')}>
								Забыли пароль
							</span>
						</div>
						<button type="submit" className={`entrance ${(loginData.email && loginData.password) ? 'bg-[#FFCD00] !text-[#000000]' : ''}`}>
							Войти
						</button>
						<div className="switch_to_register">
							<span>
								{" "}
								Вы еще не зарегистрировались?
								<span 
									className="registeracc"
									onClick={() => addNavigate()}
								>
									Создать аккаунт
								</span>
							</span>
						</div>
						<div className="line_flex">
							<div className="line_or"></div>
							<p>или</p>
							<div className="line_or"></div>
						</div>
						<button className="btn_google" type='button'>
							<img src="/svg/google.svg" alt="" />{" "}
							<span>Продолжить с Google</span>
						</button>
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

export default Login