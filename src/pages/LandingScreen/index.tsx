import React from 'react';

import Logo from 'assets/img/vendorfied.png';

import Card from 'components/ui/Card';

export const LandingScreen = () => {
	return (
		<div className='h-screen w-screen'>
			<div className='h-screen w-screen bg-gradient-to-br from-blue-500/[.7] to-emerald-400/[.7]'>
				<img src={Logo} alt='vendorfied' className='h-90 w-150 w-8/10' />
			</div>
		</div>
	);
};

export default LandingScreen;
