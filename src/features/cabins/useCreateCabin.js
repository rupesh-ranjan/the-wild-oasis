import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { createEditCabin } from "../../services/apiCabins";

export function useCreateCabin() {
  const querClient = useQueryClient();
  const { mutate: createCabin, isLoading: isCreating } = useMutation({
    mutationFn: createEditCabin,
    onSuccess: () => {
      toast.success("New cabin is successfully created");
      querClient.invalidateQueries({ queryKey: ["cabins"] });
    },
    onError: () => toast.error("Error occured in creating new cabin"),
  });
  return { isCreating, createCabin };
}
