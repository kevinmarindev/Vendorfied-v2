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
						<div className='md:w-2/3 lg:w-fit block md:flex justify-end md:space-x-2 space-x-0 space-y-2 md:space-y-0'>
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
										className='block space-y-2 md:space-y-0 md:flex md:space-x-2 md:w-3/4'
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
								New Document
							</Button>
						</div>
					</div>
					<div className='bg-gray-100 h-24 rounded-md flex items-center justify-center'>
						<label className='text-3xl font-bold'>No document to display</label>
					</div>

					<div className='bg-gray-100 rounded-md grid grid-cols-1 md:grid-cols-6 mt-4 px-4 py-8'>
						<div className='col-span-1 md:col-span-4 border-0 md:border-b'>
							<h2 className='text-2xl font-bold'>Document 1</h2>
							<p>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sed just o, sed fermentum
								ornare proin adipiscing amet. Euismod elit, vel tellus, sed in sapien.
							</p>
							<label className='text-md font-extrabold text-black'>Contact - 13MBs - Nov 2, 2023</label>
						</div>
						<div className='col-span-1 md:col-span-2 flex justify-center items-center space-x-4 border-b pb-4 md:pb-0'>
							<FontAwesomeIcon icon={faPencilAlt} className='text-primary text-xl' />
							<FontAwesomeIcon icon={faDownload} className='text-primary text-xl' />
						</div>
						<div className='grid grid-cols-3 gap-4 md:grid-cols-6 w-full md:col-span-6 lg:grid-cols-10'>
							<Button>Group1</Button>
							<Button>Group2</Button>
							<Button>Group3</Button>
						</div>
					</div>
				</Card>
			</div>
		</div>
	);
};

export default Documents;
