import React from 'react';

export const PreAuthScreenRegister = () => {
	return (
		<>
			{/* master view */}
			<div id='AuthScreenRegister' style={{ height: '90vh' }}>
				{/* background image */}
				<div className='max-w-screen flex h-full flex-row rounded-3xl border-2 bg-gradient-to-br from-vendorfiedBlue/[.1] to-vendorfiedGreen/[.1] bg-center'>
					{/* column 1 */}
					<div className='flex flex-1 flex-col items-center justify-center'>
						<h1 className='mb-4 text-3xl font-bold'>Welcome</h1>
						<h1 className='mb-4 text-5xl font-bold'>Select your Vendorfied plan</h1>
						<p className='text-center text-lg text-grey p-9'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sed justo, sed fermentum ornare proin adipiscing amet. Euismod elit, vel tellus, sed in sapien. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sed justo, sed fermentum ornare proin adipiscing amet. Euismod elit, vel tellus, sed in sapien.
            </p>
            <h1 className='mb-4 text-2xl font-bold'>How do I cancel my subscription?</h1>
            <h1 className='mb-4 text-2xl font-bold'>Frequently Asked Question 2?</h1>
            <h1 className='mb-4 text-2xl font-bold'>Frequently Asked Question 3?</h1>
					</div>
					{/* column 2 */}
					<div className='flex flex-1 flex-col gap-4 items-center justify-center ' >
						<div className='flex items-center gap-4 bg-white rounded-xl p-9 w-3/4  '>
							<input type='checkbox' />
							<div>
								<h2 className='text-xl font-bold font-size text-4xl p-1'>Starter</h2>
								<p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sed justo, sed fermentum ornare proin adipiscing amet. Euismod elit, vel tellus, sed in sapien. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sed justo, sed fermentum ornare proin adipiscing amet. Euismod elit, vel tellus, sed in sapien..</p>
              </div>
              <p>$20/mo.</p>
						</div>
						<div className='flex items-center gap-4 bg-white rounded-xl p-9 '>
							<input type='checkbox' />
							<div>
								<h2 className='text-xl font-bold font-size text-4xl p-1'>Standard</h2>
								<p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sed justo, sed fermentum ornare proin adipiscing amet. Euismod elit, vel tellus, sed in sapien. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sed justo, sed fermentum ornare proin adipiscing amet. Euismod elit, vel tellus, sed in sapien..</p>
              </div>
              <p>$40/mo.</p>
						</div>
						<div className='flex items-center gap-4 bg-white rounded-xl p-9 '>
							<input type='checkbox' />
							<div>
								<h2 className='text-xl font-bold font-size text-4xl p-1'>Pro</h2>
								<p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sed justo, sed fermentum ornare proin adipiscing amet. Euismod elit, vel tellus, sed in sapien. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sed justo, sed fermentum ornare proin adipiscing amet. Euismod elit, vel tellus, sed in sapien..</p>
              </div>
              <p>$100/mo.</p>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};
