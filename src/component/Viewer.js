import "./Viewer.css";
import { emotionList } from "../util";

const Viewer = ({ content, emotionId }) => {
  const emotionItem = emotionList.find((it) => it.id === emotionId);
  console.log(emotionItem);

  return (
    <div className="Viewer">
      <section>
        <h4>Feelings of Today </h4>
        <div
          className={[
            "emotion_img_wrapper",
            `emotion_img_wrapper_${emotionId}`,
          ].join(" ")}
        >
          <img alt={emotionItem.name} src={emotionItem.img} />
          <div className="emotion_descript">{emotionItem.name}</div>
        </div>
      </section>
      <section>
        <h4>Today's Diary</h4>
        <div className="content_wrapper">
          <p>{content}</p> {/* props로 받은 일기 내용을 페이지에 렌더링*/}
        </div>
      </section>
    </div>
  );
};
export default Viewer;
