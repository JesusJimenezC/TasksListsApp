import { RiArrowLeftSLine } from "react-icons/ri";
import { Button, useColorModeValue } from "@chakra-ui/react";
import { useNavigate } from "@tanstack/router";

export default function Back() {
  const navigate = useNavigate({ from: "/list/$listId" });

  return (
    <Button
      onClick={() => navigate({ to: "/" })}
      color={useColorModeValue("blackAlpha.500", "whiteAlpha.500")}
      colorScheme={useColorModeValue("blackAlpha", "whiteAlpha")}
    >
      <RiArrowLeftSLine />
    </Button>
  );
}
