import clsx from 'clsx';
import { Field, useFormikContext } from 'formik';


// Application Screen || Define Imports
// =================================================================================================
// =================================================================================================


// Application Screen || Define Exports
// =================================================================================================
// =================================================================================================
export const Text = ({
	type = 'text',
	className,
	name,
	label,
	placeholder,
	disabled,
	forcedTouched
}: TextProps) => {
	const { values, errors, touched, setFieldValue } = useFormikContext<any>();

	const inputClassName = clsx(
		'focus:border-gray-500 focus:ring-gray-500',
		'block rounded-xl border-2 border-gray-300 focus:border-gray-500 focus:ring-gray-500',
		'justify-end pl-4',
		'text-md w-full font-squada',
		'disabled:opacity-50 disabled:cursor-not-allowed'
	);

	const error = !!touched[name] || forcedTouched ? (errors[name] as string) : '';

	return (
		<div className={`w-full ${className}`}>
			<label htmlFor={name} className='sr-only'>
				{label}
			</label>
			{type === 'money' ? (
				<div className='relative rounded-md shadow-sm'>
					<label className='pointer-events-none absolute inset-y-0 left-1 flex items-center text-gray-500'>
						$
					</label>
					<Field
						value={values[name]}
						type='number'
						name={name}
						id={name}
						className={`${inputClassName} `}
						placeholder={placeholder}
						disabled={disabled}
					/>
				</div>
			) : type === 'textarea' ? (
				<textarea
					value={values[name]}
					name={name}
					id={name}
					className={inputClassName}
					placeholder={label}
					disabled={disabled}
					rows={3}
					onChange={(e) => {
						setFieldValue(name, e.target.value);
					}}
				/>
			) : (
				<Field
					value={values[name]}
					type={type}
					name={name}
					id={name}
					className={inputClassName}
					placeholder={label}
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
		| 'textarea'
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
