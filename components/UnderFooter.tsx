import React from "react";

const UnderFooter = () => {
  return (
    <div>
      <div className="w-4/5 h-0.5 bg-gray-300 mx-auto mb-4"></div>
      <p className="text-center text-gray-700">
        Website made by {"\u00A0"}
        <a href="mailto:igorgasi@gmail.com">Igor Gaši</a>
      </p>
      <div className="bg-white w-full h-200 p-4"></div>
    </div>
  );
};

export default UnderFooter;
