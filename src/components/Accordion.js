import React from 'react'
import { useState } from 'react'
import { ChevronDown } from 'react-feather'

const Accordion = ({ Head, children, open }) => {

	const [isActive, setIsActive] = useState(open || false)

	return (<>
		<div className={`accordion ${isActive ? 'active' : ''}`}>
			<div className="accordion__head" role={`button`} onClick={() => { setIsActive(!isActive) }} tabIndex={0}>
				{Head}
				<span className='accordion__head_anchor'>
					<ChevronDown />
				</span>
			</div>
			<div className="accordion__body">
				{children}
			</div>
		</div>
	</>)
}

export default Accordion