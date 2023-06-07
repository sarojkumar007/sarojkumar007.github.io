import type { Resource } from '@util/types';
import type { FC, ReactElement } from 'react';

import { slugify } from '@util';

type ResourceGroupProps = {
  title: string;
  icon: ReactElement;
  list: Resource[];
};

const ResourceGroup: FC<ResourceGroupProps> = ({ title, icon, list }) => {
  return (
    <>
      <div className="my-8" id={slugify(title)}>
        <h2 className="flex items-center justify-center text-2xl mb-8">
          <span className="text-multi-c1 mr-2">{icon}</span>
          <span className="gradient_multi_text font-medium">{title}</span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {list.map((i, index) => (
            <div
              className="p-6 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-700/10"
              key={index}
            >
              <a
                href={i.link}
                target="_blank"
                rel="noreferrer noopener"
                className="global_link mb-4 text-xl"
              >
                <h3>{i.title}</h3>
              </a>
              <p className="">{i.description}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ResourceGroup;
