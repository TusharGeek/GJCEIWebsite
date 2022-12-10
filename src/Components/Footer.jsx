import { Box, Text, UnstyledButton } from "@mantine/core";
import { useNavigate } from "react-router-dom";
import {
  IconBrandFacebook,
  IconBrandTwitter,
  IconBrandInstagram,
} from "@tabler/icons";
import Logo from ".././assets/Logo/logo.png";
import "./Footer.css";

const Footer = () => {
  const navigate = useNavigate();
  return (
    <div style={{ marginTop: "70px" }}>
      <footer>
        <div class="footer">
          <div className="Logo">
            <img src={Logo} className="LogoImg"></img>
            <Text style={{ fontSize: "30px", color: "white" }}>GJCEI</Text>
          </div>

          <div class="row">
            <Text style={{ fontSize: "20px", marginBottom: "16px" }}>
              Lets Connect
            </Text>
            <a href="https://www.instagram.com/gjcei_gndu/">
              <IconBrandInstagram style={{ fontSize: "35px" }} />
            </a>
            <a href="https://www.facebook.com/profile.php?id=100070405665356">
              <IconBrandFacebook style={{ fontSize: "35px" }} />
            </a>
            <a href="https://twitter.com/GJCEI1">
              <IconBrandTwitter style={{ fontSize: "35px" }} />
            </a>
          </div>

          <Box class="row">
            <ul>
              <li>
                <UnstyledButton
                  sx={{ color: "#fff" }}
                  onClick={() => navigate("/AboutUs")}
                >
                  Mandate
                </UnstyledButton>
              </li>
              <li>
                <UnstyledButton
                  sx={{ color: "#fff" }}
                  onClick={() => navigate("/NewsEvents")}
                >
                  News & Events
                </UnstyledButton>
              </li>
              <li>
                <UnstyledButton
                  sx={{ color: "#fff" }}
                  onClick={() => navigate("/Activities")}
                >
                  Activities
                </UnstyledButton>
              </li>
              <li>
                <UnstyledButton
                  sx={{ color: "#fff" }}
                  onClick={() => navigate("/ContactUs")}
                >
                  Contact Us
                </UnstyledButton>
              </li>
            </ul>
          </Box>

          <div class="row">GJCEI Copyright © 2022</div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
