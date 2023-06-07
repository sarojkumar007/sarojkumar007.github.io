import ContactForm from '@components/ContactForm';
import DesignedSection from '@components/short/DesignedSection';
import type { Metadata } from 'next';
import type { FC } from 'react';

export const metadata: Metadata = {
  title: 'Contact',
};

const ContactPage: FC<{}> = () => {
  return (
    <>
      <header className="max-h-[50vh] h-full w-full header_contact">
        <DesignedSection
          className="max-h-[50vh] h-full w-full px-8 md:px-16 p-24 grid grid-cols-1 md:flex items-center md:justify-center justify-items-center"
          designNo="six"
        >
          <div className="mr-8">
            <span
              className="material-symbols-rounded text-8xl text-white"
              style={{
                fontVariationSettings: "'wght' 300",
              }}
            >
              history_edu
            </span>
          </div>
          <div className="flex flex-col">
            <h3 className="text-center md:text-left text-xl md:text-2xl font-semibold text-white">
              Got any Queries?
            </h3>
            <p className="text-center md:text-left text-base md:text-lg text-gray-100">
              Write me a brief or suggest someting.
            </p>
          </div>
        </DesignedSection>
      </header>
      <section className="">
        <ContactForm />
      </section>
    </>
  );
};

export default ContactPage;
