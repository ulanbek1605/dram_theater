import React from 'react'
import './newsCardPage.css'
export const NewsCardPage = (props: { data: string, title: string, img: string, description: string }) => {
	const { data, title, img, description } = props;
	
	return (
		<div className='container_card_page'>
			<div className="news_card_page">
				<div className="news_card_img">
					<img src={img} alt="" />
				</div>
				<div className="news_card_info">
					<div className="card_news_info_data">
						<p>{data}</p>
					</div>
					<div className="card_news_info_title">
						<h3>{title}</h3>
					</div>
					<div className="card_news_info_text">
						<p>{description}</p>
					</div>
				</div>
			</div>
		</div>
	);
};


export const NewsCardPageMob = (props: { data: string, title: string, img: string, description: string }) => {
	const { data, title, img, description } = props;
	return (
		<div className='container_mobile_card_news'>
			<div className="mobile_cardNews">
				<div className='mobile_cardNews-data'><p>{data}</p></div>
				<div className="mobile_cardNews_title">
				<h3>{title}</h3>
				</div>
				<div className='mobile_cardNews-info'>			
				<img src={img} alt="" />
					<span>{description}
					</span>
				</div>
			</div>

		</div>
	)
}




