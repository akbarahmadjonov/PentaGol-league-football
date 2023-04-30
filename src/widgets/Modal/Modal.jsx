import React, { useRef } from "react";
import "./index.css"
import {
    ModalBtn,
    ModalContent,
    ModalHeader,
    ModalTitle,
    ModalWrapper,
    ModalWrapperEdit,
    OverlayDiv,
    OverlayDivEdit,
} from "./modal.style";


export const EditModal = ({ modal, setModal, children, title }) => {
    const overleyRef = useRef();
    const handleOvarley = (evt) => {
        if (evt.target === overleyRef.current) {
            setModal(false);
        }
    };
    return (
        <OverlayDivEdit   ref={overleyRef}
        onClick={(evt) => handleOvarley(evt)}
        className={`overlay ${modal ? "open" : ""}`}>
            <ModalWrapperEdit>
                <ModalBtn  onClick={() => setModal(false)}
                    className=" modal-button" > &times; </ModalBtn>
                <ModalHeader>
                    <ModalTitle>{title}</ModalTitle>
                </ModalHeader>
                <ModalContent>{children}</ModalContent>
            </ModalWrapperEdit>
        </OverlayDivEdit>
    );
};

export const AddNewsModal = ({ modal, setModal, children, title }) => {
    const overleyRef = useRef();
    const handleOvarley = (evt) => {
        if (evt.target === overleyRef.current) {
            setModal(false);
        }
    };
    return (
        <OverlayDivEdit   ref={overleyRef}
        onClick={(evt) => handleOvarley(evt)}
        className={`overlay ${modal ? "open" : ""}`}>
            <ModalWrapperEdit>
                <ModalBtn  onClick={() => setModal(false)}
                    className=" modal-button" > &times; </ModalBtn>
                <ModalHeader>
                    <ModalTitle>{title}</ModalTitle>
                </ModalHeader>
                <ModalContent>{children}</ModalContent>
            </ModalWrapperEdit>
        </OverlayDivEdit>
    );
};

export const Modal = ({ modal, setModal, children, title }) => {
    const overleyRef = useRef();
    const handleOvarley = (evt) => {
        if (evt.target === overleyRef.current) {
            setModal(false);
        }
    };
    return (
        <OverlayDiv   ref={overleyRef}
        onClick={(evt) => handleOvarley(evt)}
        className={`overlay ${modal ? "op" : ""}`}>
            <ModalWrapper>
                <ModalBtn  onClick={() => setModal(false)}
                    className=" modal-button" > &times; </ModalBtn>
                <ModalHeader>
                    <ModalTitle>{title}</ModalTitle>
                </ModalHeader>
                <ModalContent>{children}</ModalContent>
            </ModalWrapper>
        </OverlayDiv>
    );
};

