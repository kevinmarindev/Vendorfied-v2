import { useMutation, useQueryClient } from '@tanstack/react-query';
import { Link } from 'react-router-dom';
import { Formik } from 'formik';
import * as Yup from 'yup';


// Application Screen || Define Imports
// =================================================================================================
// =================================================================================================
import { login as loginApi } from 'api/user';
import Logo from 'assets/img/vendorfied-3.png';
import { Button } from 'components/ui/Inputs/Button';
import CheckBox from 'components/ui/Inputs/CheckBox';
import Text from 'components/ui/Inputs/Text';
import { User } from 'models/User';


// Application Screen || Define Exports
// =================================================================================================
// =================================================================================================
export const Login = () => {
	const queryClient = useQueryClient();

	const { mutate: login } = useMutation(['login'], {
		onMutate: async (values: any) => {
			return await loginApi({ email: values.email, password: values.password });
		},
		onError: (error) => {
			// ! for now keep this, until we have a functioning backend
			queryClient.setQueryData(['user'], {
				id: '1234',
				email: 'guest@nexrage.com',
				name: 'Guest'
			} as User);
		}
	});

	return (
		<div className='flex h-screen w-full flex-col items-center justify-center p-16'>
			<img src={Logo} className='w-24 object-cover pb-4' />
			<h1 className='font-squada text-5xl font-bold text-gray-900'>Welcome Back</h1>
			<h1 className='font-squada text-xl font-bold text-gray-500/[.8]'>
				Please enter your login details
			</h1>
			<Formik
				initialValues={{ email: '', password: '' }}
				validationSchema={Yup.object().shape({
					email: Yup.string().email('Invalid email address').required('Required'),
					password: Yup.string().required('Required')
				})}
				validateOnBlur
				validateOnChange
				onSubmit={(values, { setSubmitting }) => {
					login(values, {
						onSettled: () => {
							setSubmitting(false);
						}
					});
				}}
			>
				{({ values, handleChange, handleSubmit, isValid, isSubmitting }) => (
					<form onSubmit={handleSubmit} className='w-full pt-24'>
						<div className='flex flex-col space-y-6'>
							<Text name='email' label='Email' />
							<Text name='password' label='Password' type='password' />
							<div className='flex justify-between'>
								<CheckBox name='remember' label='Remember me' className='text-lg' />
								<Link to='/forgot-password' className='font-squada text-gray-500 hover:text-gray-700'>
									Forgot Password?
								</Link>
							</div>
							<Button
								disabled={!isValid || isSubmitting}
								variant='solid'
								color='brand'
								type='submit'
								className='w-full font-squada text-2xl'
							>
								{isSubmitting ? 'Logging in...' : 'Login'}
							</Button>
						</div>
					</form>
				)}
			</Formik>
		</div>
	);
};

export default Login;
