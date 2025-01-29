import React from "react";
import { FaHandsHelping, FaUsers, FaLightbulb, FaGlobe } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";

const Content1 = () => {
  const contentData = [
    {
      title: "Power of Unity",
      description:
        "Like-minded brothers and sisters join hands under the Riyadh KMCC umbrella to display a praiseworthy range of social services.",
      icon: <FaHandsHelping className="text-rose-500 text-5xl" />,
    },
    {
      title: "Selfless Volunteers",
      description:
        "The success of KMCC lies in the generous and kind volunteers who spend their valuable time for the needy.",
      icon: <FaUsers className="text-blue-500 text-5xl" />,
    },
    {
      title: "Catalyst to Upliftment",
      description:
        "Riyadh KMCC takes special care to promote the talents of its members and spread the light of motivation and confidence.",
      icon: <FaLightbulb className="text-yellow-400 text-5xl" />,
    },
    {
      title: "Global Impact",
      description:
        "KMCC’s global presence has positively influenced the lives of millions of expatriates, offering them a sense of community and security.",
      icon: <FaGlobe className="text-green-500 text-5xl" />,
    },
  ];

  return (
    <div className="relative py-10 px-4 md:px-12 lg:px-20">
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        breakpoints={{
          480: { slidesPerView: 1.5 },
          640: { slidesPerView: 2 },
          768: { slidesPerView: 2.5 },
          1024: { slidesPerView: 3 },
          1280: { slidesPerView: 4 },
        }}
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        modules={[Pagination, Autoplay]}
        className="mySwiper"
      >
        {contentData.map((content, index) => (
          <SwiperSlide key={index}>
            <div className="flex flex-col items-center text-center p-4 bg-white/10 hover:bg-white/20 backdrop-blur-lg rounded-lg shadow-lg transition-all duration-500 hover:scale-105 h-auto sm:h-[260px] md:h-[220px] lg:h-[200px] xl:h-[180px]">
              <div className="mb-2">{content.icon}</div>
              <h3 className="text-base font-bold text-black mb-1">
                {content.title}
              </h3>
              <p className="text-gray-700 text-xs leading-tight">
                {content.description}
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Content1;
