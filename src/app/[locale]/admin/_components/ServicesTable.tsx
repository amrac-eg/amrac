  import { Services } from "@prisma/client";
import Image from "next/image";
import EditServices from "./EditServices";
import DeleteServices from "./DeleteServices";
// import EditServices from "./EditServices";
// import DeleteServices from "./DeleteServices";

interface ServicesTableProps {
  services: Services[];
}

const ServicesCard = ({ service }: { service: Services }) => {
  return (
    <div className="w-full  bg-white rounded-lg shadow-lg overflow-hidden mt-12">
      <div className="relative w-full h-56">
        <Image
          src={service?.image ?? ""}
          alt={service.description}
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className="p-4">
        <h3 className="text-xl font-semibold text-gray-800">
          {service.title}
        </h3>
        <h3>
          {service.description}
        </h3>

        <div className="mt-4 flex justify-between">

          <EditServices Services={service} />
          <DeleteServices id={service.id}  publicId={service?.publicId ?? ""}/>

        </div>
      </div>
    </div>
  );
};

const ServicesTable = ({ services }: ServicesTableProps) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12">
      {services.map((service) => (
        <ServicesCard key={service.id} service={service} />
      ))}
    </div>
  );
};

export default ServicesTable;
