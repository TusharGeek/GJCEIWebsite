import "./Footer.css";
import { Text } from "@mantine/core";
import {
  IconBrandFacebook,
  IconBrandTwitter,
  IconBrandInstagram,
} from "@tabler/icons";
import Logo from ".././assets/Logo/logo.png";
const Footer = () => {
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

          <div class="row">
            <ul>
              <li>
                <a href="/AboutUs">Mandate</a>
              </li>
              <li>
                <a href="/NewsEvents">News & Events</a>
              </li>
              <li>
                <a href="/Activities">Activities</a>
              </li>
              <li>
                <a href="/ContactUs">Contact Us</a>
              </li>
            </ul>
          </div>

          {/* <section class="map">
      <div class="mapouter">
        <div class="gmap_canvas">
          <iframe
            height="250"
            width="90%"
            id="gmap_canvas"
            src="https://maps.google.com/maps?q=Amritsar&t=&z=15&ie=UTF8&iwloc=&output=embed"
            frameborder="0"
            scrolling="no"
            marginheight="0"
            marginwidth="0"
          ></iframe>
        </div>
      </div>
    </section> */}

          <div class="row">GJCEI Copyright © 2022</div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
