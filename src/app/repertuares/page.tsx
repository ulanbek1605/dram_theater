'use client'
import React, { useState } from 'react';
import Repertoiresgallery from '@/components/repertuaresblock/repertoiresComponent/RepertoiresComponent';
import Repertoirespage from '@/components/repertuaresblock/repertoiresPage1/RepertoiresPage1';
import './page_rep.css'
const RepertuaresPage = () => {
const [changeComponent, setChangeComponent] = useState(1);
console.log()
    return (
        <div>
            <div className="container_rep">
              <div className="repertoires_page_title">
                <h1>Репертуары</h1> 
                <div className='repertoires_page_config'>
                   <button className={`btn_r ${changeComponent === 1 ? 'active' : ""}`} onClick={()=>setChangeComponent(1)}><img src="/svg/repertoirestitle1.svg" alt="" /></button>
                   <button className={`btn_r ${changeComponent === 2 ? 'active' : ""}`} onClick={()=>setChangeComponent(2)}><img src="/svg/repertoirestitle2.svg" alt="" /></button>
                </div>
            </div>
            { changeComponent === 1 ?
            <Repertoirespage/>
            : null
            }   
            { changeComponent === 2 ?
            <div>
                <Repertoiresgallery/>
            </div> : null
            }
            </div>

        </div>
    )
}

export default RepertuaresPage