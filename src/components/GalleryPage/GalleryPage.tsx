'use client'
import React, { useEffect, useMemo, useState } from 'react'
import './galleryPage.css'
import { instance } from '../axios';

function GalleryPage() {
  const [photosData, setPhotosData] = useState<any[]>([]);
  const [photosDataMob, setPhotosDataMob] = useState<any[]>([]);
  const [changeComponent, setChangeComponent] = useState(1)


  async function showGalleryPhotos() {
    try {
      const response = await instance.get('/gallery/');
      console.log('res', response.data.results);

      let left: any = [];
      let mid: any = [];
      let right: any = [];
      let filterImage = response.data.results.filter((item: any) => item.photo_cat.id === changeComponent)
      filterImage.forEach((item: any, index: any) => {
        switch (index % 3) {
          case 0:
            left.push(
              <div key={item.id}>
                <img src={item.image} alt="" />
              </div>
            );
            break;
          case 1:
            mid.push(
              <div key={item.id}>
                <img src={item.image} alt="" />
              </div>
            );
            break;
          case 2:
            right.push(
              <div key={item.id}>
                <img src={item.image} alt="" />
              </div>
            );
            break;
        }
      });

      setPhotosData([left, mid, right]);

      let leftMob: any = []
      let rightMob: any = []
      filterImage.forEach((item: any, index: any) => {
        switch (index % 2) {
          case 0:
            leftMob.push(
              <div key={item.id}>
                <img src={item.image} alt="" />
              </div>
            )
            break
          case 1:
            rightMob.push(
              <div key={item.id}>
                <img src={item.image} alt="" />
              </div>
            )
            break
        }

      })
      setPhotosDataMob([leftMob, rightMob]);

    } catch (error) {
      console.error('Error gallery photos:', error);
    }
  }

  useEffect(() => {
    showGalleryPhotos();
  }, [changeComponent]);
  useEffect(() => {
    console.log('state', photosData);
  }, [photosData]);

  return (
    <div className='GalleryPage'>
      <div className="galleryContainer">
        <div className="gallery_page_header">
          <div className="gallery_page_title">
            <h1>
              Галерея
            </h1>
          </div>
          <div className='gallery_page_nav'>
            <span className={`${changeComponent === 1 ? 'active' : ""}`} onClick={() => setChangeComponent(1)}>Концерты</span>
            <span className={`${changeComponent === 2 ? 'active' : ""}`} onClick={() => setChangeComponent(2)}>Спектакли</span>
            <span className={`${changeComponent === 3 ? 'active' : ""}`} onClick={() => setChangeComponent(3)}>Закулисье</span>
          </div>
        </div>
        {changeComponent === 1 ?
          <div className='gallery_photos-container'>
            <div className='gallery_photos-one'>
              <div>
                {photosData[0]}
              </div>
              <div>
                {photosData[1]}
              </div>
              <div>
                {photosData[2]}
              </div>
            </div>
            <div className='gallery_photos-two'>
              <div>
                {
                  photosDataMob[0]
                }
              </div>
              <div>
                {
                  photosDataMob[1]
                }
              </div>
            </div>
          </div>
          : null}

        {changeComponent === 2 ?
          <div className='gallery_photos-container'>
            <div className='gallery_photos-one'>
              <div>
                {photosData[0]}
              </div>
              <div>
                {photosData[1]}
              </div>
              <div>
                {photosData[2]}
              </div>
            </div>
            <div className='gallery_photos-two'>
              <div>
                {
                  photosDataMob[0]
                }
              </div>
              <div>
                {
                  photosDataMob[1]
                }
              </div>
            </div>
          </div>
          : null}
        {changeComponent === 3 ?
          <div className='gallery_photos-container'>
            <div className='gallery_photos-one'>
              <div>
                {photosData[0]}
              </div>
              <div>
                {photosData[1]}
              </div>
              <div>
                {photosData[2]}
              </div>
            </div>
            <div className='gallery_photos-two'>
              <div>
                {
                  photosDataMob[0]
                }
              </div>
              <div>
                {
                  photosDataMob[1]
                }
              </div>
            </div>
          </div>
          : null}
      </div>
    </div>
  )
}

export default GalleryPage