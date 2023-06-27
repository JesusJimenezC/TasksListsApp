import { Button, Input, useDisclosure } from "@chakra-ui/react";
import { RiPencilFill } from "react-icons/ri";
import ModalContainer from "../../shared/ModalContainer.tsx";
import { SubmitHandler, useForm } from "react-hook-form";
import { IList } from "../../../types";
import ErrorAlert from "../../shared/ErrorAlert.tsx";
import { useSetRecoilState } from "recoil";
import { listsState } from "../../../state/atoms/listAtoms.ts";
import { useUpdateListMutation } from "../../../hooks/lists.mutation.ts";
import { setUpdatedList } from "../../../helpers/lists.helper.ts";

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
  const setLists = useSetRecoilState(listsState);
  const updateList = useUpdateListMutation();

  const {
    register,
    handleSubmit,
    reset,
    getValues,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = async () => {
    await updateList
      .mutateAsync({ id: listId, listName: getValues("listName") })
      .then((updatedList: IList) => {
        setUpdatedList(updatedList, setLists);
        reset();
        onClose();
      });
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
