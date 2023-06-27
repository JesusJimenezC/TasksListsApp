import {
  Button,
  Input,
  Text,
  useColorModeValue,
  useDisclosure,
} from "@chakra-ui/react";
import { RiAddFill } from "react-icons/ri";
import { listsState } from "../../../state/atoms/listAtoms.ts";
import { useSetRecoilState } from "recoil";
import { IList } from "../../../types";
import ModalContainer from "../../shared/ModalContainer.tsx";
import { SubmitHandler, useForm } from "react-hook-form";
import ErrorAlert from "../../shared/ErrorAlert.tsx";
import { useCreateListMutation } from "../../../hooks/lists.mutation.ts";
import { setCreatedList } from "../../../helpers/lists.helper.ts";

interface Inputs {
  listName: string;
}

export default function AddList() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const setLists = useSetRecoilState(listsState);
  const createList = useCreateListMutation();

  const {
    register,
    handleSubmit,
    getValues,
    reset,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = async () => {
    await createList
      .mutateAsync(getValues("listName"))
      .then((list: IList) => setCreatedList(list, setLists));
    reset();
    onClose();
  };

  return (
    <>
      <Button
        onClick={onOpen}
        colorScheme={useColorModeValue("purple", "orange")}
        size="sm"
      >
        <Text size="sm" mr="1">
          Add List
        </Text>
        <RiAddFill />
      </Button>

      <ModalContainer
        onSubmit={handleSubmit(onSubmit)}
        isOpen={isOpen}
        onClose={onClose}
        modalTitle="Add List"
      >
        <>
          {errors.listName && (
            <ErrorAlert
              title="Required:"
              description="List name to create a new list."
            />
          )}
          <Input
            {...register("listName", { required: true })}
            placeholder="List Name"
          />
        </>
      </ModalContainer>
    </>
  );
}
