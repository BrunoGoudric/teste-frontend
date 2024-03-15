import * as yup from 'yup';
import  { isCPF }  from 'brazilian-values'
import { validateBirthday } from '../../utils/validateBirthday';

const customErrorMessages = {
    fullname: {
      required: 'O nome completo é obrigatório',
    },
    cpf: {
      required: 'O CPF é obrigatório',
    },
    rg: {
        required: 'O RG é obrigatório',
      },
      dt_birthday: {
        required: 'A Data de Nascimento é obrigatório',
      },
      email: {
        required: 'O Email é obrigatório',
      },
      fone: {
        required: 'O Telefone é obrigatório',
      },
      address: {
        required: 'O Endereço é obrigatório',
      },
      sector: {
        required: 'O Setor é obrigatório',
      },
      position: {
        required: 'O Cargo é obrigatório',
      },
      company: {
        required: 'A Empresa é obrigatória',
      },
  };

export const RegisterValidationSchema = yup.object().shape({
    fullname: yup.string().required(customErrorMessages.fullname.required),
    cpf: yup.string().required(customErrorMessages.cpf.required).test('cpf', 'CPF invalido', value => isCPF(value)),
    rg: yup.string().required(customErrorMessages.rg.required).matches(/^\d{1,2}\.\d{3}\.\d{3}-\d{1,2}$/, 'RG inválido'),
    dt_birthday: yup.date().required().test('birthday', 'Data de aniversário inválida', value => validateBirthday(value)),
    email: yup.string().email(),
    fone: yup.string(),
    address: yup.string().required(customErrorMessages.address.required),
    sector: yup.string().required(customErrorMessages.sector.required).typeError("Campo Obrigatório"),
    position: yup.string().required(customErrorMessages.position.required).typeError("Campo Obrigatório"),
    company: yup.number().required(customErrorMessages.company.required).min(1).max(2),
})