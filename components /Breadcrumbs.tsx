import React from "react";

const Breadcrumbs = ({ title }: { title: string }) => {
  return (
    <div className="Breadcrumbs-overlay">
      <div className="flex flex-col gap-2 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-28 items-center justify-center">
        {" "}
        <h1 className="text-white text-4xl font-bold ">{title}</h1>
      </div>
    </div>
  );
};

export default Breadcrumbs;
