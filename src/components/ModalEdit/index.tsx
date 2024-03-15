import { yupResolver } from "@hookform/resolvers/yup";
import Modal from "react-modal";
import { RegisterValidationSchema } from "./validation";
import { useForm } from "react-hook-form";
import InputMask from "react-input-mask";
import { LayoutProps, RegisterProps } from "./types";
import { useApi } from "../../hooks/useApi";
import { formatDate } from "../../utils/formatDate";

export default function ModalEdit({modalIsOpen, closeModal, msgApi, reset, setMsgApi, filterUser}: LayoutProps){
    const api = useApi();
    const {
        register,
        handleSubmit,
        formState: { errors },
        watch,
      } = useForm({
        resolver: yupResolver(RegisterValidationSchema),
      });
     
      const { email, fone, dt_birthday} = watch();

      console.log("dt_birthday=", dt_birthday)

      const onSubmit = async (data: RegisterProps) => {
        const response = await api.updateClient(
          filterUser[0].id,
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
    
        if (response[0] === 1) {
          closeModal();
          reset();
        } else {
          setMsgApi(response);
        }
      };

      const formatarData = (data: string) => {
        const dataObj = new Date(data);
        const dia = String(dataObj.getDate()).padStart(2, '0');
        const mes = String(dataObj.getMonth() + 1).padStart(2, '0');
        const ano = dataObj.getFullYear();
        return `${ano}-${mes}-${dia}`;
      };

      const dataForInput = formatarData(filterUser[0]?.dt_birthday);


    return (
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          style={{
            content: {
              top: "49%",
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
          <div>
            <p style={{ marginBottom: "5px", color: "red" }}>
              {msgApi === "User already exists!" ? "Já existe um usúario com esse CPF!" : ""}
            </p>
          </div>
          <form style={{ height: "800px" }}>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                height: "75px",
              }}
            >
              <label htmlFor="" style={{ marginBottom: "2px"}}>Nome</label>
              <input
                type="text"
                {...register("fullname")}
                style={{ height: "40px", paddingLeft: "10px" }}
                defaultValue={filterUser[0]?.fullname}
              />
              <p style={{ marginBottom: "5px", color: "red" }}>
                {errors.fullname?.message}
              </p>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                height: "75px",
              }}
            >
              <label htmlFor="">CPF</label>
              <InputMask
                mask={"999.999.999-99"}
                type="text"
                {...register("cpf")}
                style={{ height: "40px", paddingLeft: "10px" }}
                defaultValue={filterUser[0]?.cpf}
              />
              <p style={{ marginBottom: "5px", color: "red" }}>
                {errors.cpf?.message}
              </p>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                height: "75px",
              }}
            >
              <label htmlFor="">RG</label>
              <InputMask
                mask={"99.999.999-9"}
                type="text"
                {...register("rg")}
                style={{ height: "40px", paddingLeft: "10px" }}
                defaultValue={filterUser[0]?.rg}
              />
              <p style={{ marginBottom: "5px", color: "red" }}>
                {errors.rg?.message}
              </p>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                height: "75px",
              }}
            >
              <label htmlFor="">Data de Nascimento</label>
              <input
                type="date"
                {...register("dt_birthday")}
                style={{ height: "40px", paddingLeft: "10px" }}
                defaultValue={dataForInput}
              />
              <p style={{ marginBottom: "5px", color: "red" }}>
                {errors.dt_birthday?.message}
              </p>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                height: "75px",
              }}
            >
              <label htmlFor="">E-mail</label>
              <input
                type="email"
                {...register("email")}
                style={{ height: "40px", paddingLeft: "10px" }}
                defaultValue={filterUser[0]?.email}
              />
              <p style={{ marginBottom: "5px", color: "red" }}>
                {email === "" && fone === "" ? "Informar o E-mail / Telefone" :errors.email?.message}
              </p>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                height: "75px",
              }}
            >
              <label htmlFor="">Telefone</label>
              <InputMask
                mask={"(99) 99999-9999"}
                type="text"
                {...register("fone")}
                style={{ height: "40px", paddingLeft: "10px" }}
                defaultValue={filterUser[0]?.fone}
              />
              <p style={{ marginBottom: "5px", color: "red" }}>
                {errors.fone?.message}
              </p>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                height: "75px",
              }}
            >
              <label htmlFor="">Endereço</label>
              <input
                type="text"
                {...register("address")}
                style={{ height: "40px", paddingLeft: "10px" }}
                defaultValue={filterUser[0]?.address}
              />
              <p style={{ marginBottom: "5px", color: "red" }}>
                {errors.address?.message}
              </p>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                height: "75px",
              }}
            >
              <label htmlFor="">Setor</label>
              <input
                type="text"
                {...register("sector")}
                style={{ height: "40px", paddingLeft: "10px" }}
                defaultValue={filterUser[0]?.sector}
              />
              <p style={{ marginBottom: "5px", color: "red" }}>
                {errors.sector?.message}
              </p>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                height: "75px",
              }}
            >
              <label htmlFor="">Cargo</label>
              <input
                type="text"
                {...register("position")}
                style={{ height: "40px", paddingLeft: "10px" }}
                defaultValue={filterUser[0]?.position}
              />
              <p style={{ marginBottom: "5px", color: "red" }}>
                {errors.position?.message}
              </p>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                height: "75px",
              }}
            >
              <label htmlFor="">Empresa</label>
              <input
                type="number"
                {...register("company")}
                style={{ height: "40px", paddingLeft: "10px" }}
                min={1}
                max={2}
                defaultValue={filterUser[0]?.company}
              />
              <p style={{ marginBottom: "5px", color: "red" }}>
                {errors.company?.message}
              </p>
            </div>
            <button
              style={{
                width: "90px",
                height: "36px",
                borderRadius: "12px",
                border: "none",
                background: email === "" && fone === "" ? "gray" : "green",
                color: "#fff",
                fontWeight:"bold"
              }}
              onClick={handleSubmit(onSubmit)}
              disabled={email === "" && fone === "" ? true : false}
            >
              Atualizar
            </button>
          </form>
        </Modal>
    )
}