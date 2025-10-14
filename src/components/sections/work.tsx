import { EXPERIENCES } from '@/lib/data';
import ExperienceDetails from '@/components/data-display/experience-details';
import Tag from '@/components/data-display/tag';
import Typography from '@/components/general/typography';
import Container from '@/components/layout/container';

const ExperienceSection = () => {
  return (
    <Container id="experience">
      <div id="work"></div> {/* ✅ Added to make “Work” button scroll correctly */}
      <div className="flex flex-col items-center gap-4">
        <div className="self-center">
          <Tag label="Experience" />
        </div>
        <Typography variant="subtitle" className="max-w-xl text-center">
          A snapshot of my professional journey and key roles I’ve contributed to:
        </Typography>
      </div>

      {EXPERIENCES?.map((experience, index) => (
        <ExperienceDetails key={index} {...experience} />
      ))}
    </Container>
  );
};

export default ExperienceSection;
