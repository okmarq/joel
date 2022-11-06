import React from 'react'
import Navigation from './components/navigation'
import Footer from './components/footer'
import './assets/css/app.css'
import Home from './pages/home'
import Blog from './pages/blog'
import Work from './pages/work'

class App extends React.Component {
 render(): React.ReactNode {
   return (
    <div className='antialiased font-heebo text-dark'>
      <Navigation />

      {/* <Home />

      <Blog />

      <Work /> */}

      <Footer />
    </div>
   )
 }
}

export default App;
