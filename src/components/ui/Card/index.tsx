import React from 'react';


// Application Screen || Define Imports
// =================================================================================================
// =================================================================================================


// Application Screen || Define Exports
// =================================================================================================
// =================================================================================================
export const Card = ({ children, className }: CardProps) => {
	return (
		<div className={`${className} rounded-lg bg-white p-4 shadow-[0_0_5px_rgba(0,0,0,0.3)]`}>
			{children}
		</div>
	);
};

interface CardProps {
	children: React.ReactNode;
	className?: string;
}

export default Card;
