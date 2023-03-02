import React from 'react'
import { Link,Outlet } from 'react-router-dom'

const Gallery = () => {
  return (
    <>
    <div>
        <h1>Gallery</h1>
        <Link to='/Gallery/Apps' > Go to Default Apps </Link>
        <Link to='/Gallery/installedApps' > Go to Installed Apps </Link>
    </div>
    <Outlet/>
    </>

  )
}

export default Gallery