import { UserProps } from "../../types/User";

export interface LayoutProps{
    reset: () => void;
    setUser: (dataFilter: UserProps) => void;
}