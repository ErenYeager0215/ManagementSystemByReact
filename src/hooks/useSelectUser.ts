import { useCallback, useState } from "react";
import { User } from "../types/api/user";

type Props = {
  id: number;
  users: Array<User>;
  onOpen: () => void;
};
// 選択したユーザ情報を特定し、モーダルを表示するカスタムフック
export const useSelectUser = () => {
  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  const onSelectUser = useCallback((props: Props) => {
    const { id, users, onOpen } = props;
    // find()は配列を順番に見ていき、条件が一致した要素を取り出す
    const targetUser = users.find((user) => user.id === id);
    //find()で返された値はdefineの可能性もある
    //find()で返されれる、条件に不一致で見つからない場合はundefinedを返す
    //そのためUser型もしくはundifined型とするように受け皿をつくる
    //??は左辺がnullまたはundefinedだったら右辺を実行する
    setSelectedUser(targetUser ?? null);
    onOpen();
  }, []);
  return { onSelectUser, selectedUser };
};
