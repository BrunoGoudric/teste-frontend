type User = {
  id: number;
  name: string;
  cpf: number;
  rg: number;
  dt_nascimento: number;
  email: string;
  fone: number;
  address: string;
  sector: string;
  position: string;
  company: number;
  status: string;
};

export type UserProps = User[]
