import { TApplication } from "../TApplication";

export type TFormProps = {
  title: string;
  onSubmit: (data: TApplication) => void;
  application?: TApplication;
};
