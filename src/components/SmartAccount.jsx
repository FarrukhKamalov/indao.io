import React from 'react'
import Wrapper from '../layout/Wrapper'
import rightArrow from '../assets/right-arrow.png'
import manifestobg from '../assets/newmanifest.png'
import { useTranslation } from 'react-i18next'

function SmartAccount() {
	const { t } = useTranslation()
	return (
		<div className='mt-[50px] md:mt-[200px]'>
			<Wrapper>
				<div className='flex flex-col md:flex-row items-center justify-center'>
					<div className='flex flex-col'>
						<h2 className='text-white text-[35px] text-start md:text-start md:text-[50px] font-semibold leading-[48px] md:leading-[60px] mx-[20px] md:mx-0 md:w-[90%] mt-[35px]'>
							{t('smartaccount.h2')}
							{/* <span className='italic'>Наша миссия </span>- стать ведущей
							платформой децентрализованной идентификации <br /> */}
						</h2>
						<div className='flex md:items-center mx-[20px] md:mx-0 md:justify-start mt-[10px] md:mt-[70px]'>
							<a
								href='#'
								className={`text-white text-[20px] text-center md:text-start hover:text-[#12FF80] hover:border-b-[2px] border-[#12FF80] pb-[2px]`}
							>
								{t('smartaccount.p')}
							</a>
							<div className='arrow-container hover:brightness-125'>
								<img
									src={rightArrow}
									alt='arrow'
									className='w-[30px] mt-[4px]'
								/>
							</div>
						</div>
					</div>

					<img src={manifestobg} alt='404' className=' w-full md:w-[550px]' />
				</div>
			</Wrapper>
		</div>
	)
}

export default SmartAccount
