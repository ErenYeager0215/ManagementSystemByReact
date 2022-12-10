import { useToast } from "@chakra-ui/react";
import { useCallback } from "react";

type Props = {
  title: string;
  // 下記４つの文字列のみを受け取れるようにする
  status: "info" | "warning" | "success" | "error";
};

export const useMessage = () => {
  const toast = useToast();

  const showMessage = useCallback((props: Props) => {
    const { title, status } = props;
    //cakraUIの機能であるtoast　メッセージがおしゃれにでる
    toast({
      //title:title,status:statusの場合省略可能
      title,
      status,
      position: "top",
      duration: 2000,
      isClosable: true
    });
  }, []);
  return { showMessage };
};
