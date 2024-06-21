'use client'
import React, { useEffect, useState } from 'react';
import CardComponentRepertoires from '../cardComponentRep/CardComponentRepertoires';
import './repertoiresComponent.css';
import { instance } from '@/components/axios';

function Repertoiresgallery() {
  const [changeComponent, setChangeComponent] = useState(1);
  const [dataCards, setDataCards] = useState([])
 async function showRepertoires(){
    try{
      const response = await instance.get('/repertoires/')
      console.log(1,response.data.results);
      setDataCards(response.data.results)
      
    }catch(error){
      console.log('errorRepertoiresGallery', error);
    }
  }


  useEffect(()=>{
    showRepertoires()
  },[])
  return (
    <div className='repertoires_gallery'>
      {/* <div className="container"> */}
        <div className='repertoires_gallery_nav'>
          <div>
            <span className={` ${changeComponent === 1 ? 'active' : ""}`} onClick={()=>setChangeComponent(1)} >Все</span>
            <span className={` ${changeComponent === 2 ? 'active' : ""}`} onClick={()=>setChangeComponent(2)} >Премьера</span>
            <span className={` ${changeComponent === 3 ? 'active' : ""}`} onClick={()=>setChangeComponent(3)} >Гастроли</span>
            <span className={` ${changeComponent === 4 ? 'active' : ""}`} onClick={()=>setChangeComponent(4)} >Детям</span>
        </div>
        </div>
        <div className="repertoires_gallery_cards"> 
        {
         changeComponent === 1 && dataCards.map((item: any, index: number) => {
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
                  <CardComponentRepertoires
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
          {
          // changeComponent === 2 && [1,2,3].map(item=>(
          //   <div className="card_gallery "><CardComponentRepertoires /></div>
          // ))
        }
          {
          // changeComponent === 3 && [1,2,3,4].map(item=>(
          //   <div className="card_gallery "><CardComponentRepertoires /></div>
          // ))
        }
          {
          // changeComponent === 4 && [1,2,3,4,5,6].map(item=>(
          //   <div className="card_gallery "><CardComponentRepertoires /></div>
          // ))
        }
        </div>
      {/* </div> */}
    </div>
  )
}

export default Repertoiresgallery
