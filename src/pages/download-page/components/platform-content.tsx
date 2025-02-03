import { FC } from 'react';
import { UiButton, UiCard, UiCopyLink } from '../../../shared/ui';
import PhoneImg from '../../../assets/phone.png';

export const PlatformContent: FC = () => {
  return (
    <div className="flex flex-col gap-2">
      <UiCard title="Скачайте приложение FoxRay">
        <div className="flex flex-col gap-4">
          <div>По кнопке ниже</div>
          <UiButton className="w-[calc(100%+2rem)] !-mx-4 !mt-2 !-mb-6 !py-4" color="primary">Скачать из AppStore</UiButton>
        </div>
      </UiCard>

      <UiCard
        imageProps={{
          src: PhoneImg
        }}
        title="Вставьте параметры подключения"
      >
        <div className="flex flex-col gap-4">
          <div>
            Нажмите “+” сверху в приложении FoxRay и вставьте ссылку ниже для добавления сервера
          </div>

          <UiCopyLink />
        </div>
      </UiCard>

      <UiCard
        imageProps={{
          src: PhoneImg
        }}
        title="Нажмите “Tap to connect”"
      >
        На главной странице приложения. Поздравляем, вы подключены!
      </UiCard>

      <div className="flex justify-center gap-2 my-6">Не получается? <span className="text-[#5A60FF]">Написать в поддержку</span></div>
    </div>
  )
};
