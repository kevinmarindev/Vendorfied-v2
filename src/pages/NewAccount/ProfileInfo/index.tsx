import { faCheck } from '@fortawesome/free-solid-svg-icons';

import { Formik } from 'formik';

import Text from 'components/ui/Inputs/Text';
import VendorfiedCard from 'components/ui/VendorfiedCard';
import { Button } from 'components/ui/Inputs/Button';

export const ProfileInfo = () => {
    return (
        <>
            <div className='flex h-screen gap-3'>
                <div
                    className={`hidden w-2/3 justify-center bg-gradient-to-br from-blue-500/[.5] to-emerald-400/[.4] p-2 md:flex lg:w-1/2`}
                >
                    <div className='md:w-2/3 lg:w-3/4'>
                        <VendorfiedCard logo={false} icon={faCheck} title='Name' subTitle='Administrator' />
                    </div>
                </div>
                <div className='w-full md:w-3/4 relative flex justify-center'>
                    <div className='absolute left-0 font-squada text-secondary'>{"<"} Back</div>
                    <div className='w-1/2 flex-col'>
                        <div className='font-squada mt-10 text-1xl text-secondary'> Step 02/02</div>
                        <div className='text-4xl font-squada mb-5 mt-5'>Profile Info</div>
                        <label className='block font-squada text-secondary pb-4'>Create your user profile</label>

                        <Formik
                            initialValues={{
                                search: '',
                                filter: ''
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
                                    className='flex-col w-full space-y-2'
                                >
                                    <Text name='First Name' label='Company Name' />
                                    <Text name='Last Name' label='Company Phone' />
                                    <Text name='Phone Number' label='Email' />
                                    <Text name='Email Address' label='Website' />
                                    <label className='block text-bold text-md font-squada pt-4 text-secondary'>
                                        This information will be securely saved as per the
                                        <span className='font-squada'>
                                            Terms and Conditions & Privacy Policy
                                        </span>
                                    </label>
                                    <div className='flex justify-end'>
                                        <Button
                                            variant='solid'
                                            color='brand'
                                            type='submit'
                                            className='w-1/2 font-squada text-1xl flex'>
                                            Complete
                                        </Button>

                                    </div>
                                </form>
                            )}
                        </Formik>

                    </div>
                    {/* <div className='flex w-full justify-end lg:w-fit'>
						Company Info
					</div> */}
                </div>
            </div>
        </>
    );
};

export default ProfileInfo;
