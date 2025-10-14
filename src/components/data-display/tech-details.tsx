'use client';

import Typography from '@/components/general/typography';
import Link from '@/components/navigation/link';
import Image from 'next/image';
import type { TechDetails } from '@/lib/types';  // 👈 add "type"

const TechDetails = ({ logo, darkModeLogo, label, url }: TechDetails) => {
  return (
    <Link
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="transition-transform duration-300 hover:scale-110"
    >
      <div className="flex flex-col items-center justify-center gap-3 min-w-[100px]">
        <Image
          src={logo}
          alt={label}
          width={60}
          height={60}
          className="object-contain"
        />
        <Typography
  variant="body1"
  className="text-center text-gray-800 dark:text-gray-100 text-base font-semibold tracking-wide"
>
  {label}
</Typography>



      </div>
    </Link>
  );
};


export default TechDetails;
