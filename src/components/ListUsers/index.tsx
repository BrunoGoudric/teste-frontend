import { Container } from "./styles";
import { LayoutProps } from "./types";

export default function ListUsers({ title, users }: LayoutProps) {
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
                <tr key={String(item.id)}>
                <td>{item.name}</td>
                <td>{item.cpf}</td>
                <td>{item.rg}</td>
                <td>{item.dt_nascimento}</td>
                <td>{item.email}</td>
                <td>{item.fone}</td>
                <td>{item.address}</td>
                <td>{item.sector}</td>
                <td>{item.position}</td>
                <td>{item.company}</td>
                <td className="boxAction">
                    <button className="btnEdit">Editar</button>
                    <button className="btnDel">Deletar</button>
                </td>
                </tr>
            ))}
        </tbody>
      </table>
    </Container>
  );
}
