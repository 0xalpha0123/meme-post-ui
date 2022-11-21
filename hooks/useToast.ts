import { toast } from "react-toastify";

const useToast = () => {
  return {
    emitToast: (msg: string, type: string) => {
      if (type === "success") {
        toast.success(msg);
      } else if (type === "info") {
        toast.info(msg);
      } else if (type === "warning") {
        toast.warning(msg);
      } else if (type === "error") {
        toast.error(msg);
      } else {
        toast(msg);
      }
    },
  };
};

export default useToast;
