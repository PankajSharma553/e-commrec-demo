import React from "react";
import "./Flash.css";
import falshImg1 from "../../assets/images/flash-img1.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { Pagination } from "swiper/modules";

const Flash = () => {
  return (
    <section className="falshSec">
      <div className="container">
        <div className="falshSec_wrapper">
          <div className="falshSec_topbar">
            <div className="falshSec_tobbarLeft">
              <div className="pageTitle">
                <div className="pageTitleTpbar">
                  <div className="pageTitleTpbar_wrapp">
                    <span className="bg_red"></span>
                    <h4>Today’s</h4>
                  </div>
                  <h2 className="page-heading">Flash Sales</h2>
                </div>
              </div>
              <div className="countdown">
                <div className="countdown_wrapp">
                  <div className="countdown_sec">
                    <span>Days</span>
                    <h3>03</h3>
                  </div>
                  <div className="countdown_sec">
                    <span>Hours</span>
                    <h3>23</h3>
                  </div>
                  <div className="countdown_sec">
                    <span>Minutes</span>
                    <h3>19</h3>
                  </div>
                  <div className="countdown_sec">
                    <span>Seconds</span>
                    <h3>56</h3>
                  </div>
                </div>
              </div>
            </div>
            <div className="falshSec_tobbarRight"></div>
          </div>
          <div className="falshSec_inner">
            <Swiper
              spaceBetween={30}
              slidesPerView={4}
              pagination={{
                clickable: true,
              }}
              modules={[Pagination]}
              className="product"
            >
              {/* sec1 */}
              <SwiperSlide>
                <div className="falshSec_card">
                  <div className="falshSec_cardImg">
                    <img src={falshImg1} alt="falsh iamges1" />
                    <button className="falshesc_btn">Add To Cart</button>
                  </div>
                  <div className="falshSec_cardDisc">
                    <p>-40%</p>
                  </div>
                  <div className="falshSec_cardDetails">
                    <div className="falshSec_cardDetailsWrap">
                      <div className="falshSec_cardDetail">
                        <i class="fa-solid fa-heart"></i>
                      </div>
                      <div className="falshSec_cardDetail">
                        <i class="fa-solid fa-eye"></i>{" "}
                      </div>
                    </div>
                  </div>
                  <div className="falshSec_cardBtm">
                    <h4>HAVIT HV-G92 Gamepad</h4>
                    <div className="falshsec_prizeOff">
                      <p className="falshsec_prizeOffDic">$120</p>
                      <p className="falshsec_prizeOffActtal">$160</p>
                    </div>
                    <div className="rating">
                      <div className="stars">
                        <div className="stars_wrapp">
                          <div className="star">
                            <i class="fa-solid fa-star"></i>
                          </div>
                          <div className="star">
                            <i class="fa-solid fa-star"></i>
                          </div>
                          <div className="star">
                            <i class="fa-solid fa-star"></i>
                          </div>
                          <div className="star">
                            <i class="fa-solid fa-star"></i>
                          </div>
                          <div className="star">
                            <i class="fa-solid fa-star"></i>
                          </div>
                        </div>
                      </div>
                      <p className="ratings">(88)</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              {/* sec1 */}
              <SwiperSlide>
                <div className="falshSec_card">
                  <div className="falshSec_cardImg">
                    <img src={falshImg1} alt="falsh iamges1" />
                    <button className="falshesc_btn">Add To Cart</button>
                  </div>
                  <div className="falshSec_cardDisc">
                    <p>-40%</p>
                  </div>
                  <div className="falshSec_cardDetails">
                    <div className="falshSec_cardDetailsWrap">
                      <div className="falshSec_cardDetail">
                        <i class="fa-solid fa-heart"></i>
                      </div>
                      <div className="falshSec_cardDetail">
                        <i class="fa-solid fa-eye"></i>{" "}
                      </div>
                    </div>
                  </div>
                  <div className="falshSec_cardBtm">
                    <h4>HAVIT HV-G92 Gamepad</h4>
                    <div className="falshsec_prizeOff">
                      <p className="falshsec_prizeOffDic">$120</p>
                      <p className="falshsec_prizeOffActtal">$160</p>
                    </div>
                    <div className="rating">
                      <div className="stars">
                        <div className="stars_wrapp">
                          <div className="star">
                            <i class="fa-solid fa-star"></i>
                          </div>
                          <div className="star">
                            <i class="fa-solid fa-star"></i>
                          </div>
                          <div className="star">
                            <i class="fa-solid fa-star"></i>
                          </div>
                          <div className="star">
                            <i class="fa-solid fa-star"></i>
                          </div>
                          <div className="star">
                            <i class="fa-solid fa-star"></i>
                          </div>
                        </div>
                      </div>
                      <p className="ratings">(88)</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              {/* sec1 */}
              <SwiperSlide>
                <div className="falshSec_card">
                  <div className="falshSec_cardImg">
                    <img src={falshImg1} alt="falsh iamges1" />
                    <button className="falshesc_btn">Add To Cart</button>
                  </div>
                  <div className="falshSec_cardDisc">
                    <p>-40%</p>
                  </div>
                  <div className="falshSec_cardDetails">
                    <div className="falshSec_cardDetailsWrap">
                      <div className="falshSec_cardDetail">
                        <i class="fa-solid fa-heart"></i>
                      </div>
                      <div className="falshSec_cardDetail">
                        <i class="fa-solid fa-eye"></i>{" "}
                      </div>
                    </div>
                  </div>
                  <div className="falshSec_cardBtm">
                    <h4>HAVIT HV-G92 Gamepad</h4>
                    <div className="falshsec_prizeOff">
                      <p className="falshsec_prizeOffDic">$120</p>
                      <p className="falshsec_prizeOffActtal">$160</p>
                    </div>
                    <div className="rating">
                      <div className="stars">
                        <div className="stars_wrapp">
                          <div className="star">
                            <i class="fa-solid fa-star"></i>
                          </div>
                          <div className="star">
                            <i class="fa-solid fa-star"></i>
                          </div>
                          <div className="star">
                            <i class="fa-solid fa-star"></i>
                          </div>
                          <div className="star">
                            <i class="fa-solid fa-star"></i>
                          </div>
                          <div className="star">
                            <i class="fa-solid fa-star"></i>
                          </div>
                        </div>
                      </div>
                      <p className="ratings">(88)</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              {/* sec1 */}
              <SwiperSlide>
                <div className="falshSec_card">
                  <div className="falshSec_cardImg">
                    <img src={falshImg1} alt="falsh iamges1" />
                    <button className="falshesc_btn">Add To Cart</button>
                  </div>
                  <div className="falshSec_cardDisc">
                    <p>-40%</p>
                  </div>
                  <div className="falshSec_cardDetails">
                    <div className="falshSec_cardDetailsWrap">
                      <div className="falshSec_cardDetail">
                        <i class="fa-solid fa-heart"></i>
                      </div>
                      <div className="falshSec_cardDetail">
                        <i class="fa-solid fa-eye"></i>{" "}
                      </div>
                    </div>
                  </div>
                  <div className="falshSec_cardBtm">
                    <h4>HAVIT HV-G92 Gamepad</h4>
                    <div className="falshsec_prizeOff">
                      <p className="falshsec_prizeOffDic">$120</p>
                      <p className="falshsec_prizeOffActtal">$160</p>
                    </div>
                    <div className="rating">
                      <div className="stars">
                        <div className="stars_wrapp">
                          <div className="star">
                            <i class="fa-solid fa-star"></i>
                          </div>
                          <div className="star">
                            <i class="fa-solid fa-star"></i>
                          </div>
                          <div className="star">
                            <i class="fa-solid fa-star"></i>
                          </div>
                          <div className="star">
                            <i class="fa-solid fa-star"></i>
                          </div>
                          <div className="star">
                            <i class="fa-solid fa-star"></i>
                          </div>
                        </div>
                      </div>
                      <p className="ratings">(88)</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              {/* sec1 */}
              <SwiperSlide>
                <div className="falshSec_card">
                  <div className="falshSec_cardImg">
                    <img src={falshImg1} alt="falsh iamges1" />
                    <button className="falshesc_btn">Add To Cart</button>
                  </div>
                  <div className="falshSec_cardDisc">
                    <p>-40%</p>
                  </div>
                  <div className="falshSec_cardDetails">
                    <div className="falshSec_cardDetailsWrap">
                      <div className="falshSec_cardDetail">
                        <i class="fa-solid fa-heart"></i>
                      </div>
                      <div className="falshSec_cardDetail">
                        <i class="fa-solid fa-eye"></i>{" "}
                      </div>
                    </div>
                  </div>
                  <div className="falshSec_cardBtm">
                    <h4>HAVIT HV-G92 Gamepad</h4>
                    <div className="falshsec_prizeOff">
                      <p className="falshsec_prizeOffDic">$120</p>
                      <p className="falshsec_prizeOffActtal">$160</p>
                    </div>
                    <div className="rating">
                      <div className="stars">
                        <div className="stars_wrapp">
                          <div className="star">
                            <i class="fa-solid fa-star"></i>
                          </div>
                          <div className="star">
                            <i class="fa-solid fa-star"></i>
                          </div>
                          <div className="star">
                            <i class="fa-solid fa-star"></i>
                          </div>
                          <div className="star">
                            <i class="fa-solid fa-star"></i>
                          </div>
                          <div className="star">
                            <i class="fa-solid fa-star"></i>
                          </div>
                        </div>
                      </div>
                      <p className="ratings">(88)</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              {/* sec1 */}
              <SwiperSlide>
                <div className="falshSec_card">
                  <div className="falshSec_cardImg">
                    <img src={falshImg1} alt="falsh iamges1" />
                    <button className="falshesc_btn">Add To Cart</button>
                  </div>
                  <div className="falshSec_cardDisc">
                    <p>-40%</p>
                  </div>
                  <div className="falshSec_cardDetails">
                    <div className="falshSec_cardDetailsWrap">
                      <div className="falshSec_cardDetail">
                        <i class="fa-solid fa-heart"></i>
                      </div>
                      <div className="falshSec_cardDetail">
                        <i class="fa-solid fa-eye"></i>{" "}
                      </div>
                    </div>
                  </div>
                  <div className="falshSec_cardBtm">
                    <h4>HAVIT HV-G92 Gamepad</h4>
                    <div className="falshsec_prizeOff">
                      <p className="falshsec_prizeOffDic">$120</p>
                      <p className="falshsec_prizeOffActtal">$160</p>
                    </div>
                    <div className="rating">
                      <div className="stars">
                        <div className="stars_wrapp">
                          <div className="star">
                            <i class="fa-solid fa-star"></i>
                          </div>
                          <div className="star">
                            <i class="fa-solid fa-star"></i>
                          </div>
                          <div className="star">
                            <i class="fa-solid fa-star"></i>
                          </div>
                          <div className="star">
                            <i class="fa-solid fa-star"></i>
                          </div>
                          <div className="star">
                            <i class="fa-solid fa-star"></i>
                          </div>
                        </div>
                      </div>
                      <p className="ratings">(88)</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              {/* sec1 */}
              <SwiperSlide>
                <div className="falshSec_card">
                  <div className="falshSec_cardImg">
                    <img src={falshImg1} alt="falsh iamges1" />
                    <button className="falshesc_btn">Add To Cart</button>
                  </div>
                  <div className="falshSec_cardDisc">
                    <p>-40%</p>
                  </div>
                  <div className="falshSec_cardDetails">
                    <div className="falshSec_cardDetailsWrap">
                      <div className="falshSec_cardDetail">
                        <i class="fa-solid fa-heart"></i>
                      </div>
                      <div className="falshSec_cardDetail">
                        <i class="fa-solid fa-eye"></i>{" "}
                      </div>
                    </div>
                  </div>
                  <div className="falshSec_cardBtm">
                    <h4>HAVIT HV-G92 Gamepad</h4>
                    <div className="falshsec_prizeOff">
                      <p className="falshsec_prizeOffDic">$120</p>
                      <p className="falshsec_prizeOffActtal">$160</p>
                    </div>
                    <div className="rating">
                      <div className="stars">
                        <div className="stars_wrapp">
                          <div className="star">
                            <i class="fa-solid fa-star"></i>
                          </div>
                          <div className="star">
                            <i class="fa-solid fa-star"></i>
                          </div>
                          <div className="star">
                            <i class="fa-solid fa-star"></i>
                          </div>
                          <div className="star">
                            <i class="fa-solid fa-star"></i>
                          </div>
                          <div className="star">
                            <i class="fa-solid fa-star"></i>
                          </div>
                        </div>
                      </div>
                      <p className="ratings">(88)</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>

          <a href="" className="btn">View All Products</a>
        </div>
      </div>
    </section>
  );
};

export default Flash;
