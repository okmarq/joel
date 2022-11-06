import React from 'react'
import Navigation from './components/navigation'
import Footer from './components/footer'
import './assets/css/app.css'

class App extends React.Component {
 render(): React.ReactNode {
   return (
    <div className='antialiased font-heebo text-dark'>
      <Navigation />

      <Footer />
    </div>
   )
 }
}

export default App;
