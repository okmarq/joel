import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { brands } from '@fortawesome/fontawesome-svg-core/import.macro'

export default function Footer() {
  return (
    <footer id='contact' className='py-6 px-2 sm:px-8 md:px-16 lg:px-32 text-center mt-16 sm:mt-10'>
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
  )
}