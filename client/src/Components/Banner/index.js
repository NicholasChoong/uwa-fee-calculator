import React from 'react'
import video from '../../assets/videos/banner-video.mp4'

const Banner = () => {
  return (
    <>
      <hr className='hr-1' />
      <div className='text-center section'>
        <h1 className='text-effect'>Fee Calculator</h1>

        <div className='video-container'>
          <div className='color-overlay'></div>
          <video autoPlay={true} loop muted>
            <source src={video} type='video/mp4' />
          </video>
        </div>
      </div>
      <hr className='hr-2' />
    </>
  )
}

export default Banner