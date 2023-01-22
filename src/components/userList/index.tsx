import { IUser } from "../../types/types";
import { Link } from "react-router-dom";
import { useState } from "react";

interface IUserListProps {
  user: IUser;
  openModal: (arg: boolean) => void;
}
export const UserList = ({ user, openModal }: IUserListProps) => {
  return (
    <div
      key={user.id}
      className="flex-col border-solid border-2 border-sky-500 mt-2 p-2"
    >
      <p className="text-sm text-gray-500  text-2xl"> name: {user.name}</p>
      <p className="text-gray-500">user name: {user.username}</p>
      <a href={`tell-1-770-736-8031 x56442`}> tell : 1-770-736-8031 x56442</a>
      <p className="text-sm text-gray-500  text-2xl">
        city: {user.address.city}
      </p>
      <Link to={`posts/${user.id}`}>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded block mt-2 ">
          Click
        </button>
      </Link>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-2 block mt-2"
        onClick={() => openModal(true)}
      >
        albums
      </button>
    </div>
  );
};


