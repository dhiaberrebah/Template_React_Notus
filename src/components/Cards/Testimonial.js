const Testimonial = ({ quote, author, role, image }) => {
    return (
      <div className="w-full md:w-6/12 lg:w-4/12 px-4 text-center">
        <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
          <div className="px-4 py-5 flex-auto">
            <img
              alt={author}
              src={image || "/placeholder.svg"}
              className="shadow-md rounded-full max-w-full w-16 mx-auto p-2 bg-white"
            />
            <h6 className="text-xl font-semibold">{author}</h6>
            <p className="mt-2 mb-4 text-blueGray-500">{role}</p>
            <p className="mb-4 text-blueGray-500">"{quote}"</p>
          </div>
        </div>
      </div>
    )
  }
  
  export default Testimonial
  
  