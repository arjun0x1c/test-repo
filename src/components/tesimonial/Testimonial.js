import React,{useState} from 'react'
import Slider from "react-slick";
import { RiStarFill, RiStarHalfFill } from "react-icons/ri";
import { HiArrowRight, HiArrowLeft } from "react-icons/hi";
import Title from '../layouts/Title'
import { testimonialOne,testimonialTwo, quote, hackwitlogo, delis, webs,fswd, threed } from "../../assets";


function SampleNextArrow(props) {
  const { onClick } = props;
  return (
    <div
      className="w-14 h-12 bg-[#0c1821] hover:bg-black duration-300 rounded-md text-2xl text-gray-400 flex justify-center items-center absolute top-0 right-0 shadow-shadowOne cursor-pointer z-10"
      onClick={onClick}
    >
      <HiArrowRight />
    </div>
  );
}

function SamplePrevArrow(props) {
  const { onClick } = props;
  return (
    <div
      className="w-14 h-12 bg-[#0c1821] hover:bg-black duration-300 rounded-md text-2xl text-gray-400 flex justify-center items-center absolute top-0 right-20 shadow-shadowOne cursor-pointer z-10"
      onClick={onClick}
    >
      <HiArrowLeft />
    </div>
  );
}

const Testimonial = () => {
      const [dotActive, setDocActive] = useState(0);
     const settings = {
       dots: true,
       infinite: true,
       speed: 500,
       slidesToShow: 1,
       slidesToScroll: 1,
       nextArrow:<SampleNextArrow />,
       prevArrow:<SamplePrevArrow />,
       beforeChange: (prev, next) => {
         setDocActive(next);
       },
       appendDots: (dots) => (
         <div
           style={{
             borderRadius: "10px",
             padding: "10px",
           }}
         >
           <ul
             style={{
               display: "flex",
               gap: "15px",
               justifyContent: "center",
               marginTop: "20px",
             }}
           >
             {" "}
             {dots}{" "}
           </ul>
         </div>
       ),
       customPaging: (i) => (
         <div
           style={
             i === dotActive
               ? {
                   width: "12px",
                   height: "12px",
                   color: "blue",
                   background: "#ff014f",
                   borderRadius: "50%",
                   cursor: "pointer",
                 }
               : {
                   width: "12px",
                   height: "12px",
                   color: "blue",
                   background: "gray",
                   borderRadius: "50%",
                   cursor: "pointer",
                 }
           }
         ></div>
       ),
     };
  return (
    <section
      id="testimonial"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title title="“Opportunities don't happen, you create them.”" des="Intership's and WorkShop's" />
      </div>
      <div className="max-w-6xl mx-auto">
        {/* ================ Slider One ================== */}
        <Slider {...settings}>
          <div className="w-full">
            <div className="w-full h-auto flex flex-col lgl:flex-row justify-between">
              <div className="w-full lgl:w-[35%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] p-8 rounded-lg shadow-shadowOne flex flex-col md:flex-row lgl:flex-col gap-8 justify-center md:justify-start lgl:justify-center">
                <img
                  className="h-72 md:h-32 lgl:h-72 rounded-lg object-cover"
                  src={hackwitlogo}
                  alt="testimonialOne"
                />
                <div className="w-full flex flex-col justify-end">
                  <p className="text-xs uppercase text-designColor tracking-wide mb-2">
                  INTERN at Hackwit Technologies Pvt Ltd 
                  </p>
                  <h3 className="text-2xl font-bold">REACT FULL STACK DEVELOPMENT</h3>
                  <p className="text-base tracking-wide text-gray-500">
                    by carrying out the project entitled "SIST leave authorization website".
                  </p>
                </div>
              </div>
              <div className="w-full lgl:w-[60%] h-full flex flex-col justify-between">
                <img className="w-20 lgl:w-32" src={quote} alt="quote" />
                <div className="w-full h-[70%] py-10 bg-gradient-to-r from-[#1e2024] to-[#23272b] rounded-lg shadow-shadowOne p-4 lgl:p-8 flex flex-col justify-center gap-4 lgl:gap-8">
                  <div className="flex flex-col justify-between lgl:items-center py-6 border-b-2 border-b-gray-900">
                    <div>
                      <h3 className="text-xl lgl:text-2xl font-medium tracking-wide">
                        SIST Leave Authorization Website.
                      </h3>
                      <p className="text-base text-gray-400 mt-3">
                        PT-1 Project - July,10,2021 - Aug 12,2021 
                      </p>
                    </div>
                    <div className="text-yellow-500 flex gap-1">
                      <RiStarFill />
                      <RiStarFill />
                      <RiStarFill />
                      <RiStarFill />
                      <RiStarHalfFill />
                    </div>
                  </div>
                  <p className="text-base font-titleFont text-gray-400 font-medium tracking-wide leading-6">
                  "I spearheaded the development of the 'SIST Leave Authorization Website,' a dynamic online platform designed to streamline and automate the leave approval process within our organization. 
                  I played a pivotal role in the project, leveraging my expertise in web development and collaborating with a talented team to create an efficient and user-friendly system. 
                  This project allowed me to hone my skills in web development, project management, and cross-functional collaboration, ultimately contributing to a more efficient and
                   organized leave management process by using MERN STACK."

                   <a href='https://drive.google.com/file/d/1POJirYiKQCQO-rrIUkKwgkDZ52Uzh36D/view' target='_blank'>
                   <div className="w-full">
                <button
                  className="w-full h-12 bg-[#141518] rounded-lg text-base text-gray-400 tracking-wider uppercase hover:text-white duration-300 hover:border-[1px] hover:border-designColor border-transparent"
                >
                  Click Here For Report
                </button>
              </div>

                   </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* ================ Slider Two ================== */}

          <div className="w-full">
            <div className="w-full h-auto flex flex-col lgl:flex-row justify-between">
              <div className="w-full lgl:w-[35%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] p-8 rounded-lg shadow-shadowOne flex flex-col md:flex-row lgl:flex-col gap-8 justify-center md:justify-start lgl:justify-center">
                <img
                  className="h-72 md:h-32 lgl:h-72 rounded-lg object-cover"
                  src={delis}
                  alt="testimonialTwo"
                />
                <div className="w-full flex flex-col justify-end">
                  <p className="text-xs uppercase text-designColor tracking-wide mb-2">
                    COMPUTING INNOVATION CLUSTER Organized
                  </p>
                  <h3 className="text-2xl font-bold">DELINEATION WORKSHOP</h3>
                  <p className="text-base tracking-wide text-gray-500">
                    At Sathyabama Institute of Science and Technology.
                  </p>
                </div>
              </div>
              <div className="w-full lgl:w-[60%] h-full flex flex-col justify-between">
                <img className="w-20 lgl:w-32" src={quote} alt="quote" />
                <div className="w-full h-[70%] py-10 bg-gradient-to-r from-[#1e2024] to-[#23272b] rounded-lg shadow-shadowOne p-4 lgl:p-8 flex flex-col justify-center gap-4 lgl:gap-8">
                  <div className="flex flex-col justify-between lgl:items-center py-6 border-b-2 border-b-gray-900">
                    <div>
                      <h3 className="text-xl lgl:text-2xl font-medium tracking-wide">
                        We Cloned Instagram Structure using Figma.
                      </h3>
                      <p className="text-base text-gray-400 mt-3">
                        via WorkShop - 15th & 16th February 2023.
                      </p>
                    </div>
                    <div className="text-yellow-500 flex gap-1">
                      <RiStarFill />
                      <RiStarFill />
                      <RiStarFill />
                      <RiStarHalfFill />
                      <RiStarHalfFill />
                    </div>
                  </div>
                  <p className="text-base font-titleFont text-gray-400 font-medium tracking-wide leading-6">
                  HI Everyone!!
                  The Delineation workshop was an incredible opportunity for aspiring UI/UX designers and web developers to learn from experts in the field. 
                  We were guided through hands-on exercises and practical projects, gaining invaluable experience in the latest design and development techniques.
                   The workshop focused on building practical skills, covering topics such as wireframing, prototyping, user testing, 
                   and web development fundamentals.
                   <a href='https://drive.google.com/file/d/1V63JeSeXvjVLU3c1Sw_QJL4TIJkBIiTl/view?usp=drive_link' target='_blank'>
                   <div className="w-full">
                <button
                  className="w-full h-12 bg-[#141518] rounded-lg text-base text-gray-400 tracking-wider uppercase hover:text-white duration-300 hover:border-[1px] hover:border-designColor border-transparent"
                >
                  Click Here For Certificate
                </button>
              </div>

                   </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* ================ Slider Three ================== */}

          <div className="w-full">
            <div className="w-full h-auto flex flex-col lgl:flex-row justify-between">
              <div className="w-full lgl:w-[35%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] p-8 rounded-lg shadow-shadowOne flex flex-col md:flex-row lgl:flex-col gap-8 justify-center md:justify-start lgl:justify-center">
                <img
                  className="h-72 md:h-32 lgl:h-72 rounded-lg object-cover"
                  src={webs}
                  alt="testimonialOne"
                />
                <div className="w-full flex flex-col justify-end">
                  <p className="text-xs uppercase text-designColor tracking-wide mb-2">
                   WorkShop At
                  </p>
                  <h3 className="text-2xl font-bold">Web App Development and Security</h3>
                  <p className="text-base tracking-wide text-gray-500">
                    at Sathyabama Institute of Science and Technology.
                  </p>
                </div>
              </div>
              <div className="w-full lgl:w-[60%] h-full flex flex-col justify-between">
                <img className="w-20 lgl:w-32" src={quote} alt="quote" />
                <div className="w-full h-[70%] py-10 bg-gradient-to-r from-[#1e2024] to-[#23272b] rounded-lg shadow-shadowOne p-4 lgl:p-8 flex flex-col justify-center gap-4 lgl:gap-8">
                  <div className="flex flex-col justify-between lgl:items-center py-6 border-b-2 border-b-gray-900">
                    <div>
                      <h3 className="text-xl lgl:text-2xl font-medium tracking-wide">
                        Web App Development and Security WorkShop.
                      </h3>
                      <p className="text-base text-gray-400 mt-3">
                        via workshop - Feb 1, 2023 - Feb 2, 2023.
                      </p>
                    </div>
                    <div className="text-yellow-500 flex gap-1">
                      <RiStarFill />
                      <RiStarFill />
                      <RiStarFill />
                      <RiStarHalfFill />
                      <RiStarHalfFill />
                    </div>
                  </div>
                  <p className="text-base font-titleFont text-gray-400 font-medium tracking-wide leading-6">
                    Has successfully completed the workshop
                    "Web App Development and Security" held on 
                    01.02.2023 to 02.02.2023.

                     <a href='https://drive.google.com/file/d/1BmoqhZMwITTLdMgUMxbYGF9gKgIvwnQP/view?usp=sharing' target='_blank'>
                   <div className="w-full">
                <button
                  className="w-full h-12 bg-[#141518] rounded-lg text-base text-gray-400 tracking-wider uppercase hover:text-white duration-300 hover:border-[1px] hover:border-designColor border-transparent"
                >
                  Click Here For Certificate
                </button>
              </div>

                   </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
           {/* ================ Slider Three ================== */}

           <div className="w-full">
            <div className="w-full h-auto flex flex-col lgl:flex-row justify-between">
              <div className="w-full lgl:w-[35%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] p-8 rounded-lg shadow-shadowOne flex flex-col md:flex-row lgl:flex-col gap-8 justify-center md:justify-start lgl:justify-center">
                <img
                  className="h-72 md:h-32 lgl:h-72 rounded-lg object-cover"
                  src={fswd}
                  alt="testimonialOne"
                />
                <div className="w-full flex flex-col justify-end">
                  <p className="text-xs uppercase text-designColor tracking-wide mb-2">
                   WorkShop At
                  </p>
                  <h3 className="text-2xl font-bold">Full Stack Web Development</h3>
                  <p className="text-base tracking-wide text-gray-500">
                    at Sathyabama Institute of Science and Technology.
                  </p>
                </div>
              </div>
              <div className="w-full lgl:w-[60%] h-full flex flex-col justify-between">
                <img className="w-20 lgl:w-32" src={quote} alt="quote" />
                <div className="w-full h-[70%] py-10 bg-gradient-to-r from-[#1e2024] to-[#23272b] rounded-lg shadow-shadowOne p-4 lgl:p-8 flex flex-col justify-center gap-4 lgl:gap-8">
                  <div className="flex flex-col justify-between lgl:items-center py-6 border-b-2 border-b-gray-900">
                    <div>
                      <h3 className="text-xl lgl:text-2xl font-medium tracking-wide">
                        Full Stack Web Development WorkShop.
                      </h3>
                      <p className="text-base text-gray-400 mt-3">
                        via workshop - March 15, 2023 - March 16, 2023.
                      </p>
                    </div>
                    <div className="text-yellow-500 flex gap-1">
                      <RiStarFill />
                      <RiStarFill />
                      <RiStarFill />
                      <RiStarHalfFill />
                      <RiStarHalfFill />
                    </div>
                  </div>
                  <p className="text-base font-titleFont text-gray-400 font-medium tracking-wide leading-6">
                    Has successfully completed the workshop on 
                    "Full Stack Development with MERN" held on 
                    15.03.2023 to 16.03.2023.

                     <a href='https://drive.google.com/file/d/1jgEQeCmjsVv4-LfroarN6y6bV9Ag0qrk/view?usp=sharing' target='_blank'>
                   <div className="w-full">
                <button
                  className="w-full h-12 bg-[#141518] rounded-lg text-base text-gray-400 tracking-wider uppercase hover:text-white duration-300 hover:border-[1px] hover:border-designColor border-transparent"
                >
                  Click Here For Certificate
                </button>
              </div>

                   </a>
                  </p>
                </div>
              </div>
            </div>
          </div>

                   {/* ================ Slider Three ================== */}

                   <div className="w-full">
            <div className="w-full h-auto flex flex-col lgl:flex-row justify-between">
              <div className="w-full lgl:w-[35%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] p-8 rounded-lg shadow-shadowOne flex flex-col md:flex-row lgl:flex-col gap-8 justify-center md:justify-start lgl:justify-center">
                <img
                  className="h-72 md:h-32 lgl:h-72 rounded-lg object-cover"
                  src={threed}
                  alt="testimonialOne"
                />
                <div className="w-full flex flex-col justify-end">
                  <p className="text-xs uppercase text-designColor tracking-wide mb-2">
                   WorkShop At
                  </p>
                  <h3 className="text-2xl font-bold">3D PRINTING </h3>
                  <p className="text-base tracking-wide text-gray-500">
                  @ Makerspace, Sathyabama centre for Advanced Studies.
                  </p>
                </div>
              </div>
              <div className="w-full lgl:w-[60%] h-full flex flex-col justify-between">
                <img className="w-20 lgl:w-32" src={quote} alt="quote" />
                <div className="w-full h-[70%] py-10 bg-gradient-to-r from-[#1e2024] to-[#23272b] rounded-lg shadow-shadowOne p-4 lgl:p-8 flex flex-col justify-center gap-4 lgl:gap-8">
                  <div className="flex flex-col justify-between lgl:items-center py-6 border-b-2 border-b-gray-900">
                    <div>
                      <h3 className="text-xl lgl:text-2xl font-medium tracking-wide">
                       3D PRINTING WORKSHOP.
                      </h3>
                      <p className="text-base text-gray-400 mt-3">
                        via workshop Training - 24th Mar 2023.
                      </p>
                    </div>
                    <div className="text-yellow-500 flex gap-1">
                      <RiStarFill />
                      <RiStarFill />
                      <RiStarFill />
                      <RiStarHalfFill />
                      <RiStarHalfFill />
                    </div>
                  </div>
                  <p className="text-base font-titleFont text-gray-400 font-medium tracking-wide leading-6">
                    has successfully completed one day Hands-On Training on 3D Printing @ Makerspace, Sathyabama centre for Advanced Studies on 24th Mar 2023.

                     <a href='https://drive.google.com/file/d/1ZcyTIGwdXl_B9Jgv7cp_4VyrA5RfhL5h/view?usp=sharing' target='_blank'>
                   <div className="w-full">
                <button
                  className="w-full h-12 bg-[#141518] rounded-lg text-base text-gray-400 tracking-wider uppercase hover:text-white duration-300 hover:border-[1px] hover:border-designColor border-transparent"
                >
                  Click Here For Certificate
                </button>
              </div>

                   </a>
                   <a href='https://drive.google.com/file/d/1kJM0gu0KFiQTExsehSEWH3O-7xBBOntA/view?usp=sharing' target='_blank'>
                   <div className="w-full">
                <button
                  className="w-full h-12 bg-[#141518] rounded-lg text-base text-gray-400 tracking-wider uppercase hover:text-white duration-300 hover:border-[1px] hover:border-designColor border-transparent"
                >
                  Click Here For Making Video.
                </button>
              </div>

                   </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </section>
  );
}

export default Testimonial