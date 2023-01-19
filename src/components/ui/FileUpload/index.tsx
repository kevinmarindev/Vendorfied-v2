import React, { useState } from 'react';

export const FileUpload = () => {
	const [dragActive, setDragActive] = useState(false);
	const inputRef = React.useRef(null);

	const handleDrop = (e: any) => {
		e.preventDefault();
		console.log('handleDrop');
	};

	// handle drag events
	const handleDrag = function (e: any) {
		e.preventDefault();
		e.stopPropagation();
		if (e.type === 'dragenter' || e.type === 'dragover') {
			setDragActive(true);
		} else if (e.type === 'dragleave') {
			setDragActive(false);
		}
	};
	// triggers when file is selected with click
	const handleChange = function (e: any) {
		e.preventDefault();
		if (e.target.files && e.target.files[0]) {
			alert('File selected');
		}
	};

	return (
		<div className='relative w-full hover:cursor-crosshair border-dotted border-2'>
			<input ref={inputRef} type='file' className='hidden' multiple={true} onChange={handleChange} />

			<label id='label-file-upload' htmlFor='input-file-upload' className=''>
				<div>
					<p>Drag and drop your file here or</p>
					{/* <button className="upload-button" onClick={onButtonClick}>Upload a file</button> */}
				</div>
			</label>
			{dragActive && (
				<div
					// id='drag-file-element'
					className='absolute w-full h-full bg-gray-200'
					onDragEnter={handleDrag}
					onDragLeave={handleDrag}
					onDragOver={handleDrag}
					onDrop={handleDrop}
				></div>
			)}
		</div>
		// <input
		// 	id='file-upload'
		// 	name='file-upload'
		// 	type='file'
		// 	className='flex max-w-lg justify-center rounded-md border-2 border-dashed border-gray-300 px-6 pt-5 pb-6'
		// 	onDrop={handleDrop}
		// >
		// 	<div className='space-y-1 text-center'>
		// 		<svg
		// 			className='mx-auto h-12 w-12 text-gray-400'
		// 			stroke='currentColor'
		// 			fill='none'
		// 			viewBox='0 0 48 48'
		// 			aria-hidden='true'
		// 		>
		// 			<path
		// 				d='M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02'
		// 				strokeWidth={2}
		// 				strokeLinecap='round'
		// 				strokeLinejoin='round'
		// 			/>
		// 		</svg>
		// 		<div className='flex text-sm text-gray-600'>
		// 			<label
		// 				htmlFor='file-upload'
		// 				className='relative cursor-pointer rounded-md bg-white font-medium text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 hover:text-indigo-500'
		// 			>
		// 				<span>Upload a file</span>
		// 				{/* <input id='file-upload' name='file-upload' type='file' className='sr-only' /> */}
		// 			</label>
		// 			<p className='pl-1'>or drag and drop</p>
		// 		</div>
		// 		<p className='text-xs text-gray-500'>PNG, JPG, GIF up to 10MB</p>
		// 	</div>
		// </input>
		// </div>
	);
};

export default FileUpload;
