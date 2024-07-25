'use client'
import React, { useState } from 'react'
import './profilePages.css'
const history = [
	{
		id: 1,
		name: 'Название',
		img: '/img/cardHistory.png',
		row: "15",
		space: "30",
		cost: '700',
		date: '2024-06-05T18:00:00.000',
		description: 'В профессиональной сфере часто случается так, что личные или корпоративные клиенты заказывают, чтобы публикация'
	},
	{
		id: 2,
		name: 'Название',
		img: '/img/cardHistory.png',
		row: "15",
		space: "30",
		cost: '700',
		date: '2024-06-05T18:00:00.000',
		description: 'В профессиональной сфере часто случается так, что личные или корпоративные клиенты заказывают, чтобы публикация'
	},
	{
		id: 3,
		name: 'Название',
		img: '/img/cardHistory.png',
		row: "15",
		space: "30",
		cost: '700',
		date: '2024-06-05T18:00:00.000',
		description: 'В профессиональной сфере часто случается так, что личные или корпоративные клиенты заказывают, чтобы публикация'
	},
	{
		id: 4,
		name: 'Название',
		img: '/img/cardHistory.png',
		row: "15",
		space: "30",
		cost: '700',
		date: '2024-06-05T18:00:00.000',
		description: 'В профессиональной сфере часто случается так, что личные или корпоративные клиенты заказывают, чтобы публикация'
	},
	{
		id: 5,
		name: 'Название',
		img: '/img/cardHistory.png',
		row: "15",
		space: "30",
		cost: '700',
		date: '2024-06-05T18:00:00.000',
		description: 'В профессиональной сфере часто случается так, что личные или корпоративные клиенты заказывают, чтобы публикация'
	},
	{
		id: 6,
		name: 'Название',
		img: '/img/cardHistory.png',
		row: "15",
		space: "30",
		cost: '700',
		date: '2024-06-05T18:00:00.000',
		description: 'В профессиональной сфере часто случается так, что личные или корпоративные клиенты заказывают, чтобы публикация'
	},
	{
		id: 7,
		name: 'Название',
		img: '/img/cardHistory.png',
		row: "15",
		space: "30",
		cost: '700',
		date: '2024-06-05T18:00:00.000',
		description: 'В профессиональной сфере часто случается так, что личные или корпоративные клиенты заказывают, чтобы публикация'
	},
	{
		id: 8,
		name: 'Название',
		img: '/img/cardHistory.png',
		row: "15",
		space: "30",
		cost: '700',
		date: '2024-06-05T18:00:00.000',
		description: 'В профессиональной сфере часто случается так, что личные или корпоративные клиенты заказывают, чтобы публикация'
	},
	{
		id: 9,
		name: 'Название',
		img: '/img/cardHistory.png',
		row: "15",
		space: "30",
		cost: '700',
		date: '2024-06-05T18:00:00.000',
		description: 'В профессиональной сфере часто случается так, что личные или корпоративные клиенты заказывают, чтобы публикация'
	},
	{
		id: 10,
		name: 'Название',
		img: '/img/cardHistory.png',
		row: "15",
		space: "30",
		cost: '700',
		date: '2024-06-05T18:00:00.000',
		description: 'В профессиональной сфере часто случается так, что личные или корпоративные клиенты заказывают, чтобы публикация'
	},
]
function ProfilePages() {
	const [passwordShowOne, setPasswordShowOne] = useState(false)
	const [passwordShowTwo, setPasswordShowTwo] = useState(false)
	const [changePin, setChangePin] = useState<any>(false)
	function handleOpen(e: any) {
		e.preventDefault()
		setChangePin(true)
	}


	const passwordTypeOne = () => {
		setPasswordShowOne((prev) => !prev);
	  };
	
	  const passwordTypeTwo = () => {
		setPasswordShowTwo((prev) => !prev);
	  };
	// Функция для того что бы выйти из аккаунта ///
	function logout(e: React.MouseEvent<HTMLButtonElement>) {
		e.preventDefault();
		localStorage.removeItem('TokenDram');
		window.location.reload();
		window.location.replace('/')
	}
	return (
		<div className='container-profile'>
			<h2 className="profile_title">Профиль</h2>
			<div className='profile_flex'>
				<div className="profile_flex-left">
					<div className='profile-info'>
						<div className='profile-data'>
							<div className='profile_name'>
								<p className='profileTitle'>Имя:</p>
								<p className='profileInfo'>ProlabAcademy</p>
							</div>
							<div className='profile_name'>
								<p className='profileTitle'>E-mail:</p>
								<p className='profileInfo'>prolabacademy.com</p>
							</div>
							{/* <div className='profile_name'>
								<p className='profileTitle'>Номер телефона:</p>
								<p className='profileInfo'>+996550112233</p>
							</div> */}
						</div>
						{changePin && <div className='profile-pin'>
							<div className='profile_name'>
								<p className='profileTitle'>Старый пароль:</p>
								<div className="password_input_change">
									<input
										className="outline-none"
										type={passwordShowOne ? "text" : "password"}
										placeholder="Старый пароль"
										name="password"
										// onChange={handleChangeCreate}
									/>
									<img src="/svg/eye.svg" alt="" onClick={passwordTypeOne} />
								</div>
							</div>
							<div className='profile_name'>
								<p className='profileTitle'>Новый пароль:</p>
								<div className="password_input_change">
									<input
										className="outline-none"
										type={passwordShowOne ? "text" : "password"}
										placeholder="Новый пароль"
										name="password"
										// onChange={handleChangeCreate}
									/>
									<img src="/svg/eye.svg" alt="" onClick={passwordTypeOne} />
								</div>
							</div>
							<div className='profile_name'>
								<p className='profileTitle'>Подтвердите пароль:</p>
								<div className="password_input_change">
									<input
										className="outline-none"
										type={passwordShowOne ? "text" : "password"}
										placeholder="Подтвердите пароль"
										name="password"
										// onChange={handleChangeCreate}
									/>
									<img src="/svg/eye.svg" alt="" onClick={passwordTypeOne} />
								</div>
							</div>
						</div>
						}
					</div>
					<div className='profile_btn-block'>
						<div className='profile_btn-block-update'>
							{changePin === false ?
								<button onClick={handleOpen}>Изменить данные</button>
								: ""
							}
							<button onClick={logout}>Выйти из аккаунта</button>
						</div>
						<div>
							<button onClick={() => setChangePin(false)}>Сохранить</button>
						</div>
					</div>
				</div>
				<div className="profile_flex-right">
					<p className='history_buing'>История покупок:</p>
					<div className='profile-history'>
						{
							history.map((item: any, index: number) => {
								return (
									<div className='history_card' key={index}>
										<div className='history_card-img'>
											<img src={item.img} alt="" />
										</div>
										<div className='history_card-data'>
											<h6 className='history_card_name'>{item.name}</h6>
											<p className='history_card_row'>
												ряд: 15, место: 30
											</p>
											<div className='history_card-info'>
												<span>
													<img src="/svg/blackPrice.svg" alt="" />
													<p>{item.cost} сом</p>
												</span>
												<span>
													<img src="/svg/blackCalendar.svg" alt="" />
													<p>24-марта, </p>
													<p>Среда 18:00</p>
												</span>
											</div>
											<p className='history_description'>{item.description}</p>

											<div className='history_date_mobile'>
												<span >
													<img src="/svg/blackPrice.svg" alt="" />
													<p>{item.cost} сом</p>
												</span>
												<div className='history_date_mobile_block'>
													<span>	<img src="/svg/blackCalendar.svg" alt="" /></span>
													<span className='history_date_mobile_data'>
														<p>24-марта, </p>
														<p>Среда 18:00</p>
													</span>
												</div>
											</div>
										</div>
									</div>
								)
							})
						}
					</div>
				</div>
			</div>
		</div>
	)
}

export default ProfilePages