import React from 'react'

const Dropdown = () => {
  //   const { click } = props
  //   const [click, setClick] = useState(false)
  //   const clickHandler = () => setClick(prev => !prev)

  console.log('triggered')
  return (
    <>
      <ul
        className='dropdown-menu'
        aria-labelledby='navbarDropdown'
        // onClick={clickHandler}
        // onKeyDown={clickHandler}
      >
        <li>
          <a className='dropdown-item' href='https://www.uwa.edu.au/study/'>
            Future Students
          </a>
        </li>
        <li>
          <a
            className='dropdown-item'
            href='https://www.uwa.edu.au/study/International-students'
          >
            International Students
          </a>
        </li>
      </ul>
    </>
  )
}

export default Dropdown
