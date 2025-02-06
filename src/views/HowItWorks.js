const steps = [
    {
      title: "Step 1: Account Creation",
      items: [
        { icon: <i className="fas fa-user"></i>, text: "Create a free account." },
        { icon: <i className="fas fa-envelope"></i>, text: "Verify your email address." },
      ],
    },
    {
      title: "Step 2: Project Setup",
      items: [
        { icon: <i className="fas fa-folder"></i>, text: "Create a new project." },
        { icon: <i className="fas fa-upload"></i>, text: "Upload your files." },
      ],
    },
    {
      title: "Step 3: Deployment",
      items: [
        { icon: <i className="fas fa-rocket"></i>, text: "Deploy your project." },
        { icon: <i className="fas fa-check"></i>, text: "Monitor your project." },
      ],
    },
  ]
  
  const HowItWorks = () => {
    return (
      <div>
        <h1>How it Works</h1>
        <p>This is a simple explanation of how our service works.</p>
  
        <section className="pb-20 bg-gray-300 -mt-24">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap">
              {steps.map((section, index) => (
                <div key={index} className="lg:pt-12 pt-6 w-full md:w-6/12 px-4 text-center">
                  <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                    <div className="px-4 py-5 flex-auto">
                      <h6 className="text-xl font-semibold">{section.title}</h6>
                      <div className="mt-2 mb-4 text-gray-600">
                        {section.items.map((item, itemIndex) => (
                          <div key={itemIndex} className="flex items-center mt-3">
                            <div className="text-gray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">
                              {item.icon}
                            </div>
                            <p className="ml-4 text-left">{item.text}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    )
  }
  
  export default HowItWorks
  
  