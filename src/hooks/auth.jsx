import { createContext, useContext, useEffect, useState } from "react";
import {api} from "../services/api";

const AuthContext = createContext({});

function AuthProvider({children}) {
  const [data, setData] = useState({});
  const [search, setSearch] = useState("");

  async function signIn({email, password}) {
    try{
      const response = await api.post("/sessions", {email, password});
      const {user, token} = response.data;

      localStorage.setItem("@rocketmovies:user", JSON.stringify(user));
      localStorage.setItem("@rocketmovies:token", token);

      api.defaults.headers.common[`Authorization`] = `Bearer ${token}`;
      setData({user});
    }catch(error) {
      if(error.response) {
        alert(error.response.data.message);
      }else {
        alert("Login not possible.");
      };
    };
  };

  function signOut() {
    localStorage.removeItem("@rocketmovies:user");
    localStorage.removeItem("@rocketmovies:token");

    api.defaults.headers.common[`Authorization`] = ``;
    setData({});
  };

  function updateProfile(updatedUser, avatarFile) {
    if(updatedUser) {
      localStorage.setItem("@rocketmovies:user", JSON.stringify(updatedUser));
      if(avatarFile) {
        updatedUser.avatar = avatarFile;
      };
      setData({user: updatedUser});
    }else {
      alert("To see the changes you need to remake Login.");
    };
  };

  function searchMovies(searchData) {
    setSearch({searchData});
  };
  
  useEffect(() => {
    const user = localStorage.getItem("@rocketmovies:user");
    const token = localStorage.getItem("@rocketmovies:token");

    if(token && user) {
      api.defaults.headers.common[`Authorization`] = `Bearer ${token}`;
      setData({user: JSON.parse(user)});
    };
  }, []);

  return(
    <AuthContext.Provider value={{
      signIn, signOut, updateProfile,
      user: data.user, 
      searchMovies, search: search.searchData
    }}>
      {children}
    </AuthContext.Provider>
  );
};

function useAuth() {
  const context = useContext(AuthContext);
  return context;
};

export {AuthProvider, useAuth};