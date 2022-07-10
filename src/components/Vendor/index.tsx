import clsx from 'clsx';
import Image from 'next/image';

import Typography from '../Typography';

const Vendor: React.FC<Props> = ({
  title,
  image,
  badge,
  badgeTitle,
  badgeColor = 'primary'
}) => {
  return (
    <div className="max-w-[263px] shadow-md">
      <div className="relative h-[160px]">
        <Image src={image} width={263} height={160} alt="" />
        {badge ? (
          <div
            className={clsx(
              `absolute top-4 left-4 rounded-lg px-3 py-2 text-xs font-semibold`,
              BADGE_COLORS[badgeColor]
            )}
          >
            {badgeTitle}
          </div>
        ) : null}
      </div>
      <div className="p-4">
        <Typography variant="h5" component="h3" className="font-semibold">
          {title}
        </Typography>
      </div>
    </div>
  );
};
export default Vendor;

const BADGE_COLORS = {
  danger: 'text-red-default bg-red-50',
  primary: 'text-green-default bg-green-50'
};

type Props = {
  title: string;
  image: string;
  note?: string;
  badge?: boolean;
  badgeTitle?: string;
  badgeColor?: keyof typeof BADGE_COLORS;
};
