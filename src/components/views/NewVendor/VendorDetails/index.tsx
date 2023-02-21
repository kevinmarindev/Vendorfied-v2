import { useRef, useState } from 'react';

import clsx from 'clsx';
import { useFormikContext } from 'formik';

import Text from 'components/ui/Inputs/Text';

export const VendorDetails = () => {
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
			<div className='mt-10 font-squada text-xl text-secondary'> Step 03/04</div>
			<div className='mb-5 mt-7 font-squada text-5xl'>Vendor Details</div>
			<label className='block pb-8 font-squada text-xl text-secondary'>
				Add the vendors company details.
			</label>

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
						' h-15  flex  items-center justify-center rounded-xl border-2 border-dashed border-primary/[.4] bg-primary/[.10]'
					)}
				>
					<div>
						<p>Drop vendor logo here, or select</p>
						<button
							className='cursor-pointer bg-transparent p-1 font-sora text-sm hover:underline'
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
			<Text type='textarea' name='description' label='Description (Optional)' className='mt-4' />
		</>
	);
};

export default VendorDetails;
