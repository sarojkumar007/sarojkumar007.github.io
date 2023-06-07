import { siteConfig } from '@config';
import {
  SiFacebook,
  SiTwitter,
  SiWhatsapp,
} from '@icons-pack/react-simple-icons';
import { slugify } from '@util';
import { getPostTopics } from '@util/blogs';
import Link from 'next/link';
import SideBarSection from './short/SideBarSection';

interface BlogSideBarProps {
  shareLink?: string;
}

const BlogSideBar = ({ shareLink }: BlogSideBarProps) => {
  const topics = getPostTopics();

  return (
    <>
      <div className="w-full md:w-96 md:basis-96 md:sticky md:top-28 mx-auto md:self-start">
        <div className="border border-gray-200 dark:border-gray-700 p-4 rounded-xl">
          <SideBarSection icon="auto_awesome" heading="Popular">
            <Link
              href={`/blog/effectively-using-icons-in-websites`}
              className="blog_link"
            >
              Effectively using Icons in Websites ✌🏻
            </Link>
            <Link
              href={`/blog/how-to-start-front-end-web-development`}
              className="blog_link"
            >
              How to Start Front-end Web Development
            </Link>
          </SideBarSection>
          <SideBarSection icon="campaign" heading="Message">
            <p>
              I'll be adding more posts soon. If you have any topic of interest
              or suggestion, contact me.
            </p>
            <Link href={`/contact`} className="blog_link">
              Suggest
            </Link>
          </SideBarSection>
          <SideBarSection
            icon="label"
            heading={
              <div className="flex-1 flex items-center justify-between">
                <span>Topics</span>
                <Link href={`/blog/topic`} className="blog_link">
                  See All
                </Link>
              </div>
            }
          >
            <div className="flex items-center flex-wrap gap-2">
              {topics.map((t: string, i: number) => (
                <Link
                  href={`/blog/topic/${slugify(t)}`}
                  key={i}
                  className="tag2"
                >
                  {t}
                </Link>
              ))}
            </div>
          </SideBarSection>
          <SideBarSection icon="share" heading="Spread the Word">
            <div className="flex items-center space-x-4">
              <a
                href={`https://api.whatsapp.com/send?text=${encodeURI(
                  `Check out this Blog - ${shareLink}`
                )}`}
                target={`_blank`}
                rel="noreferrer noopener"
              >
                <SiWhatsapp className="w-5 h-5" title="" color="#25D366" />
              </a>
              <a
                href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURI(
                  shareLink as string
                )}&ref=plugin&src=share_button`}
                target={`_blank`}
                rel="noreferrer noopener"
              >
                <SiFacebook className="w-6 h-6" title="" color="#1877F2" />
              </a>
              <a
                href={`https://twitter.com/share?text=${encodeURI(
                  `Blog by ${siteConfig.title}`
                )}&url=${encodeURI(shareLink as string)}`}
                target={`_blank`}
                rel="noreferrer noopener"
              >
                <SiTwitter className="w-6 h-6" title="" color="#1DA1F2" />
              </a>
            </div>
          </SideBarSection>
        </div>
      </div>
    </>
  );
};

export default BlogSideBar;
