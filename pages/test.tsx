import React, { useState } from "react";
import type { NextPage } from "next";

import { Layout } from "../components";
import Dialog from "../components/Dialog";

const Test: NextPage = () => {
  const metaInfo = {
    title: "Test",
  };

  const [isModalOpen, setIsModalOpen] = useState(false);

  const content = () => {
    return (
      <>
        <div className="flex items-center justify-center flex-none w-12 h-12 mx-auto bg-red-100 dark:bg-red-300 rounded-full">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6 text-red-600"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <div className="mt-2 text-center sm:ml-4 sm:text-left">
          <h4 className="text-lg font-medium text-primary_white-400 dark:text-primary_dark-400">
            Delete account ?
          </h4>
          <p className="mt-2 text-[15px] leading-relaxed text-primary_white-400 dark:text-primary_dark-400">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
      </>
    );
  };

  const footer = () => {
    return (
      <>
        <button
          className="w-full mt-2 p-2.5 flex-1 text-white bg-red-600 rounded-md outline-none ring-offset-2 ring-red-600 focus:ring-2"
          onClick={() => handleDismiss()}
        >
          Delete
        </button>
        <button
          className="w-full mt-2 p-2.5 flex-1 text-gray-800 rounded-md outline-none border ring-offset-2 ring-indigo-600 focus:ring-2"
          onClick={() => handleDismiss()}
        >
          Cancel
        </button>
      </>
    );
  };

  const handleDismiss = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <Layout metaInfo={metaInfo}>
      <div className="p-3 flex flex-col gap-3">
        <button onClick={handleDismiss}>Hello </button>
        <Dialog
          isOpen={isModalOpen}
          handleDismiss={handleDismiss}
          content={content()}
          footer={footer()}
        />
      </div>
    </Layout>
  );
};

export default Test;
