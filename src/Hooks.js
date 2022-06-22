import React, { createContext, useCallback, useContext, useEffect, useState } from "react";

export const RepoContext = createContext(null);

export const RepoProvider = ({ children }) => {
  const [repo, setRepo] = useState(null);
  const fetchRepo = useCallback(async () => {
    const response = await fetch('https://api.github.com/orgs/godaddy/repos');
    const data = await response.json();
    setRepo(data);
  }, []);
  useEffect(() => {
    fetchRepo();
  }, [fetchRepo]);
  if (!repo) {
    return <span>Loading...</span>;
  }
  return <RepoContext.Provider value={{ repo }}>{children}</RepoContext.Provider>
}

export const TestProvider = ({children, value}) => <RepoContext.Provider value={{ value }}>{children}</RepoContext.Provider>;

export const useRepoContext = () => {
  return useContext(RepoContext);
};

export const useRepo = (id) => {
  const { repo } = useContext(RepoContext);
  return id ? repo.find((i) => i.id === Number(id)) : repo;
};