import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { createEditCabin } from "../../services/apiCabins";

export function useEditCabin() {
  const querClient = useQueryClient();
  const { mutate: editCabin, isLoading: isEditing } = useMutation({
    mutationFn: ({ newCabinData, id }) => createEditCabin(newCabinData, id),
    onSuccess: () => {
      toast.success("Cabin is successfully updated");
      querClient.invalidateQueries({ queryKey: ["cabins"] });
    },
    onError: () => toast.error("Error occured in creating new cabin"),
  });

  return { isEditing, editCabin };
}
