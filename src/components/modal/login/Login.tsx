// "use client";
// import { usePathname } from "next/navigation";
// import React, { useState, MouseEvent, FormEvent, ChangeEvent, useEffect } from "react";
// import "./login.css";
// import { instance } from "@/components/axios";
// import { useSearchParams } from 'next/navigation'
// import { useRouter } from "next/navigation";



// function Login() {
//   const search = useSearchParams()
//   const pathname = usePathname();
//   const [page, setPage] = useState("login");
//   const [passwordShowOne, setPasswordShowOne] = useState<boolean>(false);
//   const [passwordShowTwo, setPasswordShowTwo] = useState<boolean>(false);
//   const [passwordShow, setPasswordShow] = useState<boolean>(false);
//   const [loginData, setLoginData] = useState({
//     email: null,
//     password: null,
//   });

//   const router = useRouter()
//   useEffect(() => {
//     if (search.get('key')) {
//       setPage('resetPassword')
//     }
//   }, [search])
//   const [email, setEmail] = useState('')
//   const [errors, setErrors] = useState<any>({});
//   const [creationErrors, setCreationErrors] = useState<any>({})
//   const [create, setCreate] = useState({
//     email: null,
//     first_name: null,
//     password: null
//   })
//   function goBackOut(e: MouseEvent<HTMLButtonElement>) {
//     e.preventDefault();
//     setPage("login");
//   }
//   const passwordType = () => {
//     setPasswordShow((prev) => !prev);
//   };
//   const passwordTypeOne = () => {
//     setPasswordShowOne((prev) => !prev);
//   };
//   const passwordTypeTwo = () => {
//     setPasswordShowTwo((prev) => !prev);
//   };
//   function openCreateAccount(e:any){
//     e.preventDefault()
//       setPage('createaccount')
//       window.location.href = '/login'
//   }
//   const handleInputChange = (index: number, value: string) => {
//     const inputs = document.querySelectorAll<HTMLInputElement>(".code");

//     if (value.length === 0 && index > 0) {
//       inputs[index - 1].focus();
//     } else if (value.length === 1 && index < inputs.length - 1) {
//       inputs[index + 1].focus();
//     }
//   };
//   const handlePaste = (event: React.ClipboardEvent<HTMLInputElement>) => {
//     const pastedData = event.clipboardData.getData("text").trim();
//     const inputs = document.querySelectorAll<HTMLInputElement>(".code");
//     if (pastedData.length === 4) {
//       pastedData.split("").forEach((item, index) => {
//         if (index < inputs.length) {
//           inputs[index].value = item;
//         }
//       });
//     }
//   };



//   const handleResetPassword = (event: FormEvent<HTMLFormElement>) => {
//     event.preventDefault()
//     let formData = new FormData(event.target as HTMLFormElement)
//     let data = Object.fromEntries(formData.entries())
//     if (data.new_password != data.new_password_confirm) return setErrors({ resetPasswordConfirm: 'Пароли должны совпадать!' })
//     const check = instance.post('/auth/reset-password/', { key: search.get('key'), new_password: data.new_password })
//     check
//       .then(res => setPage('login'))
//       .catch(err => {
//         for (let [key, item] of Object.entries(err.response.data)) {
//           if (key == 'key') {
//             setErrors({ [key]: item })
//             setTimeout(() => {
//               setPage('login')
//               search.delete()
//             }, 1500)
//             return
//           }
//           setErrors({ [key]: item })
//         }
//       })

//   }

//   function handleClick(e: FormEvent<HTMLFormElement>) {
//     e.preventDefault();
//     instance
//       .post("/auth/login/", loginData)
//       .then((response) => {
//         console.log(response);
//         if (response.status == 200) {
//           router.replace('/profile')
//           localStorage.setItem('tokenDram', "fc072b4806132f9b28416fefaa694079e7b0d679")
//         }
//       })
//       .catch((error) => {
//         setErrors(error.response.data);
//       });
//   }
//   function handleChange(e: ChangeEvent<HTMLInputElement>) {
//     if (getError(e.target.name))
//       setErrors((prev: any) => (delete prev?.[e.target.name], prev));
//     setLoginData({ ...loginData, [e.target.name]: e.target.value || null });
//   }

//   const getError = (property: any) => {
//     return Array.isArray(errors?.[property])
//       ? errors?.[property]?.[0]
//       : errors?.[property]
//   };
//   // const getCreateError = (property: any) => {
//   //   return Array.isArray(creationErrors?.[property])
//   //     ? creationErrors?.[property]?.[0]
//   //     : creationErrors?.[property] 
//   // };
//   const passwordReset = (e: any) => {
//     e.preventDefault()
//     instance.post('/auth/send-reset-password-key/', {
//       email: email
//     })
//       .then((response: any) => {
//         setPage("getcode");
//         console.log(response);

//       })
//       .catch((error: any) => {
//         console.error('Ошибка при отправке запроса:', error);
//       });
//   };
//   //////////// create account ///////////////////////////////////////
//   const getCreateError = (property: any) => {
//     return Array.isArray(creationErrors?.[property])
//       ? creationErrors?.[property]?.[0]
//       : creationErrors?.[property]
//   };


//   const handleSubmitCreate = (e: FormEvent<HTMLFormElement>) => {
//     e.preventDefault()
//     instance
//       .post("/auth/register/", create)
//       .then((response) => {
//         console.log(response);
//         if (response.status == 200) {
//           window.location.replace('/profile')

//         }
//       })
//       .catch((error) => {
//         setCreationErrors(error.response.data);
//       });

//   }

//   // const handleChangeCreate = (e: ChangeEvent<HTMLInputElement>) => {
//   //   if (getError(e.target.name))
//   //   setErrors((prev: any) => (delete prev?.[e.target.name], prev));
//   // setCreate({ ...create, [e.target.name]: e.target.value || null });
//   // }

//   const handleChangeCreate = (e: ChangeEvent<HTMLInputElement>) => {
//     if (getCreateError(e.target.name))
//       setCreationErrors((prev: any) => (delete prev?.[e.target.name], prev));
//     setCreate({ ...create, [e.target.name]: e.target.value || null });
//   }

//   ///////////////////////////////////////////////////////////////////

//   return (
//     <div className="login_container">
//       <div className="login_inner">
//         <div className="login_img">
//           <img src="/img/loginimg.png" alt="" />
//         </div>
//         <div className="login_form">
//           {page === "login" ? (
//             <form onSubmit={handleClick} className="form">
//               <h3 className="form_greetings">Добро пожаловать</h3>
//               <p className="form_text">
//                 Продолжить с Google или введите данные <br />
//                 для входа
//               </p>
//               <div className="login_input">
//                 <input
//                   className="outline-none"
//                   type="text"
//                   placeholder="Логин"
//                   name="email"
//                   onChange={handleChange}
//                 />
//               </div>
//               {getError("email") ? <p className="error">{getError("email")}</p> : null}

//               <div className="password_input">
//                 <input
//                   className="outline-none"
//                   type={passwordShow ? "text" : "password"}
//                   placeholder="Пароль"
//                   name="password"
//                   onChange={handleChange}
//                 />
//                 <img src="/svg/eye.svg" alt="" onClick={passwordType} />
//               </div>
//               {getError("password") ? <p className="error">{getError("password")}</p> : null}
//               {getError("massage") ? <p className="error">{getError("massage")}</p> : null}

//               <div className="forgot_password">
//                 <span onClick={() => setPage("forgotPassword")}>
//                   Забыли пароль
//                 </span>
//               </div>
//               <button type="submit" className={`entrance ${(loginData.email && loginData.password) ? 'bg-[#FFCD00] !text-[#000000]' : ''}`}>
//                 Войти
//               </button>
//               <div className="switch_to_register">
//                 <span>
//                   {" "}
//                   Вы еще не зарегистрировались?
//                   <span
//                     className="registeracc"
//                     onClick={() => setPage("createaccount")}
//                   >
//                     Создать аккаунт
//                   </span>
//                 </span>
//               </div>
//               <div className="line_flex">
//                 <div className="line_or"></div>
//                 <p>или</p>
//                 <div className="line_or"></div>
//               </div>
//               <button className="btn_google">
//                 <img src="/svg/google.svg" alt="" />{" "}
//                 <span>Продолжить с Google</span>
//               </button>
//             </form>
//           ) : (
//             ""
//           )}
//           {page === "forgotPassword" ? (
//             <form className="form" onSubmit={passwordReset}>
//               <h3 className="form_greetings">Забыли пароль?</h3>
//               <p className="form_text">Войдите с помощью кода подтверждения</p>
//               <div className="login_input">
//                 <input
//                   className="outline-none"
//                   type="text"
//                   placeholder="Емаил"
//                   value={email}
//                   onChange={(e) => setEmail(e.target.value)}
//                 />
//               </div>
//               <button
//                 className="entrance_forgot"
//                 type="submit"
//               >
//                 Получить код
//               </button>
//               <button className="btn_arrow" onClick={(e) => goBackOut(e)}>
//                 <img src="/svg/arrowleft.svg" alt="" />{" "}
//                 <span>Назад к регистрации</span>
//               </button>
//             </form>
//           ) : (
//             ""
//           )}
//           {
//             // page === "getcode" ? 
//             // (
//             //   <form className="form">
//             //     <h3 className="form_greetings">Введите код </h3>
//             //     <p className="form_text">
//             //       Мы только что отправили код подтверждения на адрес <br />{" "}
//             //       jonathanadah11@gmail.com.
//             //     </p>
//             //     <div className="btn_block_getcode">
//             //       <input
//             //         className="code outline-none"
//             //         type="text"
//             //         maxLength={1}
//             //         onChange={(e) => handleInputChange(0, e.target.value)}
//             //         onPaste={(e) => handlePaste(e)}
//             //       />
//             //       <input
//             //         className="code outline-none"
//             //         type="text"
//             //         maxLength={1}
//             //         onChange={(e) => handleInputChange(1, e.target.value)}
//             //         onPaste={(e) => handlePaste(e)}
//             //       />
//             //       <input
//             //         className="code outline-none"
//             //         type="text"
//             //         maxLength={1}
//             //         onChange={(e) => handleInputChange(2, e.target.value)}
//             //         onPaste={(e) => handlePaste(e)}
//             //       />
//             //       <input
//             //         className="code outline-none"
//             //         type="text"
//             //         maxLength={1}
//             //         onChange={(e) => handleInputChange(3, e.target.value)}
//             //         onPaste={(e) => handlePaste(e)}
//             //       />
//             //     </div>
//             //     <div className="error_text_block">
//             //       <span className="error_text">Неправильно введен код</span>
//             //     </div>
//             //     <button
//             //       className="entrance_forgot"
//             //       onClick={() => {
//             //         setPage("resetPassword");
//             //       }}
//             //     >
//             //       Подтвердить
//             //     </button>
//             //     <button className="btn_code" onClick={(e) => {}}>
//             //       <span>Отправить код еще раз</span>
//             //     </button>
//             //   </form>
//             // ) : (
//             //   ""
//             // )

//           }
//           {page === "resetPassword" ? (
//             <form onSubmit={handleResetPassword} className="form" >
//               <h3 className="form_greetings">Сброс пароля</h3>
//               <p className="form_text">
//                 Введите новый пароль для доступа <br />к учетной записи
//               </p>
//               <div className="password_input">
//                 <input
//                   name="new_password"
//                   className="outline-none"
//                   required
//                   type={passwordShowOne ? "text" : "password"}
//                   placeholder="Пароль"
//                 />
//                 <img src="/svg/eye.svg" alt="" onClick={passwordTypeOne} />
//               </div>
//               <div className="password_input">
//                 <input
//                   className="outline-none"
//                   required
//                   name="new_password_confirm"
//                   type={passwordShowTwo ? "text" : "password"}
//                   placeholder="Пароль"
//                 />
//                 <img src="/svg/eye.svg" alt="" onClick={passwordTypeTwo} />
//               </div>
//               <div className="error_text_block">
//                 <span className="error_text">{errors.resetPasswordConfirm || getCreateError('key') || getCreateError('new_password')}</span>
//               </div>
//               <button type="submit" className="entrance_forgot" >
//                 Готово
//               </button>
//             </form>
//           ) : (
//             ""
//           )}
//           {page === "createaccount" ? (
//             <form className="form" onSubmit={handleSubmitCreate}>
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
//           ) : (
//             ""
//           )}
//         </div>
//       </div>
//       <div className="curtain">
//         <div className="curtain_left"></div>
//         <div className="curtain_right"></div>
//       </div>
//     </div>
//   );
// }

// export default Login;

