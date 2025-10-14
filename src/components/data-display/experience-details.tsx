import Typography from '@/components/general/typography';
import Card from '@/components/layout/card';
import { ExperienceDetails as ExperienceDetailsProps } from '@/lib/types';

const dateFormatOptions: Intl.DateTimeFormatOptions = {
  year: 'numeric',
  month: 'short',
};

const ExperienceDetails = ({
  company,
  position,
  currentlyWorkHere,
  startDate,
  endDate,
  summary,
}: ExperienceDetailsProps) => {
  return (
    <Card className="mx-auto flex w-full max-w-4xl flex-col justify-between gap-6 p-8 md:flex-row md:gap-10">
      {/* Left Section: Company + Role */}
      <div className="flex flex-col md:w-1/3">
        <Typography
          variant="h3"
          className="font-semibold text-gray-900 dark:text-white"
        >
          {company}
        </Typography>
        <Typography
          variant="subtitle"
          className="text-gray-700 dark:text-gray-300"
        >
          {position}
        </Typography>
      </div>

      {/* Middle Section: Description */}
      <div className="flex flex-col gap-3 md:w-2/3">
        <ul className="flex list-disc flex-col gap-2 md:gap-1">
          {summary?.map((sentence, index) => (
            <Typography component="li" key={index}>
              {sentence}
            </Typography>
          ))}
        </ul>
      </div>

      {/* Right Section: Dates */}
      <div className="md:w-1/4 md:text-right">
        <Typography className="text-gray-700 dark:text-gray-300">
          {new Intl.DateTimeFormat('en-US', dateFormatOptions).format(startDate)}{' '}
          -{' '}
          {currentlyWorkHere
            ? 'Present'
            : endDate
            ? new Intl.DateTimeFormat('en-US', dateFormatOptions).format(endDate)
            : 'NA'}
        </Typography>
      </div>
    </Card>
  );
};

export default ExperienceDetails;
