import { Box, Title, Paper, Text, Container } from "@mantine/core";


// Images
import one from "../assets/NewsEventsImg/NewsEventImg1.jpeg";
import two from "../assets/NewsEventsImg/NewsEventImg2.jpeg";
import three from "../assets/NewsEventsImg/NewsEventImg3.jpeg";

import Carousel from "../Components/Carousel";
import  Footer  from "../Components/Footer";

const NewsEvents = () => {
  const data = [one, two, three];

  return (
    <Box>
    
      <Carousel images={data} />

      <Container>
      <Text style={{fontSize:"30px",color:"#10243f",fontWeight:"700"}}>News And Events</Text>
        <Box mt={32}>
          <Paper>
            <Text style={{lineHeight:"2", fontSize:"20px"}}>
            The incubation center acts as a tech hub, which welcomes budding ideas. It promotes the concept of entrepreneurship; hence it holds various events, seminars and webinars to carry the approach to the youth. To list few:

<Text style={{fontSize:"30px",color:"#10243f",fontWeight:"700",marginTop:"20px"}}>Some of the event conducted:</Text>

  <strong>IPR WORKSHPOS:</strong> This aims at providing an overview of Intellectual Property Rights. It is a tree branching at:
  <ul style={{marginLeft:"30px",marginBottom:"-30px"}}>
    <li>Drafting of patent and filling protocols </li>
    <li>Technical writing</li>
    <li>Contours of a journal paper </li>
    <li>Paraphrasing</li>
    <li>Publication ethics</li>
    <li>Plagiarism and Plagiarism softwares</li>
    <li>Research problem </li>
    <li>Literature review</li>
  </ul>
  <br/>
  <strong>IDEA PITCHING COMPETITION:</strong> As the name suggests, this concept houses the innovation of the flourishing minds. It’s a platform to present the ideas. The visuals are analyzed by a panel of experienced entrepreneurs and intellectual dignitaries  to turn your aspirations into reality. Adding on, this offers and exposes to an opportunistic ecosystem that will act as a driving force for various startups. Its enrolling atmospheres is warming and the council accolade the participants with laurels and rewards.<br/>
  <strong>INNOVATION CHALLENGE:</strong> The minds of the youth homes numerous worthy innovation ideas that just lag behind due to the lack of a platform to support the same. This event aims at providing an atlas of learning and understanding the process of innovation. This challenge offers students to showcase their revolutionary ideas and critical thinking skills to master sustainability and fraternity into their daily life scenarios. The idea submission is followed by mentorship.<br/>
  <strong>CHAT SHOWS:</strong> Another version of “KOFFEE WITH KARAN”, the council holds event as “COFFEE WITH ENTREPRENEURS” where the council hosts and welcomes the startup founders and young entrepreneurs , where we witness many motivational stories, sneak peek into their lives and entrepreneurial journey. It acts as a driving force to the youth aspirants. New episodes are held at regular basis. The live streaming is witnessed at the councils social media handles. <br/>

            </Text>
          </Paper>
        </Box>
      </Container>
    <Footer></Footer>
    </Box>
  );
};

export default  NewsEvents;
