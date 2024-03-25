import React from "react";
import styled from "styled-components";
import HeroSection from "../Reusable/HeroSection";
import AboutUs from "../assets/About/AboutUs.jpg";
import Content from "../Reusable/Content";
import AboutStarted from "../assets/About/AboutStarted.jpg";
import Title from "../Reusable/Title";
import AboutUsOne from "../assets/About/AboutUsOne.jpg";
import AboutUsTwo from "../assets/About/AboutUsTwo.jpg";
import AboutUsThree from "../assets/About/AboutUsThree.jpg";

const AboutContainer = styled.div`
  background-image: url(${AboutUs});
  height: 50rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Started = styled.div``;

function About() {
  return (
    <div className="container mx-auto">
      <AboutContainer>
        <HeroSection
          Title={"All About PotteryPro Get To Know Us"}
          Description={
            "Dive into our world and discover the essence of our craft. From our beginnings to our passion for pottery, explore who we are and what drives us. Get to know us better and embark on a journey of creativity and inspiration."
          }
          TextColor={"text-white"}
        />
      </AboutContainer>

      <div className="bg-semilight py-[4rem] sm:py-[4rem] lg:py-[8rem] px-[1rem] md:px-[4rem] 2xl:px-[12rem]">
        <div className="relative  grid 2xl:grid-cols-2 lg:grid-cols-2 gap-8 lg:gap-24 items-center">
          <Started className="z-10 bg-light bg-semibrown mt-[1.3rem] 2xl:ml-[8rem] lg:[5rem] md:ml-[0rem] sm:ml-[0rem] w-full 2xl:w-[35rem] lg:w-[35rem] md:w-full grid justify-center items-center">
            <div className="px-[2rem] 2xl:px-[3rem] lg:px-[3rem] md:px-[2rem] pt-[2rem] pb-[3rem]">
              <Content
                Title={"It All Started With A Youtube Video In 2024"}
                DescriptionOne={
                  "Captivating by the graceful artistry unfolding before her, our founder fell head over heels for pottery. Inspired by the therapeutic allure of clay, she embarked on a mission to share its magic with the world."
                }
                DescriptionTwo={
                  "Join us on a journey of self-discovery and relaxation as you mold, shape, and sculpt your worries away. Whether you're a seasoned ceramic artist or a curious beginner, our expert instructors will guide you through the process with warmth and encouragement."
                }
                btnName={"LEARN ABOUT US"}
                btnBackground={"brown"}
                btnColor={"white"}
                btnHover={"btnDark"}
              />
            </div>
          </Started>

          <div className="mt-6 2xl:block lg:block md:hidden hidden">
            <img src={AboutStarted} alt="What we offer?" />
          </div>
        </div>

        <div className="mt-[9rem] w-full grid justify-center items-center">
          <div className="w-full flex justify-center">
            <Title
              Title={"Now We Have The  Most Amazing Team"}
              SubTitle={"LOOK AT US NOW"}
              Class={"text-center"}
              TextColor={"brown-dark"}
            />
          </div>

          <div className="grid 2xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 grid-cols-1 gap-7 mt-[4rem]">
            <div className="grid">
              <div>
                <img src={AboutUsOne} alt="" />
                <h6 className="mt-6 text-center text-2xl brown-dark font-semibold">
                  Emily Johnson
                </h6>
              </div>
              <h6 className="text-center text-1xl brown-dark">@EmilyJohnson</h6>
            </div>
            <div className="grid">
              <div>
                <img src={AboutUsTwo} alt="" />
                <h6 className="mt-6 font-semibold text-center text-2xl brown-dark">
                  Sophia Martinez
                </h6>
              </div>
              <h6 className="text-center text-1xl brown-dark">
                @SophiaMartinez
              </h6>
            </div>
            <div className="grid">
              <div>
                <img src={AboutUsThree} alt="" />

                <h6 className="mt-6 font-semibold text-center text-2xl brown-dark">
                  Ava Thompson
                </h6>
              </div>
              <h6 className="text-center text-1xl brown-dark">@AvaThompson</h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;