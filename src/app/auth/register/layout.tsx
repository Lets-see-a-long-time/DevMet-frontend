import { getServerSession } from "next-auth";

async function layout() {
  const session = getServerSession();
  console.log(session, "iiii");
  return <div>layout is here</div>;
}

export default layout;
