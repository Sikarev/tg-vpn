import { FC, PropsWithChildren, ReactNode } from 'react';

export interface UICardProps extends PropsWithChildren {
  title?: ReactNode;
}

export const UiCard: FC<UICardProps> = (props,) => {
  return (
    <div className="px-6 py-8 bg-ui-dark flex flex-col gap-2">
      {props.title && (<div className="font-semibold text-label-primary text-xl">{props.title}</div>)}
      <div className="text-label-secondary text-base font-normal">
        {props.children}
      </div>
    </div>
  )
}