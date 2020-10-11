import React from 'react';

const ContextDemo = React.lazy(() => import('./ContextDemo'));

const AsyncComponent = () => {
  return (
    <React.Suspense fallback={<div>Loading...</div>}>
      <ContextDemo />
    </React.Suspense>
  );
};

export default AsyncComponent;
