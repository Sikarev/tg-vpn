import { FC, PropsWithChildren, ReactNode } from 'react';

export interface UICardProps extends PropsWithChildren {
  title?: ReactNode;
}

export const UiCard: FC<UICardProps> = (props,) => {
  return (
    <div className="rounded-[32px] px-6 py-8 bg-[#3D3D3D80] flex flex-col gap-2">
      {props.title && (<div className="font-semibold text-white text-xl">{props.title}</div>)}
      <div className="text-[#EBEBF5] text-base font-normal">
        {props.children}
      </div>
    </div>
  )
}