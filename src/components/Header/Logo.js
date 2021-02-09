import React from 'react'
import styled from 'styled-components'


const Title = styled.h1`
font-family: 'Exo 2';
font-weight: 200;
letter-spacing: 2px;
position: fixed;
top: 1vh;
left: 10vw;
font-size: 2.7rem;
color: ${({ theme }) => theme.logo};
z-index: 20;
@media (max-width: 768px) {
    font-size: 2rem;
}
`;
const Logo = () => {
    return ( 
        <>
        <Title>[kɹiːˌe͡ɪtˈɪvɪti]</Title>
        </>
     );
}
 
export default Logo;