import { faChevronRight, faPencilAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link, useLocation } from 'react-router-dom';
import { Formik } from 'formik';


// Application Screen || Define Imports
// =================================================================================================
// =================================================================================================
import Card from 'components/ui/Card';
import { Button } from 'components/ui/Inputs/Button';
import Select from 'components/ui/Inputs/Select';
import Text from 'components/ui/Inputs/Text';
import Tabs from 'components/ui/Tabs';


// Application Screen || Define Exports
// =================================================================================================
// =================================================================================================
export const Groups = () => {
	const location = useLocation();
	console.log(location.pathname);
	return (
		<>
			<h6 className='text-xl'>Document Management</h6>
			<div className='flex gap-3'>
				<Card className='w-full'>
					<div className='w-full flex-row justify-between space-y-4 pb-4 md:flex'>
						<Tabs
							className='md:w-1/3'
							tabs={[
								{
									label: 'Documents',
									href: '/documents',
									current: location.pathname === '/documents'
								},
								{
									label: 'Document Groups',
									href: '/documents/groups',
									current: location.pathname === '/documents/groups'
								}
							]}
						/>
						<div className='block justify-end space-x-0 space-y-2 md:flex md:w-2/3 md:space-x-2 md:space-y-0 lg:w-full'>
							<Formik
								initialValues={{
									search: ''
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
										className='block space-y-2 md:flex md:space-y-0 md:space-x-2'
									>
										<Text name='search' label='Search' className='w-full lg:w-56 ' />
									</form>
								)}
							</Formik>
							<Button className=' w-full md:w-1/4' variant='outline'>
								New Document
							</Button>
						</div>
					</div>

					<div className='flex h-24 items-center justify-center rounded-md bg-gray-100'>
						<label className='text-3xl font-bold'>No document groups to display</label>
					</div>
					<div className='mt-4 grid grid-cols-1 rounded-md bg-gray-100 px-4 py-8 md:grid-cols-6'>
						<div className=' col-span-1 md:col-span-4'>
							<h2 className='text-2xl font-bold'>Group 1</h2>
							<p>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sed just o, sed fermentum
								ornare proin adipiscing amet. Euismod elit, vel tellus, sed in sapien.
							</p>
						</div>
						<div className='col-span-1 flex items-center justify-center space-x-4 md:col-span-2'>
							<h3 className='text-2xl font-bold'>3 Documents in Group</h3>
							<FontAwesomeIcon icon={faPencilAlt} className='text-xl text-primary' />
						</div>
					</div>
				</Card>
			</div>
		</>
	);
};

export default Groups;
