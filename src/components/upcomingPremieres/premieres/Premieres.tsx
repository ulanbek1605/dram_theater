'use client'
import React, { useEffect, useState } from "react";
import Card from "@/components/cards/Card";
import "./premieres.css";
import { instance } from "@/components/axios";
function Premieres() {
    const [data, setData] = useState([])
    async function showData(){
        try{
            const response = await instance.get('/repertoires/')
            
            setData(response.data.results);
            
        }catch(error){
            console.log('error', error);
            
        }
    }

    useEffect(()=>{
        showData()
    },[])
    return (
        <div className="premires">
            <div className="premires_container">
                <div className="premires_title">
                    <h1>Ближайшие премьеры</h1>
                </div>
                <div className="premires_block">

                {
            data.map((item: any, index: number) => {
              let price: any = "";
              let data = ''
              let time = ''
              item.seances.forEach((element: any) => {
                data = element.date
                time = element.time.split(':', 2).join(':')
                price = element.ticket_types.filter((elem: any) => elem.seance === element.id);
              })
              return (
                <div key={index}>
                  <Card
                    name={item.name}
                    description={item.description}
                    image={item.image}
                    data={data}
                    time={time}
                    price={`${price[0].price} - ${price[1].price}`} />
                </div>
              )
          })
        }
                    {/* <div className=""><Card /></div>
                    <div className=""><Card /></div>
                    <div className=""><Card /></div>
                    <div className=""><Card /></div>
                    <div className=""><Card /></div>
                    <div className=""><Card /></div>
                    <div className=""><Card /></div>
                    <div className=""><Card /></div>
                    <div className=""><Card /></div> */}
                </div>
            </div>
        </div>
    );
}
export default Premieres;
