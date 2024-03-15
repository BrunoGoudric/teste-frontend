import { UserProps } from "../../types/User";
import * as Yup from 'yup';
import { RegisterValidationSchema } from "./validation";

export interface LayoutProps{
    reset: () => void;
    setUser: (dataFilter: UserProps) => void;
}

export type RegisterProps = Yup.InferType<typeof RegisterValidationSchema>;