import React, { useState } from "react";
import Modal from "react-modal";
import "./Header.css";
import Nav from "../Nav/Nav";

const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [adminData, setAdminData] = useState([]);
  const [newAdmin, setNewAdmin] = useState({
    fullName: "",
    phoneNumber: "",
    role: "",
  });

  const handleFormSubmit = (event) => {
    event.preventDefault();

    if (!newAdmin.fullName || !newAdmin.phoneNumber || !newAdmin.role) {
      alert("Iltimos, barcha Malumot toʻldiring");
      return;
    }

    setAdminData((prevAdminData) => [...prevAdminData, newAdmin]);
    setNewAdmin({
      fullName: "",
      phoneNumber: "",
      role: "",
    });

    closeModal();
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <header className="header">
        <div className="container">
          <Nav />

          <div className="box">
            <h1 className="header-title">Admin qo’shish</h1>
            <button className="modal-btn" onClick={openModal}>
              +
            </button>
          </div>

          <Modal isOpen={isModalOpen} onRequestClose={closeModal}>
            <div className="modal-content">
              <div className="modal-header">
                <h2 className="modal-title">Admin qo’shish</h2>
                <button className="close-btn" onClick={closeModal}>
                  X
                </button>
                <form className="modal-form" onSubmit={handleFormSubmit}>
                  <label htmlFor="adminName">Full name</label>
                  <input
                    type="text"
                    className="input-name"
                    id="adminName"
                    name="fullName"
                    placeholder="Full name"
                    autoComplete="off"
                    value={newAdmin.fullName}
                    onChange={(e) =>
                      setNewAdmin({ ...newAdmin, fullName: e.target.value })
                    }
                  />
                  <label htmlFor="phoneNumber">Phone number</label>
                  <input
                    className="phoneNumber"
                    type="tel"
                    id="phoneNumber"
                    name="phoneNumber"
                    autoComplete="off"
                    placeholder="+998"
                    value={newAdmin.phoneNumber}
                    onChange={(e) => {
                      const formattedPhoneNumber = e.target.value
                        .replace(/\D/g, "")
                        .replace(/(\d{3})(\d{3})(\d{4})/, "$1-$2-$3");

                      setNewAdmin({
                        ...newAdmin,
                        phoneNumber: formattedPhoneNumber,
                      });
                    }}
                  />

                  <label htmlFor="role">Role</label>
                  <input
                    className="role"
                    type="text"
                    id="role"
                    name="role"
                    autoComplete="off"
                    value={newAdmin.role}
                    placeholder="Role"
                    onChange={(e) =>
                      setNewAdmin({ ...newAdmin, role: e.target.value })
                    }
                  />
                  <button className="save-btn" type="submit">
                    Saqlash
                  </button>
                </form>
              </div>
            </div>
          </Modal>

          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Full name</th>
                <th>Phone number</th>
                <th>Role</th>
              </tr>
            </thead>
            <tbody>
              {adminData.map((admin, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{admin.fullName}</td>
                  <td>{admin.phoneNumber}</td>
                  <td>{admin.role}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </header>
    </>
  );
};

export default Header;