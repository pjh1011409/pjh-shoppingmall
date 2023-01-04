import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import React from "react";
import { Button, Icon } from "semantic-ui-react";

const BottomBar = () => {
  const handleCopyClipBoard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);

      alert("메일을 복사하였습니다.");
    } catch (error) {
      alert("복사 실패!");
    }
  };

  return (
    <div className="bottomBar">
      <div className="boxLayout">
        <BottomNavigation sx={{ width: 500, height: 70 }} className="bottomBox">
          <BottomNavigationAction
            label="Mail"
            value="mail"
            icon={
              <Button
                onClick={() => handleCopyClipBoard("pjh31208@naver.com")}
                animated="vertical"
                style={{ backgroundColor: "white", width: "150px" }}
              >
                <Button.Content
                  hidden
                  style={{ fontSize: "15px", padding: "0px 5px" }}
                >
                  pjh31208@naver.com
                </Button.Content>
                <Button.Content visible>
                  <Icon name="mail" style={{ fontSize: "35px" }} />
                </Button.Content>
              </Button>
            }
          />

          <BottomNavigationAction
            label="Github"
            value="github"
            href="https://github.com/pjh1011409"
            style={{ height: "80px" }}
            icon={
              <Button animated="vertical" style={{ backgroundColor: "white" }}>
                <Button.Content hidden style={{ fontSize: "20px" }}>
                  Github
                </Button.Content>
                <Button.Content visible>
                  <Icon name="github" style={{ fontSize: "35px" }} />
                </Button.Content>
              </Button>
            }
          />
          <BottomNavigationAction
            label="Profile"
            value="profile"
            href="https://www.notion.so/Hi-I-m-Park-Jeong-Ho-c95dc3cffa3343758aa4f4b115b99eeb"
            icon={
              <Button animated="vertical" style={{ backgroundColor: "white" }}>
                <Button.Content hidden style={{ fontSize: "20px" }}>
                  Notion
                </Button.Content>
                <Button.Content visible>
                  <Icon name="user" style={{ fontSize: "35px" }} />
                </Button.Content>
              </Button>
            }
          />
        </BottomNavigation>
      </div>

      <div className="madeBy">Made by ParkJeongHo @2022</div>
    </div>
  );
};

export default BottomBar;
