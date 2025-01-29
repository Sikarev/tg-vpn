import { FC, Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { InfoPage } from './pages/info-page.tsx';

export const HostRouter: FC = () => {
  return (
    <Suspense
    // TODO: add fallback
    >
      <BrowserRouter>
        <Routes>
          <Route path="/info" element={<InfoPage />} />
        </Routes>
      </BrowserRouter>
    </Suspense>
  )
}