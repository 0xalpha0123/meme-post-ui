import { ReactElement } from "react";
import { toast } from "react-toastify";

const useToast = () => {
  return {
    emitToast: (msg: string | ReactElement, type: string, option?: any) => {
      if (type === "success") {
        toast.success(msg, option);
      } else if (type === "info") {
        toast.info(msg, option);
      } else if (type === "warning") {
        toast.warning(msg, option);
      } else if (type === "error") {
        toast.error(msg, option);
      } else {
        toast(msg, option);
      }
    },
  };
};

export default useToast;
