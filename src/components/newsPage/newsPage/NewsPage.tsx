'use client'

import React, { useEffect, useState } from 'react'
import './newsPage.css'
import { NewsCardPage, NewsCardPageMob } from '../newsCardInPage/newsCardPage'
import { instance } from '@/components/axios'

function NewsPage() {
  const [dataNews, setDataNews] = useState([]);

  async function showDataNews() {
    try {
      const response = await instance.get('/news/');
      setDataNews(response.data.results);
      console.log('news', response.data.results);
    } catch (error) {
      console.error('Error news:', error);
    }
  }

  useEffect(() => {
    showDataNews();
  }, []);
  function formatDate(dateStr: string) {
    const dateObj = new Date(dateStr);
    const options:any = {
      year: 'numeric',
      month: 'short',
      day: '2-digit'
    };
    return dateObj.toLocaleDateString('ru-RU', options);
  }


  return (
    <div className="newspage">
      <div className="container_newspage">
        <div className='newspage_title'>Новости</div>
        <div className="newspage_cards_page" >
          <div className="newspage_cards_parrent">
            <div className="news_absolute">
              <h1 className="blog">БЛОГ-
                НОВОСТИ</h1>
              <div className="line_blog"></div>
              <p>

                <span className='text1'>наши</span> <br />
                <span className='text2'> последние </span><br />
                <span className='text3'> новости </span></p>

            </div>
          </div>
          <div className="newspage_cards_block">
            {
              dataNews.map((item: any, index) => (
                <NewsCardPage
                  key={index}
                  data={formatDate(item.date)}
                  title={item.title}
                  img={item.image}
                  description={item.description}
                />
              ))
            }

          </div>
          <div className='newspage_cards_block-mobile'>
            {
              dataNews.map((item: any, index) => (
                <NewsCardPageMob
                  key={index}
                  data={formatDate(item.date)}
                  title={item.title}
                  img={item.image}
                  description={item.description}
                />
              ))
            }
          </div>

        </div>

      </div>

    </div>
  )
}

export default NewsPage