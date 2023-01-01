import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import EmailIcon from "@mui/icons-material/Email";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import GitHubIcon from "@mui/icons-material/GitHub";
import React from "react";

const BottomBar = () => {
  return (
    <div className="bottomBar">
      <div className="boxLayout">
        <BottomNavigation sx={{ width: 500 }} className="bottomBox">
          <BottomNavigationAction
            label="Mail"
            value="mail"
            icon={<EmailIcon fontSize="large" />}
          />
          <BottomNavigationAction
            label="Github"
            value="github"
            icon={<GitHubIcon fontSize="large" />}
          />
          <BottomNavigationAction
            label="Profile"
            value="profile"
            icon={<AccountBoxIcon fontSize="large" />}
          />
        </BottomNavigation>
      </div>

      <div className="madeBy">Made by ParkJeongHo @2022</div>
    </div>
  );
};

export default BottomBar;
