import "./DiaryItem.css";
import { useNavigate } from "react-router-dom";
import { getEmotionImgById } from "../util";
import Button from "./Button";

const DiaryItem = ({ id, emotionId, content, date }) => {
  const navigate = useNavigate();
  const goDetail = () => {
    navigate(`/diary/${id}`);
  };
  const goEdit = () => {
    navigate(`/edit/${id}`);
  };

  return (
    <div className="DiaryItem">
      <div //이미지 섹션 클릭 시 일기 상세 페이지로 이동
        onClick={goDetail}
        className={["img_section", `img_section_${emotionId}`].join(" ")}
      >
        <img alt={`emotion_${emotionId}`} src={getEmotionImgById(emotionId)} />
      </div>
      <div onClick={goDetail} className="info_section">
        {" "}
        {/* 일기 상세 페이지로 이동 */}
        <div className="date_wrapper">
          {new Date(parseInt(date)).toLocaleDateString()}
        </div>
        <div className="content_wrapper">{content.slice(0, 25)}</div>
      </div>
      <div className="button_section">
        {" "}
        {/* 수정 버튼 클릭 시 수정 페이지로 이동 */}
        <Button onClick={goEdit} text={"수정"} />
      </div>
    </div>
  );
};
export default DiaryItem;
