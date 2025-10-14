import Image from 'next/image';

import AboutSharanya from '/public/images/about-sharanya.jpg';
import Tag from '@/components/data-display/tag';
import Container from '@/components/layout/container';
import Typography from '@/components/general/typography';
import Link from '@/components/navigation/link';
import { EXTERNAL_LINKS } from '@/lib/data';

const AboutMeSection = () => {
  return (
    <Container className="bg-gray-50" id="about">
      <div className="self-center">
        <Tag label="About me" />
      </div>

      <div className="flex w-full flex-col justify-between gap-12 md:flex-row">
        {/* Image */}
        <div className="flex justify-center md:order-first md:justify-end">
          <div className="relative h-[380px] w-[320px] md:h-[460px] md:w-[380px] lg:h-[520px] lg:w-[440px]">
            <Image
              src={AboutSharanya}
              alt="Sharanya Gangadharappa"
              className="absolute z-10 h-[360px] w-[280px] border-8 border-gray-50 max-md:left-5 md:right-0 md:top-0 md:h-[420px] md:w-[340px] lg:h-[480px] lg:w-[400px] rounded-xl object-cover"
            />
            <div className="absolute h-[360px] w-[320px] border-8 border-transparent bg-gray-200 max-md:top-5 md:bottom-0 md:left-0 md:h-[420px] md:w-[340px] lg:h-[480px] lg:w-[400px] rounded-xl"></div>
          </div>
        </div>

        {/* Content */}
        <div className="flex max-w-xl flex-col gap-6">
          <Typography variant="h3">A bit about me</Typography>

          <Typography>
            I’m <strong>Sharanya Gangadharappa</strong>, a Data Engineer and Analyst
            passionate about turning raw data into meaningful business insights.
            With experience across <strong>ETL pipeline design</strong>,
            <strong> BI dashboarding</strong>, and <strong>cloud data systems</strong>,
            I love bridging the gap between engineering and analytics.
          </Typography>

          <Typography>
            I’ve worked with organizations like <strong>Arizona State University</strong>,
            <strong> Trivent Legal</strong>, and <strong>EXL Service</strong>, where I
            improved reporting efficiency, automated data workflows, and
            visualized insights through Power BI and Tableau.
          </Typography>

          <Typography>
            I’m always learning and experimenting with new tools — whether it’s
            AWS, Databricks, or advanced SQL optimization — to make data cleaner,
            faster, and more accessible.
          </Typography>

          <Typography>
            Outside of work, I enjoy exploring AI innovations and cloud systems,
            constantly looking for ways to combine engineering precision with data science creativity.
          </Typography>

          <Typography>
            You can find my work on{' '}
            <Link
              noCustomization
              externalLink
              withUnderline
              href={EXTERNAL_LINKS.GITHUB}
            >
              GitHub
            </Link>{' '}
            or connect with me on{' '}
            <Link
              noCustomization
              externalLink
              withUnderline
              href="https://www.linkedin.com/in/sharanya-gangadhar/"
            >
              LinkedIn
            </Link>
            .
          </Typography>

          <Typography>
            Finally, a few quick bits about me:
          </Typography>
          <div className="flex flex-col gap-2 md:flex-row md:gap-6">
            <ul className="flex list-inside list-disc flex-col gap-2">
              <Typography component="li">
                M.S. Information Technology – Arizona State University
              </Typography>
              <Typography component="li">B.E. Information Science and Engineering</Typography>
            </ul>
            <ul className="flex list-inside list-disc flex-col gap-2">
              <Typography component="li">Data Enthusiast</Typography>
              <Typography component="li">Passionate about AI & Cloud</Typography>
            </ul>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default AboutMeSection;
