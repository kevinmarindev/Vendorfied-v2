import { faCheck } from '@fortawesome/free-solid-svg-icons';

import { Formik } from 'formik';

import Select from 'components/ui/Inputs/Select';
import Text from 'components/ui/Inputs/Text';
import VendorfiedCard from 'components/ui/VendorfiedCard';

export const NewVendor = () => {
	return (
		<div className='p-4'>
			<div className='flex gap-3 h-screen'>
				<div
					className={`bg-gradient-to-br from-blue-500/[.5] to-emerald-400/[.4] p-2 hidden w-2/3 lg:w-1/2 md:flex justify-center`}
				>
					<div className='md:w-2/3 lg:w-3/4'>
						<VendorfiedCard icon={faCheck} title='Verc James' subTitle='Admin' />
					</div>
				</div>
				<div className='w-full md:w-3/4'>
					<div className='w-full lg:w-fit flex justify-end'>
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
									className='flex space-x-2 w-full'
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
