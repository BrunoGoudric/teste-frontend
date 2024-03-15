import * as Yup from "yup";
import { RegisterValidationSchema } from "../ModalAdd/validation";

export type RegisterProps = Yup.InferType<typeof RegisterValidationSchema>;

export interface LayoutProps {
  modalIsOpen: boolean;
  closeModal: () => void;
  msgApi: string;
  address: string;
  reset: () => void;
  setMsgApi: (msgApi: string) => void;
}
