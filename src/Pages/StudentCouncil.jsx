import { Box, Title, Paper, Text, Container} from "@mantine/core";

import "./StudentCouncil.css";
// Images
import SC0 from ".././assets/StudentCouncilImg/SC0.jpg";
import SC1 from ".././assets/StudentCouncilImg/SC1.png";
import SC2 from ".././assets/StudentCouncilImg/SC2.png";
import SC3 from ".././assets/StudentCouncilImg/SC3.png";
import SC4 from ".././assets/StudentCouncilImg/SC4.png";
import SC5 from ".././assets/StudentCouncilImg/SC5.png";
import SC6 from ".././assets/StudentCouncilImg/SC6.png";
import SC7 from ".././assets/StudentCouncilImg/SC7.png";
import SC8 from ".././assets/StudentCouncilImg/SC8.png";
import SC9 from ".././assets/StudentCouncilImg/SC9.png";
import SC10 from ".././assets/StudentCouncilImg/SC10.png";
import SC11 from ".././assets/StudentCouncilImg/SC11.png";
import SC12 from ".././assets/StudentCouncilImg/SC12.png";
import SC13 from ".././assets/StudentCouncilImg/SC13.png";
import SC14 from ".././assets/StudentCouncilImg/SC14.png";
import SC15 from ".././assets/StudentCouncilImg/SC15.png";
import SC16 from ".././assets/StudentCouncilImg/SC16.png";
import SC17 from ".././assets/StudentCouncilImg/SC17.png";
import SC19 from ".././assets/StudentCouncilImg/SC19.png";

import Profile from "../Components/Profile";
import Footer  from "../Components/Footer";
import  Carousel  from "../Components/Carousel";

const StudentCouncil = () => {
const data = [SC0];

  return (
    <Box >

      
<Carousel images={data}></Carousel>
      <Container>
      
      <Text style={{fontSize:"30px",color:"#10243f",fontWeight:"700", marginTop:"20px",textAlign:"center"}}>Student Council</Text>
        <Box mt={32}>
          <Paper>
            <Text>

            <div class="section">
  <div class="container">
    <div class="grid-row">
    <div className="grid-item">
      <Profile
            Img={SC4}
            Name="Surmeet Singh"
            Designation="Secratory"
            Department = "Department: Electronics Technology"
            ></Profile>
      </div>
      {/* Event And Innovation */}
      <div class="grid-item">
      <Profile
            Img={SC2}
            Name="Sukhbeer Singh"
            Designation="Innovation and event Management"
            Department = "Department: Electronics Technology"
            ></Profile>
      </div>
      <div className="grid-item">
      <Profile
            Img={SC5}
            Name="Arshdeep Kaur"
            Designation="Innovation and event Management"
            Department = "Department: Physics"
            ></Profile>
      </div>
      <div className="grid-item">
      <Profile
            Img={SC11}
            Name="jyoti Yadav"
            Designation="Innovation and event Management"
            Department="Department: Biotechnology"
            ></Profile>
      </div>
      <div className="grid-item">
      <Profile
            Img={SC12}
            Name="Parminder singh"
            Designation="Innovation and event Management, Promotion and Outreach activities"
            Department="Department: Mechanical Engineering"
            ></Profile>
      </div>
      <div class="grid-item">
      <Profile
            Img={SC13}
            Name="Raumit Raj"
            Designation="Innovation and event Management"
            Department="Department: Electronics Technology"
            ></Profile>
      </div>
      <div className="grid-item">
      <Profile
            Img={SC14}
            Name="Harvir Kaur"
            Designation="Innovation and event Management"
            Department="Department: Law"
            ></Profile>
      </div>
       {/* IT and Social Media */}
      <div class="grid-item">
      <Profile
        Img={SC1}
        Name="Simran Mehra"
        Designation="I.T and Social Media Development"
        Department="Department: Chemistry"
        ></Profile>
      </div>
      <div class="grid-item">
      <Profile
            Img={SC8}
            Name="Ankit Partap"
            Designation="I.T and Social Media Development"
            Department="Department: Computer Science"
            ></Profile>
      </div>
      {/* Promotion */}
      <div class="grid-item">
      <Profile
            Img={SC3}
            Name="Jasmine Kaur"
            Designation="Promotion and Outreach activities,Content Development"
            Department="Department: Mass Communications"
            ></Profile>
      </div>
      <div className="grid-item">
      <Profile
            Img={SC16}
            Name="Ishmanpreet Kaur"
            Designation="Promotion and Outreach activities"
            Department="Department: Electronics Technology"
            ></Profile>
      </div>
      <div className="grid-item">
      <Profile
            Img={SC17}
            Name="Shabnampreet Kaur"
            Designation="Promotion and Outreach activities,Content Development"
            Department="Department: Mass Communications"
            ></Profile>
      </div>
      <div className="grid-item">
      <Profile
            Img={SC6}
            Name="Nipun Mahajan"
            Designation="Promotion and Outreach activities,Content Development"
            Department="Department: Electronics Technology"
            ></Profile>
      </div>
      {/* Press */}
      <div class="grid-item">
      <Profile
        Img={SC7}
        Name="Yatin Batra"
        Designation="Press and publication"
        Department="Department: Chemistry"
        ></Profile>
      </div>
      <div className="grid-item">
      <Profile
            Img={SC19}
            Name="Jaismeen Kaur"
            Designation="Press and publication"
            Department="Department: Human Genetics"
            ></Profile>
      </div>
      {/* Industry */}
      <div class="grid-item">
      <Profile
            Img={SC9}
            Name="Aashish Tirka"
            Designation="Industrial/ Entrepreneurship linkage"
            Department="Department: CSDA"
            ></Profile>
      </div>
      <div className="grid-item">
      <Profile
            Img={SC10}
            Name="Arjun Mehra"
            Designation="Industrial/ Entrepreneurship linkage"
            Department="Department: CSDA"
            ></Profile>
      </div>
    </div>
  </div>
</div>         
            </Text>
          </Paper>
        </Box>
      </Container>
      <Footer></Footer>
    </Box>
  );
};

export default StudentCouncil;
