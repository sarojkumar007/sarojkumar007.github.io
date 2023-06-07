import type { FC, ReactNode } from 'react';

interface SideBarSectionProps {
  icon: string;
  heading: string | ReactNode;
  children: ReactNode;
}

const SideBarSection: FC<SideBarSectionProps> = ({
  icon,
  heading,
  children,
}) => {
  return (
    <>
      <h3 className="text-xl flex items-center">
        <span className="material-symbols-rounded gradient_multi_text mr-2">
          {icon}
        </span>
        {heading}
      </h3>
      <div className="my-4 space-y-2">{children}</div>
    </>
  );
};

export default SideBarSection;
