'use client';

import Button from '@/components/general/button';

const DownloadCV = () => {
  return (
    <Button
      onClick={() =>
        window?.open(
          'https://drive.google.com/file/d/1YngBx3-JHtbpdEe4-ErdQ3ULewoe4iVu/view?usp=sharing',
          '_blank'
        )
      }
    >
      Download Resume
    </Button>
  );
};

export default DownloadCV;
