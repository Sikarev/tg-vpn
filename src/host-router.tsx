import { FC, Suspense } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { InfoPage } from './pages/info-page.tsx';
import { DownloadPage } from './pages/download-page';
import { HomePage } from './pages/home-page';

export const HostRouter: FC = () => {
  return (
    <Suspense
    // TODO: add fallback
    >
      <BrowserRouter>
        <Routes>
          <Route path="/info" element={<InfoPage />} />
          <Route path="/download" element={<DownloadPage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="*" element={<Navigate to="/info" />} />
        </Routes>
      </BrowserRouter>
    </Suspense>
  )
}