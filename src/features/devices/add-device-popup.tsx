import { FC, Fragment, ReactNode, useState } from 'react';
import { LeftOutlined } from '@ant-design/icons';
import { UiButton } from '../../shared/ui';
import { Input } from 'antd-mobile';
import { UiPopup } from '../../shared/ui/ui-popup.tsx';
import { DocumentIcon } from '../../icons';

export interface AddDevicePopupProps {
  renderOpener: (open: () => void) => ReactNode;
}

export const AddDevicePopup: FC<AddDevicePopupProps> = (props) => {
  const [currentStep, setCurrentStep] = useState<1 | 2>(1);
  const [isVisible, setIsVisible] = useState(false);

  const openPopup = () => {
    setCurrentStep(1);
    setIsVisible(true);
  }
  const closePopup = () => {
    setIsVisible(false);
  }

  const goToNextStep = () => {
    if (currentStep === 1) {
      setCurrentStep(2);
      return
    }
    closePopup();
  }

  const goToPrevStep = () => {
    if (currentStep === 2) {
      setCurrentStep(1);
      return;
    }
    closePopup();
  }

  return (
    <Fragment>
      {props.renderOpener(openPopup)}
      <UiPopup
        fullPage
        onClose={closePopup}
        visible={isVisible}
      >
        {currentStep === 1 && (
          <div className="h-full flex flex-col justify-between">
            <div className="flex flex-col items-center">
              <LeftOutlined className="self-start mx-4 mb-2 text-base" onClick={goToPrevStep}/>
              <div className="font-bold text-xl mb-3">Добавление устройства</div>
              <div className="text-[#EBEBF560]">Придумайте имя</div>
            </div>

            <Input
              className="[&_.adm-input-element]:!text-center [&_.adm-input-element]:!text-[28px]"
              placeholder="Устройство 1"
            />

            <UiButton
              onClick={goToNextStep}
              className="!w-full !h-[56px]"
              color="primary"
            >
              Далее
            </UiButton>
          </div>
        )}

        {currentStep === 2 && (
          <div className="h-full flex flex-col justify-between">
            <div className="flex flex-col items-center">
              <LeftOutlined className="self-start mx-4 mb-2 text-base" onClick={goToPrevStep}/>
              <div className="font-bold text-xl mb-3">Пополнение баланса</div>
              <div className="text-[#EBEBF560]">Введите сумму и нажмите «Оплатить»</div>
            </div>

            <div className="flex gap-2 items-center justify-center ml-4">
              <Input
                type="number"
                className="!w-[65px] [&_.adm-input-element]:!text-center [&_.adm-input-element]:!text-[28px]"
                placeholder="200"
              />
              <span className="w-4 text-[28px] text-[#666666]">₽</span>
            </div>


            <div className="flex flex-col gap-2">
              {/*TODO: add email input popup*/}
              <UiButton
                onClick={goToNextStep}
                className="!w-full !h-[56px]"
              >
                <div className="flex items-center justify-center gap-2">
                  <DocumentIcon />
                  Получить чек на e-mail
                </div>
              </UiButton>
              <UiButton
                onClick={goToNextStep}
                className="!w-full !h-[56px]"
                color="primary"
              >
                Далее
              </UiButton>
            </div>
          </div>
        )}
      </UiPopup>
    </Fragment>
  );
}
