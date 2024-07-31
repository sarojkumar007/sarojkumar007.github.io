import React from "react"

import type { FC } from "react"

import Seo from "@components/Seo"
import slugify from "@lib/slugify"
import Layout from "@components/Layout"
import ResourceGroup from "@components/ResourceGroup"
import DesignedSection from "@components/short/DesignedSection"
import { resources, resources_last_updated } from "@config/resources"

const ResourcesPage: FC = () => {
  return (
    <Layout>
      <header className="min-h-[30vh] md:min-h-[40vh] w-full header_resources">
        <DesignedSection
          className="absolute top-0 left-0 w-full min-h-[30vh] md:min-h-[40vh] px-4 py-20 md:px-16 md:py-36 grid place-items-center"
          designNo="two"
        >
          <h2 className="text-gray-50 text-3xl md:text-5xl font-medium">
            Resources,{" "}
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
        {resources_last_updated && (
          <p className="my-4 px-2 text-sm text-gray-400 dark:text-gray-600">
            <strong>Last Updated: </strong>
            {new Intl.DateTimeFormat("en-US", {
              month: "short",
              year: "numeric",
            }).format(resources_last_updated)}
          </p>
        )}
      </section>
    </Layout>
  )
}

export const Head = () => (
  <Seo
    title="Resources"
    description="Resources for Web Developers by Saroj Kumar"
  />
)

export default ResourcesPage
