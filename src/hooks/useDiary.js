import { useContext, useEffect, useState } from "react"; // 일기 데이터 불러오기
import { DiaryStateContext } from "../App";
import { useNavigate } from "react-router-dom";

const useDiary = (id) => {
  const data = useContext(DiaryStateContext);
  const [diary, setDiary] = useState(); // 매개변수로 받은 id에 해당하는 일기 데이터 상태
  const navigate = useNavigate(); //라우터 이동을 위한 훅

  useEffect(() => {
    // 매개변수로 받은 id에 해당하는 일기 데이터를 찾아 diary 상태에 저장
    const matchDiary = data.find((it) => String(it.id) === String(id));
    if (matchDiary) {
      setDiary(matchDiary);
    } else {
      alert("일기를 찾을 수 없습니다.");
      navigate("/", { replace: true }); //일기가 없을 경우 홈으로 이동. true로 설정하면 이동한 페이지가 history에 남지 않아, 홈으로 이동 시 뒤로가기 버튼을 눌러도 다시 이동하지 않음
    }
  }, [id, data]);
  return diary;
};
export default useDiary;
