import {
  Button,
  Input,
  Text,
  Textarea,
  useColorModeValue,
  useDisclosure,
} from "@chakra-ui/react";
import { RiTodoLine } from "react-icons/ri";
import ModalContainer from "../../shared/ModalContainer.tsx";
import { SubmitHandler, useForm } from "react-hook-form";
import { useParams } from "@tanstack/router";
import ErrorAlert from "../../shared/ErrorAlert.tsx";
import ResizeTextarea from "react-textarea-autosize";
import { useAddTodo } from "../../../hooks/todos/useAddTodo.ts";

interface Inputs {
  title: string;
  description: string;
}

export default function AddTodo() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { listId }: { listId: string } = useParams({ from: "/list" });
  const addTodo = useAddTodo();

  const {
    register,
    handleSubmit,
    getValues,
    reset,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = () => {
    addTodo.mutate({
      id: listId,
      title: getValues("title"),
      description: getValues("description"),
    });
    reset();
    onClose();
  };

  return (
    <>
      <Button
        onClick={onOpen}
        colorScheme={useColorModeValue("green", "blue")}
        size="sm"
      >
        <Text size="sm" mr="1">
          Add TODO
        </Text>
        <RiTodoLine />
      </Button>

      <ModalContainer
        isOpen={isOpen}
        onClose={onClose}
        onSubmit={handleSubmit(onSubmit)}
        modalTitle="Create Todo"
      >
        <>
          {errors.title && <ErrorAlert title="Required:" description="Title" />}
          {errors.description && (
            <ErrorAlert title="Required:" description="Description" />
          )}
          <Input
            variant="filled"
            mb="3"
            placeholder="Todo Title"
            {...register("title", { required: true })}
          />
          <Textarea
            variant="filled"
            placeholder="Todo Description..."
            minH="unset"
            resize="none"
            overflow="hidden"
            as={ResizeTextarea}
            {...register("description", { required: true })}
          />
        </>
      </ModalContainer>
    </>
  );
}
