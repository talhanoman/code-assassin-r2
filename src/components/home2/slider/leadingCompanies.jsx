import React from "react";
import {
  ReviewsImgTwo,
} from "../../imagepath";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import OwlCarousel from "react-owl-carousel";

export const LeadingCompanies = () => {
  var settings = {
    loop: true,
    center: true,
    margin: 0,
    autoplay: true,
    responsiveClass: true,
    nav: false,
    responsive: {
      0: {
        items: 1,
        nav: false
      },
      680: {
        items: 2,
        nav: false,
        loop: false
      },
      1000: {
        items: 3,
        nav: true
      }
    }
  };
  return (
    <section className="real-reviews-sec">
      <div className="container">
        <div className="header-two-title text-center" data-aos="fade-up">
          <p className="tagline">Check out these real reviews</p>
          <h2>Users-love-us Dont take it from us</h2>
          <div className="header-two-text text-center m-auto">
            <p className="mb-0">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget
              aenean accumsan bibendum gravida maecenas augue elementum et
              neque. Suspendisse imperdiet.
            </p>
          </div>
        </div>
        <div className="real-reviews-group">
          <div className="row align-items-center">
            <div className="col-md-12 col-md-12" data-aos="fade-up">
              <div class="gtco-testimonials">
                <OwlCarousel
                  {...settings}
                  className="owl-carousel real-reviews owl-theme"
                >
                  <div>
                    <div class="card text-center"><img class="card-img-top" src="https://images.unsplash.com/photo-1572561300743-2dd367ed0c9a?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=50&w=300" alt="" />
                      <div class="card-body">
                        <h5 className="text-primary">Prayag Shokeen <br />
                          <span>Amazon<br />Software Developer </span>
                        </h5>
                        <p class="card-text">“Joining CodeAssassin completely revolutionized
                          my approach towards DSA. The comprehensive
                          knowledge and career mentorship
                          provided truly set me apart
                          during my interviews” </p>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div class="card text-center"><img class="card-img-top" src="https://images.unsplash.com/photo-1588361035994-295e21daa761?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=301&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=50&w=301" alt="" />
                      <div class="card-body">
                        <h5 className="text-primary">Vidhi Jain <br />
                          <span>Amazon<br />Software Engineer </span>
                        </h5>
                        <p class="card-text">“"l found the videos really engaging.
                          DSA never felt so easy.
                          Cot constant support from seniors,
                          huge thanks to all the mentors” </p>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div class="card text-center"><img class="card-img-top" src="https://images.unsplash.com/photo-1575377222312-dd1a63a51638?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=302&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=50&w=302" alt="" />
                      <div class="card-body">
                        <h5 className="text-primary">Sachin Kumar <br />
                          <span>Citibank<br />Software Engineer </span>
                        </h5>
                        <p class="card-text">“Anurag and Sahil are one of the most
                          experienced and hard working individuals
                          I have worked with. I can trust that they
                          are the most capable people
                          to give guidance to new grads” </p>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div class="card text-center"><img class="card-img-top" src="https://images.unsplash.com/photo-1549836938-d278c5d46d20?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=303&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=50&w=303" alt="" />
                      <div class="card-body">
                        <h5 className="text-primary">Jatin Gupta <br />
                          <span>Ernst & Young<br />Data Engineer </span>
                        </h5>
                        <p class="card-text">“Excellent mentors here. I find myself
                          lucky and wish I would have found them
                          sooner” </p>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div class="card text-center"><img class="card-img-top" src="https://images.unsplash.com/photo-1549836938-d278c5d46d20?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=303&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=50&w=303" alt="" />
                      <div class="card-body">
                        <h5 className="text-primary">Nitesh Yadav <br />
                          <span>Sprinklr<br />Data Engineer </span>
                        </h5>
                        <p class="card-text">“Enrolling in CodeAssassin was a
                          game-changer. The profound insights into DSA
                          and career guidance gave me an edge
                          during my interviews.” </p>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div class="card text-center"><img class="card-img-top" src="https://images.unsplash.com/photo-1549836938-d278c5d46d20?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=303&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=50&w=303" alt="" />
                      <div class="card-body">
                        <h5 className="text-primary">Paras Harpal Singh <br />
                          <span>Headfone<br />Software Engineer </span>
                        </h5>
                        <p class="card-text">“Back in college Sahil bhaiya was my senior,
                          he is such an exceptional teacher I can not tell
                          how lucky you would be to work with him!
                          He has numerous contributions in my success” </p>
                      </div>
                    </div>
                  </div>
                </OwlCarousel>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
