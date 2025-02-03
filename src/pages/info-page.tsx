import { FC } from 'react';
import { UiCard } from '../shared/ui';

export const InfoPage: FC = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="font-bold text-3xl my-20">Best VPN</div>

      <div className="flex flex-col gap-2 mx-2">
        <UiCard title="Интернет летает">
          Благодаря нашим лучшим протоколам подключения
        </UiCard>
      </div>
    </div>
  );
}