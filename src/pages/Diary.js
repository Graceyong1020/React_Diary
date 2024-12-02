import { useParams } from "react-router-dom";

const Diary = () => {
    const { id } = useParams();
    const params = useParams();
    console.log(params);

    return (
        <div>
            <div>No.{id} Diary</div>
            <div>Diary</div>
        </div>
    );
};
export default Diary;