import { useNavigate } from "react-router-dom";
import { useRepo } from "./Hooks";

export const RepoList = () => {
  const repo = useRepo();
  const navigate = useNavigate();
  return <>
    <h1>Repository List</h1>
    <ol className="list" >
      {repo?.map(({ name, id }) => <li key={id} onClick={() => navigate(`/${id}`)}>{name}</li>)}
    </ol>
  </>;
}