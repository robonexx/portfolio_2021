import React, { useRef } from 'react'
import {useSpring, animated } from 'react-spring'
import styled from 'styled-components'
import { FaTimes } from 'react-icons/fa'


const CloseModalBtn = styled(FaTimes)`
cursor: pointer;
position: absolute;
top: 1em;
right: 1em;
width: 32px;
heigth: 32px;
padding: 0;
z-index: 20; 
 &:hover,
 &:focus {
     color: red;
 }
`;

const ModalBg = styled.div`
    position: absolute;
    width: 100%;
    height: 100vh;
    background: rgba(0,0,0,0.6);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 20;
`;

const ModalWrapper = styled.div`
    width: 50%;
    height: 80%;
    box-shadow: 0px 6px 10px rgba(0,0,0,0.8);
    background-color: rgba(0,0,0,0.9);
    color: #fafafa;
    position: relative;
    z-index: 10;
    border-radius: 20px;
    font-size: 1.2rem;

    @media (max-width: 768px) {
        height: 80%;
        width: 80%;
        font-size: 1rem;
    }
`;

const ModalContent = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: left;
line-height: 1.2;
padding: 20px 50px;
color: #fafafa;


p {
    margin-bottom: 0.8rem;
}

button {
    padding: 6px 10px;
    background: #000;
    color: #e1e2e3;
    border: none;
    outline: none;
}
`;

const Modal = ({ showModal, setShowModal }) => {

        const modalRef = useRef();

        const animation = useSpring ({
            config: {
                duration: 250
            },
            opacity: showModal ? 1 : 0,
            transform: showModal ? `translateY(0%)` : `translateY(-100%)`
        })

        const closeModal = (e) => {
            if(modalRef.current === e.target) {
                setShowModal(false);
            }
        };

    return ( 
        <>
                <ModalBg ref={modalRef} onClick={closeModal}>
                    <animated.div style={animation} >
                        <ModalWrapper>
                            <ModalContent>
                                <h1>Hi, there</h1>
                                <br/>
                                <p>
                                   My name is Robert Wägar and I'm a Front end Developer living in Stockholm, Sweden. <br/> <br/>
                                   Im currently studying and learning new skills. I started spring 2020 with JAVA to learn basics of programming. I also took a course in basic webdevelopment. 
                                   Fall 2020 I managed to get in to KYH's Front end developer education and this is where I'm at until june 2022. <br /><br/>
                                   This web page is done in REACT and I also have skills in HTML, CSS, JAVASCRIPT, AJAX... tbc. 
                                </p>
                            </ModalContent>
                                <CloseModalBtn aria-label='Close Modal' onClick={() => setShowModal (prev => !prev)} />
                        </ModalWrapper>
                    </animated.div>
                </ModalBg>
        </>
     );
}
 
export default Modal;