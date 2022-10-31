export const getInitName = (username: string) => {
  if (username[0] === "+") {
    return username;
  } else {
    return (
      username[0].toUpperCase() + username[username.length - 1].toUpperCase()
    );
  }
};
