import React from 'react';

import Logo from 'assets/img/vendorfied.png';

import Card from 'components/ui/Card';

export const LandingScreen = () => {
	return (
		<div className='mx-auto flex h-[90vh] w-[98%] items-center justify-center rounded-3xl bg-gradient-to-br from-blue-500/[.7] to-emerald-400/[.7]'>
			<img src={Logo} alt='vendorfied' className='h-1/2' />
		</div>
	);
};

export default LandingScreen;
