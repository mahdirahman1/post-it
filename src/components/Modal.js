import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";

const Backdrop = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.5);
`;

const ModalImage = styled.img`
  display: block;
  margin: 3rem auto;
  max-width: 90%;
  max-height: 90%;
  border: 2px solid white;
  border-radius: 1rem;
`;

const Modal = () => {
  const url = useSelector((state) => state.modalReducer.selectedImg);
  const dispatch = useDispatch();
  return (
    <Backdrop onClick={() => dispatch({ type: "SET_IMG", payload: null })}>
      <ModalImage src={url} />
    </Backdrop>
  );
};

export default Modal;
