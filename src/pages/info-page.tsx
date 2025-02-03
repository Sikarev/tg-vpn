import { FC } from 'react';
import { UiButton, UiCard } from '../shared/ui';

export const InfoPage: FC = () => {
  return (
    <div className="flex flex-col items-center justify-between h-full">
      <div className="font-bold text-3xl my-20">Best VPN</div>

      <div>
        <div className="flex flex-col gap-2">
          <UiCard title="Интернет летает">
            Благодаря нашим лучшим протоколам подключения
          </UiCard>
          <UiCard title="Дарим 50 ₽ на баланс">
            За каждого приведённого по вашей ссылке друга
          </UiCard>
          <UiCard title="Всего 99 ₽ в месяц">
            Дешевле, чем у других сервисов
          </UiCard>
        </div>

        <UiButton className="w-full !mt-6 !py-4" color="primary">Попробовать бесплатно 3 дня</UiButton>

        <div className="my-2 text-xs flex justify-center">После 99 ₽/мес за устройство. <span className="text-[#5A60FF]">Полные условия</span></div>
      </div>
    </div>
  );
}