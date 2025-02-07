import { FC } from 'react';
import { HostRouter } from './host-router.tsx';

export const HostContainer: FC = () => {
  return (
    <div className="h-full mx-2 py-4">
      <HostRouter />
    </div>
  );
}