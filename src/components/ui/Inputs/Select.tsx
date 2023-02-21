import clsx from 'clsx';
import { Field, useFormikContext } from 'formik';


// Application Screen || Define Imports
// =================================================================================================
// =================================================================================================


// Application Screen || Define Exports
// =================================================================================================
// =================================================================================================
export const Select = ({
	className,
	name,
	label,
	placeholder,
	disabled,
	forcedTouched,
	options
}: SelectProps) => {
	const { values, errors, touched } = useFormikContext<any>();

	const inputClassName = clsx(
		'focus:border-gray-500 focus:ring-gray-500',
		'block rounded-md border border-gray-300 focus:border-gray-500 focus:ring-gray-500',
		'text-md w-full',
		'disabled:opacity-50 disabled:cursor-not-allowed'
	);

	const error = !!touched[name] || forcedTouched ? (errors[name] as string) : '';

	return (
		<div className={`w-full ${className}`}>
			<label htmlFor={name} className='sr-only'>
				{label}
			</label>
			<Field
				value={values[name]}
				as='select'
				name={name}
				id={name}
				className={inputClassName}
				placeholder={name}
				disabled={disabled}
			>
				<option value=''>{placeholder ?? label}</option>
				{options.map((option) => (
					<option key={option.value} value={option.value}>
						{option.label}
					</option>
				))}
			</Field>
			<label className='block text-xs font-bold text-red-700'>{error}</label>
		</div>
	);
};

export interface SelectProps {
	name: string;
	label: string;
	options: SelectOption[];
	placeholder?: string;
	disabled?: boolean;
	forcedTouched?: boolean;
	className?: string;
}

interface SelectOption {
	value: string;
	label: string;
}

export default Select;
