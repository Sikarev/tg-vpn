import { FC, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

export const HostRouter: FC = () => {
  return (
    <Suspense
    // TODO: add fallback
    >
      <Routes>
        <Route path="info" />
      </Routes>
    </Suspense>
  )
}