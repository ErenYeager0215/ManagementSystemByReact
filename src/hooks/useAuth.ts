import { useCallback, useState } from "react";
import { User } from "../types/api/user";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { useMessage } from "./useMessage";
import { useLoginUser } from "./useLoginUser";

export const useAuth = () => {
  const history = useHistory();
  const { showMessage } = useMessage();
  const [loading, setLoading] = useState(false);
  const { setLoginUser } = useLoginUser();

  const login = useCallback(
    (id: string) => {
      setLoading(true);
      axios
        .get<User>(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then((res) => {
          //res.dataがあれば実行
          if (res.data) {
            const isAdmin = res.data.id === 10 ? true : false;
            // ログイン時にログインユーザの情報をcontextに設定する
            //User型と一致するres.dataに対し、isAdmin情報を追加してsetする（スプレット構文）
            setLoginUser({ ...res.data, isAdmin });
            showMessage({ title: "ログイン成功", status: "success" });
            history.push("/home");
          } else {
            showMessage({ title: "ユーザが見つかりません", status: "error" });
            setLoading(false);
          }
        })
        .catch(() => {
          showMessage({ title: "ログイン失敗", status: "error" });
          setLoading(false);
        });
    },
    [history, showMessage, setLoginUser]
  );
  return { login, loading };
};
