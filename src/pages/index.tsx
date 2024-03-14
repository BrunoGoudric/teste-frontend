import Head from "next/head";
import Image from "next/image";
import {
  MainContainer,
  ContentContainer,
  Header,
  LogoContainer,
  Footer,
  Title,
  Icon,
  LinkedIn,
} from "../styles/pages/Home";
import { FaLinkedinIn } from "react-icons/fa";
import TableHeader from "../components/TableHeader";
import ListUsers from "../components/ListUsers";
import { useEffect, useState } from "react";
import { useApi } from "../hooks/useApi";
import { UserProps } from "../types/User";

const titleTable = [
  { id: 0, titleName: "Nome"},
  { id: 1, titleName: "CPF"},
  { id: 2, titleName: "RG"},
  { id: 3, titleName: "Data de Nascimento"},
  { id: 4, titleName: "E-mail"},
  { id: 5, titleName: "Telefone"},
  { id: 6, titleName: "Endereço"},
  { id: 7, titleName: "Setor"},
  { id: 8, titleName: "Cargo"},
  { id: 9, titleName: "Empresa"},
]


export default function Home() {
  const [user, setUser] = useState<UserProps | null>(null);
  const api = useApi();
  useEffect(() => {
    const getUsers = async () => {
      const data = await api.listUser();
      if(data.user){
        setUser(data.user)
      }
      
    }

    getUsers();
  }, [])


  return (
    <MainContainer>
      <Head>
        <title>Desafio Frontend - Onyma</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header>
            <LogoContainer>
              <Image
                alt="Logo da Onyma by Bencorp"
                src="/assets/Logo Onyma by Bencorp.svg"
                width="88px"
                height="53.59px"
                layout="intrinsic"
              />
            </LogoContainer>
          </Header>
      <ContentContainer>
        <TableHeader />
        <ListUsers title={titleTable} users={user} />
      </ContentContainer>

      <Footer>
        <p>
          Feito com
          <Icon>
            <Image
              alt="Coração violeta"
              src="/assets/Blob footer.svg"
              width="16px"
              height="10px"
            />
          </Icon>
          pela Onyma
        </p>
        <LinkedIn
          href="https://www.linkedin.com/company/onymadigital/mycompany/"
          target="_blank"
        >
          <FaLinkedinIn />
        </LinkedIn>
      </Footer>
    </MainContainer>
  );
}
