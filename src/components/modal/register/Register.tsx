// 	'use client'
// import React,{useState} from 'react'
// import { instance } from '@/components/axios';
// function Register() {
// 	const [passwordShowOne, setPasswordShowOne] = useState<boolean>(false);
// 	const [passwordShowTwo, setPasswordShowTwo] = useState<boolean>(false);
// 	const [passwordShow, setPasswordShow] = useState<boolean>(false);
// 	const [email, setEmail] = useState('')
// 	const [errors, setErrors] = useState<any>({});
// 	const [creationErrors, setCreationErrors] = useState<any>({})
// 	const [create, setCreate] = useState({
// 	  email: null,
// 	  first_name: null,
// 	  password: null
// 	})
// 	const getCreateError = (property: any) => {
// 		return Array.isArray(creationErrors?.[property])
// 		  ? creationErrors?.[property]?.[0]
// 		  : creationErrors?.[property]
// 	  };
// 	  const passwordType = () => {
// 		setPasswordShow((prev) => !prev);
// 	  };
// 	  const passwordTypeOne = () => {
// 		setPasswordShowOne((prev) => !prev);
// 	  };
// 	  const passwordTypeTwo = () => {
// 		setPasswordShowTwo((prev) => !prev);
// 	  };
	
// 	  const handleSubmitCreate = (e: FormEvent<HTMLFormElement>) => {
// 		e.preventDefault()
// 		instance
// 		  .post("/auth/register/", create)
// 		  .then((response) => {
// 			console.log(response);
// 			if (response.status == 200) {
// 			  window.location.replace('/profile')
	
// 			}
// 		  })
// 		  .catch((error) => {
// 			setCreationErrors(error.response.data);
// 		  });
	
// 	  }
	
// 	  // const handleChangeCreate = (e: ChangeEvent<HTMLInputElement>) => {
// 	  //   if (getError(e.target.name))
// 	  //   setErrors((prev: any) => (delete prev?.[e.target.name], prev));
// 	  // setCreate({ ...create, [e.target.name]: e.target.value || null });
// 	  // }
	
// 	  const handleChangeCreate = (e: ChangeEvent<HTMLInputElement>) => {
// 		if (getCreateError(e.target.name))
// 		  setCreationErrors((prev: any) => (delete prev?.[e.target.name], prev));
// 		setCreate({ ...create, [e.target.name]: e.target.value || null });
// 	  }
	


//   return (
// 	<div>
// 		 <form className="form" onSubmit={handleSubmitCreate}>
//               <h3 className="form_greetings">Добро пожаловать</h3>
//               <p className="form_text">
//                 Введите данные, чтобы создать учетную запись
//               </p>
//               <div className="name_input">
//                 <input className="outline-none" type="text" placeholder="Имя" name="first_name" onChange={handleChangeCreate} />
//               </div>
//               {getCreateError("first_name") ? <p className="error">{getCreateError("first_name")}</p> : null}

//               <div className="login_input">
//                 <input
//                   className="outline-none"
//                   type="text"
//                   placeholder="Емаил"
//                   name="email"
//                   onChange={handleChangeCreate}
//                 />
//               </div>
//               {getCreateError("email") ? <p className="error">{getCreateError("email")}</p> : null}
//               <div className="password_input">
//                 <input
//                   className="outline-none"
//                   type={passwordShowOne ? "text" : "password"}
//                   placeholder="Пароль"
//                   name="password"
//                   onChange={handleChangeCreate}
//                 />
//                 <img src="/svg/eye.svg" alt="" onClick={passwordTypeOne} />
//               </div>
//               {getCreateError("password") ? <p className="error">{getCreateError("password")}</p> : null}
//               <div className="password_input">
//                 <input
//                   className="outline-none"
//                   type={passwordShowTwo ? "text" : "password"}
//                   placeholder="Пароль"
//                 />
//                 <img src="/svg/eye.svg" alt="" onClick={passwordTypeTwo} />
//               </div>
//               {getCreateError("password") ? <p className="error">{getCreateError("password")}</p> : null}
//               <div className="forgot_password">
//                 <span onClick={() => setPage("forgotPassword")}>
//                   Забыли пароль
//                 </span>
//               </div>
//               <button className="entrance registerBtnStyle" type="submit">Зарегистрироваться</button>

//               <div className="line_flex">
//                 <div className="line_or"></div>
//                 <p>или</p>
//                 <div className="line_or"></div>
//               </div>
//               <button className="btn_google">
//                 <img src="/svg/google.svg" alt="" />{" "}
//                 <span>Продолжить с Google</span>
//               </button>
//               <div className="switch_to_register">
//                 <span>
//                   {" "}
//                   У вас уже есть аккаунт?
//                   <span
//                     className="registeracc"
//                     onClick={() => setPage("login")}
//                   >
//                     Войти в аккаунт
//                   </span>
//                 </span>
//               </div>
//             </form>
// 	</div>
//   )
// }

// export default Register