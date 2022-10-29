import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import './app.css'
import Joel from './images/joel.jpg'

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
            <FontAwesomeIcon icon={faBars} className='w-8 h-8' />
          </button>
        </nav>
      </header>

      <main>
        <section className='pb-12 sm:pb-20 px-2 sm:px-8 md:px-16 lg:px-32'>
          <div className='flex items-center justify-between flex-col sm:flex-row sm:items-start gap-10 sm:gap-16 md:gap-20 lg:gap-24'>
            <div className='flex-1 order-2 sm:order-1 text-center sm:text-left'>
              <div className='flex flex-col gap-8 justify-between'>
                <div>
                  <h1 className='font-bold text-4xl leading-snug'>Hi, I am Joel,<br/>Software Engineer</h1>
                </div>

                <div>
                  <p className='tracking-wide'>I can help satisfy your customers with software that passes through the software development lifecycle and functions efficiently. <br/>~ your effective Software Engineer.</p>
                  {/* <p className='tracking-wide'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p> */}
                </div>

                <div>
                  <button className='px-4 py-2 bg-primary text-white rounded'>Download Resume</button>
                </div>
              </div>
            </div>

            <div className='flex-none order-1 sm:order-2'>
              <img src={Joel} alt="software engineer, Joel Okoromi" className='object-cover w-44 h-44 sm:w-48 sm:h-48 md:w-56 md:h-56 lg:w-60 lg:h-60 rounded-full' />
            </div>
          </div>
        </section>

        <section className='bg-green-100'>
          <div className='py-6 px-4 sm:px-8 md:px-16 lg:px-32'>
            <div className='pb-3 flex justify-between items-center'>
              <div>
                <h2 className='text-xl'>Recent posts</h2>
              </div>

              <div>
                <a href="http://#" className='text-secondary'>View all</a>
              </div>
            </div>

            <div className='flex flex-col sm:flex-row justify-between items-center gap-4'>
              <div className='bg-white rounded-sm py-4 pl-3 pr-5'>
                <div className='flex flex-col gap-3'>
                  <h3 className='font-bold text-2xl'>Making a design system from scratch</h3>

                  <div className='text-lg flex gap-4'>
                    <span>12 Feb 2020</span>
                    <span>|</span>
                    <span>Design, Pattern</span>
                  </div>

                  <p className='tracking-wide'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
                </div>
              </div>

              <div className='bg-white rounded-sm py-4 pl-3 pr-5'>
                <div className='flex flex-col gap-3'>
                  <h3 className='font-bold text-2xl'>Creating pixel perfect icons in Figma</h3>

                  <div className='text-lg flex gap-4'>
                    <span>12 Feb 2020</span>
                    <span>|</span>
                    <span>Design, Pattern</span>
                  </div>

                  <p className='tracking-wide'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* <section>
          <div>
            <h2></h2>
          </div>

          <div>
            <div>
              <div>
                <img src="" alt="">
              </div>

              <div>
                <h3></h3>

                <div>
                  <span></span>
                  <span></span>
                </div>
                <p></p>
              </div>
            </div>

            <div>
              <div>
                <img src="" alt="">
              </div>

              <div>
                <h3></h3>

                <div>
                  <span></span>
                  <span></span>
                </div>
                <p></p>
              </div>
            </div>

            <div>
              <div>
                <img src="" alt="">
              </div>

              <div>
                <h3></h3>

                <div>
                  <span></span>
                  <span></span>
                </div>
                <p></p>
              </div>
            </div>
          </div>
        </section> */}
      </main>
    </div>
  );
}

export default App;
