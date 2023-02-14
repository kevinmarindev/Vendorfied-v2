import React from 'react';

export const Register = () => {
  const [select, setSelect] = React.useState(false);
	return (
		<>
			{/* master view */}
			<div id='AuthScreenRegister' style={{ height: '90vh' }}>
				{/* background image */}
				<div className=' max-w-full flex h-full flex-row rounded-3xl border-2 bg-gradient-to-br from-vendorfiedBlue/[.1] to-vendorfiedGreen/[.1] bg-center'>
					{/* column 1 */}
					<div className='flex flex-1 flex-col items-center justify-center'>
						<h1 className='mb-4 text-3xl font-bold'>Welcome</h1>
						<h1 className='mb-4 text-5xl font-bold'>Select your Vendorfied plan</h1>
						<p className='p-9 text-center text-lg text-grey'>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sed justo, sed fermentum ornare
							proin adipiscing amet. Euismod elit, vel tellus, sed in sapien. Lorem ipsum dolor sit amet,
							consectetur adipiscing elit. Cras sed justo, sed fermentum ornare proin adipiscing amet.
							Euismod elit, vel tellus, sed in sapien.
            </p>
            <details>
              <summary className='mb-4 text-2xl font-bold'>
						How do I cancel my subscription?
              </summary>
              <div className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-400">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sed justo, sed fermentum ornare proin adipiscing amet. Euismod elit, vel tellus, sed in sapien.</p>
              </div>
            </details>
            <details>
              <summary className='mb-4 text-2xl font-bold'>
						How do I cancel my subscription?
              </summary>
              <div className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-400">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sed justo, sed fermentum ornare proin adipiscing amet. Euismod elit, vel tellus, sed in sapien.</p>
              </div>
            </details>
            <details>
              <summary className='mb-4 text-2xl font-bold'>
						How do I cancel my subscription?
              </summary>
              <div className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-400">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sed justo, sed fermentum ornare proin adipiscing amet. Euismod elit, vel tellus, sed in sapien.</p>
              </div>
            </details>
					
					</div>
					{/* column 2 */}
					<div className='flex flex-1 flex-col items-center justify-center gap-4 '>
						<div className='flex w-1/2 items-center gap-4 rounded-xl border-gray bg-white p-9  '>
							<input type='checkbox' />
							<div>
								<h2 className='font-size p-1 text-xl text-4xl font-bold'>Starter</h2>
								<p>
									Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sed justo, sed fermentum
									ornare proin adipiscing amet. Euismod elit, vel tellus, sed in sapien. Lorem ipsum dolor
									sit amet, consectetur adipiscing elit. Cras sed justo, sed fermentum ornare proin
									adipiscing amet. Euismod elit, vel tellus, sed in sapien..
								</p>
							</div>
							<p>$20/mo.</p>
						</div>
						<div className='flex w-1/2 items-center gap-4 rounded-xl bg-white p-9 '>
							<input type='checkbox' />
							<div>
								<h2 className='font-size p-1 text-xl text-4xl font-bold'>Standard</h2>
								<p>
									Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sed justo, sed fermentum
									ornare proin adipiscing amet. Euismod elit, vel tellus, sed in sapien. Lorem ipsum dolor
									sit amet, consectetur adipiscing elit. Cras sed justo, sed fermentum ornare proin
									adipiscing amet. Euismod elit, vel tellus, sed in sapien..
								</p>
							</div>
							<p>$40/mo.</p>
						</div>
						<div className='flex w-1/2 items-center gap-4 rounded-xl bg-white p-9 '>
							<input type='checkbox' />
							<div>
								<h2 className='font-size p-1 text-xl text-4xl font-bold'>Pro</h2>
								<p>
									Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sed justo, sed fermentum
									ornare proin adipiscing amet. Euismod elit, vel tellus, sed in sapien. Lorem ipsum dolor
									sit amet, consectetur adipiscing elit. Cras sed justo, sed fermentum ornare proin
									adipiscing amet. Euismod elit, vel tellus, sed in sapien..
								</p>
							</div>
							<p>$100/mo.</p>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};
