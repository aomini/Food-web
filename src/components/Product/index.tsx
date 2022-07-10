import clsx from 'clsx';
import Image from 'next/image';

import Icon from '../Icon';
import Typography from '../Typography';

const Product: React.FC<Props> = ({
  title,
  image,
  badge,
  badgeTitle,
  badgeColor = 'primary'
}) => {
  return (
    <div className="max-w-[360px] shadow-md">
      <div className="relative h-[220px] w-[360px]">
        <Image src={image} layout="fill" alt="" />
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
      <div className="p-4 ">
        <Typography
          variant="h5"
          component="h3"
          className="mb-[10px] font-semibold"
        >
          {title}
        </Typography>
        <div className="grid gap-[10px]">
          <div className="flex items-center gap-3 text-grey-300">
            <Icon icon="location" className="h-[14px] w-[14px] fill-grey-200" />
            <Typography variant="caption">New Sadak, Kathmandu</Typography>
          </div>
          <div className="flex items-center gap-3 text-grey-300">
            <span className="flex items-center gap-1 text-yellow-default">
              <Icon
                icon="star"
                className="h-[14px] w-[14px] fill-yellow-default"
              />
              <Typography variant="caption" className="font-semibold">
                4.8
              </Typography>
            </span>
            <span className="inline-block h-1 w-1 rounded-full bg-grey-200" />
            <Typography variant="caption">New Sadak, Kathmandu</Typography>
          </div>
          <div className="flex items-center gap-3 text-grey-300">
            <Icon
              icon="filledBike"
              className="h-[14px] w-[14px] fill-grey-200"
            />
            <Typography variant="caption">Delivery</Typography>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Product;

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
