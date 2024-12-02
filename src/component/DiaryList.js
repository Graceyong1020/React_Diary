import "./DiaryList.css";
import Button from "./Button";
import {useState} from "react";

const sortOptionList = [ //정렬 옵션 리스트
    {value: "latest", name: "최신순"},
    {value: "oldest", name: "과거순"},
];

const DiaryList = ({data}) => { 
    const [sortType, setSortType] = useState("latest"); //정렬 옵션 상태
    const onChangeSorType = (e) => { //정렬 옵션 변경 이벤트 핸들러
        setSortType(e.target.value);
    };

    return (
    <div className="DiaryList">
        <div className="menu_wrapper">
            <div className="left_col">
                <select value={sortType} onChange={onChangeSorType}>
                    {sortOptionList.map((it, idx) => (
                        <option key={idx} value={it.value}>{it.name}</option>
                    ))} 
                </select>
            </div>
             <div className="right_col">
                 <Button type={"positive"} text={"일기 작성"} />
             </div>
        </div>
    </div>
    );
};
export default DiaryList;