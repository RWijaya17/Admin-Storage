import React, { useState } from "react";
import "./Dashboard.scss";
import SideBar from "../../Components/sidebar/SideBar.jsx";
import Navbar from "../../Components/Navbar/Navbar.jsx";
import Table from "../../Components/Table/Table.jsx"; // Adjust the import path as needed
import PageButtons from "../../Components/PageButtons/PageButtons.jsx";

const sampleShipmentData = [
  
];

function Dashboard() {
  const [activeButton, setActiveButton] = useState(null);
  const [currentPage, setCurrentPage] = useState(1); // State to manage current page
  const itemsPerPage = 8; // Number of items per page
  const totalPages = Math.ceil(sampleShipmentData.length / itemsPerPage); // Calculate total pages

  const handleButtonClick = (button) => {
    setActiveButton(button);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="home">
      <SideBar />
      <div className="homeContainer">
        <Navbar />
        <div className="storage">Storage</div>

        <div className="storage-container">
          <div id="storage" className="storage-fields">
            <div className="field">Batch ID</div>
            <div className="field">Shipping ID</div>
            <div className="field">Storage ID</div>
            <div className="field">Weight</div>
            <div className="field">Storage Location</div>
            <div className="field">Date Received</div>
            <div className="field">Action</div>
          </div>
        </div>
        <Table
          shipmentData={sampleShipmentData.slice(
            (currentPage - 1) * itemsPerPage,
            currentPage * itemsPerPage
          )}
        />
        
      </div>
    </div>
  );
}

export default Dashboard;
