import { FC, Fragment, useState } from 'react';
import { LeftOutlined, PlusOutlined } from '@ant-design/icons';
import { UiButton, UiCard } from '../../shared/ui';
import { Input } from 'antd-mobile';
import { UiPopup } from '../../shared/ui/ui-popup.tsx';

export const AddDeviceBtn: FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  const openModal = () => {
    setIsVisible(true);
  }
  const closeModal = () => {
    setIsVisible(false);
  }

  return (
    <Fragment>
      <UiCard onClick={openModal} size="small" className="justify-center">
        <div className="flex items-center text-white">
          <PlusOutlined className="text-[24px]" />
        </div>
      </UiCard>
      <UiPopup
        fullPage
        onClose={closeModal}
        visible={isVisible}
      >
        <div className="h-full flex flex-col justify-between">
          <div className="flex flex-col items-center">
            <LeftOutlined className="self-start mx-4 mb-2 text-base" onClick={closeModal}/>
            <div className="font-bold text-xl mb-3">Добавление устройства</div>
            <div className="text-[#EBEBF560]">Придумайте имя</div>
          </div>

          <Input
            className="[&_.adm-input-element]:!text-center [&_.adm-input-element]:!text-[28px]"
            placeholder="Устройство 1"
          />

          <UiButton
            onClick={closeModal}
            className="!w-full !h-[56px]"
            color="primary"
          >
            Далее
          </UiButton>
        </div>
      </UiPopup>
    </Fragment>
  );
}
