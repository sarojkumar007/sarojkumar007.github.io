import type { Metadata } from 'next';
import type { FC } from 'react';

import ResourceGroup from '@components/ResourceGroup';
import DesignedSection from '@components/short/DesignedSection';
import { resources } from '@config/resources';
import { slugify } from '@util';

export const metadata: Metadata = {
  title: 'Resources',
};

const ResourcesPage: FC = () => {
  return (
    <>
      <header className="min-h-[30vh] md:min-h-[40vh] w-full header_resources">
        <DesignedSection
          className="absolute top-0 left-0 w-full min-h-[30vh] md:min-h-[40vh] px-4 py-20 md:px-16 md:py-36 grid place-items-center"
          designNo="two"
        >
          <h2 className="text-gray-50 text-3xl md:text-5xl font-medium">
            Resources,{' '}
            <span className="text-2xl md:text-3xl">you might find useful.</span>
          </h2>
        </DesignedSection>
      </header>
      <div className="z-10 px-4 pt-24 pb-4 sticky top-0 bg-white dark:bg-gray-800">
        <div className="flex-nowrap px-4 py-4 border border-gray-200 dark:border-gray-700 shadow-md rounded flex items-center overflow-x-auto">
          {resources &&
            resources.map((t, i) => (
              <a
                href={`#${slugify(t.cat)}`}
                className="tag__icon tag__link"
                key={i}
              >
                {<t.icon />}
                <span>{t.cat}</span>
              </a>
            ))}
        </div>
      </div>
      <section className="w-full p-4">
        {resources &&
          resources.map((r, i) => (
            <ResourceGroup
              key={i}
              title={r.cat}
              icon={<r.icon />}
              list={r.resources}
            />
          ))}
      </section>
    </>
  );
};

export default ResourcesPage;
