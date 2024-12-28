import { UserProfile } from "@clerk/nextjs";

export default function Dashboard() {
  return <div className="flex items-center justify-center h-screen ">
    <UserProfile />
  </div>;
}
