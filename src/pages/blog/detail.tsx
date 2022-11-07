import Alumni from '../../assets/images/alumni.png'

export default function BlogDetail() {
  return (
    <main>
      <section className='py-4 px-4 sm:px-10 md:px-20 lg:px-48'>
        <div className='flex flex-col gap-2 sm:gap-4'>
          <h3 className='font-bold text-2xl md:text-3xl leading-snug'>Designing Dashboards with usability in mind</h3>

          <div className='text-sm sm:text-base md:text-lg lg:text-xl flex gap-2 sm:gap-4'>
            <span className='bg-primary text-white px-2 md:text-lg rounded-r-full rounded-l-full flex items-center'>2020</span>
            <span className='text-light'>Dashboard, User Experience Design</span>
          </div>

          <p className='tracking-wide'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>

          <img src={Alumni} alt="project" className='rounded-md object-fit w-full' />

          <h4 className='font-medium text-xl md:text-2xl'>Heading 1</h4>

          <h5 className='font-medium text-lg md:text-xl'>Heading 2</h5>

          <p className='tracking-wide'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>

          <img src={Alumni} alt="project" className='rounded-md object-fit w-full' />

          <img src={Alumni} alt="project" className='rounded-md object-fit w-full' />
        </div>
      </section>
    </main>
  )
}