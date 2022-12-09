import { Box, Title, Paper, Text, Container } from "@mantine/core";

// Images
import one from "../assets/InfrastructureImg/IMG1.jpeg";
import two from "../assets/InfrastructureImg/IMG2.jpeg";
import three from "../assets/InfrastructureImg/IMG3.jpeg";
import four from "../assets/InfrastructureImg/IMG4.jpeg";
import five from "../assets/InfrastructureImg/IMG5.jpeg";
import six from "../assets/InfrastructureImg/IMG6.jpeg";
import seven from "../assets/InfrastructureImg/IMG7.jpeg";
import eight from "../assets/InfrastructureImg/IMG8.jpeg";
import nine from "../assets/InfrastructureImg/IMG9.jpeg";
import ten from "../assets/InfrastructureImg/IMG10.jpeg";

import Carousel from "../Components/Carousel";
import  Footer  from "../Components/Footer";

const Infrastructure = () => {
  const data = [one, two, three, four, five,six, seven, eight, nine, ten];

  return (
    <Box>
    
      <Carousel images={data} />

      <Container>
      <Text style={{fontSize:"30px",color:"#10243f",fontWeight:"700"}}>About Infrastructure</Text>
        <Box mt={32}>
          <Paper>
            <Text style={{lineHeight:"2", fontSize:"20px"}}>
            Golden Jubilee Centre for Entrepreneurship and Innovation (GJCEI) established at Guru Nanak Dev University under component-4 (Quality and Excellence in Select State Universities) of RUSA 2.0 is actively engaged in building an ecosystem of entrepreneurship and innovation which will catalyze the economy of the state and country at large. 
Aligned with the mandate of the centre, a state of the art infrastructure has been created. Around 120 All in One computers, servers, printers, workstations, and photocopier machines have been procured by the centre. A high-speed internet facility has been provided to the centre for its routine functioning. Further, the centre has set up a 3D printing facility with a capacity to develop 3D prototypes having dimensions of 600*600*600 mm3. In addition, a 3D Scanning facility has also been developed which can scan and develop 3D models of any micro/macro object. Furthermore, to help the young minds in developing their own 3D models and in printing 3D prototypes, ANSYS and SOLIDWORKS software have also been made available at the centre. The centre has also set up a discovery lab equipped with PCB Design Machine, Electronic Workbenches and numerous other equipment necessary for developing a working electronic model/prototype. 
To impart skill-based training for generating employability and enhancing entrepreneurship, the centre has developed two skill labs. To promote start-up activities, a coworking space and adequate start-up cabins have been designed at the centre. To facilitate IPR (Intellectual Property Rights) related activities, an IPR cell has also been made functional at the centre. Besides these, a video conferencing facility to hold online meetings and interact with various stakeholders has been set up. 

            <ul style={{marginLeft:"30px"}}>
                <li>
                IPR Cell 
                </li>
                <li>
                3D printers
              
                </li>
                <li>
              3D Scanner 
               
                </li>
                <li>
                120 high end computers
                </li>
                <li>
                Softwares (Ansys and Solid Works) 
                 </li>
                <li>
              Work station for high end computing
                </li>
                <li>
                High Speed Internet Facility 
                 </li>
                <li>
                Skill Labs
                </li>
                <li>
                Discussion area for Council member 
                </li>
            </ul>
            </Text>
          </Paper>
        </Box>
      </Container>
    <Footer></Footer>
    </Box>
  );
};

export default Infrastructure;
