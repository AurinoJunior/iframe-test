// Changes the iframe route
export const useChangeRoute = () => {
  const changeRoute = (pathname) => {
    window.parent.postMessage(
      {
        type: "NAVIGATE",
        payload: pathname,
      },
      "*"
    );
  };

  return changeRoute;
};
