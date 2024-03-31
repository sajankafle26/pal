import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import "./home.css"
import { catData } from '../Data/catData';
import { productData } from '../Data/productData';
import { Link } from 'react-router-dom';


function Home() {
  return (
    < >
       <section className='banner'>
       <Swiper
      spaceBetween={50}
      slidesPerView={1}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide>
        <img src="https://www.goldstarshoes.com/MediaThumb/large/Media/g904.png" alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="https://www.goldstarshoes.com/MediaThumb/large/Media/levitate-with-flair.png" alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="https://www.goldstarshoes.com/MediaThumb/large/Media/boss-your-way-up-4000x2000.png" alt="" />
      </SwiperSlide>
       
    </Swiper>
       </section>

       <section className='category'>
        {catData.map((a)=>(
 <div key={a.id} className='catbox'>
    <img src={a.img}/>
    <h4>{a.catname}</h4>
 </div>
        ))}
           
       </section>


       <section className='products'>
          <h3>New Arrivals</h3>
          <div className="flex">
            {productData.slice(0,8).map((a)=>(
 <div className="pbox" key={a.id}>
  <img src={a.thumbnail} alt="" />
  <h5>{a.title}</h5>
  <Link className='btn' to={`/details/${a.id}`}>Read More</Link>
 </div>
            ))}
           
          </div>
       </section>
    </ >
  )
}

export default Home
