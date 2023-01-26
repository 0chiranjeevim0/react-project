import mem from "mem";
import Axios from "./Instance";
const refreshToken = async () => {
  const token = JSON.parse(localStorage.getItem("refresh"));

  try {
    const response = await Axios.post("", {
      refresh: token,
    });

    const newtoken = response.data;

    console.log("Here");

    if (!newtoken.access) {
      localStorage.removeItem("refresh");
      localStorage.removeItem("access");
    }

    localStorage.setItem("refresh", JSON.stringify(newtoken.refresh));
    localStorage.setItem("access", JSON.stringify(newtoken.access));

    return newtoken.refresh;
  } catch (error) {
    localStorage.removeItem("refresh");
    localStorage.removeItem("access");
  }
};

const maxAge = 10000;

export const RefreshToken = mem(refreshToken, {
  maxAge,
});
