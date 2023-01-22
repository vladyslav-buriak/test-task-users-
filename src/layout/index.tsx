import { Outlet } from "react-router-dom";
import { FC } from "react";
const Layout: FC = () => {
  return (
    <div className="wrapper">
      <h2>Header</h2>
      <div className="content">
        <div className="container">
          <Outlet />
        </div>
      </div>
      <h2>Footer</h2>
    </div>
  );
};

export default Layout;
