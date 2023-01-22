import { FC } from "react";
import { useGetAlbumsQuery } from "../../redux/servicesAPI";
import { IAlbum } from "../../types/types";

interface IModalProps {
  closeModal: (arg: boolean) => void;
}
export const ModalWindow: FC<IModalProps> = ({ closeModal }) => {
  const { data, isLoading, error } = useGetAlbumsQuery("1");

  return (
    <div
      onClick={() => {
        closeModal(false);
      }}
      className="fixed bg-white opacity-70  inset-0 flex justify-center items-center "
    >
      <div
        onClick={(e) => {
          e.stopPropagation();
        }}
        className="  h-2/4 w-2/4 bg-slate-300    flex flex-wrap overflow-hidden justify-center"
      >
        {isLoading ? (
          <h2>Loading</h2>
        ) : error ? (
          <h2>error</h2>
        ) : (
          data?.map((albums: IAlbum) => {
            return (
              <div key={albums.id}>
                <img
                  className="h-20 w-20 display  "
                  src={albums.url}
                  alt="album"
                />
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};

