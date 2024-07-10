import { useGetAuthStatus } from "@/features/authentication";

const Dashboard = () => {
    const status = useGetAuthStatus();
    
  return (
    <div>
        Dashboard : {status}
    </div>
  )
}

export default Dashboard;