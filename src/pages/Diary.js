import { useNavigate, useParams } from "react-router-dom";
import useDiary from "../hooks/useDiary";
import Button from "../component/Button";
import { getFormattedDate } from "../util";
import Header from "../component/Header";
import Viewer from "../component/Viewer";

const Diary = () => {
  const { id } = useParams();
  const data = useDiary(id); // useDiary 훅을 이용해 id에 해당하는 일기 데이터를 불러옴
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  const goEdit = () => {
    navigate(`/edit/${id}`);
  };

  if (!data) {
    return <div>일기 불러오는 중...</div>;
  } else {
    const { date, emotionId, content } = data;
    const title = `${getFormattedDate(new Date(Number(date)))} 기록`;
    return (
      <div>
        <Header
          title={title}
          leftChild={<Button text={"< Prev"} onClick={goBack} />}
          rightChild={<Button text={"Eidt"} onClick={goEdit} />}
        />

        <Viewer content={content} emotionId={emotionId} />
      </div>
    );
  }
};
export default Diary;
