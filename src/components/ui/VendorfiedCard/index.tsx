import { IconProp } from '@fortawesome/fontawesome-svg-core';
import {
	faEnvelope,
	faLaptop,
	faLocationPin,
	faPencil,
	faPerson,
	faPhoneAlt
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


// Application Screen || Define Imports
// =================================================================================================
// =================================================================================================
import Logo from 'assets/img/vendorfied.png';
import { Avatar } from '../Avatar';
import Card from '../Card';


// Application Screen || Define Exports
// =================================================================================================
// =================================================================================================


export const VendorfiedCard = ({
	title = 'Company Name',
	subTitle = 'Admin',
	icon = faPencil,
	src,
	logo,
	companyPhoneNumber = '123-456-7890',
	companyEmail = 'support@vendorfied.com',
	companyWebsite = 'https://vendorfied.com',
	companyAddress = '1234 Vendorfied Way, Vendorfied, CA 12345',
	contactName = 'John Smith',
	contactPhoneNumber = '123-456-7890',
	contactEmail = 'support#vendorfied.com'
}: VendorfiedCardProps) => (
	<Card className=' max-w-12 max-h-[35rem] flex-row space-y-2 text-left'>
		<div className='relative flex h-[10.5rem] items-center justify-center pb-4'>
			<div className='absolute top-0 right-0'>
				<FontAwesomeIcon icon={icon} className='text-xl text-primary' />
			</div>
			{logo ? (
				<div className='absolute top-0 z-10 flex w-1/2 justify-center rounded-lg border border-primary bg-white p-1'>
					<img className='w-24' src={Logo} />
				</div>
			) : (
				<Avatar size='lg' className='absolute top-0 z-10 ' src={src} />
			)}
			<div className='absolute bottom-0 right-0 w-full rounded-xl bg-gray-100 pt-14 pb-5 text-center'>
				<h2>{title}</h2>
				<label>{subTitle}</label>
			</div>
		</div>
		<div className='w-full  overflow-scroll rounded-xl bg-gray-100 p-3'>
			<h2 className='mb-2'>Company Info</h2>
			<div className='grid grid-cols-[25px_1fr] gap-x-2 gap-y-2'>
				<FontAwesomeIcon icon={faPhoneAlt} className='mx-auto self-center text-primary' />
				<span className='break-words text-sm font-thin'>{companyPhoneNumber}</span>
				<FontAwesomeIcon icon={faEnvelope} className='mx-auto  self-center text-primary' />
				<span className='break-words text-sm'>{companyEmail}</span>
				<FontAwesomeIcon icon={faLaptop} className='mx-auto  self-center text-primary' />
				<span className='break-words text-sm'>{companyWebsite}</span>
				<FontAwesomeIcon icon={faLocationPin} className='mx-auto  self-center text-primary' />
				<span className='break-words text-sm'>{companyAddress}</span>
			</div>
		</div>
		<div className='w-full  overflow-scroll rounded-xl bg-gray-100 p-3'>
			<h2 className='mb-2'>Contact Info</h2>
			<div className='grid grid-cols-[25px_1fr] gap-x-2 gap-y-2'>
				<FontAwesomeIcon icon={faPerson} className='mx-auto  self-center text-primary' />
				<span className='break-words text-sm'>{contactName}</span>
				<FontAwesomeIcon icon={faPhoneAlt} className='mx-auto self-center text-primary' />
				<span className='break-words text-sm'>{contactPhoneNumber}</span>
				<FontAwesomeIcon icon={faEnvelope} className='mx-auto  self-center text-primary' />
				<span className='break-words text-sm'>{contactEmail}</span>
			</div>
		</div>
	</Card>
);

interface VendorfiedCardProps {
	title?: string;
	name?: string;
	subTitle?: string;
	icon?: IconProp;
	src?: string;
	logo: boolean;
	companyPhoneNumber?: string;
	companyEmail?: string;
	companyWebsite?: string;
	companyAddress?: string;
	companyName?: string;

	contactName?: string;
	contactPhoneNumber?: string;
	contactEmail?: string;

	firstName?: string;
	lastName?: string;
	phoneNumber?: number;
	emailAddress?: string;
}

export default VendorfiedCard;
