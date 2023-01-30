import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import user from '../../utils/user';

export default function Post({ card }) {
  const isLiked = card.likes.some((i) => i._id === user._id);

  return (
    <>
      <li className="feed__post post">
        <div className="post__owner">
          <img
            src={card.owner.avatar}
            alt={`аватар ${card.owner.name}`}
            className="post__avatar"
          />
          <h2 className="post__owner-name">{card.owner.name}</h2>
        </div>

        <Swiper
          spaceBetween={0}
          slidesPerView={1}
          modules={[Pagination]}
          pagination={{
            clickable: true,
          }}
          className="post__item"
        >
          {card.img.map((img) => (
            <SwiperSlide key={Math.random()}>
              <img src={img} alt={card.name} className="post__img" />
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="post__caption">
          <div>
            <p className="post__book-name">{card.name}</p>
            <p className="post__book-author">{card.author}</p>
          </div>
          <div className="post__btn-container">
            <div>
              <button
                type="button"
                className={`post__like ${isLiked && 'post__like_active'}`}
              ></button>
              <p className="post__count">{card.likes.length}</p>
            </div>
            <div>
              <button type="button" className="post__comment"></button>
              <p className="post__count">{card.comments.length}</p>
            </div>
            <button className="post__save-favorite"></button>
          </div>
        </div>
        <p className="post__text"><span className="post__text-owner">{card.owner.name}:</span>{card.text}</p>
      </li>
    </>
  );
}
