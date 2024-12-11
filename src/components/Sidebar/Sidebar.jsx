import { useState } from "react";
import classnames from "classnames";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logo from "../../assets/logo.png";
import PropTypes from "prop-types";
import {
  Green,
  Header,
  Red,
  SidebarContainer,
  ThreeDots,
  Yellow,
} from "./SidebarStyles";

const routes = [
  { title: "Home", icon: "fas-solid fa-house", path: "/" },
  { title: "Sales", icon: "chart-line", path: "/sales" },
  { title: "Costs", icon: "chart-column", path: "/costs" },
  { title: "Payments", icon: "wallet", path: "/payments" },
  { title: "Finances", icon: "chart-pie", path: "/finances" },
  { title: "Messages", icon: "envelope", path: "/messages" },
];

const bottomRoutes = [
  { title: "Settings", icon: "sliders", path: "/settings" },
  { title: "Support", icon: "phone-volume", path: "/support" },
];

const Sidebar = (props) => {
  const { color } = props;
  const [isOpened, setIsOpened] = useState(false);
  const containerClassnames = classnames("sidebar", {
    opened: isOpened,
    closed: !isOpened,
  });
  const [activeRoute, setActiveRoute] = useState(null);

  const goToRoute = (path) => {
    console.log(`going to "${path}"`);
    setActiveRoute(path);
  };

  const toggleSidebar = () => {
    setIsOpened((v) => !v);
  };

  return (
    <SidebarContainer color={color} className={containerClassnames}>
      <ThreeDots>
        <Red></Red>
        <Yellow></Yellow>
        <Green></Green>
      </ThreeDots>
      <Header onClick={toggleSidebar}>
        <img src={logo} alt="TensorFlow logo" />
        <span className="nameLogo">TensorFlow</span>
        <FontAwesomeIcon
          className="arrow_icon"
          icon={isOpened ? "angle-left" : "angle-right"}
        />
      </Header>
      <div>
        {routes.map((route) => (
          <div
            key={route.title}
            className={`route ${activeRoute === route.path ? "active" : ""}`}
            onClick={() => goToRoute(route.path)}
          >
            <FontAwesomeIcon icon={route.icon} />
            <span className="title">{route.title}</span>
          </div>
        ))}
      </div>
      <div>
        {bottomRoutes.map((route) => (
          <div
            key={route.title}
            className={`route ${activeRoute === route.path ? "active" : ""}`}
            onClick={() => goToRoute(route.path)}
          >
            <FontAwesomeIcon icon={route.icon} />
            <span className="title">{route.title}</span>
          </div>
        ))}
      </div>
    </SidebarContainer>
  );
};

Sidebar.propTypes = {
  color: PropTypes.string,
};

export default Sidebar;
