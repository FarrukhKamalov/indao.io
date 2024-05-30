import React from 'react'

function MobNavbar({ showMobile }) {
	return (
		<>
			<div className='absolute inset-0 top-0 bottom-0 left-0 right-0 w-screen h-screen text-white bg-[#131413] z-[100]'>
				<div className='flex items-center justify-between'>
					<ul className='flex flex-col items-center absolute top-[50%] bottom-0 left-0 right-0  text-[#9DA0A2] font-semibold gap-[25px]'>
						<li>
							<a href='#' className='hover:text-white'>
								Indao
							</a>
						</li>
						<li>
							<a
								href='https://drive.google.com/file/d/1wmfdtIGPaN9uJBI1DHqN903tP9c_aTG2/view'
								target='_blank'
								className='hover:text-white'
							>
								Reclaim
							</a>
						</li>

						<li>
							<a href='#' className='hover:text-white'>
								About us
							</a>
						</li>
					</ul>
				</div>
			</div>
		</>
	)
}

export default MobNavbar
