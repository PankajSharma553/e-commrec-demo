import React, { useEffect, useRef } from "react";
import "./Hero.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay"; 
import heroImg from "../../assets/images/hero-img.png";
import { Pagination, Autoplay } from "swiper/modules"; 
import appleGrayImg from "../../assets/images/apple-gray.png";

const Hero = () => {
  const swiperRef = useRef(null);
  useEffect(() => {
    if (swiperRef.current) {
      swiperRef.current.swiper.slideTo(2); // Activate the third slide (index 2)
    }
  }, []);

  return (
    <section className="hero">
      <div className="container">
        <div className="hero_wrapper">
          <div className="hero_left">
            <div className="hero_leftTab">
              <div className="hero_leftTabWrap">
                <div className="hero_leftTabSec">
                  <p>Woman’s Fashion</p>{" "}
                  <i className="fa-solid fa-arrow-right"></i>
                </div>
                <div className="hero_leftTabSec">
                  <p>Men’s Fashion</p>{" "}
                  <i className="fa-solid fa-arrow-right"></i>
                </div>
                <div className="hero_leftTabSec">
                  <p>Electronics</p>
                </div>
                <div className="hero_leftTabSec">
                  <p>Home & Lifestyle</p>
                </div>
                <div className="hero_leftTabSec">
                  <p>Medicine</p>
                </div>
                <div className="hero_leftTabSec">
                  <p>Sports & Outdoor</p>
                </div>
                <div className="hero_leftTabSec">
                  <p>Baby’s & Toys</p>
                </div>
                <div className="hero_leftTabSec">
                  <p>Groceries & Pets</p>
                </div>
                <div className="hero_leftTabSec">
                  <p>Health & Beauty</p>
                </div>
              </div>
            </div>
          </div>
          <div className="hero_right">
            <Swiper
              ref={swiperRef}
              spaceBetween={50}
              slidesPerView={1}
              pagination={{
                clickable: true, 
              }}
              autoplay={{
                delay: 3000, 
                disableOnInteraction: false, 
              }}
              modules={[Pagination, Autoplay]} 
              className="mySwiper"
            >
              {/* sec1 */}
              <SwiperSlide>
                <div className="hero_rightWrap">
                  <div className="hero_righContent">
                    <div className="hero_rightTopbar">
                      <div className="hero_rightTopbarWrap">
                        <div className="hero_rightTopbarIcon">
                          <img src={appleGrayImg} alt="" />
                        </div>
                        <p>iPhone 14 Series</p>
                      </div>
                    </div>
                    <h1>Up to 10% off Voucher</h1>
                    <button className="btn">
                      <span>Shop Now</span>{" "}
                      <i className="fa-solid fa-arrow-right"></i>
                    </button>
                  </div>
                  <div className="hero_righImg">
                    <div className="hero_img">
                      <img src={heroImg} alt="hero img" />
                    </div>
                  </div>
                </div>
              </SwiperSlide>

              {/* sec2 */}
              <SwiperSlide>
                <div className="hero_rightWrap">
                  <div className="hero_righContent">
                    <div className="hero_rightTopbar">
                      <div className="hero_rightTopbarWrap">
                        <div className="hero_rightTopbarIcon">
                          <img src={appleGrayImg} alt="" />
                        </div>
                        <p>iPhone 14 Series</p>
                      </div>
                    </div>
                    <h1>Up to 10% off Voucher</h1>
                    <button className="btn">
                      <span>Shop Now</span>{" "}
                      <i className="fa-solid fa-arrow-right"></i>
                    </button>
                  </div>
                  <div className="hero_righImg">
                    <div className="hero_img">
                      <img src={heroImg} alt="hero img" />
                    </div>
                  </div>
                </div>
              </SwiperSlide>

              {/* sec3 */}
              <SwiperSlide>
                <div className="hero_rightWrap">
                  <div className="hero_righContent">
                    <div className="hero_rightTopbar">
                      <div className="hero_rightTopbarWrap">
                        <div className="hero_rightTopbarIcon">
                          <img src={appleGrayImg} alt="" />
                        </div>
                        <p>iPhone 14 Series</p>
                      </div>
                    </div>
                    <h1>Up to 10% off Voucher</h1>
                    <button className="btn">
                      <span>Shop Now</span>{" "}
                      <i className="fa-solid fa-arrow-right"></i>
                    </button>
                  </div>
                  <div className="hero_righImg">
                    <div className="hero_img">
                      <img src={heroImg} alt="hero img" />
                    </div>
                  </div>
                </div>
              </SwiperSlide>

              {/* sec4 */}
              <SwiperSlide>
                <div className="hero_rightWrap">
                  <div className="hero_righContent">
                    <div className="hero_rightTopbar">
                      <div className="hero_rightTopbarWrap">
                        <div className="hero_rightTopbarIcon">
                          <img src={appleGrayImg} alt="" />
                        </div>
                        <p>iPhone 14 Series</p>
                      </div>
                    </div>
                    <h1>Up to 10% off Voucher</h1>
                    <button className="btn">
                      <span>Shop Now</span>{" "}
                      <i className="fa-solid fa-arrow-right"></i>
                    </button>
                  </div>
                  <div className="hero_righImg">
                    <div className="hero_img">
                      <img src={heroImg} alt="hero img" />
                    </div>
                  </div>
                </div>
              </SwiperSlide>

              {/* sec5 */}
              <SwiperSlide>
                <div className="hero_rightWrap">
                  <div className="hero_righContent">
                    <div className="hero_rightTopbar">
                      <div className="hero_rightTopbarWrap">
                        <div className="hero_rightTopbarIcon">
                          <img src={appleGrayImg} alt="" />
                        </div>
                        <p>iPhone 14 Series</p>
                      </div>
                    </div>
                    <h1>Up to 10% off Voucher</h1>
                    <button className="btn">
                      <span>Shop Now</span>{" "}
                      <i className="fa-solid fa-arrow-right"></i>
                    </button>
                  </div>
                  <div className="hero_righImg">
                    <div className="hero_img">
                      <img src={heroImg} alt="hero img" />
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
