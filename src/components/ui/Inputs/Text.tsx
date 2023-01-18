import clsx from 'clsx';
import { Field, useFormikContext } from 'formik';

/* eslint-disable-line */
export const Text = ({
	type = 'text',
	className,
	name,
	label,
	placeholder,
	disabled,
	forcedTouched
}: // ...props
TextProps) => {
	const { values, errors, touched } = useFormikContext<any>();

	const inputClassName = clsx(
		'block rounded-md border border-gray-300 focus:border-gray-500 focus:ring-gray-500',
		'text-sm w-full',
		'py-0 px-1',
		'disabled:opacity-50 disabled:cursor-not-allowed'
	);

	const error = !!touched[name] || forcedTouched ? (errors[name] as string) : '';

	return (
		<div className={`mb-1 w-full ${className}`}>
			<label htmlFor={name.toString()} className='block text-xs text-gray-700'>
				{label}
			</label>
			{type === 'money' ? (
				<div className='relative rounded-md shadow-sm'>
					<label className='pointer-events-none absolute inset-y-0 left-1 flex items-center text-gray-500'>$</label>
					<Field
						value={values[name]}
						type='number'
						name={name}
						id={name}
						className={`${inputClassName} justify-end pl-4`}
						placeholder={placeholder}
						disabled={disabled}
					/>
				</div>
			) : (
				<Field
					value={values[name]}
					type={type}
					name={name}
					id={name}
					className={inputClassName}
					placeholder={placeholder}
					disabled={disabled}
				/>
			)}
			<label className='block text-xs font-bold text-red-700'>{error}</label>
		</div>
	);
};

export interface TextProps {
	// itemType: T;
	name: string;
	label: string;
	placeholder?: string;
	disabled?: boolean;
	forcedTouched?: boolean;
	type?:
		| 'money'
		| 'number'
		| 'text'
		| 'password'
		| 'email'
		| 'tel'
		| 'url'
		| 'search'
		| 'date'
		| 'time'
		| 'datetime-local'
		| 'month'
		| 'week';
	className?: string;
}

export default Text;
