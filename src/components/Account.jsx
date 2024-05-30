// import React from 'react'
// import code from '../assets/code.png'
// import Wrapper from '../layout/Wrapper'

// function Account() {
// 	return (
// 		<>
// 			<Wrapper>
// 				<div className='flex flex-col justify-center mt-[150px]'>
// 					<h1 className='text-white font-semibold text-[30px] md:text-[50px] text-center mx-[20px] md:mx-0'>
// 						Full stack Account Abstraction
// 					</h1>
// 					<div className='mt-[80px] mx-[15px] md:mx-0'>
// 						<div className='border border-[#303033] flex flex-col md:flex-row justify-center items-center rounded-[10px]'>
// 							<div className='flex items-center justify-center md:justify-start  md:border-l-none border-[#303033] w-full gap-3 p-4'>
// 								<img src={code} alt='code' className='ml-[20px]' />
// 								<h2 className='text-white font-semibold text-[20px]'>
// 									Stealth security
// 								</h2>
// 							</div>
// 							<div className='flex items-center justify-center md:justify-start  md:border-l border-[#303033] w-full gap-3 p-4'>
// 								<img src={code} alt='code' className='ml-[20px]' />
// 								<h2 className='text-white font-semibold text-[20px]'>
// 									Easy onramps
// 								</h2>
// 							</div>
// 							<div className='flex items-center justify-center md:justify-start  md:border-l border-[#303033] w-full gap-3 p-4'>
// 								<img src={code} alt='code' className='ml-[20px]' />
// 								<h2 className='text-white font-semibold text-[20px]'>
// 									Simplified login
// 								</h2>
// 							</div>
// 							<div className='flex items-center justify-center md:justify-start md:border-l border-[#303033] w-full gap-3 p-4'>
// 								<img src={code} alt='code' className='ml-[20px]' />
// 								<h2 className='text-white font-semibold text-[20px]'>
// 									Sponsored gas
// 								</h2>
// 							</div>
// 						</div>
// 					</div>
// 				</div>

// 				{/* <div className='flex flex-col md:flex-row mx-[15px] md:mx-0 justify-center items-center gap-[20px] mt-[50px]'>
// 					<div className='relative card1 flex flex-col  border-[1px] rounded-[20px] border-[#303033] hover:border-[#12FF80] max-w-[400px] cursor-pointer w-full shadow-lg'>
// 						<p className='text-[#A1A3A7] font-semibold mt-[30px] ml-[15px] uppercase'>
// 							PROTOCOL KIT
// 						</p>
// 						<div className='w-[30px] arrow absolute right-5 top-4 transform transition-all ease-in rotate-[320deg]'>
// 							<svg
// 								width='35'
// 								height='35'
// 								viewBox='0 0 24 24'
// 								fill='none'
// 								xmlns='http://www.w3.org/2000/svg'
// 								className='text-white arrow'
// 							>
// 								<path
// 									d='M5 12h14M12 5l7 7-7 7'
// 									stroke='currentColor'
// 									strokeWidth='1.5'
// 									strokeLinecap='round'
// 									strokeLinejoin='round'
// 								/>
// 							</svg>
// 						</div>
// 						<div className='mt-[20px]'></div>
// 						<div className='my-[40px]'>
// 							<h2 className='font-semibold text-[30px] ml-[15px] text-white'>
// 								Safe Smart Account
// 							</h2>
// 							<p className='text-[17px] text-white font-semibold ml-[15px] mt-[10px]'>
// 								Use the most secure and modular Smart Account
// 							</p>
// 						</div>
// 					</div>
// 					<div className='relative card1 flex flex-col  border-[1px] rounded-[20px] border-[#303033] hover:border-[#12FF80] max-w-[400px] cursor-pointer w-full shadow-lg'>
// 						<p className='text-[#A1A3A7] font-semibold mt-[30px] ml-[15px] uppercase'>
// 							Explore docs
// 						</p>
// 						<div className='w-[30px] arrow absolute right-5 top-4 transform transition-all ease-in rotate-[320deg]'>
// 							<svg
// 								width='35'
// 								height='35'
// 								viewBox='0 0 24 24'
// 								fill='none'
// 								xmlns='http://www.w3.org/2000/svg'
// 								className='text-white arrow'
// 							>
// 								<path
// 									d='M5 12h14M12 5l7 7-7 7'
// 									stroke='currentColor'
// 									strokeWidth='1.5'
// 									strokeLinecap='round'
// 									strokeLinejoin='round'
// 								/>
// 							</svg>
// 						</div>
// 						<div className='mt-[20px]'></div>
// 						<div className='my-[40px]'>
// 							<h2 className='font-semibold text-[30px] ml-[15px] text-white'>
// 								4337 Safe Module
// 							</h2>
// 							<p className='text-[17px] text-white font-semibold ml-[15px] mt-[10px]'>
// 								Build with the audited and formally verified ERC-4337 Module
// 							</p>
// 						</div>
// 					</div>
// 					<div className='relative card1 flex flex-col  border-[1px] rounded-[20px] border-[#303033] hover:border-[#12FF80] max-w-[400px] cursor-pointer w-full shadow-lg'>
// 						<p className='text-[#A1A3A7] font-semibold mt-[30px] ml-[15px] uppercase'>
// 							sdk
// 						</p>
// 						<div className='w-[30px] arrow absolute right-5 top-4 transform transition-all ease-in rotate-[320deg]'>
// 							<svg
// 								width='35'
// 								height='35'
// 								viewBox='0 0 24 24'
// 								fill='none'
// 								xmlns='http://www.w3.org/2000/svg'
// 								className='text-white arrow'
// 							>
// 								<path
// 									d='M5 12h14M12 5l7 7-7 7'
// 									stroke='currentColor'
// 									strokeWidth='1.5'
// 									strokeLinecap='round'
// 									strokeLinejoin='round'
// 								/>
// 							</svg>
// 						</div>
// 						<div className='mt-[20px]'></div>
// 						<div className='my-[40px]'>
// 							<h2 className='font-semibold text-[30px] ml-[15px] text-white'>
// 								Safe(CORE) SDK
// 							</h2>
// 							<p className='text-[17px] text-white font-semibold ml-[15px] mt-[10px]'>
// 								Get out-of-the-box integrations with 3rd party apps
// 							</p>
// 						</div>
// 					</div>
// 				</div> */}
// 			</Wrapper>
// 		</>
// 	)
// }

// export default Account
