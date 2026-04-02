'use client';

import Button from '@/components/general/button';

const DownloadCV = () => {
  return (
    <Button
      onClick={() =>
        window?.open(
          'https://drive.google.com/file/d/1h8tu1WUTrqvQMRltxgFlAckVOOHzDnbE/view?usp=sharing',
          '_blank'
        )
      }
    >
      Download Resume
    </Button>
  );
};

export default DownloadCV;
