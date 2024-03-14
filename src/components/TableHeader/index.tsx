import { Container } from "./styles";

export default function TableHeader(){
    return (
        <Container>
            <div className="boxCompany">
                <button className="filterButton">Empresa 1</button>
                <button className="filterButton">Empresa 2</button>
            </div>
            <div className="boxSearch">
                <input type="search" name="search" placeholder="Informe o que precisa...." />
                <button>Buscar</button>
            </div>
        </Container>
    )
}