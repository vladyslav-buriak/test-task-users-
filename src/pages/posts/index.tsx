import { useParams } from "react-router-dom";
import { useGetPostQuery } from "../../redux/servicesAPI";
import { IPost } from "../../types/types";
const Posts = () => {
  const { id } = useParams<string>();

  const { data, isLoading, error } = useGetPostQuery(`${id}`);
  return (
    <>
      {isLoading ? (
        <h2>Loading</h2>
      ) : error ? (
        <h2>error</h2>
      ) : (
        data?.map(({ body, email }: IPost, i: number) => {
          return (
            <div>
              comments # {i + 1} <h3>{body}</h3>
              <p> email :{email}</p>
            </div>
          );
        })
      )}
    </>
  );
};

export default Posts;
