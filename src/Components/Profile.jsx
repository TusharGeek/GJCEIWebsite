import { Box, Title, Paper, Text, Container } from "@mantine/core";

const Profile = (props) => {
    return (
        <div >
            <div style={{margin:"12px"}}>
                <img src={props.Img} style={{height:"250px"}}></img>
                <Text style={{fontWeight:"700",fontSize:"17px",marginTop:"20px",textAlign:"center"}}>{props.Name}</Text>
                <Text style={{color:"grey",textAlign:"center"}}>{props.Designation}</Text>
                <Text style={{color:"grey",textAlign:"center"}}>{props.Department}</Text>
            </div>
        </div>
    )
}

export default Profile;