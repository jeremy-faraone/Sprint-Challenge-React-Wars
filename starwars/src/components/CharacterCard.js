import React from "react";
// import styled from "styled-components";
import {Card, CardHeader, CardTitle, CardBody, CardText, CardSubtitle, Col, Row } from "reactstrap";


// const Character = styled.div`
//   width: 25%;
//   max-height: 30%;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: space-between;
//   margin-bottom: 20px;
//   border: 2px solid gold;
//   background: SandyBrown;
//     `;

// const Head = styled.span`
// font-size: 20px;
// text-align: center;
// font: bold;
// border: 10px solid black;
// `
// const About = styled.p`
// font-size: 30px;
// text-align: center;
// `
// const Text = styled.p`
// font-size: 25px;
// text-align: center;
// `


// const CharacterCard = props => {
//   return (
//     <Character>
//         <Head>Name</Head>
//           <About>{props.name}</About>
//         <Head>Birth Date</Head>
//           <Text>{props.birth}</Text> 
//         <Head>Height</Head> 
//           <Text>{props.height}</Text>
//         <Head>Weight</Head>
//           <Text>{props.mass}</Text>
//         <Head>Hair Color</Head>
//           <Text>{props.hair}</Text>
//     </Character>
//   )
// }
const CharacterCard = props => {
    return (
    
      <Card>
          <CardTitle>{props.name}</CardTitle>
              <CardSubtitle>Birth Date</CardSubtitle>
            <CardText>{props.birth}</CardText> 
          <CardSubtitle>Height</CardSubtitle> 
            <CardText>{props.height}</CardText>
          <CardSubtitle>Weight</CardSubtitle>
            <CardText>{props.mass}</CardText>
          <CardSubtitle>Hair Color</CardSubtitle>
            <CardText>{props.hair}</CardText>
      </Card>
   );
  };
    export default CharacterCard;