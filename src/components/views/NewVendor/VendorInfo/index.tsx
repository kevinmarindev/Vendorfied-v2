import { useFormikContext } from 'formik';

import { Button } from 'components/ui/Inputs/Button';
import Text from 'components/ui/Inputs/Text';

export const VendorInfo = () => {
	const { handleSubmit, setFieldValue } = useFormikContext();

	return (
		<>
			<div className='text-1xl mt-10 font-squada text-secondary'> Step 01/04</div>
			<div className='mb-5 mt-10 font-squada text-4xl '>Company Info</div>
			<label className='block pb-4  font-squada text-secondary'>Create the vendors profile</label>

			<div className='w-full flex-col space-y-2'>
				<Text name='companyName' label='Name' />
				<Text name='companyPhoneNumber' label='Phone Number' type='tel' />
				<Text name='companyEmail' label='Email' type='email' />
				<Text name='website' label='Website' type='url' />
				<Text name='address' label='Address' />
				<Text name='secondaryAddress' label='Address Line 2' />
				<div className='flex md:grid md:grid-cols-3 md:gap-4'>
					<Text name='city' label='City' />
					<Text name='state' label='State' />
					<Text name='zip' label='Zip Code' />
				</div>
			</div>
		</>
	);
};

export default VendorInfo;
