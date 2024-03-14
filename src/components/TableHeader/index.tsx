import { useApi } from "../../hooks/useApi";
import { Container } from "./styles";
import { LayoutProps } from "./types";

export default function TableHeader({ reset, setUser }: LayoutProps) {
  const api = useApi();

  const filterCompany = async (company: number) => {
    const data = await api.searchCompany(company);

    if (data) {
      setUser(data);
    }
  };


  return (
    <Container>
      <div className="boxCompany">
        <button className="filterButton" onClick={() => filterCompany(1)}>
          Empresa 1
        </button>
        <button className="filterButton" onClick={() => filterCompany(2)}>
          Empresa 2
        </button>

        <button className="btnReset" onClick={reset}>Reset</button>
      </div>
      
    </Container>
  );
}
