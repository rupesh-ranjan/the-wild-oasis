import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { updateSetting as updateSettingApi } from "../../services/apiSettings";

export function useUpdateSetting() {
  const querClient = useQueryClient();
  const { mutate: updateSetting, isLoading: isUpdating } = useMutation({
    mutationFn: updateSettingApi,
    onSuccess: () => {
      toast.success("Settings is successfully updated");
      querClient.invalidateQueries({ queryKey: ["settings"] });
    },
    onError: () => toast.error("Error occured in updating Setting"),
  });

  return { isUpdating, updateSetting };
}
