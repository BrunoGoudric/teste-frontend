import { useApi } from "../../hooks/useApi";
import { formatDate } from "../../utils/formatDate";
import { Container } from "./styles";
import { LayoutProps } from "./types";

export default function ListUsers({ title, users, updatePage }: LayoutProps) {
  const api = useApi();

  const handleUpdate = async (id: string, status: string) => {
      const response = await api.updateStatus(id, status);

      if(response[0] === 1){
        updatePage();
      }
  }
  return (
    <Container>
      <table>
        <thead>
          <tr>
            {title.map((item) => (
              <th key={String(item.id)}>{item.titleName}</th>
            ))}
            <th></th>
          </tr>
        </thead>
        <tbody>
            {users !== null && users.map((item) => (
                <tr key={item.id}>
                <td>{item.fullname}</td>
                <td>{item.cpf}</td>
                <td>{item.rg}</td>
                <td>{formatDate(item.dt_birthday)}</td>
                <td>{item.email}</td>
                <td>{item.fone}</td>
                <td>{item.address}</td>
                <td>{item.sector}</td>
                <td>{item.position}</td>
                <td>{item.company}</td>
                <td>{item.status}</td>
                <td className="boxAction">
                    <button className="btnEdit">Editar</button>
                    {item.status == "Ativo" ? (
                      <button className="btnDes" onClick={() => handleUpdate(item.id, "Desativar")}>Desativar</button>
                    ): (
                      <button className="btnAt" onClick={() => handleUpdate(item.id, "Ativo")}>Ativar</button>
                    )}
                </td>
                </tr>
            ))}
        </tbody>
      </table>
    </Container>
  );
}
