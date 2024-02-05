import { Box, Typography, styled, Grid } from "@mui/material";
import {Publish,GitHub} from '@mui/icons-material';
import {Link} from "react-router-dom"
import {motion} from "framer-motion"

const Container=styled(Grid)`
    width:80%;
    display:flex;
    align-items:center;
    justify-content:center;
    height:100vh;
    margin:84px auto 0px auto;
`

const Imagecontainer=styled(Box)`
    width:50%;
    margin:auto;
    background: linear-gradient(to bottom, #f2f2f2, #e0e0e0); /* Example gradient colors *
   
`

const Image=styled('img')({
    width: "100%",
    height: "100%",
    objectFit: "contain",
})


const ProjectContainer=styled(Box)`
    display:flex;
    flex-direction:column;
    align:items:center;
    justify-content:center;
    margin-bottom:20px;
`

const Heading=styled(Typography)`
    font-size:30px;
    text-align:center;
    margin-top:10px;
    @media (max-width: 768px) {
        font-size:20px
    }
`

const Description=styled(Typography)`
    font-size:16px;
    text-align:center;
    color:#878787;
    padding:0 40px;
    @media (max-width: 768px) {
        font-size:10px;
        padding:0px
    }
`

const Icons=styled(Box)`
    text-align:center;
    margin-top:10px;
    @media (max-width: 768px) {
        margin-bottom:30px;
    }
    
`
const StyleG=styled(GitHub)`
    font-size:40px;
    @media (max-width: 768px) {
        font-size:25px;
    }
`

const StyledU=styled(Publish)`
    font-size:40px;
    @media (max-width: 768px) {
        font-size:25px;
    }
`

const Projects = () => {
    const url1="https://journals.sagepub.com/cms/10.1177/0954407021990921/asset/images/large/10.1177_0954407021990921-fig1.jpeg"
    const url3="https://images.squarespace-cdn.com/content/v1/59b037304c0dbfb092fbe894/1591025219897-C7IS3QW3FKH6JXJ84RO8/force_sensing_resistor_main_blog.JPG"
    const url4="https://d2t1xqejof9utc.cloudfront.net/screenshots/pics/b74eabf23df0c97bb55efc6f3c527f53/large.JPG"
    const url5="https://thereviewstories.com/wp-content/uploads/2022/06/What-is-a-Traffic-Wind-Turbine.jpg.webp"
    return (
        <motion.div initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} transition={{ duration: 0.5 }}>
        <Container container>
            <Grid item lg={6} sm={12} xs={12}>
                <ProjectContainer>
                    <Imagecontainer>
                        <Image src={url1}/>
                    </Imagecontainer>
                    <Heading>Crash Box Analysis</Heading>
                    <Description> Conducted crash box analysis project using SolidWorks for design and Abaqus for analysis.
  Hexagonal crash box design exhibited 50 percent higher energy absorption than the other shapes crash box.
 .</Description>
                    <Icons>
                      
                        <Link target="_blank" to="https://drive.google.com/drive/folders/1DGbzuM4uy97-JalAtJEqCml4SmGKddue"  style={{color:"black"}}><StyledU style={{marginLeft:"20px"}}/></Link>
                    </Icons>
                </ProjectContainer>
            </Grid>
            <Grid item lg={6} sm={12} xs={12}>
                <ProjectContainer>
                    <Imagecontainer>
                        <Image src={url3}/>
                    </Imagecontainer>
                    <Heading>Stress Measurement Device</Heading>
                    <Description>Developed an IoT-based stress management device, merging hardware and software for real-time physiological monitoring.</Description>
                    <Icons>
                       
                        <Link target="_blank" to="https://drive.google.com/drive/folders/1-Zt1Hv-zLO4R0eJ4FbditlHTw0K8OxaN?usp=sharing"  style={{color:"black"}}><StyledU style={{marginLeft:"20px"}}/></Link>
                    </Icons>
                </ProjectContainer>
            </Grid>
            <Grid item lg={6} sm={12} xs={12}>
                <ProjectContainer>
                    <Imagecontainer>
                        <Image src={url4}/>
                    </Imagecontainer>
                    <Heading>Threading Animation</Heading>
                    <Description>Successfully designed and implemented a dynamic threading animation on a lathe using SolidWorks, showcasing advanced proficiency in CAD software and a strong understanding of manufacturing processes.</Description>
                    <Icons>
                       
                        <Link target="_blank" to="https://drive.google.com/drive/folders/1wP0OHjvBpuuWKA2gwZdHRGKFQDNIJsOH"  style={{color:"black"}}><StyledU style={{marginLeft:"20px"}}/></Link>
                    </Icons>
                </ProjectContainer>
            </Grid>
            <Grid item lg={6} sm={12} xs={12}>
                <ProjectContainer>
                    <Imagecontainer>
                        <Image src={url5}/>
                    </Imagecontainer>
                    <Heading>Wind and Solar Lamp</Heading>
                    <Description>Engineered a sustainable energy solution by designing a dual-function solar and wind lamp in SolidWorks, harnessing renewable sources to generate electricity. </Description>
                    <Icons>
                       
                        <Link target="_blank" to="https://drive.google.com/drive/folders/1KuoBOrhhDwuGUfZsH128iIUAavfDt9ka"  style={{color:"black"}}><StyledU style={{marginLeft:"20px"}}/></Link>
                    </Icons>
                </ProjectContainer>
            </Grid>
        </Container>
        </motion.div>
    )
};

export default Projects;
