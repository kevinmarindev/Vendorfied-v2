export const Avatar = ({ size = 'md', src, className, ...props }: AvatarProps) => {
	const sizeClass = {
		xs: 'h-8 w-8',
		sm: 'h-12 w-12',
		md: 'h-16 w-16',
		lg: 'h-24 w-24'
	}[size];

	return (
		<span
			{...props}
			className={`${className} inline-block ${sizeClass} overflow-hidden rounded-full bg-gray-100`}
		>
			<svg className='h-full w-full text-gray-300' fill='currentColor' viewBox='0 0 24 24'>
				{src ? (
					<image className={`h-full object-contain`} href={src} />
				) : (
					<path d='M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z' />
				)}
			</svg>
		</span>
	);
};

export interface AvatarProps {
	size?: 'xs' | 'sm' | 'md' | 'lg';
	src?: string;
	className?: string;
}
export default Avatar;
