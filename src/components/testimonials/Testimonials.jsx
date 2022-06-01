import React from "react";
import "./testimonial.css";
import IMG1 from "../../assets/05989F24-4CFD-4D8F-BA0B-CC9674A6AB23_1_105_c.jpeg";
import IMG2 from "../../assets/IMG_2416.jpg";
// import Swiper core and required modules
import { Pagination } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const data = [
  {
    avatar: IMG1,
    name: "Majharul Chowdury",
    review:
      "I asked Prince to build me a professional portfolio site and he did a wonderful job! I believe he's a great programmer. Hard worker who dedicates all his time on creating and practicing his frontend skills so that he can get into the fortune 500 as a web developer. If I ever need a website or mobile app, he's the one I'd go to.",
  },
  {
    avatar: IMG2,
    name: "Kenna Leigh Valeriano Aquino",
    review:
      "Prince is the person I'd go to for any website I'd need made. He's currently working on creating an stamp e-commerce site for me, which is what I'll use to sell wax seal stamps and bundles. He's a sweet and kind person, very patient. I'd go to Prince for help regarding any tech information, programming, and web development",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Review from peers</h5>
      <h2>Testimonials</h2>

      <Swiper
        className="container testimonials__container"
        // install Swiper modules
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {data.map(({ avatar, name, review }, index) => {
          return (
            <SwiperSlide key={index} className="testimonial">
              <div className="client__avatar">
                <img src={avatar} alt={name} />
              </div>
              <h5 className="client__nam">{name}</h5>
              <small className="client__reviw">{review}</small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testimonials;
