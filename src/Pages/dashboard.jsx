import React, { useState, useEffect } from 'react';
import './dashboard.css';

function Sidebar() {
  const [activeMenu, setActiveMenu] = useState(null);

  const handleMenuClick = (index) => {
    setActiveMenu(index);
  };

  return (
    <section id="sidebar">
      <a href="#" className="brand">
        <i className="bx bx-smile"></i>
        <span className="brand">Admin </span>
      </a>
      <ul className="side-menu top">
        <MenuItem index={0} iconClass="bx bxs-dashboard" text="Dashboard" active={activeMenu === 0} onClick={() => handleMenuClick(0)} />
        <MenuItem index={1} iconClass="bx bxs-shopping-bag" text="My Store" active={activeMenu === 1} onClick={() => handleMenuClick(1)} />
        <MenuItem index={2} iconClass="bx bxs-doughnut-chart" text="Analytics" active={activeMenu === 2} onClick={() => handleMenuClick(2)} />
        <MenuItem index={3} iconClass="bx bxs-message-dots" text="Message" active={activeMenu === 3} onClick={() => handleMenuClick(3)} />
        <MenuItem index={4} iconClass="bx bxs-group" text="Team" active={activeMenu === 4} onClick={() => handleMenuClick(4)} />
        <MenuItem index={5} iconClass="bx bxs-cog" text="Setting" active={activeMenu === 5} onClick={() => handleMenuClick(5)} />
        <MenuItem index={6} iconClass="bx bxs-log-out-circle" text="LogOut" active={activeMenu === 6} onClick={() => handleMenuClick(6)} />
      </ul>
    </section>
  );
}

function MenuItem({ index, iconClass, text, active, onClick }) {
  return (
    <li className={active ? 'active' : ''}>
      <a href="#" onClick={onClick}>
        <i className={iconClass}></i>
        <span className="text">{text}</span>
      </a>
    </li>
  );
}

function Navbar() {
  return (
    <nav>
      
      <i className="bx bx-menu"></i>
      <a href="#" className="nav-link">Categories</a>
      <form action="#">
        <div className="form-input">
          <input type="search" placeholder="Search..." />
          <button type="submit" className="search-btn">
            <i className="bx bx-search"></i>
          </button>
        </div>
      </form>
      <input type="checkbox" id="switch-mode" hidden />
      <label htmlFor="switch-mode" className="switch-mode"></label>
      <a href="#" className="notification">
        <i className="bx bxs-bell"></i>
        <span className="num">8</span>
      </a>
      <a href="#" className="profile">
        <img src="img/people.png" alt="Profile" />
      </a>
    </nav>
  );
}

function Main() {
  return (
    <main>
      {/* Your main content here */}
    </main>
  );
}

function Dashboard() {
  useEffect(() => {
    const switchMode = document.getElementById("switch-mode");

    switchMode.addEventListener("change", function () {
      if (this.checked) {
        document.body.classList.add("dark");
      } else {
        document.body.classList.remove("dark");
      }
    });

    return () => {
      switchMode.removeEventListener("change", function () {
        if (this.checked) {
          document.body.classList.add("dark");
        } else {
          document.body.classList.remove("dark");
        }
      });
    };
  }, []);

  return (
    <div>
      <Sidebar />
      <section id="content">
        <Navbar />
        <Main />
      </section>
    </div>
  );
}

export default Dashboard;
