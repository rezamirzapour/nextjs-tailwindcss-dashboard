"use client";
import React from "react";
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import { useMessages } from "next-intl";
import Sidebar from "./components/Sidebar";
import Form from "./components/Form";

const View: React.FC = () => {
  const messages = useMessages();
  return (
    <DefaultLayout>
      <Breadcrumb pageName={messages.signIn.sign_in} />

      <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
        <div className="flex flex-wrap items-center">
          <Sidebar />
          <Form />
        </div>
      </div>
    </DefaultLayout>
  );
};

export default View;
