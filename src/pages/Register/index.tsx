import React, { useState } from 'react';
import { Button } from 'components/ui/Inputs/Button';

const Register: React.FC = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-vendorfiedBlue/[.1] to-vendorfiedGreen/[.1] rounded-3xl">
      <div className="px-4 py-16 mx-auto max-w-7xl sm:px-6 lg:px-8">
        {/* Grid Layout */}
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:gap-20">
          {/* column 1 */}
          <div className="space-y-6 md:my-44">
            <h1 className="text-4xl font-bold text-brandBlue sm:text-4xl">
              Welcome
            </h1>
            <h2 className="text-2xl font-bold sm:text-5xl">
              Select your Vendorfied plan
            </h2>
            <p className="text-base text-gray-500 sm:text-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sed
              justo, sed fermentum ornare proin adipiscing amet. Euismod elit,
              vel tellus, sed in sapien. Lorem ipsum dolor sit amet, consectetur
              adipiscing elit. Cras sed justo, sed fermentum ornare proin
              adipiscing amet. Euismod elit, vel tellus, sed in sapien.
            </p>
            <div className="space-y-4">
              <details>
                <summary
                 
                  className="flex items-center justify-evenly px-4 py-2 text-xl font-bold cursor-pointer"
                >
                  <span className='px-3 text-xl' onClick={(e) => e.preventDefault()}>
									{open ? '-' : '+'}
								</span>
                  <span>How do I cancel my subscription?</span>
                </summary>
                <div className="px-4 py-2">
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
              </details>
              <details>
                <summary
                  className="flex items-center justify-evenly px-4 py-2 text-xl font-bold cursor-pointer"
                >
                  <span className='px-3 text-xl' onClick={(e) => e.preventDefault()}>
									{open ? '-' : '+'}
								</span>
                  <span>How do I cancel my subscription?</span>
                </summary>
                <div className="px-4 py-2">
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
              </details>
              <details>
                <summary
                  className="flex items-center justify-evenly px-4 py-2 text-xl font-bold cursor-pointer"
                >
                  <span className='px-3 text-xl' onClick={(e) => e.preventDefault()}>
									{open ? '-' : '+'}
								</span>
                  <span>How do I cancel my subscription?</span>
                </summary>
                <div className="px-4 py-2">
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
              </details>
            </div>
          </div>
          {/* column 2 */}
          <div className="space-y-6 md:space-y-8 ">
            <div className="bg-white shadow rounded-lg">
              <div className="px-6 py-8">
                <div className="flex items-center mb-4">
                  <input type="checkbox" className="w-5 h-5 mr-4" />
                  <h3 className="text-4xl font-bold">Starter</h3>
                </div>
                <p className="text-sm text-gray-500">
                  Loremipsum dolor sit amet, consectetur adipiscing elit. Cras sed justo, sed fermentum
									ornare proin adipiscing amet. Euismod elit, vel tellus, sed in sapien. Lorem ipsum dolor
									sit amet, consectetur adipiscing elit. Cras sed justo, sed fermentum ornare proin
									adipiscing amet. Euismod elit, vel tellus, sed in sapien..
								</p>
							<p>$20/mo.</p>
							</div>
						</div>
            <div className="bg-white shadow rounded-lg">
              <div className="px-6 py-8">
                <div className="flex items-center mb-4">
                  <input type="checkbox" className="w-5 h-5 mr-4" />
                  <h3 className="text-4xl font-bold">Standard</h3>
                </div>
                <p className="text-sm text-gray-500">
                  Loremipsum dolor sit amet, consectetur adipiscing elit. Cras sed justo, sed fermentum
									ornare proin adipiscing amet. Euismod elit, vel tellus, sed in sapien. Lorem ipsum dolor
									sit amet, consectetur adipiscing elit. Cras sed justo, sed fermentum ornare proin
									adipiscing amet. Euismod elit, vel tellus, sed in sapien..
								</p>
							<p>$40/mo.</p>
							</div>
						</div>
            <div className="bg-white shadow rounded-lg">
              <div className="px-6 py-8">
                <div className="flex items-center mb-4">
                  <input type="checkbox" className="w-5 h-5 mr-4" />
                  <h3 className="text-4xl font-bold">Pro</h3>
                </div>
                <p className="text-sm text-gray-500">
                  Loremipsum dolor sit amet, consectetur adipiscing elit. Cras sed justo, sed fermentum
									ornare proin adipiscing amet. Euismod elit, vel tellus, sed in sapien. Lorem ipsum dolor
									sit amet, consectetur adipiscing elit. Cras sed justo, sed fermentum ornare proin
									adipiscing amet. Euismod elit, vel tellus, sed in sapien..
								</p>
							<p>$100/mo.</p>
							</div>
						</div>
						<Button className='w-full bg-gradient-to-r from-brandBlue to-brandGreen'>
							<p className='text-xl text-white'>Continue</p>
						</Button>
					</div>
				</div>
			</div>
		</div>
	);
};
