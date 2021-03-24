import React, { useState, useEffect } from "react";
import "./landingpage.css";
import bottomimage from "./bottomimage.png";
import logo from "./logo.png";
import api from "../api";
import Scooter from "./scooter.png";
import Table from "./meeting.png";
import Dish from "./dish.png";
import Phone from "./Phone.png";
import dev1 from "./dev1.jpg";
import dev2 from "./dev2.png";
import dev3 from "./dev3.png";
import playstorebtn from "./playstorebtn.png";
import applestorebtn from "./applestorebtn.png";
import food1 from "./food1.png";
import LoadingContainer from "../components/Loadingcompo";
import RestaurantCard from "../components/restaurantcard/RestaurantCard";
import SignupDrawer from "../components/sideDrawer/signupdrawer";
import LoginDrawer from "../components/sideDrawer/logindrawer";
import Footer from "../components/footer/Footer";

function Landingpage() {
  const [result, set_result] = useState([]);
  const [loading, set_loading] = useState(true);
  const [showLoginDrawer, setShowLoginDrawer] = useState(false);
  const [showSignupDrawer, setShowSignupDrawer] = useState(false);

  useEffect(() => {
    let mounted = true;
    (async () => {
      let response = await api.get("/restaurants");
      if (mounted && response.status === 200) {
        set_result(response.data);
        console.log(response.data);
        set_loading(false);
      }
    })();
  }, []);

  return !loading ? (
    <div className="loading_container">
      <LoadingContainer />
    </div>
  ) : (
    <div className="landingPage">
      <div className="topContainer">
        <div className="row">
          <div className="col-6 topleft_cont offset-1">
            <div className="row logo_container">
              <img src={logo} className="logo" alt="logo" />
              <h4 className="LogoName">JuSnack</h4>
            </div>
            <div className="row">
              <h1 className="text_food">Hungry ?</h1>
              <h2 className="para1">Discover Canteens & Delicious Food !!!</h2>
              <div className="input_container">
                <input
                  placeholder="  Search Canteen or dishes"
                  className="input"
                />
                <button type="button" className="go_button">
                  Go
                </button>
              </div>
            </div>
          </div>
          <div className="col-5">
            <div className="row">
              <div className="col-8">
                <div className="right_container"></div>
                <img className="food_img1" src={food1} alt=" " />
              </div>
              <div className="col-4">
                <div className="button_grp">
                  <button
                    className="login_button"
                    onClick={() => setShowLoginDrawer(true)}
                  >
                    Login
                  </button>
                  <button
                    className="signup_btn"
                    onClick={() => setShowSignupDrawer(true)}
                  >
                    Sign Up
                  </button>
                </div>
              </div>
              <LoginDrawer
                showDrawer={showLoginDrawer}
                closeDrawer={() => setShowLoginDrawer(false)}
              />
              <SignupDrawer
                showDrawer={showSignupDrawer}
                closeDrawer={() => setShowSignupDrawer(false)}
              />
            </div>
          </div>
        </div>
        <div className="row">
          <div className=" middle_container  glass" id="our_canteens">
            <div className="text_support"></div>
            <h2 className="heading2">Some Top canteens to order Food</h2>
            <p className="heading3 quote1">
              <sup>
                <i class="fa fa-quote-left quote_icon" aria-hidden="true"></i>
              </sup>
              &nbsp;Nothing brings people together<br></br>like Good Food&nbsp;
              <sup>
                <i class="fa fa-quote-right quote_icon" aria-hidden="true"></i>
              </sup>
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-12 Card_container">
            {result.map((item, index) => {
              return index < 3 ? (
                <div>
                  <RestaurantCard item={item} />
                </div>
              ) : null;
            })}
            <div className=" see_more_div">
              <p className="see_more_text">See More</p>
              <i
                class="fa fa-arrow-circle-right"
                id="see_more_arrow"
                aria-hidden="true"
              ></i>
            </div>
          </div>
          <div className="row">
            <div className=" middle_container glass" id="my_services">
              <div className="text_support"></div>
              <h2 className="heading2">Our Services</h2>
              <p className="heading3 quote2">
                <sup>
                  <i class="fa fa-quote-left quote_icon" aria-hidden="true"></i>
                </sup>
                &nbsp;Food is the answer<br></br>Who cares what the question
                is&nbsp;
                <sup>
                  <i
                    class="fa fa-quote-right quote_icon"
                    aria-hidden="true"
                  ></i>
                </sup>
              </p>
            </div>
            <div className="services_container">
              <div className="row ">
                <div className="col-6">
                  <div className="row left_services_container">
                    <div className="row " id="top_left_services">
                      <div className="col-12 booking_div ">
                        <div id="booking_table" className="services ">
                          <img src={Table} alt="Meeting" id="meeting_img" />
                        </div>
                        <div className="booking_content glass  services">
                          <h3 className="booking_text"> Fun With Friends</h3>
                          <h6 className="booking_desc">
                            Food taste better when friends are together
                          </h6>
                        </div>
                      </div>
                    </div>
                    <div className="row " id="bottom_left_services">
                      <div className="col-12  booking_div">
                        <div className="dish_content glass  services">
                          <h3 className="dish_text"> Pre-Order Food</h3>
                          <h6 className="dish_desc">
                            Save time and order your food before arrival
                          </h6>
                        </div>
                        <div id="dish" className="services">
                          <img src={Dish} alt="Dish" id="dish_img" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-6 right_services_container">
                  <div className="services" id="home_delivery">
                    <img src={Scooter} alt="Home Delivery" id="scooter_img" />
                  </div>
                  <div className="delivery_content services glass">
                    <h3 className="delivery_text"> Home Delivery</h3>
                    <h5 className="delivery_desc">
                      Get food delivered at your doorstep
                    </h5>
                  </div>
                </div>
              </div>
            </div>
            <div className="download_container glass3">
              <div className="row">
                <div className="col-6">
                  <div className=" apptext_container">
                    <div className="text_support" id="blue_box3"></div>
                    <h2 className="heading3" id="download_text">
                      Download app for exciting deals
                    </h2>
                  </div>
                  <div className="row">
                    <h4 className="download_desc">
                      Order from your favourite canteens &<br></br>say yes to
                      tummy
                    </h4>
                    <div className="row">
                      <img
                        src={playstorebtn}
                        alt="downloadButton"
                        id="button_img"
                      />
                      <img
                        src={applestorebtn}
                        alt="downloadButton"
                        id="button_img"
                      />
                    </div>
                  </div>
                </div>
                <div className="col-6">
                  <img id="phone_img" src={Phone} alt="Download App" />
                </div>
              </div>
            </div>
            <div className="bottom_container glass2">
              <div className="row " id="bottom_row">
                <div className="col-6">
                  <img src={bottomimage} alt="bottom_image" id="bottom_image" />
                </div>
                <div className="col-6"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="developer_container">
          <div className="col-3" id="developer_heading">
            <h2 className="meet_text">Meet</h2>
            <h2 className="meet_text">The</h2>
            <h2 className="meet_text">Developers</h2>
          </div>
          <div className="col-9 developer_detail">
            <div className="dev">
              <img className="dev_image" src={dev1} alt=" " />
              <h3 className="dev_name">Shubham Sinha</h3>
              <span className="dev_type">Front-end Developer</span>
              <div className="dev_icons">
                <a
                  href="https://www.facebook.com/TheNightWolf19/"
                  target="_blank"
                  rel="noreferrer noopener"
                  class="fa fa-facebook-official ico"
                >
                  {" "}
                </a>

                <a
                  href="https://www.instagram.com/shubham___sin/"
                  target="_blank"
                  rel="noreferrer noopener"
                  class="fa fa-instagram ico"
                >
                  {" "}
                </a>
                <a
                  href="https://www.linkedin.com/in/the-night-wolf/"
                  target="_blank"
                  rel="noreferrer noopener"
                  class="fa fa-linkedin ico"
                >
                  {" "}
                </a>
                <a
                  href="https://github.com/The-Night-Wolf-19"
                  target="_blank"
                  rel="noreferrer noopener"
                  class="fa fa-github ico"
                >
                  {" "}
                </a>
              </div>
            </div>
            <div className="dev">
              <img className="dev_image" src={dev2} alt=" " />
              <h3 className="dev_name">Siddharth Ghosh</h3>
              <span className="dev_type">Full Stack Developer</span>
              <div className="dev_icons">
                <a
                  href="https://www.facebook.com/sid.sherdil"
                  target="_blank"
                  rel="noreferrer noopener"
                  class="fa fa-facebook-official ico"
                >
                  {" "}
                </a>

                <a
                  href="https://www.instagram.com/rheagar_targeryan/"
                  target="_blank"
                  rel="noreferrer noopener"
                  class="fa fa-instagram ico"
                >
                  {" "}
                </a>
                <a
                  href="https://www.linkedin.com/in/siddharth-ghosh-8027641b3/"
                  target="_blank"
                  rel="noreferrer noopener"
                  class="fa fa-linkedin ico"
                >
                  {" "}
                </a>
                <a
                  href="https://github.com/siddharthghosh12"
                  target="_blank"
                  rel="noreferrer noopener"
                  class="fa fa-github ico"
                >
                  {" "}
                </a>
              </div>
            </div>
            <div className="dev">
              <img className="dev_image" src={dev3} alt=" " />
              <h3 className="dev_name">Vivek Kumar Arya</h3>
              <span className="dev_type">UI/UX Designer</span>
              <div className="dev_icons">
                <a
                  href="https://www.facebook.com/arya.vivek.581"
                  target="_blank"
                  rel="noreferrer noopener"
                  class="fa fa-facebook-official ico"
                >
                  {" "}
                </a>

                <a
                  href="https://www.instagram.com/arya._.vivek/"
                  target="_blank"
                  rel="noreferrer noopener"
                  class="fa fa-instagram ico"
                >
                  {" "}
                </a>
                <a
                  href="https://www.linkedin.com/in/vivek-arya-a622bb16b/"
                  target="_blank"
                  rel="noreferrer noopener"
                  class="fa fa-linkedin ico"
                >
                  {" "}
                </a>
                <a
                  href="https://github.com/vivekarya12"
                  target="_blank"
                  rel="noreferrer noopener"
                  class="fa fa-github ico"
                >
                  {" "}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Landingpage;
