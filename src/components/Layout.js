import { Outlet } from "react-router-dom";
import Nav from "./nav-component";

const Layout = ({ setCurrentUser, currentUser }) => {
  return (
    <>
      <Nav currentUser={currentUser} setCurrentUser={setCurrentUser} />
      <Outlet />
    </>
  );
};

export default Layout;
