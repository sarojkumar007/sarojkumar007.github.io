const Loading = () => {
  return (
    <>
      <div
        className="loader z-50 fixed top-0 left-0 w-full h-full bg-white/30 dark:bg-gray-800/30 backdrop-blur-sm"
        aria-label="Loading"
      >
        <div className="w-full h-full absolute top-0 left-0 grid place-items-center">
          <div>
            <div className="lds-ripple">
              <div></div>
              <div></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Loading;
