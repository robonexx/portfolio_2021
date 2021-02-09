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
    width: 80%;
    box-shadow: 0px 6px 10px rgba(0,0,0,0.8);
    background-color: rgba(0,0,0,0.9);
    color: #fafafa;
    position: relative;
    margin-left: 10vw;
    z-index: 10;
    border-radius: 20px;
`;

const ModalContent = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
line-height: 1.4;
background-image: url(../../img/code.jpg);
padding: 2px 12px;
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
                                <h1>Developer</h1>
                                <p>
                                    When I as a kid I got a C-64 and later an Amiga 500, I used them mostly for playing games but this might have also been my first try on doing some coding while trying to do sprites.
                                    I´ve always been intereted in technology and all things tech but never got in to it. It think my dancing took over. But now some years later I decided to go all in and learn how to code.
                                    So right now...
                                </p>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum provident perferendis veritatis reiciendis ut, quod reprehenderit! Consequuntur nulla voluptates nihil, quis laborum unde ut minima. Numquam voluptatum quos iste necessitatibus!</p>
                            </ModalContent>
                                <CloseModalBtn aria-label='Close Modal' onClick={() => setShowModal (prev => !prev)} />
                        </ModalWrapper>
                    </animated.div>
                </ModalBg>
        </>
     );
}
 
export default Modal;