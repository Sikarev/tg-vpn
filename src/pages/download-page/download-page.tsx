import { FC, useState } from 'react';
import { Platform } from './constants.ts';
import { PlatformButtons } from './components/platform-buttons.tsx';
import { PlatformContent } from './components/platform-content.tsx';

export const DownloadPage: FC = () => {
  const [selectedPlatform, setSelectedPlatform] = useState<Platform>('IOS');

  return (
    <div className="flex flex-col gap-6">
      <div className="font-bold text-xl">Осталось подключиться</div>

      <PlatformButtons
        selectedPlatform={selectedPlatform}
        setSelectedPlatform={setSelectedPlatform}
      />

      {/*TODO: add scroll on content*/}
      <PlatformContent />
    </div>
  );
}