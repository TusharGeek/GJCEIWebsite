import { Box, Title, Paper, Text, Container } from "@mantine/core";
import Footer from ".././Components/Footer";
import "../Pages/Home.css";
// Images
import one from "../assets/HomePageImg/Home1.jpg";
import two from "../assets/HomePageImg/Home2.jpeg";

// Linkage Images
import Linkage1 from "../assets/linkageImg/linkageIMG1.png";
import Linkage2 from "../assets/linkageImg/linkageIMG2.jpg";
import Linkage3 from "../assets/linkageImg/linkageIMG3.png";
import Linkage4 from "../assets/linkageImg/linkageIMG4.jpg";
import Linkage5 from "../assets/linkageImg/linkageIMG5.jpeg";
import Linkage6 from "../assets/linkageImg/linkageIMG6.png";
import Linkage7 from "../assets/linkageImg/linkageIMG7.png";
import Linkage8 from "../assets/linkageImg/linkageIMG8.jpeg";
import Linkage9 from "../assets/linkageImg/linkageIMG9.jpeg";
import Linkage10 from "../assets/linkageImg/linkageIMG10.png";
import Linkage11 from "../assets/linkageImg/linkageIMG11.jpeg";

import Carousel from "../Components/Carousel";

const Home = () => {
  const data = [one,two];

  return (
    <Box>
    
      <Carousel images={data} />

      <Container>
      <Text style={{fontSize:"30px",color:"#10243f",fontWeight:"700"}}>Home</Text>
        <Box mt={32}>
          <Paper>
            <Text style={{lineHeight:"2", fontSize:"20px"}}>
            Guru Nanak Dev University's Golden Jubilee Center for Entrepreneurship and Innovation was established in 2019 as part of the Rashtriy Uchhtar Shiksha Abhiyan. GJCEI was founded with the primary purpose of encouraging students pursuing degrees to feel a desire for company development. GJCEI helps new firms grow by promoting both their ideas and their early ventures. With the help of its academic mentors,<strong> GJCEI evaluates the inventions and innovations made by aspiring businesspeople and provides guidance on how to overcome obstacles.</strong> Under the direction of Dr. P. K. Patti, GJCEI operates with the assistance of more than 20 council members, more than 300 mentors, and members of clubs. The goal of GJCEI is to provide the students with more creation and mental richness.Guru Nanak Dev University's Golden Jubilee Center for Entrepreneurship and Innovation was established in 2019 as part of the Rashtriy Uchhtar Shiksha Abhiyan. GJCEI was founded with the primary purpose of encouraging students pursuing degrees to feel a desire for company development. GJCEI helps new firms grow by promoting both their ideas and their early ventures. With the help of its academic mentors, GJCEI evaluates the inventions and innovations made by aspiring businesspeople and provides guidance on how to overcome obstacles. Under the direction of Dr. P. K. Patti, GJCEI operates with the assistance of more than 20 council members, more than 300 mentors, and members of clubs. The goal of GJCEI is to provide the students with more creation and mental richness.
            <br></br>
The goal of GJCEI is to help students fulfil their desire to innovate and start profitable businesses. From advice to industry connections, from lab resources to seed money, gjcei places a priority on getting their ideas off the ground in order to stand out as the finest innovators.
It greatly helps each person's idea develop into a profitable business. GJCEI will not mould their ideas but will encourage them to produce more innovative work. It examines their work and offers feedback.
For accurate and effective governance, GJCEI operates and supports autonomy in the public university.
GJCEI prioritises aspiring entrepreneurs and bases its initiatives on sound advice. GJCEI develops the necessary facilities and serves as a tech hub.
High performance equipment, machine learning, and AI learning are accessible in the centre. GJCEI provides the opportunity to meet with seasoned analysts and learn. In order to leave a more precise idea, GJCEI takes steps to increase the potential and broaden the vision. GJCEI not only quickens innovation but also highlights its impact.
            </Text>
          </Paper>
        </Box>
<Text style={{fontSize:"30px",color:"#10243f",fontWeight:"700",margin:"50px 0"}}>Industrial Linkage</Text>


        </Container>  
        <div class="cards">
        <div class="card"><img className="LinkageImg" style={{height:"200px"}} src={Linkage11}></img></div>
  <div class="card"><img className="LinkageImg" src={Linkage2}></img></div>
  <div class="card"><img className="LinkageImg" src={Linkage3}></img></div>
  <div class="card"><img className="LinkageImg" src={Linkage4} ></img></div>
  <div class="card"><img className="LinkageImg" src={Linkage5}></img></div>
  <div class="card"><img className="LinkageImg" src={Linkage6}></img></div>
  <div class="card"><img className="LinkageImg" src={Linkage7}></img></div>
  <div class="card"><img className="LinkageImg" src={Linkage8}></img></div>
  <div class="card"><img className="LinkageImg" src={Linkage9}></img></div>
  <div class="card"><img className="LinkageImg" src={Linkage10}></img></div>
  <div class="card"><img className="LinkageImg" src={Linkage1}></img></div>

</div>
        

      <Footer/>
    </Box>
  );
};

export default Home;
