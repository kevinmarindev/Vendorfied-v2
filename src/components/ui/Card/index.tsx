import React from 'react';

export const Card = ({ children, className }: CardProps) => {
	return <div className={`${className} bg-white rounded-lg shadow-lg p-4`}>{children}</div>;
};

interface CardProps {
	children: React.ReactNode;
	className?: string;
}

export default Card;
