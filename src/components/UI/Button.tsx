import React from 'react'
import './ui.css'
interface IButton {
    className?: string;
    children: string | React.JSX.Element,
}


export const ButtonYellow = ({className='',children}: IButton) => {
  return (
        <button className={`btn ${className || ''}`}>
            {children}
        </button>
  )
}

export const ButtonOutline = ({className='',children}: IButton) => {
  return (
    <button className={`btnOutline ${className || ''}`}>
        {children}
    </button>
)
}

export const ButtonGray = ({className='',children}: IButton) => {
  return (
      <button className={`btnGray ${className || ''}`}>
        {children}
      </button>
    )
}

export const ButtonBrown = ({className='',children}: IButton) => {
  return (
      <button className={`btnBrown ${className || ''}`}>
        {children}
      </button>
    )
}