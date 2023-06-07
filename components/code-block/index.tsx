'use client';

import React, { useEffect, useState } from 'react';

import Prism from 'prismjs';

import { CopyToClipboard } from 'react-copy-to-clipboard';
import { Clipboard, Copy } from 'react-feather';

import { Source_Code_Pro } from 'next/font/google';

type CodeBlockProps = {
  children: {
    props: {
      className: string;
      children: string;
    };
  };
};

const sourceCodePro = Source_Code_Pro({
  weight: ['400', '500'],
  subsets: ['latin'],
});

const CodeBlock: React.FC<CodeBlockProps> = ({
  children: {
    props: { className, children },
  },
}) => {
  const language = className?.split(':')[0]?.replace('lang-', '') || 'js';
  // const isFileName = className.split(':')[1];

  const [isCopied, setIsCopied] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      Prism.highlightAll();
    }
  }, []);

  useEffect(() => {
    if (isCopied) {
      setTimeout(() => {
        setIsCopied(false);
      }, 3000);
    }
  }, [isCopied]);

  return (
    <div className="relative my-4">
      <pre className="rounded mt-0">
        <code className={`language-${language}`} style={sourceCodePro.style}>
          {children}
        </code>
      </pre>
      {/* <div>
        <span className="uppercase px-2 pt-[5px] pb-[3px] leading-none rounded bg-gray-700 text-gray-100 text-sm">
          {language}
        </span>
      </div> */}

      {/* {isFileName && (
        <p className="text-center italic">{isFileName.split('=')[1]}</p>
      )} */}

      <div className="absolute top-2 right-2 z-[2] flex items-center">
        <CopyToClipboard text={children} onCopy={() => setIsCopied(true)}>
          <button className="p-1 text-white flex flex-col items-center">
            {isCopied ? <Clipboard /> : <Copy />}
            {isCopied && (
              <span className="absolute -left-[calc(100%_+_40px)]">
                Copied!
              </span>
            )}
          </button>
        </CopyToClipboard>
      </div>
    </div>
  );
};

export default CodeBlock;
