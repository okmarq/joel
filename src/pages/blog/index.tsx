import React from 'react'

class Blog extends React.Component {
	render(): React.ReactNode {
		return (
			<main>
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
		)
	}
}

export default Blog