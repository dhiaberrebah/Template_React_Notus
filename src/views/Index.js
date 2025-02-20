import { Link } from "react-router-dom"

import IndexNavbar from "components/Navbars/IndexNavbar.js"
import Footer from "components/Footers/Footer.js"
import ProjectCard from "components/Cards/ProjectCard.js"
import SuccessStats from "components/Cards/SuccessStats.js"
import Testimonial from "components/Cards/Testimonial.js"

// Sample featured projects data
const featuredProjects = [
  {
    id: 1,
    title: "EcoTech: Sustainable Smart Home",
    description: "A revolutionary smart home system focused on sustainability and energy efficiency.",
    image: "https://images.unsplash.com/photo-1558002038-1055907df827?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    fundedAmount: 75000,
    goal: 100000,
    backers: 520,
    daysLeft: 15,
  },
  {
    id: 2,
    title: "ArtVista: Interactive Art Gallery",
    description: "An immersive digital art gallery bringing masterpieces to life through AR technology.",
    image: "https://images.unsplash.com/photo-1547891654-e66ed7ebb968?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    fundedAmount: 30000,
    goal: 50000,
    backers: 310,
    daysLeft: 22,
  },
  {
    id: 3,
    title: "FoodShare: Community Meal Planning",
    description: "A mobile app connecting neighbors to share meals, reduce food waste, and build community.",
    image: "https://images.unsplash.com/photo-1547592180-85f173990888?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    fundedAmount: 12000,
    goal: 20000,
    backers: 180,
    daysLeft: 30,
  },
]

const testimonials = [
  {
    quote:
      "CrowdFund helped me turn my idea into a successful business. The support from the community was incredible!",
    author: "Sarah Johnson",
    role: "Entrepreneur",
    image: "https://randomuser.me/api/portraits/women/1.jpg",
  },
  {
    quote:
      "As an artist, I found the perfect platform to bring my creative projects to life. CrowdFund is a game-changer!",
    author: "Michael Chen",
    role: "Artist",
    image: "https://randomuser.me/api/portraits/men/2.jpg",
  },
  {
    quote:
      "The exposure and funding I received through CrowdFund allowed me to scale my invention beyond my wildest dreams.",
    author: "Emily Rodriguez",
    role: "Inventor",
    image: "https://randomuser.me/api/portraits/women/3.jpg",
  },
]

const recentlyFundedProjects = [
  {
    id: 4,
    title: "EcoPackage: Zero-Waste Packaging",
    description: "Innovative, fully biodegradable packaging solutions for a greener future.",
    image:
      "https://images.unsplash.com/photo-1605600659908-0ef719419d41?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    fundedAmount: 50000,
    goal: 40000,
    backers: 750,
    daysLeft: 0,
  },
  {
    id: 5,
    title: "MindfulApp: Mental Health Support",
    description: "An AI-powered app providing personalized mental health resources and support.",
    image:
      "https://images.unsplash.com/photo-1576633587382-13ddf37b1fc1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    fundedAmount: 100000,
    goal: 80000,
    backers: 2000,
    daysLeft: 0,
  },
]

export default function Index() {
  return (
    <>
      <IndexNavbar fixed />

      {/* Hero Section */}
      <section className="relative pt-16 pb-32 flex content-center items-center justify-center min-h-screen-75">
        <div
          className="absolute top-0 w-full h-full bg-center bg-cover"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1267&q=80')",
          }}
        >
          <span id="blackOverlay" className="w-full h-full absolute opacity-75 bg-black"></span>
        </div>
        <div className="container relative mx-auto">
          <div className="items-center flex flex-wrap">
            <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
              <div className="pr-12">
                <h1 className="text-white font-semibold text-5xl">Your ideas come to life with CrowdFund</h1>
                <p className="mt-4 text-lg text-gray-300">
                  Join a global community of innovators, creators, and supporters. Start your project or back the next
                  big idea today.
                </p>
                <div className="mt-8">
                  <Link
                    to="/create-project"
                    className="bg-lightBlue-500 text-white active:bg-lightBlue-600 font-bold uppercase text-base px-8 py-3 rounded shadow-md hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                  >
                    Start a Project
                  </Link>
                  <Link
                    to="/projects"
                    className="bg-white text-blueGray-700 active:bg-blueGray-50 font-bold uppercase text-base px-8 py-3 rounded shadow-md hover:shadow-lg outline-none focus:outline-none ml-1 mb-1 ease-linear transition-all duration-150"
                  >
                    Explore Projects
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden h-70-px"
          style={{ transform: "translateZ(0)" }}
        >
          <svg
            className="absolute bottom-0 overflow-hidden"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            version="1.1"
            viewBox="0 0 2560 100"
            x="0"
            y="0"
          >
            <polygon className="text-blueGray-200 fill-current" points="2560 0 2560 100 0 100"></polygon>
          </svg>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="pb-20 bg-blueGray-200 -mt-24">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap">
            <div className="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center">
              <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                <div className="px-4 py-5 flex-auto">
                  <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-red-400">
                    <i className="fas fa-award"></i>
                  </div>
                  <h6 className="text-xl font-semibold">Featured Projects</h6>
                  <p className="mt-2 mb-4 text-blueGray-500">
                    Discover innovative projects from creators around the world.
                  </p>
                </div>
              </div>
            </div>

            {featuredProjects.slice(0, 2).map((project) => (
              <div key={project.id} className="w-full md:w-4/12 px-4 text-center">
                <ProjectCard project={project} />
              </div>
            ))}
          </div>

          <div className="flex flex-wrap items-center mt-32">
            <div className="w-full md:w-5/12 px-4 mr-auto ml-auto">
              <h3 className="text-3xl mb-2 font-semibold leading-normal">Bringing Ideas to Life</h3>
              <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-blueGray-600">
                CrowdFund is where innovation meets support. Our platform connects visionary creators with passionate
                backers, turning dreams into reality.
              </p>
              <Link to="/projects" className="font-bold text-blueGray-700 mt-8">
                Explore All Projects
              </Link>
            </div>

            <div className="w-full md:w-4/12 px-4 mr-auto ml-auto">
              <SuccessStats />
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="relative py-20">
        <div
          className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20 h-20"
          style={{ transform: "translateZ(0)" }}
        >
          <svg
            className="absolute bottom-0 overflow-hidden"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            version="1.1"
            viewBox="0 0 2560 100"
            x="0"
            y="0"
          >
            <polygon className="text-white fill-current" points="2560 0 2560 100 0 100"></polygon>
          </svg>
        </div>

        <div className="container mx-auto px-4">
          <div className="items-center flex flex-wrap">
            <div className="w-full md:w-4/12 ml-auto mr-auto px-4">
              <img
                alt="..."
                className="max-w-full rounded-lg shadow-lg"
                src="https://images.unsplash.com/photo-1555212697-194d092e3b8f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
              />
            </div>
            <div className="w-full md:w-5/12 ml-auto mr-auto px-4">
              <div className="md:pr-12">
                <h3 className="text-3xl font-semibold">How It Works</h3>
                <p className="mt-4 text-lg leading-relaxed text-blueGray-500">
                  Getting your project funded on CrowdFund is easy. Follow these simple steps to turn your idea into
                  reality.
                </p>
                <ul className="list-none mt-6">
                  <li className="py-2">
                    <div className="flex items-center">
                      <div>
                        <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-blueGray-100 mr-3">
                          <i className="fas fa-fingerprint"></i>
                        </span>
                      </div>
                      <div>
                        <h4 className="text-blueGray-500">Create your project</h4>
                      </div>
                    </div>
                  </li>
                  <li className="py-2">
                    <div className="flex items-center">
                      <div>
                        <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-blueGray-100 mr-3">
                          <i className="fas fa-bullseye"></i>
                        </span>
                      </div>
                      <div>
                        <h4 className="text-blueGray-500">Set your funding goal</h4>
                      </div>
                    </div>
                  </li>
                  <li className="py-2">
                    <div className="flex items-center">
                      <div>
                        <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-blueGray-100 mr-3">
                          <i className="fas fa-users"></i>
                        </span>
                      </div>
                      <div>
                        <h4 className="text-blueGray-500">Share with your network</h4>
                      </div>
                    </div>
                  </li>
                  <li className="py-2">
                    <div className="flex items-center">
                      <div>
                        <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-blueGray-100 mr-3">
                          <i className="fas fa-rocket"></i>
                        </span>
                      </div>
                      <div>
                        <h4 className="text-blueGray-500">Get funded and make it happen!</h4>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="pt-20 pb-48">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center text-center mb-24">
            <div className="w-full lg:w-6/12 px-4">
              <h2 className="text-4xl font-semibold">Hear From Our Community</h2>
              <p className="text-lg leading-relaxed m-4 text-blueGray-500">
                Discover how CrowdFund has helped creators and innovators bring their ideas to life.
              </p>
            </div>
          </div>
          <div className="flex flex-wrap">
            {testimonials.map((testimonial, index) => (
              <Testimonial key={index} {...testimonial} />
            ))}
          </div>
        </div>
      </section>

      {/* Recently Funded Projects Section */}
      <section className="pb-20 relative block bg-blueGray-800">
        <div
          className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20 h-20"
          style={{ transform: "translateZ(0)" }}
        >
          <svg
            className="absolute bottom-0 overflow-hidden"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            version="1.1"
            viewBox="0 0 2560 100"
            x="0"
            y="0"
          >
            <polygon className="text-blueGray-800 fill-current" points="2560 0 2560 100 0 100"></polygon>
          </svg>
        </div>

        <div className="container mx-auto px-4 lg:pt-24 lg:pb-64">
          <div className="flex flex-wrap text-center justify-center">
            <div className="w-full lg:w-6/12 px-4">
              <h2 className="text-4xl font-semibold text-white">Recently Funded Projects</h2>
              <p className="text-lg leading-relaxed mt-4 mb-4 text-blueGray-400">
                These projects have recently reached their funding goals. Get inspired and start your own project today!
              </p>
            </div>
          </div>
          <div className="flex flex-wrap mt-12 justify-center">
            {recentlyFundedProjects.map((project) => (
              <div key={project.id} className="w-full md:w-4/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
                <ProjectCard project={project} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="pb-20 relative block bg-blueGray-800">
        <div className="container mx-auto px-4 lg:pt-24 lg:pb-64">
          <div className="flex flex-wrap text-center justify-center">
            <div className="w-full lg:w-6/12 px-4">
              <h2 className="text-4xl font-semibold text-white">Ready to Launch Your Project?</h2>
              <p className="text-lg leading-relaxed mt-4 mb-4 text-blueGray-400">
                Join thousands of creators who have successfully funded their projects on CrowdFund. Start your journey
                today!
              </p>
            </div>
          </div>
          <div className="flex flex-wrap mt-12 justify-center">
            <div className="text-center mt-6">
              <Link
                to="/create-project"
                className="bg-lightBlue-500 text-white active:bg-lightBlue-600 font-bold uppercase text-base px-8 py-3 rounded shadow-md hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
              >
                Start Your Project
              </Link>
              <Link
                to="/how-it-works"
                className="ml-1 bg-white text-blueGray-700 active:bg-blueGray-50 font-bold uppercase text-base px-8 py-3 rounded shadow-md hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
              >
                Learn How It Works
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="relative block py-24 lg:pt-0 bg-blueGray-800">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center lg:-mt-64 -mt-48">
            <div className="w-full lg:w-6/12 px-4">
              <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-200">
                <div className="flex-auto p-5 lg:p-10">
                  <h4 className="text-2xl font-semibold">Want to stay updated?</h4>
                  <p className="leading-relaxed mt-1 mb-4 text-blueGray-500">
                    Subscribe to our newsletter and never miss out on exciting new projects and updates.
                  </p>
                  <div className="relative w-full mb-3 mt-8">
                    <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlFor="email">
                      Email
                    </label>
                    <input
                      type="email"
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      placeholder="Email"
                    />
                  </div>
                  <div className="text-center mt-6">
                    <button
                      className="bg-blueGray-800 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                      type="button"
                    >
                      Subscribe
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}

