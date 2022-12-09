import { Box, Title, Paper, Text, Container } from "@mantine/core";
import Footer from "../Components/Footer";
import "./ContactUs.css";

const ContactUs = () => {
    return (
        <Box>
        <Container>
        <Text style={{fontSize:"30px",color:"#10243f",fontWeight:"700",textAlign:"center",marginTop:"20px"}}>Contact Us</Text>
          <Box mt={32}>
            <Paper>
              <Text>
            <div className="Container" >
            <div className="grid-row" >
<div className="grid-items" > 


</div>
<div className="grid-items">
<div class="formbold-main-wrapper">

<div class="formbold-form-wrapper">
  <form action="#" method="POST">
    <div class="formbold-mb-5">
      <label for="name" class="formbold-form-label"> Full Name </label>
      <input
        type="text"
        name="name"
        id="name"
        placeholder="Full Name"
        class="formbold-form-input"
      />
    </div>

    <div class="formbold-mb-5">
      <label for="email" class="formbold-form-label"> Email Address </label>
      <input
        type="email"
        name="email"
        id="email"
        placeholder="Enter your email"
        class="formbold-form-input"
      />
    </div>

    <div class="formbold-mb-5">
      <label for="subject" class="formbold-form-label"> Subject </label>
      <input
        type="text"
        name="subject"
        id="subject"
        placeholder="Enter your subject"
        class="formbold-form-input"
      />
    </div>

    <div class="formbold-mb-5">
      <label for="message" class="formbold-form-label"> Message </label>
      <textarea
        rows="6"
        name="message"
        id="message"
        placeholder="Type your message"
        class="formbold-form-input"
      ></textarea>
    </div>

    <div>
      <button class="formbold-btn">Submit</button>
    </div>
  </form>
</div>
</div>
</div>
<div className="grid-items">


  </div>
            </div>

            </div>
              </Text>
            </Paper>
          </Box>
        </Container>
        <Footer></Footer>
      </Box>
    )
}

export default ContactUs;