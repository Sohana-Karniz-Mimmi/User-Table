import { useDispatch } from "react-redux";
import { delateUsers } from "../store/slices/UserSlice";

const DeleteAllUser = () => {

    const dispatch = useDispatch()

   
    const deleteAllUsers = () => {
        dispatch(delateUsers());
        // console.log(allUserData);
    }

    return (
        <div>
            <button
            onClick={deleteAllUsers}
          className="btn add-btn">Delete All Users</button>
        </div>
    );
};

export default DeleteAllUser;