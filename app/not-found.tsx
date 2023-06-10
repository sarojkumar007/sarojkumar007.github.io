import Svg404 from '@public/assets/graphic/NotFound.svg?';

const Page404 = () => {
  return (
    <>
      <header className="min-h-[90vh] grid place-items-center p-8">
        <div className="grid grid-cols-1">
          <figure className="w-full">
            <Svg404 className="w-full h-full" />
          </figure>
          <div className="mt-4 text-center">
            <h3 className="text-3xl font-sailec font-medium">
              The page doesn't exits !
            </h3>
            <p className="text-base text-gray-500">
              Try going Back Or read some{' '}
              <a href="//blog.sarojkumar.dev" className="global_link">
                Blog
              </a>
              .
            </p>
          </div>
        </div>
      </header>
    </>
  );
};

export default Page404;
