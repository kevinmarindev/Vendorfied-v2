import Link from 'next/link';
import clsx from 'clsx';

const baseStyles: any = {
	solid:
		'inline-flex justify-center rounded-lg py-2 px-3 text-sm font-semibold outline-2 outline-offset-2 transition-colors',
	outline:
		'inline-flex justify-center rounded-lg border py-[calc(theme(spacing.2)-1px)] px-[calc(theme(spacing.3)-1px)] text-sm outline-2 outline-offset-2 transition-colors'
};

const variantStyles: any = {
	solid: {
		cyan:
			'relative overflow-hidden bg-cyan-500 text-white before:absolute before:inset-0 active:before:bg-transparent hover:before:bg-white/10 active:bg-cyan-600 active:text-white/80 before:transition-colors',
		white: 'bg-white text-cyan-900 hover:bg-white/90 active:bg-white/90 active:text-cyan-900/70',
		gray: 'bg-gray-800 text-white hover:bg-gray-900 active:bg-gray-800 active:text-white/80 ',
		red: 'bg-red-500 text-white hover:bg-red-600 active:bg-red-500 active:text-white/80'
	},
	outline: {
		gray:
			'border-gray-300 text-gray-700 hover:border-gray-400 active:bg-gray-100 active:text-gray-700/80 hover:bg-opacity-80 hover:bg-gray-100',
		red: 'border-red-300 text-red-700 hover:border-red-400 active:bg-red-100 active:text-red-700/80 hover:bg-opacity-80 hover:bg-red-100'
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
		<Link href={href} className={className} {...props} />
	) : (
		<button type={type} className={className} {...props} />
	);
};

export interface ButtonProps {
	disabled?: boolean;
	variant?: 'outline' | 'solid';
	type?: 'submit' | 'button' | 'reset';
	color?: string;
	className?: string;
	href?: string;
	children: React.ReactNode;
	onClick?: () => void;
}
