'use client'
import React, { useEffect, useState } from "react";
import Card from "@/components/cards/Card";
import "./repertoires.css";
import { ButtonOutline } from "@/components/UI/Button";
import { instance } from "@/components/axios";

function Repertoires() {
  const [data, setData] = useState<any[]>([])
  async function showDataRepert() {
    try {
      const response = await instance.get('/repertoires/')
      console.log('log', response.data.results);
      setData(response.data.results)
    } catch (error) {
      console.log('error', error);

    }

  }

  useEffect(() => {
    showDataRepert()
    console.log('data', data);

  }, [])
  
  return (
    <div className="repertoires">
      <div className="repertoires_container">
        <div className="repertoires_title">
          <h1>Репертуары</h1>
        </div>
        <div className="repertoires_block">
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
                    id={item.id}
                    price={`${price[0].price} - ${price[1].price}`} />
                </div>
              )
          })
        }



        </div>
        <div className="repertoires_position_btn">
          <div className="repertoires_btn w-[255px] h-[52px] rounded-lg border border-black" onClick={()=> window.location.replace('/repertuares')}>
            <ButtonOutline className="text-black )] ">
              Репертуары
            </ButtonOutline>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Repertoires;