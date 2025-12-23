import { useFormState } from "react-hook-form";
import { Button } from "@/components/ui/button";

const SaveButton = ({ editing }: { editing: boolean }) => {
  const { isSubmitting, isValid } = useFormState();
  const isCreating = isSubmitting && editing === false;
  const isUpdating = isSubmitting && editing === true;
  return (
    <Button
      type="submit"
      className="mr-2"
      disabled={!isValid}
      aria-disabled={isCreating || isUpdating || !isValid}
    >
      {editing
        ? `Sav${isUpdating ? "ing..." : "e"}`
        : `Creat${isCreating ? "ing..." : "e"}`}
    </Button>
  );
};

export default SaveButton;
