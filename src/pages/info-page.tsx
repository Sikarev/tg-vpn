import { FC } from 'react';
import { Card } from 'antd-mobile';

export const InfoPage: FC = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="font-bold text-3xl my-20">Best VPN</div>

      <div className="flex flex-col gap-2">
        <Card>
          Интернет летает
          Благодаря нашим лучшим протоколам подключения
        </Card>
      </div>
    </div>
  );
}