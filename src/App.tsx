import React from 'react'
import Navigation from './components/navigation'
import Footer from './components/footer'
import './assets/css/app.css'
import Home from './pages/home'
import Blog from './pages/blog'
import Work from './pages/work'
import { Route } from 'react-router-dom'

class App extends React.Component {
 render(): React.ReactNode {
   return (
    <div className='antialiased font-heebo text-dark'>
      {/* <switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route exact path='/blog'>
          <Blog />
        </Route>
        <Route exact path='/work'>
          <Work />
        </Route>
      </switch> */}

      <Navigation />

      <Home />

      <Blog />

      <Work />

      <Footer />
    </div>
   )
 }
}

export default App;
