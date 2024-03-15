import { useEffect, useState } from "react";
import { useApi } from "../../hooks/useApi";
import { Container } from "./styles";
import { LayoutProps } from "./types";
import ModalAdd from "../ModalAdd";


export default function TableHeader({ reset, setUser }: LayoutProps) {
  const [latitude, setLatitude] = useState<number | null>(null);
  const [longitude, setLongitude] = useState<number | null>(null);
  const [modalIsOpen, setIsOpen] = useState(false);
  const [address, setAddress] = useState("");
  const [msgApi, setMsgApi] = useState("");
  const api = useApi();

  

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
        `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=${process.env.NEXT_PUBLIC_REACT_GEOAPI_KEY}`
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
        <ModalAdd 
          address={address}
          closeModal={closeModal}
          modalIsOpen={modalIsOpen}
          msgApi={msgApi}
          reset={reset}
          setMsgApi={setMsgApi}
        />
      </Container>
    </>
  );
}
