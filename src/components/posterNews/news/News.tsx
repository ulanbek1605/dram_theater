'use client'
import React, { useEffect, useState } from "react"
import Newscard from "../newsCard/NewsCard"
import  './news.css';
import { instance } from "@/components/axios";
function News(){
    const [newsData, setNewsdata] = useState([])
    async function showNews() {
        try {
            const response = await instance.get('/news/')
            console.log(response.data.results);
            setNewsdata(response.data.results)
        } catch (error) {
            console.log('error', error);
        }
    }

    useEffect(()=>{
        showNews()
    },[])
    return (
        <div className="news">
            <div className="container">
                <div className="news_title">
                    <h1>Новости</h1>
                </div>
                <div className="news_cards">
                    {
                        newsData.map((item:any,index:number)=>{
                            let data = new Date(item.date)
                            const monthNames = [
                                "Января", "Февраля", "Марта", "Апреля", "Мая", "Июня",
                                "Июля", "Августа", "Сентября", "Октября", "Ноября", "Декабря"
                            ];
                            let day = data.getDate();
                            let month = monthNames[data.getMonth()];
                            let formattedDate = `${day} ${month}`;
                            return(
                                <div key={index} className="news_card_items">
                                    <Newscard title={item.title} description={item.description} image={item.image} data={formattedDate} />
                                </div>
                            )
                        })
                    }
                    {/* {
                        [1, 2, 3, 4, 5, 6].map(item => (
                            <div className="news_card_items">
                            <Newscard />
                            </div>
                        ))
                    } */}
                </div>
            </div>
        </div>
       
    )
}
export default News