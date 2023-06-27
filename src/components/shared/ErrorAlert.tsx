import {
  Alert,
  AlertDescription,
  AlertIcon,
  AlertTitle,
} from "@chakra-ui/react";

interface IErrorAlertProps {
  title: string;
  description?: string;
}

export default function ErrorAlert(props: IErrorAlertProps) {
  const { title, description } = props;

  return (
    <Alert mb="2" status="error">
      <AlertIcon />
      <AlertTitle>{title}</AlertTitle>
      {description && <AlertDescription>{description}</AlertDescription>}
    </Alert>
  );
}
