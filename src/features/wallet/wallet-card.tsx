import { FC } from 'react';
import { WalletIcon } from '../../icons';
import { UiButton, UiCard } from '../../shared/ui';

export const WalletCard: FC = () => {
  return (
    <UiCard className="h-[202px]">
      <div className="flex items-center flex-col gap-3">
        <div>Баланс</div>
        <div className="flex items-center gap-3">
          <WalletIcon />
          <span className="font-bold text-white text-[40px] leading-[41px]">0</span>
        </div>
      </div>
      <UiButton className="w-[calc(100%+2rem)] !mt-6 !py-4 !-mx-4" color="primary">Пополнить баланс</UiButton>
    </UiCard>
  );
}
