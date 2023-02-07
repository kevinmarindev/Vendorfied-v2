import { faCheck } from '@fortawesome/free-solid-svg-icons';

import { Formik } from 'formik';

import { FileUpload } from 'components/ui/FileUpload';
import Select from 'components/ui/Inputs/Select';
import Text from 'components/ui/Inputs/Text';
import VendorfiedCard from 'components/ui/VendorfiedCard';

export const NewVendor = () => {
	return (
		<div className='p-4'>
			<div className='flex h-screen gap-3'>
				<div
					className={`hidden w-2/3 justify-center bg-gradient-to-br from-blue-500/[.5] to-emerald-400/[.4] p-2 md:flex lg:w-1/2`}
				>
					<div className='md:w-2/3 lg:w-3/4'>
						<VendorfiedCard icon={faCheck} title='Verc James' subTitle='Admin' />
					</div>
				</div>
				<div className='w-full md:w-3/4'>
					<div className='flex w-full justify-end lg:w-fit'>
						<Formik
							initialValues={{
								search: '',
								filter: ''
							}}
							onSubmit={(values) => {
								console.log(values);
							}}
						>
							{({ handleSubmit }) => (
								<form
									onSubmit={handleSubmit}
									onChange={(e) => {
										console.log(e);
									}}
									className='flex w-full space-x-2'
								>
									<Text name='search' label='Search' className='w-1/2 lg:w-56 ' />
									<Select
										name='filter'
										label='Filter'
										className='w-1/2 lg:w-36'
										options={[
											{
												value: 'lorem',
												label: 'Lorem'
											}
										]}
									/>
									<FileUpload />
								</form>
							)}
						</Formik>
					</div>
				</div>
			</div>
		</div>
	);
};

export default NewVendor;
