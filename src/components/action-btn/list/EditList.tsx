import { Button, Input, useDisclosure } from "@chakra-ui/react";
import { RiPencilFill } from "react-icons/ri";
import ModalContainer from "../../shared/ModalContainer.tsx";
import { SubmitHandler, useForm } from "react-hook-form";
import ErrorAlert from "../../shared/ErrorAlert.tsx";
import { useEditList } from "../../../hooks/lists/useEditList.ts";

interface IEditListProps {
  listId: string;
  listName: string;
}

interface Inputs {
  listName: string;
}

export const EditList = (props: IEditListProps) => {
  const { listId, listName } = props;
  const { isOpen, onOpen, onClose } = useDisclosure();
  const editList = useEditList();

  const {
    register,
    handleSubmit,
    reset,
    getValues,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = () => {
    editList.mutate({ id: listId, listName: getValues("listName") });
    reset();
    onClose();
  };

  return (
    <>
      <Button onClick={onOpen} ml="2" colorScheme="yellow">
        <RiPencilFill />
      </Button>

      <ModalContainer
        isOpen={isOpen}
        onClose={onClose}
        onSubmit={handleSubmit(onSubmit)}
        modalTitle="Edit list name"
      >
        <>
          {errors.listName && (
            <ErrorAlert title="Required" description="List name is required" />
          )}
          <Input
            {...register("listName", {
              required: true,
            })}
            defaultValue={listName}
          />
        </>
      </ModalContainer>
    </>
  );
};
