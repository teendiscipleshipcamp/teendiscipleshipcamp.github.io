import { useToggle } from 'usehooks-ts';
import { observer } from 'mobx-react-lite';
import React, { FC, useState } from 'react';
import Modal from 'react-modal';
import { FadeLoader } from 'react-spinners';

interface Props {
	link?: string;
	text: string;
}

const customStyles = {
	// overlay: {
	// 	position: 'fixed',
	// 	top: 0,
	// 	left: 0,
	// 	right: 0,
	// 	bottom: 0,
	// 	backgroundColor: 'rgba(0, 0, 0, 0.5)',
	// },
	// content: {
	// 	top: '50%',
	// 	left: '50%',
	// 	right: 'auto',
	// 	bottom: 'auto',
	// 	marginRight: '-50%',
	// 	transform: 'translate(-50%, -50%)',
	// 	backgroundColor: 'rgba(255, 255, 255, 1)',
	// 	boxShadow: '0 12px 15px 0 rgba(0,0,0,.24)',
	// 	width: '80%',
	// 	height: '80%',
	// },
};

const LightboxLinkInternal: FC<Props> = ({ link, text }) => {
	const [isModalOpen, toggleModal] = useToggle();

	return (
		<>
			<button className='button' onClick={toggleModal}>
				{text}
			</button>
			<Modal
				isOpen={isModalOpen}
				onRequestClose={toggleModal}
				// style={customStyles}
				className='modal'
				// contentLabel='Example Modal'
				overlayClassName='overlay'
			>
				{/* <button onClick={toggleModal}>close</button> */}
				<iframe
					src='https://docs.google.com/forms/d/e/1FAIpQLSciIByP3-EO_Ucv5W2UDLiNEnf4VjVwJANrv6yYPf3-z0E4kQ/viewform?embedded=true'
					width='100%'
					height='100%'
					frameborder='0'
					marginheight='0'
					marginwidth='0'
					loading='lazy'
				>
					<FadeLoader color='#003366' />
				</iframe>
			</Modal>
		</>
	);
};

export const LightboxLink = observer(LightboxLinkInternal);
