import { Box, Title, Paper, Text, Container, Flex } from "@mantine/core";

import "./Staff.css";
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
import St1 from ".././assets/StaffImg/St1.png";
import St2 from ".././assets/StaffImg/St2.png";
import St3 from ".././assets/StaffImg/St3.png";
import St4 from ".././assets/StaffImg/St4.png";
import St5 from ".././assets/StaffImg/St5.png";
import St6 from ".././assets/StaffImg/St6.png";
import St7 from ".././assets/StaffImg/St7.png";
import St8 from ".././assets/StaffImg/St8.png";
import St9 from ".././assets/StaffImg/St9.png";
import St10 from ".././assets/StaffImg/St10.png";
import St11 from ".././assets/StaffImg/St11.png";
import St12 from ".././assets/StaffImg/St12.png";
import S13 from ".././assets/StaffImg/S13.png";
import Profile from "../Components/Profile";
import Footer from "../Components/Footer";

const Committee = () => {
  return (
    <Box>
      <Container>
        <Text
          style={{
            fontSize: "30px",
            color: "#10243f",
            fontWeight: "700",
            marginTop: "40px",
            textAlign: "center",
          }}
        >
          Organizational Structure
        </Text>
        <Box mt={32}>
          <Paper>
            <Flex justify="center">
              <Profile
                Img={S13}
                Name="Prof. (Dr.) Jaspal Singh Sandhu"
                Designation="Vice chancellor"
              />
            </Flex>
            <Flex
              justify="space-around"
              sx={(theme) => ({
                flexDirection: "column",
                alignItems: "center",
                [theme.fn.largerThan("md")]: {
                  flexDirection: "row",
                },
              })}
            >
              <Profile
                Img={St12}
                Name="Prof. Sarabjot Singh behl"
                Designation="Nodal Officer Rusa 2.0"
              />

              <Profile
                Img={St8}
                Name="Prof. (Dr) P.K. Pati"
                Designation="Coordinator, GJCEI"
              />
            </Flex>

            <Text>
              <div class="section">
                <div className="container">
                  <div className="grid-row">
                    <div className="grid-item"></div>
                  </div>
                  <div className="grid-row">
                    <div class="grid-item"></div>
                    <div className="grid-item"></div>
                  </div>
                </div>
                <div class="container">
                  <Text
                    style={{
                      fontSize: "30px",
                      color: "#10243f",
                      fontWeight: "700",
                      marginTop: "40px",
                      textAlign: "center",
                      marginBottom: "20px",
                    }}
                  >
                    Faculty Mentors
                  </Text>
                  <div class="grid-row">
                    <div class="grid-item">
                      <Profile
                        Img={St2}
                        Name="Ms. Harkirandeep Kaur"
                        Designation="Incharge IPR Cell GJCEI"
                        Department="Department: Law"
                      ></Profile>
                    </div>
                    <div class="grid-item">
                      <Profile
                        Img={St1}
                        Name="Dr. Swati Mehta"
                        Designation="Startup and Promotions"
                        Department="Department: Economics"
                      ></Profile>
                    </div>

                    <div className="grid-item">
                      <Profile
                        Img={St3}
                        Name="Dr. Prabhpreet Singh"
                        Designation="Facility Mentor for Startup Activities"
                        Department="Department: Chemistry"
                      ></Profile>
                    </div>
                    <div className="grid-item">
                      <Profile
                        Img={St10}
                        Name="Dr. Kuldeep Singh Brar"
                        Designation="Faculty Mentor for Discovery Lab"
                        Department="Department: Electronics"
                      ></Profile>
                    </div>
                    <div className="grid-item">
                      <Profile
                        Img={St11}
                        Name="Dr. Rajdeep Singh Sohal"
                        Designation="Faculty Mentor for Discovery Lab"
                        Department="Department: Electronics"
                      ></Profile>
                    </div>
                  </div>
                </div>
                <div className="container" style={{ marginTop: "20px" }}>
                  <Text
                    style={{
                      fontSize: "30px",
                      color: "#10243f",
                      fontWeight: "700",
                      marginTop: "40px",
                      textAlign: "center",
                      marginBottom: "20px",
                    }}
                  >
                    Staff
                  </Text>
                  <div className="grid-row">
                    <div class="grid-item">
                      <Profile
                        Img={St4}
                        Name="Dr. Hardesh Kumar"
                        Designation="Senior Technician"
                      ></Profile>
                    </div>
                    <div class="grid-item">
                      <Profile
                        Img={St9}
                        Name="Pardeep Dutta"
                        Designation="Data Entry Operator"
                      ></Profile>
                    </div>
                    <div class="grid-item">
                      <Profile
                        Img={St5}
                        Name="Gurmeet Kaur"
                        Designation="Data Entry Operator"
                      ></Profile>
                    </div>
                    <div className="grid-item">
                      <Profile
                        Img={St6}
                        Name="Bikram Singh"
                        Designation="Staff"
                      ></Profile>
                    </div>

                    <div className="grid-item">
                      <Profile
                        Img={St7}
                        Name="Tripta Devi"
                        Designation="Staff"
                      ></Profile>
                    </div>
                  </div>
                </div>

                <Container>
                  <Text
                    style={{
                      fontSize: "30px",
                      color: "#10243f",
                      fontWeight: "700",
                      marginTop: "20px",
                      textAlign: "center",
                    }}
                  >
                    Student Council
                  </Text>
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
                                  Department="Department: Electronics Technology"
                                ></Profile>
                              </div>
                              {/* Event And Innovation */}
                              <div class="grid-item">
                                <Profile
                                  Img={SC2}
                                  Name="Sukhbeer Singh"
                                  Designation="Innovation and event Management"
                                  Department="Department: Electronics Technology"
                                ></Profile>
                              </div>
                              <div className="grid-item">
                                <Profile
                                  Img={SC5}
                                  Name="Arshdeep Kaur"
                                  Designation="Innovation and event Management"
                                  Department="Department: Physics"
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
              </div>
            </Text>
          </Paper>
        </Box>
      </Container>
      <Footer></Footer>
    </Box>
  );
};

export default Committee;
