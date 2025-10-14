'use client';

import Button from '@/components/general/button';

const DownloadCV = () => {
  return (
    <Button
      onClick={() =>
        window?.open(
          'https://drive.google.com/file/d/12o8_E1SvwuRH-WbryhqnAah4TdeKP9qe/view',
          '_blank'
        )
      }
    >
      Download Resume
    </Button>
  );
};

export default DownloadCV;
