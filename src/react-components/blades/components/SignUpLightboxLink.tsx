import { useToggle } from 'usehooks-ts';
import { observer } from 'mobx-react-lite';
import { FC, useEffect, useState } from 'react';
import Modal from 'react-modal';
import { PuffLoader } from 'react-spinners';
import { useWindowWidth } from '@react-hook/window-size';
import Glyph from '../../../glyphs/Glyph.tsx';

interface Props {
	link?: string;
	text: string;
}

const SignUpLightboxLinkInternal: FC<Props> = ({ link, text }) => {
	const [isModalOpen, toggleModal] = useToggle(false);
	const width = useWindowWidth();
	const isMobile = width < 908;
	const [iframeLoading, setIframeLoading] = useState(true);

	// Prevent background scroll when modal is open
	useEffect(() => {
		if (isModalOpen) {
			document.body.style.overflow = 'hidden';
		} else {
			document.body.style.overflow = '';
		}
		return () => {
			document.body.style.overflow = '';
		};
	}, [isModalOpen]);

	useEffect(() => {
		if (isModalOpen) {
			setIframeLoading(true);
		}
	}, [isModalOpen]);

	const onCloseModal = () => {
		toggleModal();
		setIframeLoading(false);
	};

	return (
		<>
			<button className='button' onClick={onCloseModal}>
				{text}
			</button>
			<Modal
				isOpen={isModalOpen}
				onRequestClose={onCloseModal}
				className='modal'
				overlayClassName='overlay'
				style={{ outerHeight: isMobile ? '100%' : 'auto' }}
			>
				<div className='modal-content'>
					<div className='modal-actions'>
						<a
							href={link}
							target='_blank'
							className='modal-button'
							rel='noreferrer'
						>
							<Glyph
								fill='currentColor'
								type={'external-link'}
								heightInPx={40}
								widthInPx={40}
							/>
						</a>
						<button className='modal-button' onClick={onCloseModal}>
							<Glyph
								fill='currentColor'
								type={'modal-close'}
								heightInPx={40}
								widthInPx={40}
							/>
						</button>
					</div>
					{iframeLoading && (
						<div
							style={{
								position: 'absolute',
								top: 0,
								left: 0,
								width: '100%',
								height: '100%',
								display: 'flex',
								alignItems: 'center',
								justifyContent: 'center',
								background: 'white',
								zIndex: 2,
							}}
						>
							<PuffLoader color='#003366' />
						</div>
					)}
					<iframe
						src='https://docs.google.com/forms/d/e/1FAIpQLSciIByP3-EO_Ucv5W2UDLiNEnf4VjVwJANrv6yYPf3-z0E4kQ/viewform?embedded=true'
						width='100%'
						height='100%'
						loading='lazy'
						title='Sign Up Form'
						className='modal-iframe'
						style={{ position: 'relative', zIndex: 1 }}
						onLoad={() => setIframeLoading(false)}
					></iframe>
				</div>
			</Modal>
		</>
	);
};

export const SignUpLightboxLink = observer(SignUpLightboxLinkInternal);
