import { FC } from 'react';
import { UiButton } from './ui-button.tsx';
import { CopyIcon } from '../../icons';

export interface UiCopyLinkProps {
  hideLink?: boolean,
  link: string,
}

export const UiCopyLink: FC<UiCopyLinkProps> = ({ hideLink = false, link }) => {
  return (
    <div className="flex flex-col gap-4">
      {!hideLink && (
        <div className="rounded-[24px] p-4 -mx-4 text-white bg-[#7878802E] overflow-hidden break-all">
          {link}
        </div>
      )}

      <UiButton
        onClick={() => navigator.clipboard.writeText(link)}
        className="w-[calc(100%+2rem)] !-mx-4 !mt-2 !-mb-6 !py-4 !bg-[#2A2C5D]"
      >
        <div className="flex justify-center gap-2 text-[#7277FF]">
          <CopyIcon/>
          Скопировать ссылку
        </div>
      </UiButton>
    </div>
  )
}