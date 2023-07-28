
const sectionDesign = () => {

  const gradient = {
    background: "linear-gradient(40deg, #F6FAFD, #F1E2EC)"
  }

  const style = {
    backgrounImage: `url()`,
    backgroundPosition: "center",
    backgroundSize: "cover"
  }

  return (
    <div style={gradient} className='shadow-lg flex w-[fit-content] bg-red-200 rounded-l-full rounded-r-lg overflow-hidden'>
      <div style={style} className='w-44 h-44 !bg-primary rounded-full' />
      <div className='py-4 pl-5'>
        <h2 className='test-gray-900 text-lg font-semibold tracking-wide'>Fast Payments Internationally</h2>
        <p className='text-sm text-gray-600 mr-10 leading-tight'>
          We help you pay for a wide range of school fees which include<br />
          tuition, application, credentials evaluation, SEVIS, admission<br />
          documents etc. Our solution is fast and reliable
        </p>
      </div>
    </div>
  )
}

export default sectionDesign