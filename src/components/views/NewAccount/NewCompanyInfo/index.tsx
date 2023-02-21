import { useRef, useState } from 'react';
import clsx from 'clsx';
import { Formik } from 'formik';
import { useFormikContext } from 'formik';
// Application Screen || Define Imports
// =================================================================================================
// =================================================================================================
import { Button } from 'components/ui/Inputs/Button';
import Text from 'components/ui/Inputs/Text';


// Application Screen || Define Exports
// =================================================================================================
// =================================================================================================
export const NewCompanyInfo = () => {
	const { setFieldValue } = useFormikContext();

	// drag state
	const [dragActive, setDragActive] = useState(false);
	// ref
	const inputRef = useRef<any>(null);

	const handleFiles = (e: any) => {
		console.log({ e });
		setFieldValue('vendorLogo', e[0] ?? undefined);
	};

	// handle drag events
	const handleDrag = (e: any) => {
		e.preventDefault();
		e.stopPropagation();
		if (e.type === 'dragenter' || e.type === 'dragover') {
			setDragActive(true);
		} else if (e.type === 'dragleave') {
			setDragActive(false);
		}
	};

	// triggers when file is dropped
	const handleDrop = (e: any) => {
		e.preventDefault();
		e.stopPropagation();
		setDragActive(false);
		if (e.dataTransfer.files && e.dataTransfer.files[0]) {
			handleFiles(e.dataTransfer.files);
		}
	};

	// triggers when file is selected with click
	const handleChange = (e: any) => {
		e.preventDefault();
		if (e.target.files && e.target.files[0]) {
			handleFiles(e.target.files);
		}
	};

	// triggers the input when the button is clicked
	const onButtonClick = () => {
		inputRef!.current!.click();
	};

	return (
		<>
			<div className='text-1xl mt-10 font-squada text-secondary'> Step 01/02</div>
			<div className='mb-5 mt-5 font-squada text-4xl'>Company Info</div>
			<label className='block pb-4 font-squada text-secondary'>Create your company profile</label>

			<div
				onDragEnter={handleDrag}
				// onSubmit={(e) => e.preventDefault()}
				className='relative h-24 w-full text-center'
			>
				<input ref={inputRef} type='file' className='hidden' multiple={true} onChange={handleChange} />
				<label
					htmlFor='input-file-upload'
					className={clsx(
						dragActive && 'drag-active',
						' h-15 flex items-center justify-center rounded-xl border-2 border-dashed border-primary/[.4] bg-primary/[.10]'
					)}
				>
					<div>
						<p>Drop vendor logo here, or select</p>
						<button
							className=' cursor-pointer bg-transparent p-1 font-sora text-sm hover:underline'
							onClick={onButtonClick}
						>
							Click to browse
						</button>
					</div>
				</label>
				{dragActive && (
					<div
						className='absolute top-0 right-0 left-0 bottom-0 h-full w-full'
						onDragEnter={handleDrag}
						onDragLeave={handleDrag}
						onDragOver={handleDrag}
						onDrop={handleDrop}
					></div>
				)}
			</div>

			<div className='w-full flex-col space-y-2'>
				<Text name='companyName' label='Company Name' />
				<Text name='companyPhoneNumber' label='Company Phone' />
				<Text name='companyEmail' label='Email' />
				<Text name='website' label='Website' />
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

export default NewCompanyInfo;
