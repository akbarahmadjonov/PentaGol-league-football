import styled from "styled-components";

export const OverlayDiv = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  display: none;
  align-items: stretch;
  justify-content: flex-end;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 10;
`;
export const OverlayDivEdit =styled.div`
position: fixed;
top: 0;
right: 0;
left: 0;
bottom: 0;
display: none;
align-items: center;
justify-content: center;
background-color: rgba(0, 0, 0, 0.7);
  z-index: 10;

`

export const ModalWrapper = styled.div`
  position: relative;
  width: 36%;
  height: auto;
  background: #1F1D2B;
border-radius: 16px 16px 0px 16px;
  padding: 30px;

`;
export const ModalWrapperEdit = styled.div`
  position: relative;
  width: 36%;
  padding: 32px;
max-height: 665px;
background: #1F1D2B;
border-radius: 8px;
`;

export const ModalHeader = styled.div`

`;
export const ModalContent = styled.div`
padding-bottom:200px;
`;
export const ModalTitle = styled.h3`
font-family: 'Barlow';
font-style: normal;
font-weight: 600;
font-size: 28px;
line-height: 140%;
color: #FFFFFF;
`;
export const ModalBtn = styled.button`
position: absolute;
top: 10px;
right: 10px;
color: white;
padding: 10px;
background: #1F1D2B;
border-radius: 8px;
border: 1px solid gray;

`;


