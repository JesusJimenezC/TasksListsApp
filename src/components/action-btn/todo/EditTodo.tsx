import { RiPencilLine } from "react-icons/ri";
import { IconButton, Input, Textarea, useDisclosure } from "@chakra-ui/react";
import { ITodo } from "../../../types";
import ModalContainer from "../../shared/ModalContainer.tsx";
import { useForm } from "react-hook-form";
import ErrorAlert from "../../shared/ErrorAlert.tsx";
import ResizeTextarea from "react-textarea-autosize";
import { useEditTodo } from "../../../hooks/todos/useEditTodo.ts";

interface IEditTodoProps {
  todo: ITodo;
}

interface Inputs {
  title: string;
  description: string;
}

export default function EditTodo(props: IEditTodoProps) {
  const { todo } = props;
  const { isOpen, onOpen, onClose } = useDisclosure();
  const editTodo = useEditTodo();

  const {
    register,
    handleSubmit,
    getValues,
    reset,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit = () => {
    editTodo.mutate({
      ...todo,
      title: getValues("title"),
      description: getValues("description"),
    });
    reset();
    onClose();
  };

  return (
    <>
      <IconButton
        height="30px"
        width="20px"
        variant="ghost"
        aria-label="Edit Todo"
        icon={<RiPencilLine />}
        onClick={onOpen}
      />

      <ModalContainer
        isOpen={isOpen}
        onClose={onClose}
        onSubmit={handleSubmit(onSubmit)}
        modalTitle="Edit Todo"
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
            defaultValue={todo.title}
            {...register("title", { required: true })}
          />
          <Textarea
            variant="filled"
            placeholder="Todo Description..."
            defaultValue={todo.description}
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
