import { useFormikContext } from 'formik';

import { Button } from 'components/ui/Inputs/Button';
import Text from 'components/ui/Inputs/Text';

export const PrimaryContact = () => {
	const { handleSubmit, setFieldValue } = useFormikContext();

	return (
		<>
			<div className='text-1xl mt-10 font-squada text-secondary'> Step 02/04</div>
			<div className='mb-5 mt-10 font-squada text-4xl '>Primary Contacts</div>
			<label className='block pb-4  font-squada text-secondary'>
				Add the vendors primary contacts.
			</label>

			<div className='w-full flex-col space-y-2'>
				<label className='font-sora text-sm font-bold'>Primary Contact Info</label>
				<Text name='primaryName' label='Name' />
				<Text name='primaryPhoneNumber' label='Phone Number' type='tel' />
				<Text name='primaryEmail' label='Email' type='email' />
				<label className='font-sora text-sm font-bold'>Secondary Contact Info (Optional)</label>
				<Text name='secondaryName' label='Name' />
				<Text name='secondaryPhoneNumber' label='Phone Number' type='tel' />
				<Text name='secondaryEmail' label='Email' type='email' />
			</div>
		</>
	);
};

export default PrimaryContact;
