import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faFacebookF,
  faInstagram,
  faTwitter,
  faYoutube,
  faLinkedin
} from '@fortawesome/free-brands-svg-icons'

const Footer = () => {
  return (
    <footer>
      <div className='footer-container'>
        <div className='row'>
          <div className='footer-col'>
            <h4>The University of Western Australia</h4>
            <ul>
              <li>
                <a href='# '>UWA Home</a>
              </li>
              <li>
                <a href='# '>Future UWA Students</a>
              </li>
              <li>
                <a href='# '>Current UWA Students</a>
              </li>
              <li>
                <a href='# '>UWA Staff</a>
              </li>
              <li>
                <a href='# '>Business and Industry</a>
              </li>
              <li>
                <a href='# '>Alumni and Friends</a>
              </li>
              <li>
                <a href='# '>Media</a>
              </li>
            </ul>
          </div>
          <div className='footer-col'>
            <h4>University Information</h4>
            <ul>
              <li>
                <a href='# '>Accessibility</a>
              </li>
              <li>
                <a href='# '>Campus Map</a>
              </li>
              <li>
                <a href='# '>Indigenous Commitment</a>
              </li>
              <li>
                <a href='# '>Privacy and Terms of Use</a>
              </li>
            </ul>
          </div>
          <div className='footer-col'>
            <h4>Explore</h4>
            <ul>
              <li>
                <a href='# '>Study</a>
              </li>
              <li>
                <a href='# '>Research Excellence</a>
              </li>
              <li>
                <a href='# '>Community</a>
              </li>
              <li>
                <a href='# '>Schools</a>
              </li>
              <li>
                <a href='# '>Centres & Institutes</a>
              </li>
              <li>
                <a href='# '>Shop</a>
              </li>
            </ul>
          </div>
          <div className='footer-col'>
            <h4>Follow us</h4>
            <div className='socials'>
              <a href='https://www.facebook.com/universitywa'>
                <FontAwesomeIcon icon={faFacebookF} />
              </a>
              <a href='https://www.instagram.com/universitywa/'>
                <FontAwesomeIcon icon={faInstagram} />
              </a>
              <a href='https://twitter.com/uwanews'>
                <FontAwesomeIcon icon={faTwitter} />
              </a>
              <a href='https://www.youtube.com/user/universitywa'>
                <FontAwesomeIcon icon={faYoutube} />
              </a>
              <a href='https://www.linkedin.com/school/university-of-western-australia/'>
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
