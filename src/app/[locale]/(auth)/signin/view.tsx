import React from "react";
import Sidebar from "./components/Sidebar";
import Form from "./components/Form";

const View: React.FC = () => {
  return (
    <div className="min-h-screen rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
      <div className="flex flex-wrap items-center">
        <Sidebar />
        <Form />
      </div>
    </div>
  );
};

export default View;
