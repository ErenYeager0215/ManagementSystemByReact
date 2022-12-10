import { memo, VFC, useState, useEffect, ChangeEvent } from "react";
import {
  Stack,
  ModalOverlay,
  ModalHeader,
  Modal,
  ModalBody,
  Input,
  ModalContent,
  ModalCloseButton,
  ModalFooter,
  FormControl,
  FormLabel,
  AlertDialog
} from "@chakra-ui/react";

import { User } from "../../../types/api/user";
import { PrimaryButton } from "../../atoms/button/PrimaryButton";

type Props = {
  user: User | null;
  isOpen: boolean;
  isAdmin?: boolean;
  onClose: () => void;
};

export const UserDetailModal: VFC<Props> = memo((props) => {
  const { user, isOpen, onClose, isAdmin = false } = props;

  const onClickUpdata = () => alert("aaaa");
  const [username, setUsername] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  useEffect(() => {
    setUsername(user?.username ?? "");
    setName(user?.name ?? "");
    setEmail(user?.email ?? "");
    setPhone(user?.phone ?? "");
    // 依存配列にはuserを入れる。userの値が変更されるたびにset関数が更新される
  }, [user]);

  const onChangeUserName = (e: ChangeEvent<HTMLInputElement>) =>
    setUsername(e.target.value);
  const onChangeName = (e: ChangeEvent<HTMLInputElement>) =>
    setName(e.target.value);
  const onChangeEmail = (e: ChangeEvent<HTMLInputElement>) =>
    setEmail(e.target.value);
  const onChangePhone = (e: ChangeEvent<HTMLInputElement>) =>
    setPhone(e.target.value);

  return (
    <>
      <Modal
        isOpen={isOpen}
        onClose={onClose}
        autoFocus={false}
        motionPreset="slideInBottom"
      >
        <ModalOverlay>
          <ModalContent pb={2}>
            <ModalHeader>ユーザ詳細</ModalHeader>
            <ModalCloseButton />
            <ModalBody mx={4}>
              <Stack spacing={4}>
                <FormControl>
                  <FormLabel>名前</FormLabel>
                  {/* isAdminがtrueの反対の時はisReadOnly(読専になる) */}
                  <Input
                    onChange={onChangeUserName}
                    value={username}
                    isReadOnly={!isAdmin}
                  />
                </FormControl>
                <FormControl>
                  <FormLabel>フルネーム</FormLabel>
                  <Input
                    onChange={onChangeName}
                    value={name}
                    isReadOnly={!isAdmin}
                  />
                </FormControl>
                <FormControl>
                  <FormLabel>MAIL</FormLabel>
                  <Input
                    onChange={onChangeEmail}
                    value={email}
                    isReadOnly={!isAdmin}
                  />
                </FormControl>
                <FormControl>
                  <FormLabel>TEL</FormLabel>
                  <Input
                    onChange={onChangePhone}
                    value={phone}
                    isReadOnly={!isAdmin}
                  />
                </FormControl>
              </Stack>
            </ModalBody>
            {isAdmin && (
              <ModalFooter>
                <PrimaryButton onClick={onClickUpdata}>更新</PrimaryButton>
              </ModalFooter>
            )}
          </ModalContent>
        </ModalOverlay>
      </Modal>
    </>
  );
});
