import { forwardRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';
import { Formik } from 'formik';


// Application Screen || Define Imports
// =================================================================================================
// =================================================================================================
import { Button } from 'components/ui/Inputs/Button';
import VendorfiedCard from 'components/ui/VendorfiedCard';
import PrimaryContact from 'components/views/NewVendor/PrimaryContact';
import VendorDetails from 'components/views/NewVendor/VendorDetails';
import VendorInfo from 'components/views/NewVendor/VendorInfo';
import VendorTags from 'components/views/NewVendor/VendorTags';


// Application Screen || Define Exports
// =================================================================================================
// =================================================================================================
export const NewVendor = () => {
	const navigate = useNavigate();
	const back = () => navigate(-1);
	const [page, setPage] = useState(1);

	return (
		<>
			<Formik
				initialValues={{
					companyName: '',
					companyPhoneNumber: '',
					companyEmail: '',
					website: '',
					address: '',
					secondaryAddress: '',
					city: '',
					state: '',
					zip: '',

					primaryName: '',
					primaryPhoneNumber: '',
					primaryEmail: '',

					secondaryName: '',
					secondaryPhoneNumber: '',
					secondaryEmail: '',
					vendorLogo: '',
					description: '',
					vendorType: ''
				}}
				onSubmit={(values) => {
					console.log(values);
				}}
			>
				{({ values, validateForm }) => (
					<div className='flex h-screen gap-4'>
						{console.log(values.vendorLogo)}
						<div className='hidden w-2/3 justify-center bg-gradient-to-br from-blue-500/[.5] to-emerald-400/[.4] p-2 pt-10 md:flex lg:w-1/2'>
							<VendorfiedCard
								logo={values.vendorLogo ? false : true}
								icon={faCheck}
								title={values.companyName || undefined}
								subTitle='Admin'
								companyEmail={values.companyEmail || undefined}
								companyAddress={
									values.address
										? values.address +
										  (values.city ? `, ${values.city}` : '') +
										  (values.state ? `, ${values.state}` : '') +
										  (values.zip ? `, ${values.zip}` : '')
										: undefined
								}
								src={values.vendorLogo ? URL.createObjectURL(values.vendorLogo as any) : undefined}
								companyWebsite={values.website || undefined}
								companyPhoneNumber={values.companyPhoneNumber || undefined}
								contactName={values.primaryName || undefined}
								contactEmail={values.primaryEmail}
								contactPhoneNumber={values.primaryPhoneNumber}
							/>
						</div>
						<div className='relative flex w-full justify-center md:w-3/4'>
							<div
								className='absolute left-0 cursor-pointer pt-10 font-squada text-xl text-secondary'
								onClick={back}
							>
								{'<'} Back
							</div>
							<div className='w-1/2 flex-col pt-1'>
								{page === 1 ? (
									<VendorInfo />
								) : page === 2 ? (
									<PrimaryContact />
								) : page === 3 ? (
									<VendorDetails />
								) : (
									<VendorTags />
								)}
								<label className='text-bold block pt-8 font-squada text-xl text-secondary'>
									This information will be securely saved as per the{' '}
									<span className='font-squada'>Terms and Conditions & Privacy Policy</span>
								</label>

								<div className='mt-4 flex justify-end'>
									<Button
										variant='solid'
										color='brand'
										type={page !== 4 ? 'button' : 'submit'}
										onClick={() => (page !== 4 ? setPage(page + 1) : null)}
										className='flex h-10 w-32 font-squada text-base'
									>
										{page !== 4 ? 'Next Step' : 'Create Vendor'}
									</Button>
								</div>
							</div>
						</div>
					</div>
				)}
			</Formik>
		</>
	);
};

export default NewVendor;
