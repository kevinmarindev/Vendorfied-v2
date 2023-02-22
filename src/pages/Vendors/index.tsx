import { faCheck, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { Formik } from 'formik';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


// Application Screen || Define Imports
// =================================================================================================
// =================================================================================================
import { Button } from 'components/ui/Inputs/Button';
import Select from 'components/ui/Inputs/Select';
import Text from 'components/ui/Inputs/Text';
import VendorfiedCard from 'components/ui/VendorfiedCard';


// Application Screen || Define Exports
// =================================================================================================
// =================================================================================================
export const Vendors = () => {
	const navigate = useNavigate();
	return (
		<div className='p-4 md:p-8 2xl:pr-10 2xl:pl-10'>
			<div className='pb-10 font-sans text-4xl font-bold'>Vendors</div>
			<div
				className='
			grid 
			grid-cols-1 
			gap-8 
			rounded-lg
			border-2 p-6
			'
			>
				<div className='flex justify-between pb-2'>
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
							<form onSubmit={handleSubmit} className='flex w-full justify-between gap-2'>
								<Text label='Search' name='search' placeholder='Search' className='w-48 text-primary' />
								<div className='flex gap-2 font-squada text-primary'>
									<Select
										label='Status'
										name='status'
										className='gray-200'
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
										className='w-50 flex items-center'
										onClick={() => navigate('/newVendor')}
									>
										<label className='font-squada text-primary'>New Vendor</label>
									</Button>
								</div>
							</form>
						)}
					</Formik>
				</div>
				<div
					className='
						grid 
						grid-cols-1 
						gap-8  
						pr-6
						pl-6
						sm:grid-cols-2 
						md:grid-cols-2 
						lg:grid-cols-3 
						xl:grid-cols-4
						2xl:grid-cols-5'
				>
					<VendorfiedCard logo={true} icon={faCheck} />
					<VendorfiedCard logo={true} icon={faCheck} />
					<VendorfiedCard logo={true} icon={faCheck} />
					<VendorfiedCard logo={true} icon={faCheck} />
					<VendorfiedCard logo={true} icon={faCheck} />
					<VendorfiedCard logo={true} icon={faCheck} />
					<VendorfiedCard logo={true} icon={faCheck} />
					<VendorfiedCard logo={true} icon={faCheck} />
					<VendorfiedCard logo={true} icon={faCheck} />
				</div>
			</div>
		</div>
	);
};

export default Vendors;
