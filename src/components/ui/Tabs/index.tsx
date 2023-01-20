import { Link } from 'react-router-dom';

import clsx from 'clsx';

export const Tabs = ({ tabs, className }: TabsProps) => {
	const varients = {
		current:
			'inline-flex items-center border-b-2 border-indigo-500 px-1 pt-1 text-sm font-medium text-gray-900 cursor-pointer',
		notCurrent:
			'inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700 cursor-pointer'
	};
	return (
		<div className={`${className} flex space-x-4`}>
			{tabs.map((tab, index) => (
				<Link
					key={index}
					to={tab.href}
					className={varients[tab.current ? 'current' : 'notCurrent'] + ' w-fit'}
				>
					{tab.label}
				</Link>
			))}
		</div>
	);
};

interface TabsProps {
	className?: string;
	tabs: {
		label: string;
		href: string;
		current: boolean;
	}[];
}

export default Tabs;
