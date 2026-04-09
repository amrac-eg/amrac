import React from "react";
import Form from "./_components/Form";
import ServicesTable from "./_components/ServicesTable";
import { getServices } from "@/server/db/services";
import { getCurrentLocale } from "@/lib/getCurrentLocale";

const page = async () => {
  const services = await getServices();
  const locale = await getCurrentLocale();
  return (
    <div className="container py-12">
      <Form />
      <div>
        <ServicesTable locale={locale} services={services} />
      </div>
    </div>
  );
};

export default page;
