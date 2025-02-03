import { FC, Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { InfoPage } from './pages/info-page.tsx';
import { DownloadPage } from './pages/download-page.tsx';

export const HostRouter: FC = () => {
  return (
    <Suspense
    // TODO: add fallback
    >
      <BrowserRouter>
        <Routes>
          <Route path="/info" element={<InfoPage />} />
          <Route path="/download" element={<DownloadPage />} />
        </Routes>
      </BrowserRouter>
    </Suspense>
  )
}