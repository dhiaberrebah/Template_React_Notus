"use client"

import { useState } from "react"
import { useHistory } from "react-router-dom"

import Navbar from "components/Navbars/AuthNavbar.js"
import Footer from "components/Footers/Footer.js"

export default function CreateProject() {
  const history = useHistory()
  const [formData, setFormData] = useState({
    title: "",
    category: "",
    description: "",
    fundingGoal: "",
    duration: "",
    image: null,
  })
  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e) => {
    const { name, value, files } = e.target
    setFormData((prevState) => ({
      ...prevState,
      [name]: files ? files[0] : value,
    }))
    // Clear the error for this field when the user starts typing
    setErrors((prevErrors) => ({ ...prevErrors, [name]: "" }))
  }

  const validateForm = () => {
    const formErrors = {}
    if (!formData.title.trim()) formErrors.title = "Title is required"
    if (!formData.category) formErrors.category = "Category is required"
    if (!formData.description.trim()) formErrors.description = "Description is required"
    if (!formData.fundingGoal || formData.fundingGoal <= 0) formErrors.fundingGoal = "Valid funding goal is required"
    if (!formData.duration || formData.duration <= 0) formErrors.duration = "Valid duration is required"
    if (!formData.image) formErrors.image = "Project image is required"
    return formErrors
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const formErrors = validateForm()
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors)
      return
    }

    setIsSubmitting(true)

    try {
      // Create a new FormData instance
      const data = new FormData()
      // Append all form fields to the FormData
      Object.keys(formData).forEach((key) => {
        data.append(key, formData[key])
      })

      // Here you would typically send the form data to your backend API
      const response = await fetch("/api/projects", {
        method: "POST",
        body: data,
      })

      if (!response.ok) {
        throw new Error("Failed to create project")
      }

      const result = await response.json()
      console.log("Project created:", result)

      // Redirect to the new project page
      history.push(`/projects/${result.id}`)
    } catch (error) {
      console.error("Error creating project:", error)
      setErrors({ submit: "Failed to create project. Please try again." })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <>
      <Navbar transparent />
      <main className="profile-page">
        <section className="relative block h-500-px">
          <div
            className="absolute top-0 w-full h-full bg-center bg-cover"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1267&q=80')",
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
                  <h3 className="text-4xl font-semibold leading-normal mb-2 text-blueGray-700 mb-2">
                    Create a New Project
                  </h3>
                </div>
                <div className="mt-10 py-10 border-t border-blueGray-200">
                  <div className="flex flex-wrap justify-center">
                    <div className="w-full lg:w-8/12 px-4">
                      <form onSubmit={handleSubmit}>
                        <div className="mb-4">
                          <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlFor="title">
                            Project Title
                          </label>
                          <input
                            type="text"
                            id="title"
                            name="title"
                            className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                            placeholder="Enter project title"
                            value={formData.title}
                            onChange={handleChange}
                            required
                          />
                          {errors.title && <p className="text-red-500 text-xs italic">{errors.title}</p>}
                        </div>
                        <div className="mb-4">
                          <label
                            className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                            htmlFor="category"
                          >
                            Category
                          </label>
                          <select
                            id="category"
                            name="category"
                            className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                            value={formData.category}
                            onChange={handleChange}
                            required
                          >
                            <option value="">Select a category</option>
                            <option value="Technology">Technology</option>
                            <option value="Design">Design</option>
                            <option value="Film & Video">Film & Video</option>
                            <option value="Music">Music</option>
                          </select>
                          {errors.category && <p className="text-red-500 text-xs italic">{errors.category}</p>}
                        </div>
                        <div className="mb-4">
                          <label
                            className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                            htmlFor="description"
                          >
                            Project Description
                          </label>
                          <textarea
                            id="description"
                            name="description"
                            rows="4"
                            className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                            placeholder="Describe your project"
                            value={formData.description}
                            onChange={handleChange}
                            required
                          ></textarea>
                          {errors.description && <p className="text-red-500 text-xs italic">{errors.description}</p>}
                        </div>
                        <div className="mb-4">
                          <label
                            className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                            htmlFor="fundingGoal"
                          >
                            Funding Goal ($)
                          </label>
                          <input
                            type="number"
                            id="fundingGoal"
                            name="fundingGoal"
                            className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                            placeholder="Enter funding goal"
                            value={formData.fundingGoal}
                            onChange={handleChange}
                            required
                          />
                          {errors.fundingGoal && <p className="text-red-500 text-xs italic">{errors.fundingGoal}</p>}
                        </div>
                        <div className="mb-4">
                          <label
                            className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                            htmlFor="duration"
                          >
                            Campaign Duration (days)
                          </label>
                          <input
                            type="number"
                            id="duration"
                            name="duration"
                            className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                            placeholder="Enter campaign duration"
                            value={formData.duration}
                            onChange={handleChange}
                            required
                          />
                          {errors.duration && <p className="text-red-500 text-xs italic">{errors.duration}</p>}
                        </div>
                        <div className="mb-4">
                          <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlFor="image">
                            Project Image
                          </label>
                          <input
                            type="file"
                            id="image"
                            name="image"
                            accept="image/*"
                            className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                            onChange={handleChange}
                            required
                          />
                          {errors.image && <p className="text-red-500 text-xs italic">{errors.image}</p>}
                        </div>
                        {errors.submit && <p className="text-red-500 text-xs italic mb-4">{errors.submit}</p>}
                        <div className="text-center mt-6">
                          <button
                            className="bg-lightBlue-500 text-white active:bg-lightBlue-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                            type="submit"
                            disabled={isSubmitting}
                          >
                            {isSubmitting ? "Creating..." : "Create Project"}
                          </button>
                        </div>
                      </form>
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

