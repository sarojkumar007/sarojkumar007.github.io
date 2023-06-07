import type { Metadata } from 'next';

import Edu from '@components/Edu';
import Exp from '@components/Exp';
import QuoteSection from '@components/QuoteSection';
import DesignedSection from '@components/short/DesignedSection';
import { edu, experience } from '@config/site_data';

export const metadata: Metadata = {
  title: 'About',
};

const AboutPage = () => {
  return (
    <>
      <header className="min-h-[70vh] md:min-h-[90vh] w-full header_about">
        <DesignedSection
          className="absolute top-0 left-0 w-full min-h-[70vh] md:min-h-[90vh] px-4 py-20 md:px-16 md:py-36"
          designNo="one"
        >
          <div className="w-full grid grid-cols-1 md:grid-cols-2">
            <figure className="grid place-items-center p-2">
              <img
                src={`/about_profile.png`}
                alt="About Profile"
                width={240}
                height={240}
                className="inline-block max-w-xs w-full -rotate-3"
              />
            </figure>
            <div className="p-6 flex flex-col justify-center items-center text-center text-white">
              <QuoteSection />
            </div>
          </div>
        </DesignedSection>
      </header>
      <section className="relative w-full px-4 py-12 md:px-16 md:py-24">
        <div className="grid place-items-center">
          <h2 className="text-4xl md:text-5xl font-sailec font-medium dark:text-white">
            Hi, I'm Saroj Kumar.
          </h2>
          <div className="mt-8 space-y-4 text-center max-w-4xl">
            <p className="text-2xl text-gray-600 dark:text-gray-200">
              <span className="gradient_multi_text">Automation Engineer</span>,
              DevOps Enthusiast,{' '}
              <span className="gradient_orange_text">Web Developer</span>,
              Freelancer.
            </p>
            <p className="text-xl">
              I thrive on automating tasks. I design stunning and intuitive
              websites, landing pages, site optimization and SEO, for diverse
              clients.
            </p>
            <p className="text-lg">
              Besides automating and spreading web, I like to play Badminton 🏸,
              Chess ♟, and read Comics 📚
            </p>
          </div>
        </div>
      </section>
      <section className="relative w-full px-4 md:px-16">
        <div className="px-6 py-8 md:px-8 md:py-8 bg-gray-100 dark:bg-gray-700/20 skew-y-2 rounded-3xl">
          <div className="-skew-y-2">
            <h1 className="gradient_multi_text text-2xl md:text-4xl font-medium">
              Work / Responsibilities
            </h1>
            <div className="my-8">
              {experience.map((ex, i) => (
                <Exp key={i} exp={ex} />
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="relative w-full px-4 py-12 md:px-16 md:py-24">
        <div className="text-2xl md:text-4xl font-semibold mb-12">
          <h1>
            My <span className="gradient_multi_text">Educational</span>{' '}
            Background.
          </h1>
        </div>

        <ol className="relative border-l border-gray-200 dark:border-gray-700">
          {edu.map((ed, i) => (
            <Edu key={i} ed={ed} />
          ))}
        </ol>
      </section>
    </>
  );
};

export default AboutPage;
