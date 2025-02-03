import { FC } from 'react';
import { Platform, platforms } from '../constants.ts';
import { UiButton } from '../../../shared/ui';

interface PlatformButtonsProps {
  selectedPlatform: Platform;
  setSelectedPlatform: (currentPlatform: Platform) => void;
}

export const PlatformButtons: FC<PlatformButtonsProps> = (props) => {
  return (
    <div className="flex justify-between">
      {platforms.map((name) => (
        <UiButton
          className={`!text-sm w-full ${props.selectedPlatform !== name ? '!bg-transparent' : ''}`}
          onClick={() => { props.setSelectedPlatform(name) }}
          color="primary"
        >
          {name}
        </UiButton>
      ))}
    </div>
  );
}