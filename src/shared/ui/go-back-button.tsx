import { FC, HTMLProps } from 'react';
import { ArrowLeftOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';

export const GoBackButton: FC<Pick<HTMLProps<HTMLDivElement>, 'className'>> = ({ className }) => {
  const navigate = useNavigate();

  return (
    <div onClick={() => navigate(-1)} className={`text-sm flex gap-2 items-center cursor-pointer ${className}`}>
      <ArrowLeftOutlined />
      <span>Назад</span>
    </div>
  );
}