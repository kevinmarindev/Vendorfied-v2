import { faCheck, faChevronRight } from '@fortawesome/free-solid-svg-icons';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link, useLocation, useNavigate } from 'react-router-dom';

import { Formik } from 'formik';

import { Button } from 'components/ui/Inputs/Button';
import Select from 'components/ui/Inputs/Select';
import Text from 'components/ui/Inputs/Text';
import VendorfiedCard from 'components/ui/VendorfiedCard';

export const Vendors = () => {
	const navigate = useNavigate();
	return (
		<div className='p-8'>
			<div className='flex justify-between pb-4'>
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
						<form onSubmit={handleSubmit} className='flex gap-2 w-full justify-between'>
							<Text label='Search' name='search' placeholder='Search' className='w-48' />
							<div className='flex gap-2'>
								<Select
									label='Status'
									name='status'
									placeholder='Status'
									options={[
										{
											label: 'All',
											value: 'all'
										},
										{
											label: 'Active',
											value: 'Active'
										},
										{
											label: 'Inactive',
											value: 'Inactive'
										}
									]}
								/>
								<Select
									label='Filter'
									name='filter'
									placeholder='Filter'
									options={[
										{
											label: 'All',
											value: 'all'
										},
										{
											label: 'Verified',
											value: 'Verified'
										},
										{
											label: 'Unverified',
											value: 'Unverified'
										}
									]}
								/>
								<Button
									variant='outline'
									className='flex items-center'
									onClick={() => navigate('/newVendor')}
								>
									<label className='text-primary font-bold'>New Vendor</label>
								</Button>
							</div>
						</form>
					)}
				</Formik>
			</div>
			<div className='grid grid-cols-1 sm:grid-cols-2  md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-4 gap-2 '>
				<VendorfiedCard icon={faCheck} />
				<VendorfiedCard icon={faCheck} />
				<VendorfiedCard icon={faCheck} />
				<VendorfiedCard icon={faCheck} />
				<VendorfiedCard icon={faCheck} />
				<VendorfiedCard icon={faCheck} />
			</div>
		</div>
	);
};

export default Vendors;
