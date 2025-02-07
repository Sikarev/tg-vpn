import { FC } from 'react';
import { PlusOutlined } from '@ant-design/icons';
import { UiCard } from '../../shared/ui';

export const AddDeviceBtn: FC = () => {
  return (
    <UiCard size="small" className="justify-center">
      <div className="flex items-center text-white">
        <PlusOutlined className="text-[24px]" />
      </div>
    </UiCard>
  );
}
