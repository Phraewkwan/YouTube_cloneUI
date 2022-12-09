import React from "react";
import styled from "styled-components";
import OliTube from "../img/YouTube.png";
import { Link } from "react-router-dom";

// Icon
import HomeIcon from "@mui/icons-material/Home";
import ExploreIcon from "@mui/icons-material/Explore";
import VideoStableIcon from "@mui/icons-material/VideoStable";
import SubscriptionsIcon from "@mui/icons-material/Subscriptions";
import OndemandVideoIcon from "@mui/icons-material/OndemandVideo";
import LibraryMusicIcon from "@mui/icons-material/LibraryMusic";
import VideoLibraryIcon from "@mui/icons-material/VideoLibrary";
import RestoreIcon from "@mui/icons-material/Restore";
import SmartDisplayIcon from "@mui/icons-material/SmartDisplay";
import TimelineIcon from "@mui/icons-material/Timeline";
import DownloadIcon from "@mui/icons-material/Download";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import SettingsIcon from "@mui/icons-material/Settings";
import FlagIcon from "@mui/icons-material/Flag";
import HelpIcon from "@mui/icons-material/Help";
import FeedbackIcon from "@mui/icons-material/Feedback";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ModeNightIcon from "@mui/icons-material/ModeNight";

const Container = styled.div`
  flex: 1;
  background-color: ${({ theme }) => theme.bg};
  color: ${({ theme }) => theme.text};
  font-size: 14px;
  position: sticky;
`;

const Wrapper = styled.div`
  padding: 18px 26px;
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 25px;
`;

const Img = styled.img`
  height: 25px;
`;

const Item = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  cursor: pointer;
  padding: 7.5px 0px;

  &:hover {
    background-color: ${({ theme }) => theme.soft};
  }
`;

const Hr = styled.hr`
  margin: 15px 0px;
  border: 0.5px solid ${({ theme }) => theme.soft}; ;
`;

const Login = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px 15px;
  background-color: transparent;
  border: 1px solid #3ea6ff;
  color: #3ea6ff;
  border-radius: 3px;
  font-weight: 500;
  margin-top: 10px;
  cursor: pointer;
  gap: 5px;
`;

const Title = styled.h2`
  font-size: 14px;
  font-weight: 500;
  color: #aaaaaa;
  margin-bottom: 20px;
`;

const Menu = ({ darkMode, setDarkMode }) => {
  return (
    <Container>
      <Wrapper>
        <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
          <Logo>
            <Img src={OliTube} />
            OliTube
          </Logo>
        </Link>
        <Item>
          <HomeIcon />
          Home
        </Item>
        <Item>
          <ExploreIcon />
          Explore
        </Item>
        <Item>
          <VideoStableIcon />
          Shorts
        </Item>
        <Item>
          <SubscriptionsIcon />
          Subscriptions
        </Item>
        <Item>
          <OndemandVideoIcon />
          Originals
        </Item>
        <Item>
          <LibraryMusicIcon />
          Music
        </Item>
        <Hr />

        <Login>
          Sign in to like videos, comment, and subscribe.
          <Link to="signin" style={{textDecoration:"none"}}>
            <Button>
              <AccountCircleIcon />
              SIGN IN
            </Button>
          </Link>
        </Login>
        <Hr />

        <Title>BEST OF OLITUBE</Title>
        <Item>
          <VideoLibraryIcon />
          Library
        </Item>
        <Item>
          <RestoreIcon />
          History
        </Item>
        <Item>
          <SmartDisplayIcon />
          Your Videos
        </Item>
        <Item>
          <TimelineIcon />
          Watch Later
        </Item>
        <Item>
          <DownloadIcon />
          Downloads
        </Item>
        <Item>
          <ThumbUpIcon />
          Liked videos
        </Item>
        <Hr />

        <Title>EXPLORE</Title>
        <Item>
          <SportsEsportsIcon />
          Gaming
        </Item>
        <Item>
          <EmojiEventsIcon />
          Sport
        </Item>
        <Hr />

        <Item>
          <SettingsIcon />
          setting
        </Item>
        <Item>
          <FlagIcon />
          Report history
        </Item>
        <Item>
          <HelpIcon />
          Help
        </Item>
        <Item>
          <FeedbackIcon />
          Send feedback
        </Item>
        <Hr />

        <Item onClick={() => setDarkMode(!darkMode)}>
          <ModeNightIcon />
          {darkMode ? "Light" : "Dark"} Mode
        </Item>
        <Hr />
      </Wrapper>
    </Container>
  );
};

export default Menu;
