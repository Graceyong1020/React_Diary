import { useNavigate, useParams } from "react-router-dom";
import useDiary from "../hooks/useDiary";
import Button from "../component/Button";
import Header from "../component/Header";
import { useContext } from "react";
import { DiaryDispatchContext } from "../App";
import Editor from "../component/Editor";

const Edit = () => {
  const { id } = useParams();
  const data = useDiary(id);
  const navigate = useNavigate();
  const { onUpdate, onDelete } = useContext(DiaryDispatchContext); // edit한 후, editor 컴포넌트에서 완료 버튼을 누르면 onUpdate 함수가 호출되어 일기 데이터가 수정됨

  const goBack = () => {
    navigate(-1);
  };

  const onClickDelete = () => {
    if (window.confirm("정말로 삭제하시겠습니까?")) {
      onDelete(id);
      navigate("/", { replace: true });
    }
  };

  const onSubmit = (data) => {
    // editor 컴포넌트 부모인 Edit 컴포넌트에서 onSubmit 호출
    if (window.confirm("수정하시겠습니까?")) {
      const { date, content, emotionId } = data;
      onUpdate(id, date, content, emotionId);
      navigate("/", { replace: true });
    }
  };

  if (!data) {
    return <div>일기 불러오는 중...</div>;
  } else {
    return (
      <div>
        <Header
          title={"Edit Diary"}
          leftChild={<Button text={"< Prev"} onClick={goBack} />}
          rightChild={
            <Button type={"negative"} text={"delete"} onClick={onClickDelete} />
          }
        />
        <Editor initData={data} onSubmit={onSubmit} />{" "}
        {/* 수정하려는 일기 데이터를 props로 전달 */}
      </div>
    );
  }
};
export default Edit;
