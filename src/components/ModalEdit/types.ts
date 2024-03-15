import * as Yup from "yup";
import { RegisterValidationSchema } from "../ModalAdd/validation";
import { UserProps } from "../../types/User";

export type RegisterProps = Yup.InferType<typeof RegisterValidationSchema>;

export interface LayoutProps {
  modalIsOpen: boolean;
  closeModal: () => void;
  msgApi: string;
  reset: () => void;
  setMsgApi: (msgApi: string) => void;
  filterUser: UserProps
}
