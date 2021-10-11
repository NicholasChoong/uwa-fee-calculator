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
                <a href='https://www.uwa.edu.au'>UWA Home</a>
              </li>
              <li>
                <a href='https://www.uwa.edu.au/study/'>Future UWA Students</a>
              </li>
              <li>
                <a href='https://www.uwa.edu.au/students'>
                  Current UWA Students
                </a>
              </li>
              <li>
                <a href='https://uniwa.sharepoint.com/sites/uwastaffintranet/_layouts/15/AccessDenied.aspx?Source=https%3A%2F%2Funiwa%2Esharepoint%2Ecom%2Fsites%2Fuwastaffintranet&correlation=91e9ea9f%2Da0bf%2D0000%2Dc0db%2Dbabe27566cf4&Type=item&name=74827857%2Da2aa%2D4da8%2D80aa%2Ddb8ad2220a63&listItemId=6'>
                  UWA Staff
                </a>
              </li>
              <li>
                <a href='https://www.uwa.edu.au/business-industry/overview'>
                  Business and Industry
                </a>
              </li>
              <li>
                <a href='https://alumni.uwa.edu.au/'>Alumni and Friends</a>
              </li>
              <li>
                <a href='https://www.web.uwa.edu.au/engage/media'>Media</a>
              </li>
            </ul>
          </div>
          <div className='footer-col'>
            <h4>University Information</h4>
            <ul>
              <li>
                <a href='https://www.web.uwa.edu.au/accessibility'>
                  Accessibility
                </a>
              </li>
              <li>
                <a href='https://www.web.uwa.edu.au/contact/map'>Campus Map</a>
              </li>
              <li>
                <a href='https://www.web.uwa.edu.au/indigenous'>
                  Indigenous Commitment
                </a>
              </li>
              <li>
                <a href='https://www.web.uwa.edu.au/disclaimer-copyright/'>
                  Privacy and Terms of Use
                </a>
              </li>
            </ul>
          </div>
          <div className='footer-col'>
            <h4>Explore</h4>
            <ul>
              <li>
                <a href='https://www.uwa.edu.au/study'>Study</a>
              </li>
              <li>
                <a href='https://www.research.uwa.edu.au/'>
                  Research Excellence
                </a>
              </li>
              <li>
                <a href='https://www.uwa.edu.au/industry-and-community/engage-with-uwa'>
                  Community
                </a>
              </li>
              <li>
                <a href='https://www.uwa.edu.au/schools/home'>Schools</a>
              </li>
              <li>
                <a href='https://www.web.uwa.edu.au/research/institutes'>
                  Centres & Institutes
                </a>
              </li>
              <li>
                <a href='https://www.uniprint.uwa.edu.au/uwa-shop'>Shop</a>
              </li>
            </ul>
          </div>
          <div className='footer-col'>
            <h4>Follow us</h4>
            <div className='social-links'>
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
