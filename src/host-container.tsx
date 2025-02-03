import { FC } from 'react';
import { HostRouter } from './host-router.tsx';

export const HostContainer: FC = () => {
  return (
    <div className="mx-2 my-4">
      <HostRouter />
    </div>
  );
}