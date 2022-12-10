import { memo, VFC, useState, ChangeEvent } from "react";
import { Flex, Box, Heading, Divider, Input, Stack } from "@chakra-ui/react";
import { PrimaryButton } from "../atoms/button/PrimaryButton";
import { useAuth } from "../../hooks/useAuth";

export const Login: VFC = memo(() => {
  const [userId, setUserId] = useState("");

  // useAuth関数を実行し、loginとloadingの値を取得
  const { login, loading } = useAuth();

  const onClickLogin = () => login(userId);

  // ChangeEvent<HTMLInputElement>でインプットタグに変化が起来たことをトリガーに、
  // 処理が動く
  const onChangeUserId = (e: ChangeEvent<HTMLInputElement>) =>
    setUserId(e.target.value);
  return (
    <Flex align="center" justify="center" height="100vh">
      <Box bg="white" w="sm" p={4} borderRadius="md" shadow="md">
        <Heading as="h1" size="lg" textAlign="center">
          ユーザ管理アプリ
        </Heading>
        <Divider my={4} />
        {/* Stackはネストされた要素を等間隔にする */}
        <Stack spacing={6} py={4} px={10}>
          <Input
            placeholder="ユーザID"
            value={userId}
            onChange={onChangeUserId}
          />
          <PrimaryButton
            disabled={userId === ""}
            loading={loading}
            onClick={onClickLogin}
          >
            ユーザログイン
          </PrimaryButton>
        </Stack>
      </Box>
    </Flex>
  );
});
