import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid, regular, brands, icon } from '@fortawesome/fontawesome-svg-core/import.macro' // <-- import styles to be used
import './app.css';
// import Blog from './pages/blog';
// import Work from './pages/word';
// import Contact from './pages/contact';

function App() {
  const navigation = [
    { name: 'Blog', href: '#', current: true },
    { name: 'Work', href: '#', current: false },
    { name: 'Contact', href: '#', current: false },
  ]

  return (
    <div className='antialiased'>
      {/* <header className='text-3xl font-bold underline'>The navigattion component goes here</header>
      <main className='text-blue-400'>The blog and works go here</main>
      <footer className='text-sm'>The footer goin here</footer> */}

      <header className='mb-16'>
        <div className='hidden sm:block'>
          <nav className='bg-blue-300 dark:bg-slate-800 w-screen h-16 px-16 flex justify-end gap-6 items-center'>
            <a href="http://#" className='text-lg font-medium hover:text-pink-500 active:text-pink-700'>Works</a>
            <a href="http://#" className='text-lg font-medium hover:text-pink-500 active:text-pink-700'>Blog</a>
            <a href="http://#" className='text-lg font-medium hover:text-pink-500 active:text-pink-700'>Contact</a>
          </nav>
        </div>

        <nav className='sm:hidden bg-red-300 dark:bg-slate-800 w-full h-16 px-4 flex justify-end items-center'>
          <button className='text-lg font-medium hover:text-pink-500 active:text-pink-700'>H</button>
        </nav>
      </header>

      <main>
        <section className='px-4 sm:px-16 flex items-center justify-between flex-col sm:flex-row sm:items-start gap-4'>
          <div className='border-2 basis-2/3 order-2 sm:order-1 sm:text-justify text-center'>
            <div>
              <h1 className='font-bold text-4xl text-slate-600'>Hi, I am Joel, <br/>Software Engineer</h1>
            </div>

            <div>
              <p className='text-slate-600'>Satisfy your customers with software that efficiently passes through the software development lifecycle and functions. | your effective Software Engineer.</p>
            </div>

            <div>
              <button className='px-4 py-2 bg-pink-500 text-white rounded'>Download Resume</button>
            </div>
          </div>

          <div className='border-2 basis-1/3 order-1 sm:order-2 w-48 h-48 rounded-full bg-slate-500 border-2'>
            <img src="" alt="software engineer, Joel Okoromi" className='' />
          </div>
        </section>

        {/* <section>
          <div>
            <div>
              <h2></h2>
            </div>

            <div>
              <a href="#"></a>
            </div>
          </div>

          <div>
            <div>
              <h3></h3>

              <div>x | x</div>

              <p></p>
            </div>

            <div>
              <h3></h3>

              <div>x | x</div>

              <p></p>
            </div>
          </div>
        </section> */}

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
