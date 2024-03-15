import { useEffect, useState } from "react";
import { useApi } from "../../hooks/useApi";
import { Container } from "./styles";
import { LayoutProps, RegisterProps } from "./types";
import { yupResolver } from "@hookform/resolvers/yup";
import Modal from "react-modal";
import { RegisterValidationSchema } from "./validation";
import { useForm } from "react-hook-form";
import InputMask from 'react-input-mask';

const customStyles = {
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(255, 255, 255, 0.75)",
  },
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    width: "750px",
  },
};

export default function TableHeader({ reset, setUser }: LayoutProps) {
  const [latitude, setLatitude] = useState<number | null>(null);
  const [longitude, setLongitude] = useState<number | null>(null);
  const [modalIsOpen, setIsOpen] = useState(false);
  const [address, setAddress] = useState("");
  const api = useApi();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(RegisterValidationSchema),
  });

  const filterCompany = async (company: number) => {
    const data = await api.searchCompany(company);

    if (data) {
      setUser(data);
    }
  };

  function openModal() {
    setIsOpen(true);
    getAdrress();
  }

  function closeModal() {
    setIsOpen(false);
  }

  const getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLatitude(position.coords.latitude);
          setLongitude(position.coords.longitude);
        },
        (error) => {
          console.error("Error getting geolocation:", error);
        }
      );
    } else {
      console.error("Geolocation is not supported by this browser.");
    }
  };

  const getAdrress = async () => {
    try {
      const response = await fetch(
        `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=AIzaSyB5fH2KqcBGUmCIAiq9nSCE_0OhqxepYWA`
      );
      const data = await response.json();

      if (data.results && data.results.length > 0) {
        setAddress(data.results[0].formatted_address);
      } else {
        console.error(
          "Nenhum endereço encontrado para as coordenadas fornecidas"
        );
      }
    } catch (error) {
      console.error("Erro ao fazer solicitação à API de Geocoding:", error);
    }
  };

  const onSubmit = async (data: RegisterProps) => {
    const isLogged = await api.createClient(
      data.fullname,
      data.cpf,
      data.rg,
      data.dt_birthday,
      data.email,
      data.fone,
      data.address,
      data.sector,
      data.position,
      data.company,
      "Ativo"
    );

    console.log("isLogged=", isLogged)
  };

  useEffect(() => {
    getLocation();
  }, []);

  return (
    <>
      <Container>
        <div className="boxCompany">
          <button className="filterButton" onClick={() => filterCompany(1)}>
            Empresa 1
          </button>
          <button className="filterButton" onClick={() => filterCompany(2)}>
            Empresa 2
          </button>

          <button className="btnReset" onClick={reset}>
            Reset
          </button>
        </div>
        <div className="addClient">
          <button className="btnAdd" onClick={openModal}>
            +
          </button>
        </div>
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          style={{
            content: {
              top: "50%",
              left: "50%",
              right: "auto",
              bottom: "auto",
              marginRight: "-50%",
              transform: "translate(-50%, -50%)",
              width: "750px",
              display: "flex",
              flexDirection: "column",
            },
          }}
        >
          <div
            className="headerModal"
            style={{
              display: "flex",
              justifyContent: "space-between",
              width: "100%",
              height: "50px",
            }}
          >
            <h2>Cadastro de Funcionários</h2>
            <button
              onClick={closeModal}
              style={{
                background: "transparent",
                border: "none",
                fontSize: "15px",
                fontWeight: "bold",
                marginBottom: "15px",
              }}
            >
              X
            </button>
          </div>
          <form style={{ height: "800px"}}>
            <div style={{ display: "flex", flexDirection: "column", height: "75px" }}>
              <label htmlFor="">Nome</label>
              <input type="text" {...register("fullname")} style={{ height: "40px", paddingLeft: "10px"}} />
              <p style={{ marginBottom: "5px", color: "red"}}>{errors.fullname?.message}</p>
            </div>
            <div style={{ display: "flex", flexDirection: "column", height: "75px" }}>
              <label htmlFor="">CPF</label>
              <InputMask mask={"999.999.999-99"} type="text" {...register("cpf")} style={{ height: "40px", paddingLeft: "10px"}} />
              <p style={{ marginBottom: "5px", color: "red"}}>{errors.cpf?.message}</p>
            </div>
            <div style={{ display: "flex", flexDirection: "column", height: "75px" }}>
              <label htmlFor="">RG</label>
              <InputMask mask={"99.999.999-9"} type="text" {...register("rg")} style={{ height: "40px", paddingLeft: "10px"}} />
              <p style={{ marginBottom: "5px", color: "red"}}>{errors.rg?.message}</p>
            </div>
            <div style={{ display: "flex", flexDirection: "column", height: "75px" }}>
              <label htmlFor="">Data de Nascimento</label>
              <input type="date" {...register("dt_birthday")} style={{ height: "40px", paddingLeft: "10px"}} />
              <p style={{ marginBottom: "5px", color: "red"}}>{errors.dt_birthday?.message}</p>
            </div>
            <div style={{ display: "flex", flexDirection: "column", height: "75px" }}>
              <label htmlFor="">E-mail</label>
              <input type="email" {...register("email")} style={{ height: "40px", paddingLeft: "10px"}} />
              <p style={{ marginBottom: "5px", color: "red"}}>{errors.email?.message}</p>
            </div>
            <div style={{ display: "flex", flexDirection: "column", height: "75px" }}>
              <label htmlFor="">Telefone</label>
              <InputMask mask={"(99) 99999-9999"} type="text" {...register("fone")} style={{ height: "40px", paddingLeft: "10px"}} />
              <p style={{ marginBottom: "5px", color: "red"}}>{errors.fone?.message}</p>
            </div>
            <div style={{ display: "flex", flexDirection: "column", height: "75px" }}>
              <label htmlFor="">Endereço</label>
              <input type="text" {...register("address")} style={{ height: "40px", paddingLeft: "10px"}} defaultValue={address} />
              <p style={{ marginBottom: "5px", color: "red"}}>{errors.address?.message}</p>
            </div>
            <div style={{ display: "flex", flexDirection: "column", height: "75px" }}>
              <label htmlFor="">Setor</label>
              <input type="text" {...register("sector")} style={{ height: "40px", paddingLeft: "10px"}} />
              <p style={{ marginBottom: "5px", color: "red"}}>{errors.sector?.message}</p>
            </div>
            <div style={{ display: "flex", flexDirection: "column", height: "75px" }}>
              <label htmlFor="">Cargo</label>
              <input type="text" {...register("position")} style={{ height: "40px", paddingLeft: "10px"}} />
              <p style={{ marginBottom: "5px", color: "red"}}>{errors.position?.message}</p>
            </div>
            <div style={{ display: "flex", flexDirection: "column", height: "75px" }}>
              <label htmlFor="">Empresa</label>
              <input type="number" {...register("company")} style={{ height: "40px", paddingLeft: "10px"}} min={1} max={2} />
              <p style={{ marginBottom: "5px", color: "red"}}>{errors.company?.message}</p>
            </div>
            <button onClick={handleSubmit(onSubmit)}>Registrar</button>
          </form>
        </Modal>
      </Container>
    </>
  );
}
