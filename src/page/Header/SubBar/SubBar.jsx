'use client';

import dynamic from 'next/dynamic';

import LeftButtonGroup from "./LeftButtonGroup";

const RightButtonGroup = dynamic(
  () => import('./RightButtonGroup'),
  { ssr: false }
);

const SubBar = () => {
  return (
    <div className="flex flex-row justify-center items-center pl-2 sm:pl-6">
      <div className="basis-20/25 mr-2">
        <LeftButtonGroup />
      </div>
      <div className="basis-5/25 mr-2">
        <RightButtonGroup />
      </div>
    </div>
  );
};

export default SubBar;