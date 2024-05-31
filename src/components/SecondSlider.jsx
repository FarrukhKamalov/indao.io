import React from 'react'
import secondslider from '../array/SecondSliderArr' // Assuming this is the correct path to the secondslider array
import Wrapper from '../layout/Wrapper'
import { useTranslation } from 'react-i18next'
import Marquee from 'react-fast-marquee'

function SecondSlider() {
	const { t } = useTranslation()

	return (
		<>
			<Wrapper>
				<div className='flex flex-col items-center'>
					<h2 className='text-white font-semibold text-center text-[35px] mt-[50px]'>
						{t('secondslider.partners')}
					</h2>
				</div>
				<Marquee direction='right'>
					{secondslider().map(slide => (
						<div
							key={slide.title}
							className='flex flex-col items-center mr-[20px] mt-[40px] p-[20px] md:p-[50px]'
						>
							<img
								src={slide.img}
								alt={slide.title}
								className='w-[100px] rounded-full mb-[10px]'
							/>
							<span className='text-white text-[15px] text-center'>
								{slide.title}
							</span>
						</div>
					))}
				</Marquee>
			</Wrapper>
		</>
	)
}

export default SecondSlider
