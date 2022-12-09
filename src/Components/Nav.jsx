import { useState } from "react";
import {  useEffect } from "react";
import {
  Box,
  UnstyledButton,
  Container,
  Title,
  Text,
  Flex,
  Drawer,
} from "@mantine/core";
import { IconMenu2 } from "@tabler/icons";
import { useNavigate } from "react-router-dom";
import { useMediaQuery } from "@mantine/hooks";
import GJCEILogo from "../assets/Logo/GNDULogo.png";
import GNDULogo from "../assets/Logo/logo.png";

const Nav = () => {
  const [opened, setOpened] = useState(false);
  const [sticky, setSticky] = useState(false);
  const navigate = useNavigate();

  const isDesktop = useMediaQuery("(min-width: 992px)");

  const navLinks = [
    {
      label: "Home",
      path: "/",
    },
    {
      label: "Mandate",
      path: "/AboutUs",
    },
    {
      label:"Infrastructure",
      path:"/Infrastructure"
    },
    {
      label:"Organizational Structure",
      path:"/OrganizationalStructure"
    },
    {
      label:"Student Council",
      path:"/StudentCouncil"
    },
    {
      label:"News & Events",
      path:"/NewsEvents"
    },
    {
      label:"Activities",
      path:"/Activities"
    },
    {
      label:"Contact Us",
      path:"/ContactUs"
    },
    
  ];
  useEffect(() => {
    window.addEventListener("scroll", stickNavbar);

    return () => {
      window.removeEventListener("scroll", stickNavbar);
    };
  }, []);
 
  const stickNavbar = () => {
    if (window !== undefined) {
      let windowHeight = window.scrollY;
    isDesktop?(windowHeight > 257 ? setSticky(true) : setSticky(false)):(windowHeight > 115 ? setSticky(true) : setSticky(false));
    }
  };
  return (
 
 <div >
    <>
    <Box
        sx={(theme) => ({
          paddingBlock: theme.spacing.lg,
        })}
      >
        <Container>
          <Title style={!isDesktop?{fontSize:"9px"}:{fontSize:"30px"}} align="center" order={2} color="#10243f">
         <img style={!isDesktop?{height:"30px",marginRight:"16px" }:{height:"70px",marginRight:"20px" }} src={GJCEILogo}></img>Golden Jublic Center For Entrepreneurship And Innovation 
         <img style={!isDesktop?{height:"30px",marginLeft:"10px" }:{height:"70px",marginLeft:"10px" }} src={GNDULogo}></img>
       <br></br>(Infinity)
         <br></br>Under <br></br>
         RUSA 2.0 Component 4<br></br>
         Quality and Excellence in Select State Universities
       
        
          </Title>
        </Container>
      </Box>
      <Box
        sx={(theme) => ({
          paddingBlock: theme.spacing.md,
          backgroundColor: "#10243f",
          position: sticky ? "fixed" : "static",
          top: 0,
          left: 0,
          right: 0,
          inlineSize: "100%",
          zIndex: 9,
        })}
      >
        <Container >
          <Flex align="center">
            {!isDesktop ? (
              <>
                <UnstyledButton
                  onClick={() => setOpened(true)}
                  sx={(theme) => ({
                    borderRadius: theme.radius.sm,

                    color: "#fff",
                  })}
                >
                  <Flex align="center" gap="sm">
                    <IconMenu2 />
                    <Text>Menu</Text>
                  </Flex>
                </UnstyledButton>
                {/* Drawer  */}
                <Drawer
                  opened={opened}
                  onClose={() => setOpened(false)}
                  title="Pages"
                  padding="xl"
                  size="xl"
                  position="top"
                  transition="slide-down"
                  styles={{
                    drawer: {
                      height: 320,
                    },
                  }}
                >
                  <Flex wrap="wrap" gap="md">
                    {navLinks.map((item, idx) => (
                      <UnstyledButton
                        key={idx}
                        sx={(theme) => ({
                          display: "inline-flex",
                          padding: ".75rem 1rem",
                          justifyContent: "center",
                          alignItems: "center",
                          backgroundColor: theme.colors.gray[1],
                          color: theme.fn.primaryColor(),
                          borderRadius: 2,
                        })}
                        onClick={() => {
                          setOpened(false);
                          navigate(item.path);
                        }}
                      >
                        {item.label}
                      </UnstyledButton>
                    ))}
                  </Flex>
                </Drawer>
              </>
            ) : (
              <Flex sx={{ order: 1 }}>
                <Flex wrap="wrap" gap="md">
                  {navLinks.map((item, idx) => (
                    <UnstyledButton
                      key={idx}
                      sx={(theme) => ({
                        display: "inline-flex",
                        padding: ".75rem 1rem",
                        justifyContent: "center",
                        alignItems: "center",
                        backgroundColor: "#17335a",
                        color: "#fff",
                        borderRadius: 5,
                        transition: "background-color 200ms ease-in-out",
                        "&:hover": {
                          backgroundColor: "#0d1c31",
                        },
                      })}
                      onClick={() => {
                        setOpened(false);
                        navigate(item.path);
                      }}
                    >
                      {item.label}
                    </UnstyledButton>
                  ))}
                </Flex>
              </Flex>
            )}
          </Flex>
        </Container>
      </Box>
    </>
    </div>
  

   
   
    
  );
};

export default Nav;
