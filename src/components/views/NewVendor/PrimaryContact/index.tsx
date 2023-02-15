import { useFormikContext } from 'formik';

import Text from 'components/ui/Inputs/Text';

export const PrimaryContact = () => {
	const { handleSubmit, setFieldValue } = useFormikContext();

	return (
		<>
			<div className='mt-10 font-squada text-xl text-secondary'> Step 02/04</div>
			<div className='mb-5 mt-7 font-squada text-5xl'>Primary Contacts</div>
			<label className='block pb-8 font-squada text-xl text-secondary'>
				Add the vendors primary contacts.
			</label>

			<div className='w-full flex-col space-y-2'>
				<div className='pb-2'>
					<label className='font-sora text-sm font-bold'>Primary Contact Info</label>
				</div>
				<Text name='primaryName' label='Name' />
				<Text name='primaryPhoneNumber' label='Phone Number' type='tel' />
				<Text name='primaryEmail' label='Email' type='email' />
				<div className='pb-2 pt-2'>
					<label className='font-sora text-sm font-bold'>Secondary Contact Info (Optional)</label>
				</div>
				<Text name='secondaryName' label='Name' />
				<Text name='secondaryPhoneNumber' label='Phone Number' type='tel' />
				<Text name='secondaryEmail' label='Email' type='email' />
			</div>
		</>
	);
};

export default PrimaryContact;
