'use client'
import React, { useEffect, useState } from 'react'
import './repertoiresPage1.css'
import Repertoirescard from '../repertoiresCard/RepertoiresCard'
import { instance } from '@/components/axios'
function Repertoirespage() {
  const [repState, setRepState] = useState<any>([])
  async function showRepertoiresCard() {
    try {
      const response = await instance.get('/repertoires/');
      console.log(response.data.results);
      setRepState(response.data.results)
    } catch (error) {
      console.error('Error repertoires:', error);
    }
  }

  useEffect(() => {
    showRepertoiresCard();
  }, []);
  return (
    <div className='repertoires_page'>
      <div className="container_repertoires_comp">
        <div>
          {repState.map((item: any, index: number) => {
            let price:any = ""; 
            let data = ''
            let time = ''
            item.seances.forEach((element: any) => {
              data = element.date
              time = element.time
              price = element.ticket_types.find((elem: any) => elem.seance === element.id);
            });
            
            return (
              <Repertoirescard
                key={index}
                name={item.name}
                description={item.description}
                image={item.image}
                data={data}
                time={time}
                price={price?.price}
              />
            );
          })}
        </div>
      </div>
    </div>
  )
}

export default Repertoirespage
