import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

import { Formik } from 'formik';

import Card from 'components/ui/Card';
import Select from 'components/ui/Inputs/Select';
import Text from 'components/ui/Inputs/Text';
import VendorfiedCard from 'components/ui/VendorfiedCard';

export const Dashboard = () => {
	return (
		<div className='p-4'>
			<div className='flex space-x-5 items-center pb-4'>
				<h6 className='text-3xl'>Dashboard</h6>
				<label>
					<FontAwesomeIcon icon={faChevronRight} />
				</label>
				<label className='text-3xl'>Verc James</label>
			</div>
			<div className='flex gap-3'>
				<div className='hidden md:block  md:w-1/4'>
					<VendorfiedCard title='Verc James' subTitle='Admin' />
				</div>
				<Card className='w-full md:w-3/4'>
					<div className='flex-row space-y-2 lg:flex justify-between '>
						<div className='flex space-x-4'>
							<div className='inline-flex items-center border-b-2 border-indigo-500 px-1 pt-1 text-sm font-medium text-gray-900 cursor-pointer'>
								Notifications
							</div>
							<div className='inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700 cursor-pointer'>
								Awaiting Responses
							</div>
						</div>
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
				</Card>
			</div>
		</div>
	);
};

export default Dashboard;
