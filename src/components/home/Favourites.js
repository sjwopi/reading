import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { favoritesCards } from '../../utils/cards';

export default function Favorites({ onCardOpen }) {
  return (
    <>
    <Swiper
      spaceBetween={20}
      slidesPerView="auto"
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
      className='favorites'
    >
      {favoritesCards.map((card) => (
        <SwiperSlide className="favorites__item" onClick={onCardOpen}>
          <img src={card.img} alt={card.name} className="favorites__img" />
        </SwiperSlide>
      ))}
    </Swiper>
    <div className='favorites__line'></div>
    </>
  );
}
