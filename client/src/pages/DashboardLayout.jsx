import { Outlet } from "react-router-dom";
import Wrapper from "../assets/wrappers/Dashboard";
const DashboardLayout = () => {
  return (
    <div>
      DashboardLayout
      <Outlet />
    </div>
  );
};
export default DashboardLayout;
