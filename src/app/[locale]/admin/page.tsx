import React from 'react'
import Form from './_components/Form'
import ServicesTable from './_components/ServicesTable'
import { getServices } from '@/server/db/services';


const page = async () => {
  const services = await getServices();
  return (
    <div className='container py-12'>
     <Form />
     <div>
      <ServicesTable services={services} />
     </div>
    </div>
  )
}

export default page
