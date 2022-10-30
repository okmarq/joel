import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid, regular, brands, icon } from '@fortawesome/fontawesome-svg-core/import.macro'
import './app.css'
import Joel from './images/joel.jpg'
import Alumni from './images/alumni.png'

function App() {
  return (
    <div className='antialiased font-heebo text-dark'>
      <header className='mb-2 sm:mb-20'>
        <div className='hidden sm:block'>
          <nav className='w-full h-16 px-16 flex justify-end gap-6 items-center'>
            <a href="http://#" className='text-xl font-medium hover:text-secondary active:text-primary'>Works</a>
            <a href="http://#" className='text-xl font-medium hover:text-secondary active:text-primary'>Blog</a>
            <a href="http://#" className='text-xl font-medium hover:text-secondary active:text-primary'>Contact</a>
          </nav>
        </div>

        <nav className='sm:hidden w-full h-16 px-4 flex justify-end items-center'>
          <button className='font-medium hover:text-secondary active:text-primary'>
            <FontAwesomeIcon icon={icon({name: 'bars', style: 'solid'})} className='w-8 h-8' />
          </button>
        </nav>
      </header>

      <main className='mb-10'>
        <section className='py-4 px-4 sm:px-10 md:px-20 lg:px-48'>
          <h2 className='text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6'>Blog</h2>

          <div className='border-b-2 pb-4 mt-4 mb-8'>
            <div className='flex flex-col gap-3 pr-4'>
              <h3 className='font-medium text-2xl md:text-3xl leading-snug'>UI Interactions of the week</h3>

              <div className='text-sm sm:text-base md:text-lg flex gap-2 sm:gap-4'>
                <span>12 Feb 2019</span>
                <span>|</span>
                <span>Express, Handlebars</span>
              </div>

              <p className='tracking-wide'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
            </div>
          </div>
        </section>
      </main>

      <footer className='py-6 px-2 sm:px-8 md:px-16 lg:px-32 text-center mt-16 sm:mt-10'>
        <div className='flex justify-center items-center gap-4'>
          <a href="http://#">
            <FontAwesomeIcon icon={brands('facebook')} className='w-7 h-7' />
          </a>

          <a href="http://#">
            <FontAwesomeIcon icon={brands('instagram')} className='w-7 h-7' />
          </a>

          <a href="http://#">
            <FontAwesomeIcon icon={brands('twitter')} className='w-7 h-7' />
          </a>

          <a href="http://#">
            <FontAwesomeIcon icon={brands('linkedin')} className='w-7 h-7' />
          </a>

          <a href="http://#">
            <FontAwesomeIcon icon={brands('github')} className='w-7 h-7' />
          </a>
        </div>

        <div>
          <small>Copyright &copy; 2022 All rights reserved</small>
        </div>
      </footer>
    </div>
  );
}

export default App;
