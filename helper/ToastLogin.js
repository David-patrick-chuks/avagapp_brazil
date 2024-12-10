import toast from "react-hot-toast";

export const sucessNotify = () => toast.success("Login bem-sucedido!", {
    position: "bottom-center",
  });

export const goodNotify = (message) => toast.success(message, {
    position: "bottom-center",
  });
export const errorNotify = (message) => toast.error(message, {
    position: "top-center",
  });