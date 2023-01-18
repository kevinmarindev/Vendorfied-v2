import { ExclamationTriangleIcon } from '@heroicons/react/24/outline';
import { useFormikContext } from 'formik';
import React from 'react';
import Motion from '../Motion';

export const UnsavedBanner = () => {
	const { dirty } = useFormikContext<any>();
	return (
		<Motion open={dirty}>
			<div className='relative bg-gray-500'>
				<div className='mx-auto max-w-7xl py-1 px-3 sm:px-6 lg:px-8'>
					<div className='pr-16 sm:px-16 sm:text-center'>
						<div className='font-medium text-white'>
							<label className='flex items-center justify-center md:hidden'>
								<ExclamationTriangleIcon className='inline-block h-5 w-5 text-white' />
								<span>You have unsaved changes!</span>
							</label>
							<label className='hidden   items-center justify-center md:flex'>
								<ExclamationTriangleIcon className='inline-block h-5 w-5 text-white' />
								<span> You have unsaved changes</span>
							</label>
						</div>
					</div>
				</div>
			</div>
		</Motion>
	);
};
