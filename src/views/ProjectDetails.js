import { useParams } from "react-router-dom"

import Navbar from "components/Navbars/AuthNavbar.js"
import Footer from "components/Footers/Footer.js"

export default function ProjectDetails() {
  const { id } = useParams()

  // In a real application, you would fetch the project details from an API
  // using the id. For this example, we'll use a mock project.
  const project = {
    id: id,
    title: "Eco-friendly Water Bottle",
    creator: "Jane Doe",
    category: "Technology",
    image:
      "https://images.unsplash.com/photo-1602143407151-7111542de6e8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
    description:
      "A revolutionary water bottle that purifies water and tracks your hydration. Our innovative design combines advanced filtration technology with smart sensors to ensure you're always drinking clean, safe water and staying properly hydrated.",
    fundingGoal: 50000,
    currentFunding: 32000,
    backers: 450,
    daysLeft: 15,
  }

  const progress = (project.currentFunding / project.fundingGoal) * 100

  return (
    <>
      <Navbar transparent />
      <main className="profile-page">
        <section className="relative block h-500-px">
          <div
            className="absolute top-0 w-full h-full bg-center bg-cover"
            style={{
              backgroundImage: `url('${project.image}')`,
            }}
          >
            <span id="blackOverlay" className="w-full h-full absolute opacity-50 bg-black"></span>
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
        <section className="relative py-16 bg-blueGray-200">
          <div className="container mx-auto px-4">
            <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg -mt-64">
              <div className="px-6">
                <div className="text-center mt-12">
                  <h3 className="text-4xl font-semibold leading-normal mb-2 text-blueGray-700 mb-2">{project.title}</h3>
                  <div className="text-sm leading-normal mt-0 mb-2 text-blueGray-400 font-bold uppercase">
                    <i className="fas fa-map-marker-alt mr-2 text-lg text-blueGray-400"></i>
                    {project.category}
                  </div>
                  <div className="mb-2 text-blueGray-600 mt-10">
                    <i className="fas fa-user mr-2 text-lg text-blueGray-400"></i>
                    Created by {project.creator}
                  </div>
                </div>
                <div className="mt-10 py-10 border-t border-blueGray-200 text-center">
                  <div className="flex flex-wrap justify-center">
                    <div className="w-full lg:w-9/12 px-4">
                      <p className="mb-4 text-lg leading-relaxed text-blueGray-700">{project.description}</p>
                      <div className="mb-4">
                        <div className="flex justify-between mb-2">
                          <span className="text-blueGray-500">
                            ${project.currentFunding} raised of ${project.fundingGoal}
                          </span>
                          <span className="text-blueGray-500">{project.daysLeft} days left</span>
                        </div>
                        <div className="relative pt-1">
                          <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-blueGray-200">
                            <div
                              style={{ width: `${progress}%` }}
                              className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-lightBlue-500"
                            ></div>
                          </div>
                        </div>
                      </div>
                      <div className="mb-4">
                        <span className="text-xl font-bold text-blueGray-700">{project.backers}</span>
                        <span className="text-md text-blueGray-500"> backers</span>
                      </div>
                      <button
                        className="bg-lightBlue-500 active:bg-lightBlue-600 uppercase text-white font-bold hover:shadow-md shadow text-xs px-4 py-2 rounded outline-none focus:outline-none sm:mr-2 mb-1 ease-linear transition-all duration-150"
                        type="button"
                      >
                        Back this project
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

