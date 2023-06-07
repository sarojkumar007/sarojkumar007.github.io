import { FC, ReactNode } from 'react';

type DesignedSectionProp = {
  className: string;
  designNo: string;
  children: ReactNode;
  style?: Object;
};

const DesignedSection: FC<DesignedSectionProp> = ({
  className,
  designNo,
  children,
}) => {
  return (
    <>
      <div className={`relative ${className}`}>
        <svg className="absolute bottom-0 left-0 w-full h-12">
          <use href={`#${designNo}`}></use>
        </svg>
        {children}
      </div>
    </>
  );
};

export default DesignedSection;
