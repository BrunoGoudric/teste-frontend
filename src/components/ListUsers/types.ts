import { UserProps } from "../../types/User";

export interface titleProps {
    id: number;
    titleName: string;
}

export interface LayoutProps{
    title: titleProps[]
    users: UserProps
    updatePage: () => void;
}