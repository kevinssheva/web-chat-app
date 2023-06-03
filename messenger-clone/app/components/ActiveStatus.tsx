"use client";

import useActiveChannel from "../hooks/useActiveChannel";

const ActiveStatus = () => {
  useActiveChannel();
  return (
    <div>
      <div></div>
    </div>
  );
};

export default ActiveStatus;
