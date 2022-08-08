import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {useLocation} from "react-router";
import { useHistory } from "react-router-dom";
import authSlice from "../store/slices/auth";
import useSWR from 'swr';
import {fetcher} from "../utils/axios";
// import {UserResponse} from "../utils/types";
import { AccountResponse as UserResponse } from "../types";
import {RootState} from "../store";

interface LocationState {
    userId: string;
}


const Profile = () => {
  const account = useSelector((state: RootState) => state.auth.account);
  const dispatch = useDispatch();
  const history = useHistory();
  console.log(account)

  const userId = account?.user.id;

  const user = useSWR<UserResponse>(`/user/${userId}/`, fetcher)

  const handleLogout = () => {
    dispatch(authSlice.actions.setLogout());
    history.push("/login");
  };
  return (
    <div className="w-full h-screen">
      <div className="w-full p-6">
        <button
          onClick={handleLogout}
          className="rounded p-2 w-32 bg-red-700 text-white"
        >
          Deconnexion
        </button>
      </div>
        {
            user.data ?
                <div className="w-full h-full text-center items-center">
                    <p className="self-center my-auto">Welcome, {user.data?.user.firstname + user.data?.user.lastname }</p>
                </div>
                :
                <p className="text-center items-center">Loading ...</p>
        }
    </div>
  );
};

export default Profile;