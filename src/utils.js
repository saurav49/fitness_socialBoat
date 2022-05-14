import { toast } from "react-toastify";

const toastErr = (msg) =>
  toast.error(msg, {
    autoClose: 3000,
  });

export { toastErr };
