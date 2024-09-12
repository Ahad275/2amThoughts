// Save token and username to session storage
export const authenticate = (response, next) => {
  if (window !== "undefined") {
    // save data to session storage
    sessionStorage.setItem("token", JSON.stringify(response.data.token));
    sessionStorage.setItem("user", JSON.stringify(response.data.username));
  }
  next();
};

//fetch token
export const getToken = () => {
  if (window !== "undefined") {
    if (sessionStorage.getItem("token")) {
      return JSON.parse(sessionStorage.getItem("token"));
    } else {
      return false;
    }
  }
};

//fetch user
export const getUser = () => {
  if (window !== "undefined") {
    if (sessionStorage.getItem("user")) {
      return JSON.parse(sessionStorage.getItem("user"));
    } else {
      return false;
    }
  }
};

//Logout
export const logout = (next) => {
  if (window !== "undefined") {
    sessionStorage.removeItem("token");
    sessionStorage.removeItem("user");
    next();
  }
};
