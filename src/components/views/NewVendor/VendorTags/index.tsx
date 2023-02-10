import { useFormikContext } from 'formik';

import { Button } from 'components/ui/Inputs/Button';
import Select from 'components/ui/Inputs/Select';
import Text from 'components/ui/Inputs/Text';

export const VendorTags = () => {
	const { handleSubmit, setFieldValue } = useFormikContext();

	return (
		<>
			<div className='text-1xl mt-10 font-squada text-secondary'> Step 04/04</div>
			<div className='mb-5 mt-10 font-squada text-4xl '>Vendor Tags and Documents</div>
			<label className='block pb-4  font-squada text-secondary'>
				Select the vendor type and attached required documents.
			</label>

			<label className='font-sora text-sm font-bold'>Primary Contact Info</label>
			<div className='w-full flex-col space-y-2'>
				<Select name='vendorType' label='' options={[]} placeholder='Select' />
			</div>
		</>
	);
};

export default VendorTags;
