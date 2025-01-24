import { MdDeleteForever } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { removeUser } from "../store/slices/UserSlice";

const DisplayUsers = () => {

    const dispatch = useDispatch()

    const data = useSelector((state) => {
        return state.users
    })
    // console.log(data);

    const deleteUser = (id => {
        dispatch(removeUser(id))
        // console.log(id);
    })


    return (
        <Wrapper>
               {
                data.map((user, id) => {
                    return <li key={id}> {user}
                    <button
                    onClick={() => deleteUser(id)}
                    className="btn-delete">
                        <MdDeleteForever className="delete-icon" />
                    </button>
                     </li>
                })
               }
        </Wrapper>
    );
};

const Wrapper = styled.section`
 li {
 width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding : 1rem;
    border-bottom: 1px solid #eee;

    &:first-child {
    border-top: 1px solid #eee;
    }
  }

  h3 {
    margin: 0;
  }

  .delete-btn {
    background-color: transparent;
    border: none;
  }

  .delete-icon {
    font-size: 2.6rem;
    color: #f12711;
    filter: drop-shadow(0.2rem 0.2rem 0.5rem rgb(255 0 0 / 0.2));
    cursor: pointer;
  }
  @media screen and (max-width: 998px) {
    .admin-subtitle {
      margin-bottom: 1.6rem;
    }
  }
`;

export default DisplayUsers;