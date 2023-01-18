import { IconProp } from '@fortawesome/fontawesome-svg-core';
import {
	faEnvelope,
	faLaptop,
	faLocationPin,
	faPencil,
	faPhoneAlt
} from '@fortawesome/free-solid-svg-icons';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Logo from 'assets/img/vendorfied.png';

import { Avatar } from '../Avatar';
import Card from '../Card';

export const VendorfiedCard = ({
	title = 'Verc James',
	subTitle = 'Admin',
	icon = faPencil,
	src,
	companyPhoneNumber = '123-456-7890',
	companyEmail = 'support@vendorfied.com',
	companyWebsite = 'https://vendorfied.com',
	companyAddress = '1234 Vendorfied Way, Vendorfied, CA 12345',
	contactPhoneNumber = '123-456-7890',
	contactEmail = 'support#vendrotfied.com'
}: VendorfiedCardProps) => (
	<Card className='flex-row space-y-2'>
		<div className='relative items-center pb-4 h-36  justify-center flex'>
			<div className='absolute top-0 right-0'>
				<FontAwesomeIcon icon={icon} className='text-xl text-primary' />
			</div>
			{src ? (
				<Avatar size='lg' className='z-10 absolute top-0 ' src={src} />
			) : (
				<div className='absolute top-0 flex justify-center z-10 bg-white w-1/2 border p-1 border-primary rounded-lg'>
					<img className='w-24' src={Logo} />
				</div>
			)}
			<div className='absolute bottom-0 w-full bg-gray-100 h-24 right-0 text-center pt-12'>
				<h2>{title}</h2>
				<label>{subTitle}</label>
			</div>
		</div>
		<div className='w-full bg-gray-100 p-3 rounded-xl overflow-scroll'>
			<h2 className='mb-2'>Company Info</h2>
			<div className='grid grid-cols-[25px_1fr] gap-x-2 gap-y-2'>
				<FontAwesomeIcon icon={faPhoneAlt} className='text-primary self-center mx-auto' />
				<span className='break-words text-sm font-thin'>{companyPhoneNumber}</span>
				<FontAwesomeIcon icon={faEnvelope} className='text-primary  self-center mx-auto' />
				<span className='break-words text-sm'>{companyEmail}</span>
				<FontAwesomeIcon icon={faLaptop} className='text-primary  self-center mx-auto' />
				<span className='break-words text-sm'>{companyWebsite}</span>
				<FontAwesomeIcon icon={faLocationPin} className='text-primary  self-center mx-auto' />
				<span className='break-words text-sm'>{companyAddress}</span>
			</div>
		</div>
		<div className='w-full bg-gray-100 p-3 rounded-xl overflow-scroll'>
			<h2 className='mb-2'>Contact Info</h2>
			<div className='grid grid-cols-[25px_1fr] gap-x-2 gap-y-2'>
				<FontAwesomeIcon icon={faPhoneAlt} className='text-primary self-center mx-auto' />
				<span className='break-words text-sm'>{contactPhoneNumber}</span>
				<FontAwesomeIcon icon={faEnvelope} className='text-primary  self-center mx-auto' />
				<span className='break-words text-sm'>{contactEmail}</span>
			</div>
		</div>
	</Card>
);

interface VendorfiedCardProps {
	title?: string;
	subTitle?: string;
	icon?: IconProp;
	src?: string;
	companyPhoneNumber?: string;
	companyEmail?: string;
	companyWebsite?: string;
	companyAddress?: string;

	contactPhoneNumber?: string;
	contactEmail?: string;
}

export default VendorfiedCard;
