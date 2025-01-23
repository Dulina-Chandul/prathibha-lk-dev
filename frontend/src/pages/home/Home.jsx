import React from "react";
// CSS
import "./style.css";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="box-border p-0 m-0 no-underline list-none font-rale">
      {/* Header */}
      <header className="fixed inset-x-0 top-0 z-30 w-full max-w-screen-md py-3 mx-auto border border-gray-100 shadow bg-white/80 backdrop-blur-lg md:top-6 md:rounded-2xl lg:max-w-screen-lg">
        <div className="px-4">
          <div className="flex items-center justify-between">
            <div className="flex shrink-0">
              <a aria-current="page" className="flex items-center" href="/">
                <h1 className="h-10 text-[#14b8a6] text-3xl font-bold">P</h1>
                <h1 className="h-9 w-auto text-2xl text-[#14b8a6] font-bold">
                  rathibha <span className="text-[#d946ef]">learn</span>
                </h1>
                <p className="sr-only">Prathibha learn</p>
              </a>
            </div>
            <div className="hidden md:flex md:items-center md:justify-center md:gap-5">
              <Link to={"/contact"}>
                <button className="inline-block px-3 py-2 text-sm font-semibold text-gray-900 transition-transform duration-200 rounded-lg hover:bg-fuchsia-100 hover:text-gray-900 hover:scale-105">
                  Contact
                </button>
              </Link>
              <Link to={"/contact"}>
                <button className="inline-block px-3 py-2 text-sm font-semibold text-gray-900 transition-transform duration-200 rounded-lg hover:bg-fuchsia-100 hover:text-gray-900 hover:scale-105">
                  Courses
                </button>
              </Link>
              <a
                className="inline-block px-3 py-2 text-sm font-medium font-semibold text-gray-900 transition-transform duration-200 rounded-lg hover:bg-fuchsia-100 hover:text-gray-900 hover:scale-105"
                href="#team"
              >
                About Us
              </a>
            </div>

            <div className="flex items-center justify-end gap-3">
              <a
                className="items-center justify-center hidden px-6 py-3 text-sm font-semibold text-gray-900 transition-all duration-200 bg-white shadow-lg rounded-xl ring-1 ring-inset ring-gray-300 hover:scale-105 sm:inline-flex"
                href="/auth"
              >
                Sign in
              </a>
              <a
                className="inline-flex items-center justify-center rounded-xl bg-[#d946ef] px-6 py-3 text-sm font-semibold text-white shadow-lg transition-all duration-300 ease-in-out transform hover:bg-[#a21caf] hover:scale-110 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                href="/auth"
              >
                Login
              </a>
            </div>
          </div>
        </div>
      </header>

      <br />
      <br />
      <br />

      {/* Banner */}
      <section className="grid gap-8 px-4 py-8 m-auto text-center max-w-container md:grid-cols-2 md:items-center md:text-left banner">
        <div className="header__image md:order-2">
          <img src="/header.jpg" alt="header" className="flex w-full " />
        </div>
        <div className="">
          <h1 className="mb-4 text-6xl font-bold leading-20 text-textDark">
            Single Platform For All Your{" "}
            <span className="text-[#d946ef]">English Learning</span> Needs.
          </h1>
          <p className="mb-8 text-sm font-medium leading-7">
            Prathibha LK is an interactive platform designed for Sinhala
            speakers who are interested in learning English. Through this
            platform, users can access various features to enhance their English
            language skills. The platform combines with modern learning tools to
            provide an effective learning experience for Sri Lankan learners.
          </p>
          <form
            action="/"
            className="flex flex-col items-center justify-between rounded-lg gap-y-4 gap-x-0 bg-gray-50 lg:flex-row"
          >
            <button
              type="submit"
              className="w-full py-4 px-8 outline-none border-none text-base whitespace-nowrap text-white bg-[#d946ef] hover:bg-[#a21caf] rounded-lg cursor-pointer"
            >
              Browse courses
            </button>
          </form>
        </div>
      </section>

      {/* Main Components */}
      <div
        id="features"
        className="relative w-full px-8 py-1 md:py-16 lg:py-24 xl:py-40 xl:px-0"
      >
        <div className="container flex flex-col items-center justify-between h-full max-w-6xl mx-auto">
          <h3 className="max-w-2xl px-5 mt-2 text-3xl font-black leading-tight text-center text-gray-900 sm:mt-0 sm:px-0 sm:text-6xl title">
            Main Components of the System
          </h3>
          <div className="flex flex-col w-full mt-0 lg:flex-row sm:mt-10 lg:mt-20 component">
            <div className="w-full max-w-md p-4 mx-auto mb-0 sm:mb-16 lg:mb-0 lg:w-1/3">
              <div className="relative flex flex-col items-center justify-center w-full h-full p-20 mr-5 rounded-lg">
                <svg
                  className="absolute w-full h-full text-gray-100 fill-current"
                  viewBox="0 0 377 340"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g>
                    <g>
                      <path d="M342.8 3.7c24.7 14 18.1 75 22.1 124s18.6 85.8 8.7 114.2c-9.9 28.4-44.4 48.3-76.4 62.4-32 14.1-61.6 22.4-95.9 28.9-34.3 6.5-73.3 11.1-95.5-6.2-22.2-17.2-27.6-56.5-47.2-96C38.9 191.4 5 151.5.9 108.2-3.1 64.8 22.7 18 61.8 8.7c39.2-9.2 91.7 19 146 16.6 54.2-2.4 110.3-35.6 135-21.6z" />
                    </g>
                  </g>
                </svg>
                <img src="/daily.png" alt="" className="relative w-20" />
                <h4 className="relative mt-6 text-lg font-bold text-center">
                  Word of the Day Feature
                </h4>
                <p className="relative mt-2 text-base text-center text-gray-600">
                  A daily vocabulary builder that introduces new words with
                  definitions and usage examples.
                </p>
              </div>
            </div>

            <div className="w-full max-w-md p-4 mx-auto mb-0 sm:mb-16 lg:mb-0 lg:w-1/3">
              <div className="relative flex flex-col items-center justify-center w-full h-full p-20 mr-5 rounded-lg">
                <svg
                  className="absolute w-full h-full text-gray-100 fill-current"
                  viewBox="0 0 358 372"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g>
                    <g>
                      <path d="M315.7 6.5c30.2 15.1 42.6 61.8 41.5 102.5-1.1 40.6-15.7 75.2-24.3 114.8-8.7 39.7-11.3 84.3-34.3 107.2-23 22.9-66.3 23.9-114.5 30.7-48.2 6.7-101.3 19.1-123.2-4.1-21.8-23.2-12.5-82.1-21.6-130.2C30.2 179.3 2.6 141.9.7 102c-2-39.9 21.7-82.2 57.4-95.6 35.7-13.5 83.3 2.1 131.2 1.7 47.9-.4 96.1-16.8 126.4-1.6z" />
                    </g>
                  </g>
                </svg>
                <img src="/video.png" alt="" className="relative w-20" />
                <h4 className="relative mt-6 text-lg font-bold text-center">
                  Video Lessons Repository
                </h4>
                <p className="relative mt-2 text-base text-center text-gray-600">
                  A centralized collection of educational videos for easy
                  access.
                </p>
              </div>
            </div>

            <div className="w-full max-w-md p-4 mx-auto mb-16 lg:mb-0 lg:w-1/3">
              <div className="relative flex flex-col items-center justify-center w-full h-full p-20 mr-5 rounded-lg">
                <svg
                  className="absolute w-full h-full text-gray-100 fill-current"
                  viewBox="0 0 378 410"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g>
                    <g>
                      <path d="M305.9 14.4c23.8 24.6 16.3 84.9 26.6 135.1 10.4 50.2 38.6 90.3 43.7 137.8 5.1 47.5-12.8 102.4-50.7 117.4-37.9 15.1-95.7-9.8-151.7-12.2-56.1-2.5-110.3 17.6-130-3.4-19.7-20.9-4.7-82.9-11.5-131.2C25.5 209.5-3 174.7 1.2 147c4.2-27.7 41-48.3 75-69.6C110.1 56.1 141 34.1 184 17.5c43.1-16.6 98.1-27.7 121.9-3.1z" />
                    </g>
                  </g>
                </svg>
                <img src="/ai.png" alt="" className="relative w-20" />
                <h4 className="relative mt-6 text-lg font-bold text-center">
                  AI-Powered Daily Journal
                </h4>
                <p className="relative mt-2 text-base text-center text-gray-600">
                  A personalized journaling tool with AI-driven insights.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Statistics */}
      <div className="counter">
        <div className="container">
          <h3 className="items-center px-5 mt-2 text-3xl font-black leading-tight text-center text-gray-900 sm:mt-0 sm:px-0 sm:text-6xl title">
            Our Statistics
          </h3>
          <div id="counter" className="py-48 pb-1 title">
            <div className="cell">
              <div className="counter-value number-count">1</div>
              <p className="counter-info">Happy Users</p>
            </div>
            <div className="cell">
              <div className="counter-value number-count">1</div>
              <p className="counter-info">Issues Solved</p>
            </div>
            <div className="cell">
              <div className="counter-value number-count">1</div>
              <p className="counter-info">Good Reviews</p>
            </div>
            <div className="cell">
              <div className="counter-value number-count">1</div>
              <p className="counter-info">Good Reviews</p>
            </div>
          </div>
        </div>
      </div>

      {/* Benefits */}
      <section className="bg-white border-b">
        <div className="container max-w-5xl m-8 mx-auto ">
          <h3 className="items-center px-5 mt-2 text-3xl font-black leading-tight text-center text-gray-900 sm:mt-0 sm:px-0 sm:text-6xl title">
            Benefits to Students
          </h3>
          <div className="w-full py-10 mb-4">
            <div className="w-64 h-1 py-0 mx-auto my-0 rounded-t opacity-25 gradient"></div>
          </div>

          {/* 01 */}
          <div className="flex flex-wrap title">
            <div className="w-5/6 p-6 sm:w-1/2">
              <h3 className="mb-3 text-3xl font-bold leading-none text-gray-800">
                Interactive Learning Tools
              </h3>
              <p className="mb-8 leading-9 text-gray-600">
                Interactive learning tools transform the learning experience by
                making it more engaging, hands-on, and effective. These tools
                include features like quizzes, drag-and-drop activities,
                simulations, and interactive videos. They encourage active
                participation, allowing learners to practice concepts, test
                their understanding, and receive immediate feedback. By
                fostering interaction, these tools cater to various learning
                styles and help maintain focus and motivation, making the
                learning process more dynamic and enjoyable. They are
                particularly beneficial in breaking down complex topics into
                manageable, interactive segments, ensuring learners grasp
                concepts more effectively.
              </p>
            </div>
            <div className="w-full p-6 sm:w-1/2">
              <img src="/tool.png" alt="" />
            </div>
          </div>

          {/* 02 */}
          <div className="flex flex-col-reverse flex-wrap sm:flex-row title">
            <div className="w-full p-6 mt-6 sm:w-1/2">
              <img src="/online.png" alt="" />
            </div>
            <div className="w-full p-6 mt-6 sm:w-1/2">
              <div className="align-middle">
                <h3 className="mb-3 text-3xl font-bold leading-none text-gray-800">
                  Video Lessons for Visual and Auditory Learning
                </h3>
                <p className="mb-8 leading-9 text-gray-600">
                  Video lessons cater to both visual and auditory learners by
                  combining engaging visuals with clear audio explanations. They
                  provide a dynamic way to present complex concepts through
                  animations, diagrams, and real-world demonstrations, making
                  information easier to understand and retain. Video lessons can
                  include subtitles for accessibility, adjustable playback
                  speeds, and chapter markers for convenient navigation. By
                  leveraging storytelling, visuals, and narration, these lessons
                  create an immersive learning experience that appeals to
                  diverse learning preferences and enhances comprehension and
                  memory retention.
                </p>
              </div>
            </div>
          </div>

          {/* 03 */}
          <div className="flex flex-wrap title">
            <div className="w-5/6 p-6 sm:w-1/2">
              <h3 className="mb-3 text-3xl font-bold leading-none text-gray-800">
                AI-Powered Writing Analysis for Immediate Feedback
              </h3>
              <p className="mb-8 leading-9 text-gray-600">
                This feature utilizes advanced AI to analyze written content in
                real-time, offering learners instant, constructive feedback on
                grammar, spelling, punctuation, and style. Beyond basic
                corrections, it evaluates sentence structure, tone, and
                coherence, helping users enhance their writing skills over time.
                Personalized suggestions guide learners to improve clarity,
                organization, and creativity. Whether drafting essays, reports,
                or creative content, this tool supports skill-building by
                identifying strengths and areas for improvement. Its real-time
                functionality ensures learners can make adjustments immediately,
                fostering a more engaging and efficient writing process.
              </p>
            </div>
            <div className="w-full p-6 sm:w-1/2">
              <img src="/ai-power.png" alt="" />
            </div>
          </div>

          {/* 04 */}
          <div className="flex flex-col-reverse flex-wrap sm:flex-row title">
            <div className="w-full p-6 mt-6 sm:w-1/2">
              <img src="/flexible.png" alt="" />
            </div>
            <div className="w-full p-6 mt-6 sm:w-1/2">
              <div className="align-middle">
                <h3 className="mb-3 text-3xl font-bold leading-none text-gray-800">
                  Flexible Learning
                </h3>
                <p className="mb-8 leading-9 text-gray-600">
                  Flexible learning empowers users to access educational content
                  anytime, anywhere, accommodating diverse schedules and
                  lifestyles. It allows learners to progress at their own pace,
                  whether they prefer structured modules or self-directed
                  exploration. This feature supports various devices—like
                  smartphones, tablets, and computers—ensuring seamless learning
                  on the go. With offline access, adaptive learning pathways,
                  and customizable learning schedules, it suits individual
                  needs, making education more inclusive and accessible.
                  Flexible learning fosters a balance between personal
                  commitments and professional or academic growth, making it
                  easier for learners to achieve their goals.
                </p>
              </div>
            </div>
          </div>

          {/* 05 */}
          <div className="flex flex-wrap title">
            <div className="w-5/6 p-6 sm:w-1/2">
              <h3 className="mb-3 text-3xl font-bold leading-none text-gray-800">
                Learn at your own pace
              </h3>
              <p className="mb-8 leading-9 text-gray-600">
                This feature allows learners to progress through content based
                on their individual speed and comfort level, ensuring a
                stress-free and personalized learning experience. It eliminates
                the pressure of fixed schedules, letting users revisit
                challenging topics or move quickly through familiar material. By
                accommodating different learning styles and paces, it fosters a
                deeper understanding and retention of information. Learners have
                the freedom to pause, review, and practice as needed, making
                education adaptable to their unique needs and lifestyles.
              </p>
            </div>
            <div className="w-full p-6 sm:w-1/2">
              <img src="/learn.png" alt="Learn at your own pace" />
            </div>
          </div>

          {/* 06 */}
          <div className="flex flex-col-reverse flex-wrap sm:flex-row title">
            <div className="w-full p-6 mt-6 sm:w-1/2">
              <img src="/cost.png" alt="Cost-Effective Learning" />
            </div>
            <div className="w-full p-6 mt-6 sm:w-1/2">
              <div className="align-middle">
                <h3 className="mb-3 text-3xl font-bold leading-none text-gray-800">
                  Cost-Effective Learning
                </h3>
                <p className="mb-8 leading-9 text-gray-600">
                  Cost-effective learning makes quality education accessible by
                  reducing expenses associated with traditional methods, such as
                  travel, textbooks, and in-person classes. Through digital
                  delivery, learners can access comprehensive resources—like
                  video lessons, interactive tools, and assessments—at a
                  fraction of the cost. Subscription models, pay-as-you-go
                  options, and free basic content ensure affordability for a
                  wide audience. This approach not only saves money but also
                  provides value through continuous updates and diverse
                  materials, making high-quality education both economical and
                  sustainable.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- results --> */}
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
          <h1 className="mb-8 text-3xl font-bold text-center text-gray-900 sm:text-6xl title">
            Outputs / Results From the System
          </h1>
        </div>
        <div className="grid gap-8 row-gap-12 lg:grid-cols-2 title">
          <div className="max-w-md sm:mx-auto sm:text-center">
            <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-fuchsia-50 sm:mx-auto sm:w-24 sm:h-24">
              <i className="bx bxs-quote-alt-left bx-md text-[#14b8a6]"></i>
            </div>
            <h6 className="mb-3 text-xl font-bold leading-5">
              Enhanced English Language Skills
            </h6>
            <p className="mb-3 text-sm text-gray-900">
              This feature helps learners improve their English proficiency
              through interactive exercises, grammar tools, vocabulary-building
              activities, and real-time feedback. It supports reading, writing,
              speaking, and listening skills, fostering better communication and
              confidence in the language.
            </p>
          </div>

          <div className="max-w-md sm:mx-auto sm:text-center">
            <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-fuchsia-50 sm:mx-auto sm:w-24 sm:h-24">
              <i className="bx bxs-quote-alt-right bx-md text-[#14b8a6]"></i>
            </div>
            <h6 className="mb-3 text-xl font-bold leading-5">
              Improved Vocabulary
            </h6>
            <p className="mb-3 text-sm text-gray-900">
              Boost your word power with engaging tools like flashcards, word
              games, and context-based exercises. This feature helps learners
              understand, retain, and use new words effectively, enhancing
              communication and comprehension skills.
            </p>
          </div>

          <div className="max-w-md sm:mx-auto sm:text-center">
            <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-fuchsia-50 sm:mx-auto sm:w-24 sm:h-24">
              <i className="bx bxs-quote-alt-left bx-md text-[#14b8a6]"></i>
            </div>
            <h6 className="mb-3 text-xl font-bold leading-5">
              Better Grammar Understanding
            </h6>
            <p className="mb-3 text-sm text-gray-900">
              Learn grammar effortlessly with step-by-step explanations,
              interactive exercises, and real-time feedback. This feature
              simplifies complex rules and ensures learners gain clarity,
              accuracy, and confidence in their language usage.
            </p>
          </div>

          <div className="max-w-md sm:mx-auto sm:text-center">
            <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-fuchsia-50 sm:mx-auto sm:w-24 sm:h-24">
              <i className="bx bxs-quote-alt-right bx-md text-[#14b8a6]"></i>
            </div>
            <h6 className="mb-3 text-xl font-bold leading-5">
              Enhanced Writing Abilities
            </h6>
            <p className="mb-3 text-sm text-gray-900">
              Develop strong writing skills with guided practice, AI-powered
              feedback, and structured lessons. This feature focuses on
              improving clarity, coherence, grammar, and style, helping learners
              craft compelling and error-free content.
            </p>
          </div>
        </div>
      </div>

      {/* <!-- team --> */}
      <div className="flex flex-col items-center justify-center" id="team">
        <div className="w-full max-w-6xl px-6 py-8 bg-white rounded-lg">
          <h1 className="mb-8 text-3xl font-bold text-center text-gray-900 sm:text-6xl title">
            Our Team
          </h1>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 title">
            {/* <!-- Person 1 --> */}
            <div className="flex flex-col items-center p-6 rounded-lg shadow-md bg-gray-50">
              <img
                src="/team/pasindu.png"
                alt="Person 1"
                className="object-cover w-32 h-32 mb-4 rounded-full"
              />
              <h2 className="text-xl font-semibold text-gray-700">
                Pasindu Surath
              </h2>
              <p className="text-gray-600">[Frontend Developer]</p>
            </div>

            {/* <!-- Person 2 --> */}
            <div className="flex flex-col items-center p-6 rounded-lg shadow-md bg-gray-50">
              <img
                src="/team/dulina.jpg"
                alt="Person 2"
                className="object-cover w-32 h-32 mb-4 rounded-full"
              />
              <h2 className="text-xl font-semibold text-gray-700">
                Dulina Chandul
              </h2>
              <p className="text-gray-600">[Backend Developer]</p>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- footer --> */}
      <footer>
        <div className="max-w-screen-xl p-4 py-6 mx-auto lg:py-16 md:p-8 lg:p-10">
          <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
          <div className="text-center">
            <a
              href="#"
              className="flex items-center justify-center mb-5 text-2xl font-semibold text-gray-900"
            >
              <h1 className="h-10 text-[#14b8a6] text-3xl font-bold">P</h1>
              <h1 className="text-[#14b8a6]">
                rathibha <span className="text-[#d946ef]">learn</span>
              </h1>
            </a>
            <span className="block text-sm text-center text-gray-500 dark:text-gray-400">
              © 2024-2025 Prathiba.lk™. All Rights Reserved.
            </span>
            <ul className="flex justify-center mt-5 space-x-5">
              <li>
                <a
                  href="#"
                  className="text-gray-500 hover:text-gray-900 dark:hover:text-[#14b8a6] dark:text-gray-400"
                >
                  <i className="bx bxl-facebook-circle bx-sm"></i>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-500 hover:text-gray-900 dark:hover:text-[#14b8a6] dark:text-gray-400"
                >
                  <i className="bx bxl-instagram-alt bx-sm"></i>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-500 hover:text-gray-900 dark:hover:text-[#14b8a6] dark:text-gray-400"
                >
                  <i className="bx bxl-github bx-sm"></i>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-500 hover:text-gray-900 dark:hover:text-[#14b8a6] dark:text-gray-400"
                >
                  <i className="bx bxl-twitter bx-sm"></i>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-500 hover:text-gray-900 dark:hover:text-[#14b8a6] dark:text-gray-400"
                >
                  <i className="bx bxl-whatsapp bx-sm"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
