import React from "react";
import styled from "styled-components";
import { RowView, RowView2 } from "../../component/commom_style";

const MeMoArea = styled.div`
  padding-right: 1rem;
  max-height: 20rem;
  overflow: auto;
  &::-webkit-scrollbar {
    width: 6px;
    border-radius: 6px;
  }
  &::-webkit-scrollbar-thumb {
    background: #3c3c5b;
    border-radius: 6px;
  }
`;
const MeMo = styled(RowView)`
  padding: 0.6rem;
  margin-top: 0.8rem;
  background-color: #191933;
  border-radius: 5px;
  overflow: hidden;
`;
const CheckBox = styled.div`
  width: 0.8rem;
  height: 0.8rem;
  margin-right: 0.5rem;
  color: #191933;
  font-size: 10px;
  text-align: center;
  border: 1px solid white;
  border-radius: 50px;
  cursor: default;
  transition: all 0.4s;
  &:hover {
    border: 1px solid #ee9ca7;
    box-shadow: 0 0 0 2px #ee9ca765;
  }
  &.this {
    color: white;
    background-color: #ee9ca7;
    border: 1px solid #ee9ca7;
  }
`;
const Content = styled.div`
  cursor: pointer;
  &.this {
    color: gray;
    text-decoration: line-through;
    text-decoration-color: white;
  }
`;
const BtnDel = styled.div`
  color: red;
  cursor: pointer;
`;

const List = (props) => {
  const memoList = props.memoList;
  const setMemoList = props.setMemoList;
  const setSelectNum = props.setSelectNum;

  const check = (idx) => {
    const modify_data = memoList.map((memo, i) => {
      if (memo.idx === idx) {
        return { ...memo, check: !memo.check };
      } else {
        return memo;
      }
    });

    setMemoList(modify_data);
  };

  const open_del_modal = (idx) => {
    setSelectNum(idx);
  };

  return (
    <MeMoArea>
      {memoList.map((item, idx) => {
        return (
          <MeMo key={idx}>
            <RowView2>
              <CheckBox
                className={item.check ? "this" : ""}
                onClick={() => {
                  check(item.idx);
                }}
              >
                ✓
              </CheckBox>
              <Content
                className={item.check ? "this" : ""}
                onClick={() => {
                  check(item.idx);
                }}
              >
                {item.text}
              </Content>
            </RowView2>

            <BtnDel
              onClick={() => {
                open_del_modal(item.idx);
              }}
            >
              X
            </BtnDel>
          </MeMo>
        );
      })}
    </MeMoArea>
  );
};

export default List;
