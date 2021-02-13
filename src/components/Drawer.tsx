import React from 'react'

interface DrawerProps {
	open?: boolean
	setOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const Drawer: React.FC<DrawerProps> = (props) => {
	return (
		<div
			className={`${
				!props.open && 'hidden'
			} fixed top-0 right-0 h-screen w-screen z-50 flex`}
		>
			<div
				className={` flex-grow bg-black bg-opacity-50`}
				onClick={() => props.setOpen(false)}
			></div>
			<div className={`h-screen w-72 bg-black text-white p-4`}>
				{props.children}
			</div>
		</div>
	)
}

export default Drawer
