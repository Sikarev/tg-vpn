import { FC } from 'react';
import { RightOutlined } from '@ant-design/icons';
import { WalletCard } from '../../features/wallet';
import { AddDeviceBtn, DeviceCard } from '../../features/devices';
import { UiCard } from '../../shared/ui';
import { PasswordIcon, PeopleIcon } from '../../icons';

export const HomePage: FC = () => {
  return (
    <div className="h-full flex flex-col justify-between">
      <div>
        <div className="flex justify-center items-center gap-2 text-white text-base mb-4">Пробный период 2
          дня <RightOutlined/></div>
        <WalletCard/>

        <div className="flex gap-2 mt-2">
          <AddDeviceBtn/>
          <DeviceCard/>
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <UiCard startIcon={<PeopleIcon/>} className="!p-2">
          <div className="flex gap-4 items-center">
            <div className="flex flex-col gap-2">
              <div className="text-lg text-white">Пригласить друзей</div>
              <div className="text-xs">Добавим 50 ₽ на баланс за каждого</div>
            </div>
          </div>
        </UiCard>
        <UiCard startIcon={<PasswordIcon/>} className="!p-2">
          <div className="flex gap-4 items-center">
            <div className="flex flex-col gap-2">
              <div className="text-lg text-white">Инструкции</div>
              <div className="text-xs">Настройки на разных платформах</div>
            </div>
          </div>
        </UiCard>
        <div className="flex justify-center gap-2 my-6">Остались вопросы? <span className="text-[#5A60FF]">Ответы</span></div>
      </div>
    </div>
  );
}
