import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Gallery from './Gallery';
import GalleryList from './GalleryList';
import Apps from './Apps';
import InstalledApps from './InstalledApps';

const GallerySeparately = () => {
  return (
    <div>
        <Routes>
        <Route element={<Gallery/>}>
            <Route index element={<GalleryList/>}/>
            <Route path='Apps' element={<Apps/>}/>
            <Route path='installedApps' element={<InstalledApps/>}/>
        </Route>
        </Routes>
    </div>
  )
}

export default GallerySeparately