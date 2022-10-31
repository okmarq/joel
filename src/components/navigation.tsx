import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { icon } from '@fortawesome/fontawesome-svg-core/import.macro'

class Navigation extends React.Component<{}, {isOpen: boolean}> {
	constructor(props: any) {
		super(props)
		this.state = {isOpen: false}
		this.handleHamburgerClick = this.handleHamburgerClick.bind(this)
	}

	handleHamburgerClick = () => {
		this.setState(prevState => ({
			isOpen: !prevState.isOpen
		}))
	}

	render(): React.ReactNode {
		return (
			<header className='mb-2 sm:mb-20 relative'>
        <div className='hidden sm:block'>
          <nav className='w-full h-16 px-16 flex justify-end gap-6 items-center'>
            <a href="http://#" className='text-xl font-medium hover:text-secondary active:text-primary'>Works</a>
            <a href="http://#" className='text-xl font-medium hover:text-secondary active:text-primary'>Blog</a>
            <a href="http://#" className='text-xl font-medium hover:text-secondary active:text-primary'>Contact</a>
          </nav>
        </div>

        <div className='sm:hidden w-full h-16 px-4 flex justify-end items-center'>
          <button className='font-medium hover:text-secondary active:text-primary' onClick={this.handleHamburgerClick}>
            <FontAwesomeIcon icon={icon({name: 'bars', style: 'solid'})} className='w-8 h-8' />
          </button>
        </div>

				<div className={this.state.isOpen ? '' : 'hidden'}>
					<div className='absolute sm:hidden w-full bg-white px-4'>
						<nav className='flex flex-col items-center'>
							<a href="http://#" className='text-xl font-medium hover:text-secondary active:text-primary p-2'>Works</a>
							<a href="http://#" className='text-xl font-medium hover:text-secondary active:text-primary p-2'>Blog</a>
							<a href="http://#" className='text-xl font-medium hover:text-secondary active:text-primary p-2'>Contact</a>
						</nav>
					</div>
				</div>
      </header>
		)
	}
}

export default Navigation
