import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, EffectFade } from 'swiper/modules';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';
import { Link } from 'react-router-dom';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

const testimonials = [
  {
    name: "Sarah M.",
    role: "Parent",
    content: "The Cozy Feet program has been amazing for my child's development. Not only have their soccer skills improved, but their confidence and social skills have grown tremendously!",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=400&h=400"
  },
  {
    name: "John D.",
    role: "Parent",
    content: "The coaching staff is exceptional. They truly care about each player's development and create a positive learning environment.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400&h=400"
  }
];

export default function TestimonialsCarousel() {
  return (
    <section id="testimonials" className="bg-black py-12">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <h2 className="text-3xl font-bold text-white">What Parents & Players Say</h2>
          <div className="w-20 h-1 bg-brand-green mx-auto mt-4"></div>
        </motion.div>

        <Swiper
          modules={[Autoplay, Pagination, EffectFade]}
          spaceBetween={30}
          slidesPerView={1}
          effect="fade"
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
            bulletActiveClass: 'swiper-pagination-bullet-active !bg-brand-green',
            bulletClass: 'swiper-pagination-bullet !bg-white opacity-50 mx-2',
          }}
          breakpoints={{
            768: {
              slidesPerView: 2,
              effect: 'slide'
            }
          }}
          className="!pb-12"
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="bg-white rounded-lg p-6 h-full flex flex-col"
              >
                <div className="flex items-center mb-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h3 className="font-bold text-lg">{testimonial.name}</h3>
                    <p className="text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
                <div className="flex-grow">
                  <Quote className="h-8 w-8 text-brand-green opacity-20 mb-2" />
                  <p className="text-gray-700 italic">{testimonial.content}</p>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="text-center mt-8">
          <Link 
            to="/testimonials"
            className="inline-block bg-brand-green text-black px-6 py-2 rounded-lg hover:bg-brand-green/90 transition-colors"
          >
            View All Testimonials
          </Link>
        </div>
      </div>
    </section>
  );
}