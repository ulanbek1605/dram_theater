import React from 'react'
import Link from 'next/link'
import  './newscard.css'
function Newscard(props:{title:string, data:string, description:string, image:any}) {
  return (
    <div className='news_card'>
        <div className="news_card_img">
            <img className='cardNewsImage' src={props.image} alt='img'/>
        </div>
        <div className="news_card_info">
            <div className="news_card_title">
                <h1>{props.title}</h1>
                <h1>{props.data}</h1>
            </div>
            <div className="news_card_body">
                <div>
                <p>{props.description}</p>
                </div>
                
                <div>
                    <Link href='/news'>Подробнее <img src="/svg/arrow.svg" alt="" /></Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Newscard
