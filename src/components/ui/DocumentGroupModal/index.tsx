import React, { useState } from "react";
import { Transition } from "@headlessui/react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const NewDocumentGroupModal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  const [groupName, setGroupName] = useState("");
  const [groupDescription, setGroupDescription] = useState("");

  const handleGroupNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setGroupName(event.target.value);
  };

  const handleGroupDescriptionChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setGroupDescription(event.target.value);
  };

  return (
    <Transition show={isOpen} as={React.Fragment}>
      <div className="fixed z-10 inset-0 overflow-y-auto">
        <div className="flex items-center justify-center min-h-screen">
          <div className="fixed inset-0 transition-opacity">
            <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
          </div>
          <div className="relative bg-white rounded-lg w-96 mx-auto">
            <div className="p-4">
              <div className="flex justify-between items-center">
                <h2 className="text-xl font-bold">Create Group</h2>
                <button
                  className="text-gray-500 hover:text-gray-700 focus:outline-none"
                  onClick={onClose}
                >
                  <svg
                    className="h-6 w-6 fill-current"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M18.292 6.292a1 1 0 00-1.414 0L12 10.586l-4.293-4.294a1 1 0 00-1.414 1.414L10.586 12l-4.293 4.293a1 1 0 000 1.414 1 1 0 001.414 0L12 13.414l4.293 4.293a1 1 0 001.414-1.414L13.414 12l4.293-4.293a1 1 0 000-1.414z" />
                  </svg>
                </button>
              </div>
              <p className="text-gray-600 mt-2">Please enter group information:</p>
              <div className="mt-4">
                <label className="block font-medium text-sm text-gray-700">Group Name:</label>
                <input
                  type="text"
                  value={groupName}
                  onChange={handleGroupNameChange}
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
              </div>
              <div className="mt-4">
                <label className="block font-medium text-sm text-gray-700">Group Description:</label>
                <textarea
                  value={groupDescription}
                  onChange={handleGroupDescriptionChange}
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500"
                ></textarea>
              </div>
              <div className="mt-4 flex justify-end">
                <button
                  className="mr-2 px-4 py-2 bg-gray-300 rounded-md text-white hover:bg-gray-400 focus:outline-none"
                  onClick={onClose}
                              >
                                  Discard 
                              </button>
                              <button className="px-4 py-2 bg-blue-500 rounded-md text-white hover:bg-blue-600 focus:outline-none">
                                  Create Group 
                              </button>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
        </Transition>
    );
};
