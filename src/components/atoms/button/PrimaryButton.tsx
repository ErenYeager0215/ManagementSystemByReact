import { memo, VFC, ReactNode } from "react";
import { Button } from "@chakra-ui/react";

type Props = {
  // 関数を受け取るので
  children: ReactNode;
  onClick: () => void;
  //?をつけることで必須で渡さなくていいpropsになる
  disabled?: boolean;
  loading?: boolean;
};

export const PrimaryButton: VFC<Props> = memo((props) => {
  const { children, disabled = false, loading = false, onClick } = props;

  return (
    <Button
      bg="teal.400"
      color="white"
      _hover={{ opacity: 0.8 }}
      //disabledがtrueの時はボタンが使えないように制御してくれる
      disabled={disabled || loading}
      //isLoadingはturuの時にロード中のcssを表示してくれる
      isLoading={loading}
      onClick={onClick}
    >
      {children}
    </Button>
  );
});
