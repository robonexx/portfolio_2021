import React from 'react'
import styled, {keyframes} from 'styled-components'
import { Link } from 'react-router-dom'

const breatheAnimation = keyframes`
    0% { opacity: 1; background:  #FFBA37; box-shadow: 0px 0px 0px 1px white; }
    30% { opacity: 0.3 transform: scale(0.96); box-shadow: 0px 0px 5px 1px white;}
    40% { opacity: 0.6; transform: scale(0.96); box-shadow: 0px 0px 5px 1px white;}
    100% { opacity: 0.9; background:  #FFBA37; box-shadow: 0px 0px 0px 1px white;}
`

const Wrapper = styled.div`
margin-left: 8vw;
width: 92vw;
height: 100vh;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
color: #FFBA37;
background: #5300C6;
z-index: 100;

&>h1 {
    text-align: center;
    
}

&>a {
    margin-top: 5vh;
    text-decoration: none;
    font-size: 1.4rem;
    background: #FFBA37;
    color:;
    padding: 0.5rem 2rem;
    border-radius: 0.4rem;
    box-shadow: 0px 0px 5px 3px #f4b41aa9;
     

    &:hover {
        animation-name: ${breatheAnimation};
        animation-duration: 1s;
        animation-iteration-count: 1;
    }
}
`;

const Error = () => {

    return ( 
        <Wrapper>
        <h1>Error 404</h1>
        <h2>Page does not exist please follow the link below</h2>
        <Link to="/">Back to page</Link>
        </Wrapper>
     );
}
 
export default Error;