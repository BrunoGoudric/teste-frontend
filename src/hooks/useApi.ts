import axios from "axios";

const api = axios.create({
  baseURL: process.env.REACT_APP_API,
});

export const useApi = () => ({
  listUser: async () => {
    return {
      user: [
        {
          id: 1,
          name: "Bruno Ferreira dos Santos Silva",
          cpf: 35261460808,
          rg: 383625609,
          dt_nascimento: 619488000,
          email: "brunolfsports@hotmail.com",
          fone: 11969704753,
          address: "Rua Antõnio Pires dos Santos, 162 - Pq Doroteia - SP",
          sector: "T.I",
          position: "Desenvolvedor Frontend",
          company: 1,
          status: "Ativo",
        },
      ],
    };
  },
  createClient: async (
    name: string,
    cpf: string,
    rg: string,
    dt_nascimento: string,
    email: string,
    fone: string,
    address: string,
    sector: string,
    position: string,
    company: number
  ) => {
    const response = await api.post("/create");
    return response.data;
  },
});
