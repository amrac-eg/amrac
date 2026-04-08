import { getProjects } from "@/server/db/ourWork";
import Form from "./_components/Form";

const page = async () => {
  const ourWork = await getProjects();
  return (
    <div className="container">
      <div className=" mt-12">
        <Form ourWork={ourWork} />
      </div>
      <div className="mt-12">
        {/* <MyWorkList /> */}
      </div>
      
    </div>
  )
}

export default page
