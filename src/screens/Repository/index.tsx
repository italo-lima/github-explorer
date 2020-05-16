import React from 'react';
import { useRouteMatch } from 'react-router-dom';

interface RepositoryParams {
  repository: string;
}

// React.FC -> tipagem do component (function component)
const Repository: React.FC = () => {
  const { params } = useRouteMatch<RepositoryParams>();

  return <h1> Repository:{params.repository}</h1>;
};

export default Repository;
