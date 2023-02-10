import { Link } from 'react-router-dom';

import clsx from 'clsx';

const baseStyles: any = {
	solid:
		'inline-flex justify-center rounded-lg py-2 px-3 text-sm font-semibold outline-2 outline-offset-2 transition-colors',
	outline:
		'inline-flex justify-center rounded-lg border py-[calc(theme(spacing.2)-1px)] px-[calc(theme(spacing.3)-1px)] text-sm outline-2 outline-offset-2 transition-colors'
};

const variantStyles: any = {
	solid: {
		gray: 'bg-gray-800 text-white hover:bg-gray-900 active:bg-gray-800 active:text-white/80',
		brand: 'text-white hover:shadow bg-gradient-to-r from-brandBlue to-brandGreen hover:bg-opacity-80'
	},
	outline: {
		gray:
			'text-gray-700 hover:border-gray-400 bg-white active:bg-gray-100 active:text-gray-700/80 hover:bg-opacity-80 hover:bg-gray-100',
		brand:
			'text-cyan-700 border-2 border-t-cyan-600 border-l-blue-500 border-b-brandBlue border-r-brandGreen'
	}
};

export const Button: React.FC<ButtonProps> = ({
	variant = 'solid',
	color = 'gray',
	type = 'button',
	className,
	href,
	...props
}: ButtonProps) => {
	className = clsx(
		className,
		baseStyles[variant],
		variantStyles[variant][color],
		'disabled:opacity-50 disabled:cursor-not-allowed w-full'
	);

	return href ? (
		<Link to={href} className={className} {...props} />
	) : (
		<button type={type} className={className} {...props} />
	);
};

export interface ButtonProps {
	disabled?: boolean;
	variant?: 'outline' | 'solid';
	type?: 'submit' | 'button' | 'reset';
	color?: 'brand' | 'gray';
	className?: string;
	href?: string;
	children: React.ReactNode;
	onClick?: () => void;
}
