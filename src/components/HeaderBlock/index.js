import React from 'react';
import s from './HeaderBlock.module.scss';
import ReactLogo from '../../logo192.png';
import { ReactComponent as ReactLogoSvg } from '../../logo.svg';
const HeaderBlock = ( {title, hideBackground = false, descr, children} ) => {
	const styleCover = hideBackground ? { backgroundImage: 'none' } : {};
	return (
		<div className={s.cover} style={styleCover}>
			<div className={s.wrap}>
				{title && <h1 className={s.header}> {title} </h1>}
				{/* <ReactLogoSvg /> */}
				{descr && <p className={s.descr}> {descr} </p>}
				{children}
			</div>
		</div>
	)
}

export default HeaderBlock;