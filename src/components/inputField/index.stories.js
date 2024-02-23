import Input from "./index";

export default {
  title: "Form/Input",
  component: Input,
};

export const Primary = {
  args: {
    inputName: "firstName",
  },
  tags: ["autodocs"],
};

export const Success = {
  args: {
    inputName: "firstName",
    isSuccess: true,
  },
};

export const Error = {
  args: {
    inputName: "firstName",
    isError: true,
    validationMessage: "This field is required",
  },
};
