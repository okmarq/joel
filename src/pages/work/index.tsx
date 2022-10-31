import React from 'react'
import Alumni from '../../assets/images/alumni.png'

class Work extends React.Component {
	render(): React.ReactNode {
		return (
			<main>
        <section className='py-4 px-4 sm:px-8 md:px-16 lg:px-32'>
          <div className='flex justify-center sm:justify-start'>
            <h2 className='text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6'>Work</h2>
          </div>

          <div className='flex sm:flex-row flex-col gap-4 border-b-2 pb-4 mt-4 mb-8'>
            <div className='sm:w-5/12'>
              <img src={Alumni} alt="project" className='rounded-md object-fit w-full' />
            </div>

            <div className='flex flex-col gap-3 sm:w-7/12'>
              <h3 className='font-medium text-2xl md:text-3xl leading-snug'>Designing Dashboards</h3>

              <div className='text-sm sm:text-base md:text-lg flex gap-2 sm:gap-4'>
                <span className='bg-dark text-white px-2 md:text-lg rounded-r-full rounded-l-full flex items-center'>2020</span>
                <span className='text-lg md:text-xl text-light'>Dashboard</span>
              </div>

              <p className='tracking-wide'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
            </div>
          </div>
        </section>
      </main>
		)
	}
}

export default Work