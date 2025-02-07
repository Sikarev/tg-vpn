import { FC } from 'react';
import { UiCard } from '../../shared/ui';

export const DeviceCard: FC = () => {
  return (
    <UiCard size="small">
      <div className="flex flex-col gap-2">
        <span className="text-lg text-white">Устройство 1</span>
        <span>99 ₽/мес</span>
      </div>
    </UiCard>
  );
}
