import axios from "axios";

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_REACT_APP_API,
});

export const useApi = () => ({
  listUser: async () => {
    const response = await api.get("/user");
    return response.data;
  },
  createClient: async (
    name: string,
    cpf: string,
    rg: string,
    dt_birthday: Date,
    email: string,
    fone: string,
    address: string,
    sector: string,
    position: string,
    company: number,
    status: string
  ) => {
    const response = await api.post("/user", {
      fullname: name,
      cpf,
      rg,
      dt_birthday,
      email,
      fone,
      address,
      sector,
      position,
      company,
      userStatus: status,
    });
    return response.data;
  },
  searchCompany: async (company: number) => {
    const response = await api.get(`/searchCompany?company=${company}`);
    return response.data;
  },
  disableUser: async (id: string) => {
    const response = await api.post(`/disable?id=${id}`);
    return response.data;
  }
});
