import "./Editor.css";
import { useState, useEffect, useCallback } from "react"; //useCallback: 함수를 캐싱하여 재사용 -> 성능 최적화
import { emotionList, getFormattedDate } from "../util";
import Button from "./Button";
import { useNavigate } from "react-router-dom"; //useNavigate hook 추가: Reset 버튼 클릭 시 홈으로 이동
import EmotionItem from "./EmotionItem";

const Editor = ({ initData, onSubmit }) => {
  const navigate = useNavigate(); //useNavigate hook 추가: Reset 버튼 클릭 시 홈으로 이동
  const [state, setState] = useState({
    date: getFormattedDate(new Date()),
    emotionId: 3,
    content: "",
  });

  //초기 데이터 설정
  useEffect(() => {
    if (initData) {
      setState({
        ...initData,
        date: getFormattedDate(new Date(parseInt(initData.date))),
      });
    }
  }, [initData]);

  //날짜 변경했을 떄 실행할 이벤트 핸들러
  const handleChangeDate = (e) => {
    setState({
      ...state,
      date: e.target.value,
    });
  };

  //일기 입력 섹션
  const handleChangeContent = (e) => {
    setState({
      ...state,
      content: e.target.value,
    });
  };

  //Done 버튼 클릭했을 때 실행할 이벤트 핸들러
  const handleSubmit = () => {
    onSubmit(state);
  };

  //Reset 버튼 클릭했을 때 실행할 이벤트 핸들러
  const handleOnGoBack = () => {
    navigate(-1); //-1은 브라우저 히스토리에서 한 단계 뒤로 이동 (홈으로 이동)
  };

  //감정 선택 섹션
  const handleChangeEmotion = useCallback((emotionId) => {
    setState((state) => ({
      ...state,
      emotionId,
    }));
  }, []); //useCallback으로 함수 캐싱

  return (
    <div className="Editor">
      <div className="editor_section">
        <h4>Today</h4>
        <div className="input_wrapper">
          <input type="date" value={state.date} onChange={handleChangeDate} />
        </div>
      </div>
      <div className="editor_section">
        <h4>Emotion</h4>
        <div className="input_wrapper emotion_list_wrapper">
          {emotionList.map((it) => (
            <EmotionItem
              key={it.id}
              {...it}
              onClick={handleChangeEmotion}
              isSelected={state.emotionId === it.id}
            />
          ))}
        </div>
      </div>
      <div className="editor_section">
        <h4>Diary</h4>
        <div className="input_wrapper">
          <textarea
            placeholder="How's your day?"
            value={state.content}
            onChange={handleChangeContent}
          />
        </div>
      </div>
      <div className="editor_section buttom_section">
        <Button text={"Reset"} onClick={handleOnGoBack} />
        <Button text={"Done"} type={"positive"} onClick={handleSubmit} />
      </div>
    </div>
  );
};
export default Editor;
