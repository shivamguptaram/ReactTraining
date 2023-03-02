import React from 'react'
import {Routes,Route} from 'react-router-dom';
import Home from './Home';
import Gallery from './Gallery';
import GettingID from './GettingID';
import Apps from './Apps';
import InstalledApps from './InstalledApps';
import GalleryList from './GalleryList';
import NotFoundPage from './NotFoundPage';
import GallerySeparately from './GallerySeparately';
import UseSearch from './UseSearch';
const Example1 = () => {
  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      {/* Child Routes */}
            <Route path='/Gallery' element={<Gallery/>}>
                <Route index element={<GalleryList/>}/>
                <Route path='Apps' element={<Apps/>}/>
                <Route path='installedApps' element={<InstalledApps/>}/>
            </Route>
    <Route path='/GallerySeparate/*' element={<GallerySeparately/>}/>

      <Route path='/sendingidattribute/:id' element={<GettingID/>}/>
      <Route path='useSearch' element={<UseSearch/>}/>
      <Route path='*' element={<NotFoundPage/>}/>

      <Route/>
    </Routes>
  )
}

export default Example1