import { type FC } from 'react';
import clsx from 'clsx';
import { useFormikContext } from 'formik';


// Application Screen || Define Imports
// =================================================================================================
// =================================================================================================


// Application Screen || Define Exports
// =================================================================================================
// =================================================================================================
export const CheckBox: FC<CheckBoxProps> = ({
	className,
	name,
	label,
	description,
	placeholder,
	disabled,
	forcedTouched
}: // ...props
CheckBoxProps) => {
	const { values, errors, touched, handleBlur, setFieldValue } = useFormikContext<any>();

	const inputClassName = clsx(
		'block rounded-md border border-gray-500 focus:border-gray-500 focus:ring-gray-500',
		'text-sm w-full',
		'h-4 w-4 text-gray-600 focus:ring-gray-500',
		'disabled:opacity-50 disabled:cursor-not-allowed'
	);

	const error = !!touched[name] || forcedTouched ? (errors[name] as string) : '';

	return (
		<div className={`relative flex items-center ${className}`}>
			<div className='flex h-5 items-center'>
				<input
					defaultChecked={values[name]}
					name={name}
					id={name}
					className={inputClassName}
					onBlur={handleBlur}
					onChange={() => setFieldValue(name, !values[name])}
					placeholder={placeholder}
					disabled={disabled}
					aria-describedby='comments-description'
					type='checkbox'
				/>
			</div>
			<div className='ml-1 min-w-0 flex-1'>
				<label htmlFor='comments' className='font-medium text-gray-700'>
					{label}
				</label>
				<p id='comments-description' className='text-gray-500'>
					{description}
				</p>
			</div>
			<label className='block text-xs font-bold text-red-700'>{error}</label>
		</div>
		// <div className='mb-1 w-full'>
		// 	<label htmlFor={name} className='block text-sm font-medium text-gray-700'>
		// 		{label}
		// 	</label>
		// 	<input
		// 		value={values[name]}
		// 		type={type}
		// 		name={name}
		// 		id={name}
		// 		className={className}
		// 		onBlur={handleBlur}
		// 		onChange={handleChange}
		// 		placeholder={placeholder}
		// 		disabled={disabled}
		// 	/>

		//
		// </div>
	);
};

export interface CheckBoxProps {
	name: string;
	label: string;
	description?: string;
	placeholder?: string;
	disabled?: boolean;
	forcedTouched?: boolean;
	className?: string;
}

export default CheckBox;
