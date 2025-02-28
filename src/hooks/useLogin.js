// Sends the Login event to the parent
export const useLogin = () => {
  const login = () => {
    window.parent.postMessage(
      {
        type: "LOGIN",
      },
      "*"
    );
  };

  return login;
};
