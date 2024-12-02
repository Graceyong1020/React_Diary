import { data, useNavigate } from "react-router-dom";
import Button from "../component/Button";
import Header from "../component/Header";
import Editor from "../component/Editor";
import { useContext } from "react";
import { DiaryDispatchContext } from "../App";

const New = () => {
  const { onCreate } = useContext(DiaryDispatchContext); //일기 데이터 관리 Context
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  const onSubmit = (data) => {
    const { date, content, emotionId } = data;
    onCreate(date, content, emotionId); //일기 데이터 추가
    navigate("/", { replace: true }); //홈으로 이동
  };

  return (
    <div>
      <Header
        title={"Wrtie Diary"}
        leftChild={<Button text={"< Prev"} onClick={goBack} />}
      />
      <Editor onSubmit={onSubmit} /> {/* 일기 작성을 위한 Editor 컴포넌트 */}
    </div>
  );
};

export default New;
