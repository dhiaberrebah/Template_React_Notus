const StatItem = ({ value, label }) => (
    <div className="text-center">
      <p className="text-4xl font-bold text-lightBlue-500">{value}</p>
      <p className="text-sm text-blueGray-500 mt-2">{label}</p>
    </div>
  )
  
  const SuccessStats = () => {
    return (
      <div className="bg-white shadow-xl rounded-lg py-10 px-6 md:px-12">
        <h3 className="text-2xl font-semibold text-center mb-8">Our Impact</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <StatItem value="$50M+" label="Total Funded" />
          <StatItem value="1,000+" label="Successful Projects" />
          <StatItem value="500K+" label="Backers" />
          <StatItem value="50+" label="Countries" />
        </div>
      </div>
    )
  }
  
  export default SuccessStats
  
  