import { useGetUsersQuery } from "../../redux/servicesAPI";
import { useState } from "react";
import { IUser } from "../../types/types";
import { ModalWindow } from "../../components";
import { UserList } from "../../components";

const Home = () => {
  const [modalActive, setModalActive] = useState<boolean>(false);

  const openModal = (arg: boolean) => {
    setModalActive(arg);
  };

  const closeModal = (arg: boolean) => {
    setModalActive(arg);
  };

  const { data, isLoading, error } = useGetUsersQuery("");

  return (
    <>
      {isLoading
        ? "Loading"
        : error
        ? "error"
        : data?.map((user: IUser) => (
            <UserList key={user.id} user={user} openModal={openModal} />
          ))}
      {modalActive && <ModalWindow closeModal={closeModal} />}
    </>
  );
};

export default Home;
