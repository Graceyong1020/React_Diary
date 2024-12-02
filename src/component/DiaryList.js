import "./DiaryList.css";
import Button from "./Button";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; //라우터 이동을 위한 훅
import DiaryItem from "./DiaryItem";

const sortOptionList = [
  //정렬 옵션 리스트
  { value: "latest", name: "최신순" },
  { value: "oldest", name: "과거순" },
];

const DiaryList = ({ data }) => {
  const navigate = useNavigate(); //라우터 이동을 위한 훅
  const [sortType, setSortType] = useState("latest"); //정렬 옵션 상태
  const [sortedData, setSortedData] = useState([]); // 일기 데이터 정렬

  useEffect(() => {
    const compare = (a, b) => {
      if (sortType === "latest") {
        return Number(b.date) - Number(a.date);
      } else {
        return Number(a.date) - Number(b.date);
      }
    };
    const copyList = JSON.parse(JSON.stringify(data));
    copyList.sort(compare);
    setSortedData(copyList);
  }, [data, sortType]);

  const onChangeSorType = (e) => {
    //정렬 옵션 변경 이벤트 핸들러
    setSortType(e.target.value);
  };
  const onClickNew = () => {
    //일기 작성 버튼 클릭 이벤트 핸들러
    navigate("/new");
  };

  return (
    <div className="DiaryList">
      <div className="menu_wrapper">
        <div className="left_col">
          <select value={sortType} onChange={onChangeSorType}>
            {sortOptionList.map((it, idx) => (
              <option key={idx} value={it.value}>
                {it.name}
              </option>
            ))}
          </select>
        </div>
        <div className="right_col">
          <Button type={"positive"} text={"일기 작성"} onClick={onClickNew} />
        </div>
      </div>
      <div className="list_wrapper">
        {sortedData.map(
          (
            it // map 함수를 이용해 sortedData를 일기 리스트로 렌더링. 하나의 일기 데이터를 DiaryItem 컴포넌트에 전달
          ) => (
            <DiaryItem key={it.id} {...it} />
          )
        )}
      </div>
    </div>
  );
};
export default DiaryList;
