
// This is used to giving the TItle of the page in  react 
import React from 'react'
import Helmet from 'react-helmet'

const Metadata = ({pageTitle}) => {
  return (
    <Helmet>
      <title>{pageTitle}</title>
      <link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
    </Helmet>
  )
}

export default Metadata
