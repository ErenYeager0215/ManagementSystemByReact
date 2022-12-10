// contextを参照するためのフックス

import { useContext } from "react";
import {
  LoginUserContext,
  LoginUserContextType
} from "../providers/LoginUserProvider";

// useContextでcreateContextで作成したcontextの値を指定
//返される型はLoginUserContextTypeなので(): LoginUserContextType とした
//コンポーネント側はuseLoginUserを呼び出すだけでcontextの値を参照できる
export const useLoginUser = (): LoginUserContextType =>
  useContext(LoginUserContext);
