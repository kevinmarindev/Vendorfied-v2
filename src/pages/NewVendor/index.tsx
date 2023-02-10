import { faCheck } from '@fortawesome/free-solid-svg-icons';

import { useNavigate } from 'react-router-dom';

import { Formik } from 'formik';

import { Button } from 'components/ui/Inputs/Button';
import Text from 'components/ui/Inputs/Text';
import VendorfiedCard from 'components/ui/VendorfiedCard';

export const NewVendor = () => {
	const navigate = useNavigate();
	const back = () => navigate(-1);

	return (
		<>
			<Formik
				initialValues={{
					name: '',
					phoneNumber: '',
					email: ''
				}}
				onSubmit={(values) => {
					console.log(values);
				}}
			>
				{({ values, handleSubmit }) => (
					<div className='flex h-screen gap-3'>
						<div className='hidden w-2/3 justify-center bg-gradient-to-br from-blue-500/[.5] to-emerald-400/[.4] p-2 md:flex lg:w-1/2'>
							<VendorfiedCard logo={true} icon={faCheck} title='Verc James' subTitle='Admin' />
						</div>
						<div className='relative flex w-full justify-center md:w-3/4'>
							<div className='absolute left-0 cursor-pointer font-squada text-secondary' onClick={back}>
								{'<'} Back
							</div>
							<div className='w-1/2 flex-col'>
								<div className='text-1xl mt-10 font-squada text-secondary'> Step 01/04</div>
								<div className='mb-5 mt-10 font-squada text-4xl '>Company Info</div>
								<label className='block pb-4  font-squada text-secondary'>Create the vendors profile</label>

								<form
									onSubmit={handleSubmit}
									onChange={(e) => {
										console.log(e);
									}}
									className='w-full flex-col space-y-2'
								>
									<Text name='name' label='Name' />
									<Text name='Phone Number' label='Phone Number' />
									<Text name='Email' label='Email' />
									<Text name='Website' label='Website' />
									<Text name='Address' label='Address' />
									<Text name='Address Line 2' label='Address Line 2' />
									<div className='flex md:grid md:grid-cols-3 md:gap-4'>
										<Text name='City' label='City' />
										<Text name='State' label='State' />
										<Text name='Zip Code' label='Zip Code' />
									</div>
									<label className='text-bold text-md block pt-4 font-squada text-secondary'>
										This information will be securely saved as per the{' '}
										<span className='font-squada'>Terms and Conditions & Privacy Policy</span>
									</label>
									<div className='flex justify-end'>
										<Button
											variant='solid'
											color='brand'
											type='submit'
											className='text-1xl flex w-1/2 font-squada'
										>
											Next Step
										</Button>
									</div>
								</form>
							</div>
						</div>
					</div>
				)}
			</Formik>
		</>
	);
};

export default NewVendor;
