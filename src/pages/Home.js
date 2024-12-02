import Button from "../component/Button";
import Header from "../component/Header";
import { useState, useContext, useEffect } from "react";
import { DiaryStateContext } from "../App";
import { getMonthRangeByDate } from "../util";
import DiaryList from "../component/DiaryList";


const Home = () => {
    const data = useContext(DiaryStateContext); // 해당 월의 일기 데이터 가져오기
    const [pivotDate, setPivotDate] = useState(new Date()); //기준 날짜
    const [filteredData, setFilteredData] = useState([]); //해당 월의 일기 데이터
    const headerTitle = `${pivotDate.getFullYear()}년 ${
        pivotDate.getMonth() + 1
      }월`;

    useEffect(() => { // 데이터가 바뀌거나 pivotDate가 바뀌면 해당 월의 일기 데이터를 필터링
        if (data.length >= 1) {
            const { beginTimeStamp, endTimeStamp } = getMonthRangeByDate(pivotDate);
            setFilteredData(data.filter((it) => beginTimeStamp <= it.date && it.date <= endTimeStamp));
            } else {
                setFilteredData([]);
            }
        }, [data, pivotDate]);



    const onIncreaseMonth = () => {
        setPivotDate(new Date(pivotDate.getFullYear(), pivotDate.getMonth() + 1));
    };
    const onDecreaseMonth = () => {
        setPivotDate(new Date(pivotDate.getFullYear(), pivotDate.getMonth() - 1));
    };

    return (
        <div>
            <Header
                title={headerTitle}
                leftChild={<Button text={"<"} onClick={onDecreaseMonth} />}
                rightChild={<Button text={">"} onClick={onIncreaseMonth} />}
            />
            <DiaryList data={filteredData} />
        </div>
    );
};

export default Home;