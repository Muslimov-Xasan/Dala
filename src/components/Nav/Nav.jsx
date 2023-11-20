import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import Logo from "../../Assets/img/Logo.svg";
import "./Nav.css";

const Nav = () => {
  const [activeBtn, setActiveBtn] = useState();
  const [adminData, setAdminData] = useState([]); // Declare adminData state
  const navigate = useNavigate();

  useEffect(() => {
    const storedAdminData = localStorage.getItem("");
    if (storedAdminData) {
      setAdminData(JSON.parse(storedAdminData));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("", JSON.stringify(adminData));
  }, [adminData]);

  const handleButtonClick = (btnName, route) => {
    setActiveBtn(btnName);
    navigate(route);
  };

  return (
    <div className="contianer">
        <img className="logo" src={Logo} alt="logo" width={40} height={40} />
      <div className="buttons">

        <NavLink
          to="/"
          className={`btn ${activeBtn === "Monitoring" ? "active" : ""}`}
          onClick={() => handleButtonClick("Monitoring", "/")}
        >
          Monitoring
        </NavLink>
        <NavLink
          to="/adminAdd"
          className={`btn ${activeBtn === "Admin" ? "active" : ""}`}
          onClick={() => handleButtonClick("Admin", "/adminAdd")}
        >
          Admin qo’shish
        </NavLink>
        <NavLink
          to="/add-category"
          className={`btn ${activeBtn === "Kategoriya" ? "active" : ""}`}
          onClick={() => handleButtonClick("Kategoriya", "/add-category")}
        >
          Kategoriya qo’shish
        </NavLink>
        <NavLink
          to="/news"
          className={`btn ${activeBtn === "Yangiliklar" ? "active" : ""}`}
          onClick={() => handleButtonClick("Yangiliklar", "/news")}
        >
          Yangiliklar
        </NavLink>
        <NavLink
          to="/image-upload"
          className={`btn ${activeBtn === "Banner" ? "active" : ""}`}
          onClick={() => handleButtonClick("Banner", "/image-upload")}
        >
          Banner
        </NavLink>
      </div>
    </div>
  );
};

export default Nav;