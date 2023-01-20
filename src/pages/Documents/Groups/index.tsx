import { faChevronRight, faPencilAlt } from '@fortawesome/free-solid-svg-icons';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link, useLocation } from 'react-router-dom';

import { Formik } from 'formik';

import Card from 'components/ui/Card';
import { Button } from 'components/ui/Inputs/Button';
import Select from 'components/ui/Inputs/Select';
import Text from 'components/ui/Inputs/Text';
import Tabs from 'components/ui/Tabs';

export const Groups = () => {
	const location = useLocation();
	console.log(location.pathname);
	return (
		<div className='p-4'>
			<h6 className='text-xl'>Document Management</h6>
			<div className='flex gap-3'>
				<Card className='w-full'>
					<div className='flex-row space-y-4 md:flex justify-between w-full pb-4'>
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
						<div className='md:w-2/3 lg:w-full block md:flex justify-end md:space-x-2 space-x-0 space-y-2 md:space-y-0'>
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
										className='block space-y-2 md:space-y-0 md:flex md:space-x-2'
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

					<div className='bg-gray-100 h-24 rounded-md flex items-center justify-center'>
						<label className='text-3xl font-bold'>No document groups to display</label>
					</div>
					<div className='bg-gray-100 rounded-md grid grid-cols-1 md:grid-cols-6 mt-4 px-4 py-8'>
						<div className=' col-span-1 md:col-span-4'>
							<h2 className='text-2xl font-bold'>Group 1</h2>
							<p>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sed just o, sed fermentum
								ornare proin adipiscing amet. Euismod elit, vel tellus, sed in sapien.
							</p>
						</div>
						<div className='col-span-1 md:col-span-2 flex justify-center items-center space-x-4'>
							<h3 className='text-2xl font-bold'>3 Documents in Group</h3>
							<FontAwesomeIcon icon={faPencilAlt} className='text-primary text-xl' />
						</div>
					</div>
				</Card>
			</div>
		</div>
	);
};

export default Groups;
