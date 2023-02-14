import React from 'react'
import { faCheck } from '@fortawesome/free-solid-svg-icons';

import { Formik } from 'formik';

import Text from 'components/ui/Inputs/Text';
import VendorfiedCard from 'components/ui/VendorfiedCard';
import { Button } from 'components/ui/Inputs/Button';

export const NewAccount = () => {
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
                        <div className='font-squada mt-10 text-1xl text-secondary'> Step 01/02</div>
                        <div className='text-4xl font-squada mb-5 mt-5'>Company Info</div>
                        <label className='block font-squada text-secondary pb-4'>Create your company profile</label>
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
                                    <Text name='Company Name' label='Company Name' />
                                    <Text name='Company Phone' label='Company Phone' />
                                    <Text name='email' label='Email' />
                                    <Text name='Email' label='Website' />
                                    <Text name='Address' label='Address' />
                                    <Text name='Address Line 2' label='Address Line 2' />
                                    <div className='flex md:grid md:grid-cols-3 md:gap-4'>
                                        <Text name='City' label='City' />
                                        <Text name='State' label='State' />
                                        <Text name='Zip Code' label='Zip Code' />

                                    </div>
                                    <label className='block text-bold text-md font-squada text-secondary pt-4'>This information will be securely saved as per the <span className='font-squada'>Terms and Conditions & Privacy Policy
                                    </span>
                                    </label>
                                    <div className='flex justify-end'>
                                        <Button
                                            variant='solid'
                                            color='brand'
                                            type='submit'
                                            className='w-1/2 font-squada text-1xl flex'>
                                            Next Step
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

export default NewAccount;
