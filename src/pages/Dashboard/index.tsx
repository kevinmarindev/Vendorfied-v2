import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { Formik } from 'formik';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useQuery } from '@tanstack/react-query';


// Application Screen || Define Imports
// =================================================================================================
// =================================================================================================
import { fetchUser } from 'api/user';
import Card from 'components/ui/Card';
import Select from 'components/ui/Inputs/Select';
import Text from 'components/ui/Inputs/Text';
import VendorfiedCard from 'components/ui/VendorfiedCard';


// Application Screen || Define Exports
// =================================================================================================
// =================================================================================================
export const Dashboard = () => {
	const { data: user } = useQuery({
		queryKey: ['user'],
		queryFn: fetchUser,
		onSettled(data, error) {
			console.log(data, error);
		}
	});

	return (
		<>
			<div className='flex items-center space-x-5 pb-4'>
				<h6 className='text-3xl'>Dashboard</h6>
				<label>
					<FontAwesomeIcon icon={faChevronRight} />
				</label>
				<label className='text-3xl'>Verc James</label>
			</div>
			<div className='flex gap-3'>
				<div className='hidden md:block  md:w-1/4'>
					<VendorfiedCard logo={false} title='Verc James' subTitle='Admin' />
				</div>
				<Card className='w-full md:w-3/4'>
					<div className='flex-row justify-between space-y-2 lg:flex '>
						<div className='flex space-x-4'>
							<div className='inline-flex cursor-pointer items-center border-b-2 border-indigo-500 px-1 pt-1 text-sm font-medium text-gray-900'>
								Notifications
							</div>
							<div className='inline-flex cursor-pointer items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700'>
								Awaiting Responses
							</div>
						</div>
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
									</form>
								)}
							</Formik>
						</div>
					</div>
				</Card>
			</div>
		</>
	);
};

export default Dashboard;
