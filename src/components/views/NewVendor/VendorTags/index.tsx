import { useFormikContext } from 'formik';

import { Button } from 'components/ui/Inputs/Button';
import Select from 'components/ui/Inputs/Select';
import Text from 'components/ui/Inputs/Text';

export const VendorTags = () => {
	const { handleSubmit, setFieldValue } = useFormikContext();

	return (
		<>
			<div className='mt-10 font-squada text-xl text-secondary'> Step 04/04</div>
			<div className='mb-5 mt-7 font-squada text-5xl '>Vendor Tags and Documents</div>
			<label className='block pb-8 font-squada text-xl text-secondary'>
				Select the vendor type and attached required documents.
			</label>
			<div className='pb-2'>
				<label className='font-sora text-sm font-bold'>Vendor Type</label>
			</div>
			<div className='w-full flex-col space-y-2'>
				<Select name='vendorType' label='' options={[]} placeholder='Select' />
			</div>
		</>
	);
};

export default VendorTags;
