// Tooltip.js

import React, { useState } from 'react'

function Tooltip({ text, children }) {
	const [isHovered, setIsHovered] = useState(false)

	return (
		<div
			onMouseEnter={() => setIsHovered(true)}
			onMouseLeave={() => setIsHovered(false)}
			className='relative inline-block'
		>
			{children}
			{isHovered && (
				<div className='absolute bottom-[100%] transform mb-3 w-[300px] bg-black text-white text-sm rounded-lg shadow-lg p-[20px] opacity-100 transition-opacity duration-300 z-[999]'>
					{text}
				</div>
			)}
		</div>
	)
}

export default Tooltip
