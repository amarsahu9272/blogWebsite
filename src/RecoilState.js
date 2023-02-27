import { atom } from "recoil";

export const postList = atom({
  key: "posts",
  default: [],
});
export const usersList = atom({
  key: "users",
  default: [],
});
export const selectFile = atom({
  key: "selectedFile",
  default: null,
});

export const isLoginAtom = atom({
  key: "isLogin",
  default: true,
});
export const userDataAtom = atom({
  key: "userData",
  default: "",
});