import { Box, Paper, Text, Container } from "@mantine/core";
// Images
import one from "../assets/AboutUsImg/AboutUsImg1.jpeg";
import two from "../assets/AboutUsImg/AboutUsImg2.jpeg";
import three from "../assets/AboutUsImg/AboutUsImg3.jpeg";
import four from "../assets/AboutUsImg/AboutUsImg4.jpeg";
import five from "../assets/AboutUsImg/AboutUsImg5.jpeg";
import Carousel from "../Components/Carousel";
import Footer from "../Components/Footer";

const AboutUs = () => {
  const data = [one, two, three, four, five];

  return (
    <Box>
      <Carousel images={data} />

      <Container>
        <Box mt={32}>
          <Paper>
          <Text style={{fontSize:"30px",color:"#10243f",fontWeight:"700"}}>Mandate</Text>
            <Text style={{lineHeight:"2", fontSize:"20px"}}>
            The Guru Nanak Dev University is setting up the Golden Jubilee Centre for Entrepreneurship and Innovation (GJCEI) under component-4 (Quality and Excellence in Select State Universities) of RUSA 2.0 with support from Government of India and Govt. of Punjab. This Centre aims at building an ecosystem of entrepreneurship and innovation which will catalyze the economy of the state and country at large. Besides skill education, the centre will be involved in mapping the core competence and innovative potential of students and faculty members the field of engineering and technology, Life Sciences, economics and business, sports medicine & physiotherapy, arts and social sciences that will provide suitable platform to translate their ideas. Further, the Centre will be instrumental in establishing a close network with industry and other stakeholders for mutual interest. The Centre also facilitates and promoting interdisciplinary research. Various projects are funded which brings complementary expertise and translate ideas of Industrial relevance.<br></br>
<Text style={{fontSize:"30px",color:"#10243f",fontWeight:"700",marginTop:"30px"}}>Broad Objectives of Centre</Text>
<ul style={{marginLeft:"30px"}}>
  <li>
  Generation and nurturing of knowledge in the field of engineering and technology, Life Sciences, economics and business, sports medicine & physiotherapy, arts and social science. 
  </li>
  <li>
  The centre will give priority to identifying core competence and converting available knowledge to innovative practices to build an ecosystem of outstanding innovation, entrepreneurship and career development.
  </li>
  <li>
  The centre will promote entrepreneurship through consultancy and sponsored projects and will take the leverage of these experiences for commercialization of concepts and technologies.
  </li>
  <li>
  The centre will facilitate innovation-driven activities and research to promote start-ups, branding and economic gain.
  </li>
  <li>
  Impart skill-based training to generate employability and enhance entrepreneurship.
  </li>
  <li>
  The centre will develop a strong partnership with industry and other organizations at the national and global level for cross-fertilization of ideas, enhancement of entrepreneurial skills and fostering career development among youths.
  </li>
  <li>
  The centre will actively pursue academic engagements with national and international universities/institutions of eminence for imparting quality education, offering dual/joint degrees, promoting interdisciplinary research, and training of students and faculty members in different disciplines. 
  </li>
  </ul>
  <Text style={{fontSize:"30px",color:"#10243f",fontWeight:"700",marginTop:"30px"}}>Future Plans</Text>
 <ul style={{marginLeft:"30px"}}>
  <li>
  More and more start up promotion activities will be conducted
  </li>
  <li>
  Networking with industries, investors and other incubators
  </li>
  <li>
  Outreach activities (seminars, Workshops, training and use of social media) to be strengthened
  </li>
  <li>
  Industry related problem solving events will be conducted more frequently
  </li>
  <li>
  Introduction of new areas for skill training
  </li>
  <li>
  Alternative funding sources for the centre will be explored
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

export default AboutUs;
