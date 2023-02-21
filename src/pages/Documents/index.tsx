import { faChevronRight, faDownload, faPencilAlt } from '@fortawesome/free-solid-svg-icons';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link, useLocation } from 'react-router-dom';

import { Formik } from 'formik';

import Card from 'components/ui/Card';
import { Button } from 'components/ui/Inputs/Button';
import Select from 'components/ui/Inputs/Select';
import Text from 'components/ui/Inputs/Text';
import Tabs from 'components/ui/Tabs';

export const Documents = () => {
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
						<div className='block justify-end space-x-0 space-y-2 md:flex md:w-2/3 md:space-x-2 md:space-y-0 lg:w-fit'>
							<Formik
								initialValues={{
									search: '',
									filter: '',
									status: ''
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
										className='block space-y-2 md:flex md:w-3/4 md:space-y-0 md:space-x-2'
									>
										<Text name='search' label='Search' className='w-full md:w-1/2 lg:w-56 ' />
										<Select
											name='status'
											label='Status'
											className='w-full md:w-1/4 lg:w-36'
											options={[
												{
													value: 'draft',
													label: 'Draft'
												},
												{
													value: 'published',
													label: 'Published'
												}
											]}
										/>
										<Select
											name='filter'
											label='Filter'
											className='w-full md:w-1/4 lg:w-36'
											options={[
												{
													value: 'all',
													label: 'All'
												},
												{
													value: 'favorites',
													label: 'Favorites'
												}
											]}
										/>
									</form>
								)}
							</Formik>
							<Button className=' w-full md:w-1/4' variant='outline'>
							<p className='text-brandBlue'>+ New Document</p>
							</Button>
						</div>
					</div>
					<div className='flex h-24 items-center justify-center rounded-md bg-gray-100'>
						<label className='text-3xl font-bold'>No document to display</label>
					</div>

					<div className='mt-4 grid grid-cols-1 rounded-md bg-gray-100 px-4 py-8 md:grid-cols-6'>
						<div className='col-span-1 border-0 md:col-span-4 md:border-b'>
							<h2 className='text-2xl font-bold'>Document 1</h2>
							<p>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sed just o, sed fermentum
								ornare proin adipiscing amet. Euismod elit, vel tellus, sed in sapien.
							</p>
							<label className='text-md font-extrabold text-black'>Contact - 13MBs - Nov 2, 2023</label>
						</div>
						<div className='col-span-1 flex items-center justify-center space-x-4 border-b pb-4 md:col-span-2 md:pb-0'>
							<FontAwesomeIcon icon={faPencilAlt} className='text-xl text-primary' />
							<FontAwesomeIcon icon={faDownload} className='text-xl text-primary' />
						</div>
						<div className='grid w-full grid-cols-3 gap-4 pt-2 md:col-span-6 md:grid-cols-6 lg:grid-cols-10 '>
							<Button className='bg-brandBlue'>Group1</Button>
							<Button className='bg-brandBlue'>Group2</Button>
							<Button className='bg-brandBlue'>Group3</Button>
						</div>
					</div>
				</Card>
			</div>
		</>
	);
};

export default Documents;
