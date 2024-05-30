import React from 'react'
import Wrapper from '../layout/Wrapper'
import ai from '../assets/ai-big-icon.svg'
import restaking from '../assets/restaking.svg' // Import restaking image
import payments from '../assets/payments.svg' // Import payments image
import institutions from '../assets/institutions.svg' // Import institutions image
import social from '../assets/social.svg' // Import social image
import { useTranslation } from 'react-i18next'

function Blog() {
	const { t } = useTranslation()

	const blog = [
		{
			img: restaking,
			title: t('blog.restaking'),
		},
		{
			img: payments,
			title: t('blog.payments'),
		},
		{
			img: institutions,
			title: t('blog.institutions'),
		},
		{
			img: social,
			title: t('blog.social'),
		},
	]

	return (
		<>
			<div className='blog-container w-full h-full mt-[180px]'>
				<Wrapper>
					<div className='flex flex-col md:flex-row justify-between items-center mx-[20px] md:mx-0 gap-[40px]'>
						<div>
							<h2 className='text-white font-semibold text-[30px] md:text-[50px] leading-[65px]'>
								{t('blog.h2')}{' '}
								<span style={{ color: 'rgb(0 170 255)' }}>
									{t('blog.coloredh2')}
								</span>
							</h2>
						</div>
						<div>
							<div className='relative card1 flex flex-col border-[2px] rounded-[20px] border-[#303033] hover:border-[#12FF80] w-[350px] md:w-[580px] cursor-pointer bg-[#121312] shadow-lg p-4'>
								<div>
									<img src={ai} alt='AI' className='w-[200px]' />
								</div>
								<h2 className='uppercase text-[50px] text-white font-semibold'>
									{t('blog.did')}
								</h2>
								<p className='text-white font-semibold ml-[3px] text-[17px]'>
									{t('blog.did_p')}
								</p>
							</div>
						</div>
					</div>
					<div className='flex flex-col md:flex-row justify-center items-center gap-[10px] mt-[100px]'>
						{blog.map((card, index) => (
							<div
								key={index}
								className='relative card1 flex flex-col border-[2px] rounded-[20px] border-[#303033] hover:border-[#12FF80] w-[300px] h-[270px] cursor-pointer bg-[#121312] shadow-lg p-4'
							>
								<div>
									<img
										src={card.img}
										alt={`Image ${index}`}
										className='w-[70px]'
									/>
								</div>
								<h2 className='text-[18px] text-white font-semibold m-[4px]'>
									{card.title}
								</h2>
							</div>
						))}
					</div>
				</Wrapper>
			</div>
		</>
	)
}

export default Blog
