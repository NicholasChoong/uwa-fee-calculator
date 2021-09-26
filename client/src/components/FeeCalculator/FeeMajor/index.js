import React from 'react'
import { useFetch } from 'use-http'
import Select from 'react-select'
import PAGES from '../../../libs/pageEnum'

const FeeMajor = props => {
  const {
    data,
    updateData,
    updateFee,
    prevPage,
    nextPage,
    updatePage,
    majorList
  } = props
  //   console.log(majorList)
  return (
    <div>
      <p>Major</p>
      {majorList && majorList.map(major => <p key={major}>{major.label}</p>)}
    </div>
  )
}

export default FeeMajor
