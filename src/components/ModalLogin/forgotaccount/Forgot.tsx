'use client'
import { instance } from '@/components/axios'
import { usePathname, useSearchParams } from 'next/navigation'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'

const testGit = 'Assalomu aleykum Ulan'

function Forgot() {
  const pathname = usePathname()
  const [email, setEmail] = useState('')
  // const router = useRouter()
  const search = useSearchParams()
  const [errors, setErrors] = useState<any>({});

  function goBackOut(e: any) {
    e.preventDefault();
    window.location.replace('/login')
  }
  useEffect(() => {
    if (search.get('key')) {
      window.location.replace('/resetPassword')
    }
  }, [search])
  // const handleResetPassword = (event: FormEvent<HTMLFormElement>) => {
  //   event.preventDefault()
  //   let formData = new FormData(event.target as HTMLFormElement)
  //   let data = Object.fromEntries(formData.entries())
  //   if (data.new_password != data.new_password_confirm) return setErrors({ resetPasswordConfirm: 'Пароли должны совпадать!' })
  //   const check = instance.post('/auth/reset-password/', { key: search.get('key'), new_password: data.new_password })
  //   check
  //     .then(res => window.location.replace('login'))
  //     .catch(err => {
  //       for (let [key, item] of Object.entries(err.response.data)) {
  //         if (key == 'key') {
  //           setErrors({ [key]: item })
  //           setTimeout(() => {
  //             window.location.replace('login')
  //             search.delete()
  //           }, 1500)
  //           return
  //         }
  //         setErrors({ [key]: item })
  //       }
  //     })

  // }
  const passwordReset = (e: any) => {
    e.preventDefault()
    instance.post('/auth/send-reset-password-key/', {
      email: email
    })
      .then((response: any) => {
        window.location.replace("getcode");
        console.log(response);

      })
      .catch((error: any) => {
        console.error('Ошибка при отправке запроса:', error);
      });
  };
  return (
    <div className='login.container'>
      <div className="login_inner">
        <div className="login_img">
          <img src="/img/loginimg.png" alt="" />
        </div>
        <div className="login_form">
          <form className="form" onSubmit={passwordReset}>
            <h3 className="form_greetings">Забыли пароль?</h3>
            <p className="form_text">Войдите с помощью кода подтверждения</p>
            <div className="login_input">
              <input
                className="outline-none"
                type="text"
                placeholder="Емаил"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <button
              className="entrance_forgot"
              type="submit"
            >
              Получить код
            </button>
            <button className="btn_arrow" onClick={(e) => goBackOut(e)}>
              <img src="/svg/arrowleft.svg" alt="" />{" "}
              <span>Назад к регистрации</span>
            </button>
          </form></div>
      </div>
      <div className="curtain">
        <div className="curtain_left"></div>
        <div className="curtain_right"></div>
      </div>
    </div>
  )
}

export default Forgot