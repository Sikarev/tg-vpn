import { FC } from 'react';
import { UiButton, UiCard } from '../../../shared/ui';

export const PlatformContent: FC = () => {
  return (
    <div className="flex flex-col gap-2">
      <UiCard title="Скачайте приложение FoxRay">
        <div className="flex flex-col gap-4">
          <div>По кнопке ниже</div>
          <UiButton className="w-[calc(100%+2rem)] !-mx-4 !mt-2 !-mb-6 !py-4" color="primary">Скачать из AppStore</UiButton>
        </div>
      </UiCard>

      <UiCard title="Вставьте параметры подключения">
        <div className="flex flex-col gap-4">
          <div>
            Нажмите “+” сверху в приложении FoxRay и вставьте ссылку ниже для добавления сервера
          </div>

          <div className="flex flex-col gap-4">
            <div
              className="rounded-[24px] p-4 -mx-4 text-white bg-[#7878802E] overflow-hidden break-all">hdbwvdawghdawcvawcdvawcvdcawcvawvcjhawvcxhawbdnabwcvaevec
            </div>

            <UiButton className="w-[calc(100%+2rem)] !-mx-4 !mt-2 !-mb-6 !py-4">Скопировать ссылку</UiButton>
          </div>
        </div>
      </UiCard>
    </div>
  )
};
