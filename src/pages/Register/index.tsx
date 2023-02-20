import React, { useState } from 'react';
import { Field, Form, Formik } from 'formik';
import * as Yup from 'yup';


// Application Screen || Define Imports
// =================================================================================================
// =================================================================================================
import { Button } from 'components/ui/Inputs/Button';


// Application Screen || Define Exports
// =================================================================================================
// =================================================================================================
const SignupSchema = Yup.object().shape({
	email: Yup.string().email('Invalid email').required('Required'),
	password: Yup.string()
		.required('No password provided.')
		.min(8, 'Password is too short - should be 8 chars minimum.')
		.matches(
			/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d@$!%*?&]{8,}$/,
			'Password must contain at least one uppercase letter, one lowercase letter, and one number.'
		),
	confirmPassword: Yup.string()
		.required('Required')
		.oneOf([Yup.ref('password'), null], 'Passwords must match')
});

export const Register = () => {
	const [open, setOpen] = useState(false);
	const [continued, setContinued] = useState(false);
	const [next, setNext] = useState(false);
	const [proceed, setProceed] = useState(false);
	const [complete, setComplete] = useState(false);

	const handleContinue = () => {
		setContinued(true);
		console.log('continue', continued);
	};

	const handleNext = () => {
		setNext(true);
		setContinued(false);
		console.log('next', next);
	};
	const handleProceed = () => {
		setProceed(true);
		setNext(false);
		console.log('proceed', proceed);
	};
	const handleComplete = () => {
		setComplete(true);
		setProceed(false);
		console.log('complete', complete);
	};

	return (
		<div className='flex min-h-screen items-center rounded-3xl bg-gradient-to-br from-brandBlue/[.1] to-brandGreen/[.1]'>
			{!continued && !next && !proceed && !complete ? (
				<div className='mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8'>
					{/* Grid Layout */}
					<div className='grid grid-cols-1 gap-10 md:grid-cols-2 lg:gap-20'>
						{/* column 1 */}
						<div className='space-y-6 md:my-24'>
							<h1 className='text-4xl font-bold text-brandBlue sm:text-4xl'>Welcome</h1>
							<h2 className='text-2xl font-bold sm:text-5xl'>Select your Vendorfied plan</h2>
							<p className='text-base text-gray-500 sm:text-lg'>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sed justo, sed fermentum
								ornare proin adipiscing amet. Euismod elit, vel tellus, sed in sapien. Lorem ipsum dolor sit
								amet, consectetur adipiscing elit. Cras sed justo, sed fermentum ornare proin adipiscing
								amet. Euismod elit, vel tellus, sed in sapien.
							</p>
							<div className='space-y-4'>
								<details>
									<summary className='flex cursor-pointer items-center justify-evenly px-4 py-2 text-xl font-bold'>
										<span className='px-3 text-xl' onClick={(e) => e.preventDefault()}>
											{open ? '-' : '+'}
										</span>
										<span>How do I cancel my subscription?</span>
									</summary>
									<div className='px-4 py-2'>
										<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
									</div>
								</details>
								<details>
									<summary className='flex cursor-pointer items-center justify-evenly px-4 py-2 text-xl font-bold'>
										<span className='px-3 text-xl' onClick={(e) => e.preventDefault()}>
											{open ? '-' : '+'}
										</span>
										<span>How do I cancel my subscription?</span>
									</summary>
									<div className='px-4 py-2'>
										<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
									</div>
								</details>
								<details>
									<summary className='flex cursor-pointer items-center justify-evenly px-4 py-2 text-xl font-bold'>
										<span className='px-3 text-xl' onClick={(e) => e.preventDefault()}>
											{open ? '-' : '+'}
										</span>
										<span>How do I cancel my subscription?</span>
									</summary>
									<div className='px-4 py-2'>
										<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
									</div>
								</details>
							</div>
						</div>
						{/* column 2 */}
						<div className='space-y-6 md:space-y-8 '>
							<div className='rounded-lg bg-white shadow hover:cursor-pointer'>
								<div className='px-6 py-8'>
									<div className='mb-4 flex items-center'>
										<input type='checkbox' className='mr-4 h-5 w-5 ' />
										<h3 className='text-4xl font-bold'>Starter</h3>
										<p className='mx-auto text-2xl'>$20/mo.</p>
									</div>
									<p className='text-md text-gray-500'>
										Loremipsum dolor sit amet, consectetur adipiscing elit. Cras sed justo, sed fermentum
										ornare proin adipiscing amet. Euismod elit, vel tellus, sed in sapien. Lorem ipsum dolor
										sit amet, consectetur adipiscing elit. Cras sed justo, sed fermentum ornare proin
										adipiscing amet. Euismod elit, vel tellus, sed in sapien..
									</p>
								</div>
							</div>
							<div className='rounded-lg bg-white shadow hover:cursor-pointer'>
								<div className='px-6 py-8'>
									<div className='mb-4 flex items-center'>
										<input type='checkbox' className='mr-4 h-5 w-5' />
										<h3 className='text-4xl font-bold'>Standard</h3>
										<p className='mx-auto text-2xl'>$40/mo.</p>
									</div>
									<p className='text-md text-gray-500'>
										Loremipsum dolor sit amet, consectetur adipiscing elit. Cras sed justo, sed fermentum
										ornare proin adipiscing amet. Euismod elit, vel tellus, sed in sapien. Lorem ipsum dolor
										sit amet, consectetur adipiscing elit. Cras sed justo, sed fermentum ornare proin
										adipiscing amet. Euismod elit, vel tellus, sed in sapien..
									</p>
								</div>
							</div>
							<div className='rounded-lg bg-white shadow hover:cursor-pointer'>
								<div className='px-6 py-8'>
									<div className='mb-4 flex items-center'>
										<input type='checkbox' className='mr-4 h-5 w-5' />
										<h3 className='text-4xl font-bold'>Pro</h3>
										<p className='mx-auto text-2xl'>$100/mo.</p>
									</div>
									<p className='text-md text-gray-500'>
										Loremipsum dolor sit amet, consectetur adipiscing elit. Cras sed justo, sed fermentum
										ornare proin adipiscing amet. Euismod elit, vel tellus, sed in sapien. Lorem ipsum dolor
										sit amet, consectetur adipiscing elit. Cras sed justo, sed fermentum ornare proin
										adipiscing amet. Euismod elit, vel tellus, sed in sapien..
									</p>
								</div>
							</div>
							<Button
								className='w-full bg-gradient-to-r from-brandBlue to-brandGreen '
								onClick={handleContinue}
							>
								<p className='text-xl text-white'>Continue</p>
							</Button>
						</div>
					</div>
				</div>
			) : continued === true ? (
				<div className='mx-auto max-w-7xl rounded-3xl bg-white px-4 py-16 sm:w-full sm:px-6 lg:w-1/4 lg:px-8 '>
					<div>
						<h2 className='mt-6 text-center text-3xl font-extrabold text-gray-900'>Create an account</h2>
					</div>
					<Formik
						initialValues={{
							email: '',
							password: '',
							confirmPassword: ''
						}}
						validationSchema={SignupSchema}
						onSubmit={(values) => {
							console.log(values);
						}}
					>
						{({ errors, touched }) => (
							<Form className='mt-8 space-y-6'>
								<div className='-space-y-px rounded-md shadow-sm'>
									<div>
										<label htmlFor='email' className='sr-only'>
											Email address
										</label>
										<Field
											id='email'
											name='email'
											type='email'
											autoComplete='email'
											required
											className={
												'relative my-8 block w-full appearance-none rounded-xl border px-3 py-2 ' +
												(errors.email && touched.email
													? 'border-red-500 text-red-900 placeholder-red-300 focus:border-red-500 focus:outline-none focus:ring-red-500'
													: 'border-gray-300 text-gray-900 placeholder-gray-500 focus:border-brandGreen focus:outline-none focus:ring-brandGreen')
											}
											placeholder='Email address'
										/>
									</div>
									<div className='mt-4'>
										<label htmlFor='password' className='sr-only'>
											Password
										</label>
										<Field
											id='password'
											name='password'
											type='password'
											autoComplete='current-password'
											required
											className={
												'relative my-8 block w-full appearance-none rounded-xl border px-3 py-2 ' +
												(errors.password && touched.password
													? 'border-red-500 text-red-900 placeholder-red-300 focus:border-red-500 focus:outline-none focus:ring-red-500'
													: 'border-gray-300 text-gray-900 placeholder-gray-500 focus:border-brandGreen focus:outline-none focus:ring-brandGreen')
											}
											placeholder='Password'
										/>
									</div>
									<div className='mt-4'>
										<label htmlFor='confirmPassword' className='sr-only'>
											Confirm Password
										</label>
										<Field
											id='confirmPassword'
											name='confirmPassword'
											type='password'
											autoComplete='current-password'
											required
											className={
												'relative my-8 block w-full appearance-none rounded-xl border px-3 py-2 ' +
												(errors.confirmPassword && touched.confirmPassword
													? 'border-red-500 text-red-900 placeholder-red-300 focus:border-red-500 focus:outline-none focus:ring-red-500'
													: 'border-gray-300 text-gray-900 placeholder-gray-500 focus:border-brandGreen focus:outline-none focus:ring-brandGreen')
											}
											placeholder='Confirm Password'
										/>
									</div>
								</div>
								<p>
									*Password must be at least 8 characters and include at least 1 number and special
									character.
								</p>
								<div className='flex items-center justify-between'>
									<div className='text-sm'>
										<a href='#' className='hover:text-brandGreen-600 font-medium text-brandGreen'>
											Forgot password?
										</a>
									</div>
									<button
										onClick={handleNext}
										type='submit'
										className='hover:bg-brandGreen-600 group relative flex w-full justify-center rounded-md border border-transparent bg-gradient-to-r from-brandBlue to-brandGreen py-2 px-4 text-sm font-medium text-white focus:outline-none focus:ring-2 focus:ring-brandGreen focus:ring-offset-2'
									>
										Next
									</button>
									<div></div>
								</div>
							</Form>
						)}
					</Formik>
				</div>
			) : next === true && continued === false ? (
				<div className='mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8'>
					{/* Grid Layout */}
					<div className='grid grid-cols-1 gap-10 md:grid-cols-2 lg:gap-20'>
						{/* column 1 */}
						<div className='space-y-6 md:my-24'>
							<h1 className='text-4xl font-bold text-brandBlue sm:text-4xl'>Welcome</h1>
							<h2 className='text-2xl font-bold sm:text-5xl'>Select your Vendorfied plan</h2>
							<p className='text-base text-gray-500 sm:text-lg'>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sed justo, sed fermentum
								ornare proin adipiscing amet. Euismod elit, vel tellus, sed in sapien. Lorem ipsum dolor sit
								amet, consectetur adipiscing elit. Cras sed justo, sed fermentum ornare proin adipiscing
								amet. Euismod elit, vel tellus, sed in sapien.
							</p>
							<div className='space-y-4'>
								<details open>
									<summary className='flex cursor-pointer items-center justify-evenly px-4 py-2 text-xl font-bold'>
										<span className='px-3 text-xl' onClick={(e) => e.preventDefault()}>
											-
										</span>
										<span>Order Summary</span>
									</summary>
									<div className=' hover:cursor-pointer'>
										<div className='px-6 py-8'>
											<div className='mb-4 flex items-center'>
												<h3 className='text-4xl font-bold'>Starter</h3>
												<p className='mx-auto text-2xl'>$20/mo.</p>
											</div>
											{/* divider */}
											<div className='mb-4 flex items-center border-t-2 border-t-brandBlue	'>
												<h3 className='text-xl font-bold'>Total</h3>
												<p className='mx-auto text-2xl'>$20.00</p>
											</div>
										</div>
									</div>
								</details>
							</div>
						</div>
						{/* column 2 */}
						<div className='space-y-6 md:space-y-8 '>
							<div>
								<h2 className='mt-6 text-center text-3xl font-extrabold text-gray-900'>Billing Address</h2>
							</div>
							<Formik
								initialValues={{
									address: '',
									city: '',
									zipCode: '',
									country: '',
									state: ''
								}}
								validationSchema={SignupSchema}
								onSubmit={(values) => {
									console.log(values);
								}}
							>
								{({ errors, touched }) => (
									<Form className='mt-8 space-y-6'>
										<div className='-space-y-px rounded-2xl border-2 border-brandBlue bg-white p-4 shadow-sm '>
											<div>
												<label htmlFor='address' className='sr-only'>
													Address
												</label>
												<Field
													id='address'
													name='address'
													type='address'
													autoComplete='address'
													required
													className={
														'relative my-8 block w-full appearance-none rounded-xl border px-3 py-2 ' +
														(errors.address && touched.address
															? 'border-red-500 text-red-900 placeholder-red-300 focus:border-red-500 focus:outline-none focus:ring-red-500'
															: 'border-gray-300 text-gray-900 placeholder-gray-500 focus:border-brandGreen focus:outline-none focus:ring-brandGreen')
													}
													placeholder='Address'
												/>
											</div>
											<div className='mt-4'>
												<label htmlFor='password' className='sr-only'>
													City
												</label>
												<Field
													id='city'
													name='city'
													type='city'
													autoComplete='current-city'
													required
													className={
														'relative my-8 block w-full appearance-none rounded-xl border px-3 py-2 ' +
														(errors.city && touched.city
															? 'border-red-500 text-red-900 placeholder-red-300 focus:border-red-500 focus:outline-none focus:ring-red-500'
															: 'border-gray-300 text-gray-900 placeholder-gray-500 focus:border-brandGreen focus:outline-none focus:ring-brandGreen')
													}
													placeholder='City'
												/>
											</div>
											<div className='mt-4'>
												<label htmlFor='zipCode' className='sr-only'>
													Zip Code
												</label>
												<Field
													id='zipCode'
													name='zipCode'
													type='password'
													autoComplete='current-password'
													required
													className={
														'relative my-8 block w-full appearance-none rounded-xl border px-3 py-2 ' +
														(errors.zipCode && touched.zipCode
															? 'border-red-500 text-red-900 placeholder-red-300 focus:border-red-500 focus:outline-none focus:ring-red-500'
															: 'border-gray-300 text-gray-900 placeholder-gray-500 focus:border-brandGreen focus:outline-none focus:ring-brandGreen')
													}
													placeholder='Zip Code'
												/>
											</div>
											<div className='mt-4'>
												<label htmlFor='confirmPassword' className='sr-only'>
													Country
												</label>
												<Field
													id='country'
													name='country'
													type='password'
													autoComplete='current-password'
													required
													className={
														'relative my-8 block w-full appearance-none rounded-xl border px-3 py-2 ' +
														(errors.country && touched.country
															? 'border-red-500 text-red-900 placeholder-red-300 focus:border-red-500 focus:outline-none focus:ring-red-500'
															: 'border-gray-300 text-gray-900 placeholder-gray-500 focus:border-brandGreen focus:outline-none focus:ring-brandGreen')
													}
													placeholder='Country'
												/>
											</div>
											<div className='mt-4'>
												<label htmlFor='state' className='sr-only'>
													State
												</label>
												<Field
													id='state'
													name='state'
													type='password'
													autoComplete='current-password'
													required
													className={
														'relative my-8 block w-full appearance-none rounded-xl border px-3 py-2 ' +
														(errors.state && touched.state
															? 'border-red-500 text-red-900 placeholder-red-300 focus:border-red-500 focus:outline-none focus:ring-red-500'
															: 'border-gray-300 text-gray-900 placeholder-gray-500 focus:border-brandGreen focus:outline-none focus:ring-brandGreen')
													}
													placeholder='State'
												/>
											</div>
										</div>
									</Form>
								)}
							</Formik>
							<Button
								className='w-full bg-gradient-to-r from-brandBlue to-brandGreen '
								onClick={handleProceed}
							>
								<p className='text-xl text-white'>Proceed to Payment</p>
							</Button>
						</div>
					</div>
				</div>
			) : proceed && !next ? (
				<div className='mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8'>
					{/* Grid Layout */}
					<div className='grid grid-cols-1 gap-10 md:grid-cols-2 lg:gap-20'>
						{/* column 1 */}
						<div className='space-y-6 md:my-24'>
							<h1 className='text-4xl font-bold text-brandBlue sm:text-4xl'>Welcome</h1>
							<h2 className='text-2xl font-bold sm:text-5xl'>Select your Vendorfied plan</h2>
							<p className='text-base text-gray-500 sm:text-lg'>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sed justo, sed fermentum
								ornare proin adipiscing amet. Euismod elit, vel tellus, sed in sapien. Lorem ipsum dolor sit
								amet, consectetur adipiscing elit. Cras sed justo, sed fermentum ornare proin adipiscing
								amet. Euismod elit, vel tellus, sed in sapien.
							</p>
							<div className='space-y-4'>
								<details open>
									<summary className='flex cursor-pointer items-center justify-evenly px-4 py-2 text-xl font-bold'>
										<span className='px-3 text-xl' onClick={(e) => e.preventDefault()}>
											-
										</span>
										<span>Order Summary</span>
									</summary>
									<div className=' hover:cursor-pointer'>
										<div className='px-6 py-8'>
											<div className='mb-4 flex items-center'>
												<h3 className='text-4xl font-bold'>Starter</h3>
												<p className='mx-auto text-2xl'>$20/mo.</p>
											</div>
											{/* divider */}
											<div className='mb-4 flex items-center border-t-2 border-t-brandBlue	'>
												<h3 className='text-xl font-bold'>Total</h3>
												<p className='mx-auto text-2xl'>$20.00</p>
											</div>
										</div>
									</div>
									<p className='text-base text-gray-500 sm:text-lg'>
										After the initial payment you will be charged $20.00 once a month. You can always update
										your payment details and billing information at any time.
									</p>
								</details>
							</div>
						</div>
						{/* column 2 */}
						<div className='space-y-6 md:space-y-8 '>
							<div>
								<h2 className='mt-6 text-center text-3xl font-extrabold text-gray-900'> Payment Method</h2>
							</div>
							<Formik
								initialValues={{
									nameOnCard: '',
									cardNumber: '',
									expirationDate: '',
									cvc: ''
								}}
								validationSchema={SignupSchema}
								onSubmit={(values) => {
									console.log(values);
								}}
							>
								{({ errors, touched }) => (
									<Form className='mt-8 space-y-6'>
										<div className='-space-y-px rounded-2xl border-2 border-brandBlue bg-white p-4 shadow-sm '>
											<div>
												<label htmlFor='nameOnCard' className='sr-only'>
													Name on Card
												</label>
												<Field
													id='nameOnCard'
													name='nameOnCard'
													type='nameOnCard'
													autoComplete='nameOnCard'
													required
													className={
														'relative my-8 block w-full appearance-none rounded-xl border px-3 py-2 ' +
														(errors.nameOnCard && touched.nameOnCard
															? 'border-red-500 text-red-900 placeholder-red-300 focus:border-red-500 focus:outline-none focus:ring-red-500'
															: 'border-gray-300 text-gray-900 placeholder-gray-500 focus:border-brandGreen focus:outline-none focus:ring-brandGreen')
													}
													placeholder='Name on Card'
												/>
											</div>
											<div className='mt-4'>
												<label htmlFor='cardNumber' className='sr-only'>
													Card Number
												</label>
												<Field
													id='cardNumber'
													name='cardNumber'
													type='cardNumber'
													autoComplete='current-cardNumber'
													required
													className={
														'relative my-8 block w-full appearance-none rounded-xl border px-3 py-2 ' +
														(errors.cardNumber && touched.cardNumber
															? 'border-red-500 text-red-900 placeholder-red-300 focus:border-red-500 focus:outline-none focus:ring-red-500'
															: 'border-gray-300 text-gray-900 placeholder-gray-500 focus:border-brandGreen focus:outline-none focus:ring-brandGreen')
													}
													placeholder='Card Number'
												/>
											</div>
											<div className='mt-4'>
												<label htmlFor='expirationDate' className='sr-only'>
													Expiration Date
												</label>
												<Field
													id='expirationDate'
													name='expirationDate'
													type='expirationDate'
													autoComplete='Expiration Date'
													required
													className={
														'relative my-8 block w-full appearance-none rounded-xl border px-3 py-2 ' +
														(errors.expirationDate && touched.expirationDate
															? 'border-red-500 text-red-900 placeholder-red-300 focus:border-red-500 focus:outline-none focus:ring-red-500'
															: 'border-gray-300 text-gray-900 placeholder-gray-500 focus:border-brandGreen focus:outline-none focus:ring-brandGreen')
													}
													placeholder='Expiration Date'
												/>
											</div>
											<div className='mt-4'>
												<label htmlFor='CVC' className='sr-only'>
													CVC
												</label>
												<Field
													id='cvc'
													name='cvc'
													type='cvc'
													autoComplete='cvc'
													required
													className={
														'relative my-8 block w-full appearance-none rounded-xl border px-3 py-2 ' +
														(errors.cvc && touched.cvc
															? 'border-red-500 text-red-900 placeholder-red-300 focus:border-red-500 focus:outline-none focus:ring-red-500'
															: 'border-gray-300 text-gray-900 placeholder-gray-500 focus:border-brandGreen focus:outline-none focus:ring-brandGreen')
													}
													placeholder='CVC'
												/>
											</div>
										</div>
									</Form>
								)}
							</Formik>
							<Button
								className='w-full bg-gradient-to-r from-brandBlue to-brandGreen '
								onClick={handleComplete}
							>
								<p className='text-xl text-white'>Complete Payment</p>
							</Button>
						</div>
					</div>
				</div>
			) : (
				complete === true && (
					<div className='mx-auto max-w-7xl rounded-3xl px-4 py-16 sm:w-full sm:px-6 lg:w-1/4 lg:px-8 '>
						<h2 className='mt-6 text-center text-3xl font-extrabold text-gray-900'>
							Welcome to Vendorfied
						</h2>

						<p className='mt-6 mb-12 text-center text-xl  '>
							Before we begin you will need to set up your company and personal profile.
						</p>
						<Button className='w-full bg-gradient-to-r from-brandBlue to-brandGreen '>
							<p className='text-xl text-white'>Get Started</p>
						</Button>
					</div>
				)
			)}
		</div>
	);
};
