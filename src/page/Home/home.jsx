import React, { useState } from "react";
import styled from "styled-components";
import { CenterView, RowView } from "../../component/commom_style";

import List from "./List";
import Del_Modal from "../../component/Del_Modal";

const Container = styled(CenterView)`
  flex-direction: column;
  height: 100vh;
  color: white;
  white-space: nowrap;
  background-image: linear-gradient(
      62deg,
      rgba(1, 95, 183, 0.9732216701223994) 13%,
      rgba(255, 122, 151, 0.5) 4%
    ),
    linear-gradient(
      44deg,
      rgba(0, 43, 99, 0.07922090238615942) 39%,
      rgba(242, 140, 143, 0.5) 18%
    ),
    linear-gradient(
      118deg,
      rgba(84, 202, 242, 0.03152997265339608) 40%,
      rgba(247, 155, 187, 0.5) 54%
    ),
    linear-gradient(
      58deg,
      rgba(90, 90, 237, 0.16144443572260592) 83%,
      rgba(249, 156, 142, 0.5) 23%
    );
  background-blend-mode: normal, lighten, multiply, hard-light;
  overflow: auto;
`;
const ListBox = styled.div`
  box-sizing: border-box;
  width: 100%;
  max-width: 30rem;
  margin: 3rem 1rem;
  padding: 0.5rem 1.5rem 2rem 1.5rem;
  background-color: #10101d;
  border-radius: 8px;
  overflow: hidden;
`;
const InputArea = styled(RowView)`
  overflow: hidden;
`;
const TextInput = styled.input`
  flex: 1;
  padding-bottom: 0.5rem;
  margin-right: 1rem;
  font-size: 15px;
  color: white;
  background-color: #10101d;
  outline: 0px;
  border: 0px;
  border-bottom: 1px solid white;
  &::placeholder {
  }
`;
const Btn = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 2rem;
  height: 2rem;
  margin-bottom: 0.5rem;
  font-size: 20px;
  border-radius: 50px;
  background-color: #ee9ca7;
  cursor: pointer;
`;
const EmptyBox = styled.div`
  padding: 4rem 0rem;
  color: #ffffff8f;
  text-align: center;
`;

const Home = () => {
  const [text, setText] = useState("");
  const [memoList, setMemoList] = useState([]);
  const [selectNum, setSelectNum] = useState("");

  const setting_text = (e) => {
    setText(e.target.value);
  };

  const insert = () => {
    const memo_idx =
      memoList.length === 0 ? 0 : memoList[memoList.length - 1].idx + 1;

    if (text.trim() !== "") {
      setMemoList([...memoList, { idx: memo_idx, text: text, check: false }]);
      setText("");
    }
  };
  const enterPress = (e) => {
    if (e.key === "Enter") {
      insert();
    }
  };

  return (
    <Container>
      <ListBox>
        <h2>TO DO LIST</h2>

        <InputArea>
          <TextInput
            placeholder="Add New Task"
            value={text}
            onChange={setting_text}
            onKeyPress={enterPress}
          />
          <Btn onClick={insert}>+</Btn>
        </InputArea>

        <List
          memoList={memoList}
          setMemoList={setMemoList}
          setSelectNum={setSelectNum}
        />

        {memoList.length === 0 && <EmptyBox>현재 리스트가 없습니다.</EmptyBox>}
      </ListBox>

      <Del_Modal
        memoList={memoList}
        setMemoList={setMemoList}
        selectNum={selectNum}
        setSelectNum={setSelectNum}
      />
    </Container>
  );
};

export default Home;
