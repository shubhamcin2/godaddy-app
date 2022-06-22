import { Link, useParams } from "react-router-dom";
import { useRepo } from "./Hooks";

export const RepoDetail = () => {
  const { id } = useParams();
  const repoDetail = useRepo(id);
  return (
    <>
      <h1 style={{ textAlign: 'center' }}>
        Repository detail
      </h1>
      <div style={{ textAlign: 'center' }}>
        <Link to="/">Back</Link>
      </div>
      <div className="list repo-detail">
        <div className="list-item">
          <div>title:</div>
          <div>{repoDetail.name}</div>
        </div>
        <div className="list-item">
          <div>description:</div>
          <div>{repoDetail.description}</div>
        </div>
        <div className="list-item">
          <div>link:</div>
          <div><a href={repoDetail.html_url}>{repoDetail.html_url}</a></div>
        </div>
        <div className="list-item">
          <div>language:</div>
          <div>{repoDetail.language}</div>
        </div>
        <div className="list-item">
          <div>Forks:</div>
          <div>{repoDetail.forks_count}</div>
        </div>
        <div className="list-item">
          <div>Open issues:</div>
          <div>{repoDetail.open_issues_count}</div>
        </div>
        <div className="list-item">
          <div>watchers:</div>
          <div>{repoDetail.watchers}</div>
        </div>
      </div>
    </>);
}