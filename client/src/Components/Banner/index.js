import React from 'react'

const Banner = () => {
  return (
    <>
      <hr className='hr-1' />
      <div className='text-center section'>
        <h1 className='text-effect'>Fee Calculator</h1>

        <div className='video-container'>
          <div className='color-overlay'></div>
          <video autoPlay loop muted>
            <source
              src='../../assets/videos/banner-video.mp4'
              type='video/mp4'
            />
          </video>
        </div>
      </div>
      <hr className='hr-2' />
    </>
  )
}

export default Banner
