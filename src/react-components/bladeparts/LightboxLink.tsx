import { useToggle } from 'usehooks-ts';
import { observer } from 'mobx-react-lite';
import React, { FC, useState } from 'react';
import Modal from 'react-modal';
import { FadeLoader } from 'react-spinners';

interface Props {
	link?: string;
	text: string;
}

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
				<div className='modal-content'>
					<div className='modal-actions'>
						<a
							href={link}
							target='_blank'
							className='button modal-button'
							rel='noreferrer'
						>
							{'Open Form in New Tab'}
						</a>
						<button onClick={toggleModal}>close</button>
					</div>
					<iframe
						src='https://docs.google.com/forms/d/e/1FAIpQLSciIByP3-EO_Ucv5W2UDLiNEnf4VjVwJANrv6yYPf3-z0E4kQ/viewform?embedded=true'
						width='100%'
						height='100%'
						frameBorder='0'
						marginHeight={0}
						marginWidth={0}
						loading='lazy'
						title='Sign Up Form'
					>
						<FadeLoader color='#003366' />
					</iframe>
				</div>
			</Modal>
		</>
	);
};

export const LightboxLink = observer(LightboxLinkInternal);
