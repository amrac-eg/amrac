// import { getOurWork } from "@/server/db/getourwork";
import { getProjects } from "@/server/db/ourWork";
import Form from "./_components/Form"
import MyWorkList from "./_components/MyWorkList";

const page = async () => {
  const ourWork = await getProjects();
//   console.log(ourWork);
  return (
    <div className="container">
      <div className=" mt-12">
        <Form />
      </div>
      <div className="mt-12">
        <MyWorkList ourworks={ourWork} />
      </div>
      
    </div>
  )
}

export default page
 