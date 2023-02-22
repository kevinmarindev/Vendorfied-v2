import { faPen } from '@fortawesome/free-solid-svg-icons';

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { Formik } from 'formik';

import Logo from 'assets/img/vendorfied.png';

import { Button } from 'components/ui/Inputs/Button';
import VendorfiedCard from 'components/ui/VendorfiedCard';
import NewCompanyInfo from 'components/views/NewAccount/NewCompanyInfo/index';
import ProfileInfo from 'components/views/NewAccount/ProfileInfo/index';

export const NewAccount = () => {
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
					<div className='flex h-screen gap-3'>
						{console.log(values.vendorLogo)}
						<div className='hidden w-2/3 justify-center bg-gradient-to-br from-blue-500/[.5] to-emerald-400/[.4] p-2 md:flex lg:w-1/2'>
							<div className='block flex-row text-center'>
								<div className='inline-block'>
									<div className='mt-10 flex w-40 justify-center rounded-lg border border-primary bg-white p-1'>
										<img className='w-24' src={Logo} />
									</div>
								</div>
								<label className='mb-4 mt-2 block font-squada text-2xl'>Company Name</label>
								<VendorfiedCard
									logo={false}
									icon={faPen}
									title={values.companyName || undefined}
									subTitle='Administrator'
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
									companyName={values.companyName || undefined}
									companyWebsite={values.website || undefined}
									companyPhoneNumber={values.companyPhoneNumber || undefined}
									contactName={values.primaryName || undefined}
									contactPhoneNumber={values.primaryPhoneNumber || undefined}
									contactEmail={values.primaryEmail || undefined}
								/>
							</div>
						</div>
						<div className='relative flex w-full justify-center md:w-3/4'>
							{/* <div
								className='absolute left-0 mt-10 cursor-pointer font-squada text-secondary'
								onClick={back}
							>
								{'<'} Back
							</div> */}
							<div className='w-1/2 flex-col'>
								{page === 1 ? <NewCompanyInfo /> : <ProfileInfo />}
								<label className='text-bold text-md block pt-4 font-squada text-secondary'>
									This information will be securely saved as per the{' '}
									<span className='font-squada'>Terms and Conditions & Privacy Policy</span>
								</label>

								<div className='mt-4 flex justify-end'>
									<Button
										variant='solid'
										color='brand'
										type={page !== 2 ? 'button' : 'submit'}
										onClick={() => (page !== 2 ? setPage(page + 1) : null)}
										className='text-1xl flex w-1/2 font-squada'
									>
										{page !== 2 ? 'Next Step' : 'Complete'}
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

export default NewAccount;
