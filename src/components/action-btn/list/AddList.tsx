import {
  Button,
  Input,
  Text,
  useColorModeValue,
  useDisclosure,
} from "@chakra-ui/react";
import { RiAddFill } from "react-icons/ri";
import ModalContainer from "../../shared/ModalContainer.tsx";
import { SubmitHandler, useForm } from "react-hook-form";
import ErrorAlert from "../../shared/ErrorAlert.tsx";
import { useCreateList } from "../../../hooks/lists/useCreateList.ts";

interface Inputs {
  listName: string;
}

export default function AddList() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const createList = useCreateList();

  const {
    register,
    handleSubmit,
    getValues,
    reset,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = () => {
    createList.mutate(getValues("listName"));
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
