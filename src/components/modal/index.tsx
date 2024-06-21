'use client'
import React, { useState } from 'react'
import Login from './login/Login'

function Modal() {
    const [modal, setModal] = useState(true)
  return (
    <div className='modal_window'>

        {
            modal === true ? <Login /> : null
        }
     
    </div>
  )
}

export default Modal
