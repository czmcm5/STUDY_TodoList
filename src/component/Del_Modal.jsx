import React, { useState } from "react";
import styled from "styled-components";
import { RowView, RowView2 } from "./commom_style";

const ModalBox = styled(RowView)`
  box-sizing: border-box;
  position: fixed;
  bottom: 0%;
  width: 100%;
  max-width: 25rem;
  padding: 0.7rem 1rem;
  margin-bottom: 1rem;
  background-color: #10101dd6;
  border-radius: 8px;
  overflow: hidden;
  transition: all 0.4s;
  &.none {
    bottom: -20%;
    opacity: 0;
  }
`;
const Text = styled.div`
  font-size: 12px;
`;
const Btn = styled.div`
  padding: 0.2rem 0.5rem;
  margin-left: 0.5rem;
  background-color: tomato;
  border-radius: 5px;
  cursor: pointer;
  &.cancel {
    color: darkgray;
    background-color: #4b4f63;
  }
`;

const Del_Modal = (props) => {
  const memoList = props.memoList;
  const setMemoList = props.setMemoList;
  const selectNum = props.selectNum;
  const setSelectNum = props.setSelectNum;

  const del = () => {
    const del_data = memoList.filter((memo) => memo.idx !== selectNum);
    setMemoList(del_data);
    setSelectNum("");
  };
  const cancel = () => {
    setSelectNum("");
  };

  return (
    <ModalBox className={selectNum === "" ? "none" : ""}>
      <div>
        <h3 style={{ margin: 0 }}>정말로 삭제하시겠습니까?</h3>
        <Text>삭제된 메모는 복구되지 않습니다.</Text>
      </div>

      <RowView2>
        <Btn onClick={del}>삭제</Btn>
        <Btn className="cancel" onClick={cancel}>
          취소
        </Btn>
      </RowView2>
    </ModalBox>
  );
};

export default Del_Modal;
