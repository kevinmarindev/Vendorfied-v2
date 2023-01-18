import {
	faEnvelope,
	faLaptop,
	faLocationPin,
	faPencil,
	faPhoneAlt
} from '@fortawesome/free-solid-svg-icons';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { Avatar } from '../Avatar';
import Card from '../Card';

export const VendorfiedCard = ({
	title = 'Verc James',
	subTitle = 'Admin',
	companyPhoneNumber = '123-456-7890',
	companyEmail = 'support@vendorfied.com',
	companyWebsite = 'https://vendorfied.com',
	companyAddress = '1234 Vendorfied Way, Vendorfied, CA 12345',
	contactPhoneNumber = '123-456-7890',
	contactEmail = 'support#vendrotfied.com'
}: VendorfiedCardProps) => (
	<Card className='flex-row space-y-2'>
		<div className='relative items-center pb-4 h-48  justify-center flex mb-2'>
			<div className='absolute top-0 right-0'>
				<FontAwesomeIcon icon={faPencil} className='text-xl text-primary' />
			</div>
			<Avatar size='lg' className='z-10' />
			<div className='absolute bottom-0 w-full bg-gray-100 h-24 right-0 text-center pt-12'>
				<h2>{title}</h2>
				<label>{subTitle}</label>
			</div>
		</div>
		<div className='w-full bg-gray-100 p-3 rounded-xl overflow-scroll'>
			<h2 className='mb-2'>Company Info</h2>
			<div className='grid grid-cols-[25px_1fr] gap-x-2 gap-y-2'>
				<FontAwesomeIcon icon={faPhoneAlt} className='text-primary self-center mx-auto' />
				<label className='break-words text-ellipsis'>{companyPhoneNumber}</label>
				<FontAwesomeIcon icon={faEnvelope} className='text-primary  self-center mx-auto' />
				<label className='break-words'>{companyEmail}</label>
				<FontAwesomeIcon icon={faLaptop} className='text-primary  self-center mx-auto' />
				<label className='break-words'>{companyWebsite}</label>
				<FontAwesomeIcon icon={faLocationPin} className='text-primary  self-center mx-auto' />
				<label className='break-words'>{companyAddress}</label>
			</div>
		</div>
		<div className='w-full bg-gray-100 p-3 rounded-xl overflow-scroll'>
			<h2 className='mb-2'>Contact Info</h2>
			<div className='grid grid-cols-[25px_1fr] gap-x-2 gap-y-2'>
				<FontAwesomeIcon icon={faPhoneAlt} className='text-primary self-center mx-auto' />
				<label className='break-words'>{contactPhoneNumber}</label>
				<FontAwesomeIcon icon={faEnvelope} className='text-primary  self-center mx-auto' />
				<label className='break-words'>{contactEmail}</label>
			</div>
		</div>
	</Card>
);

interface VendorfiedCardProps {
	title?: string;
	subTitle?: string;
	companyPhoneNumber?: string;
	companyEmail?: string;
	companyWebsite?: string;
	companyAddress?: string;

	contactPhoneNumber?: string;
	contactEmail?: string;
}

export default VendorfiedCard;
