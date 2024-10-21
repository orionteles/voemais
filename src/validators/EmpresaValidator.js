import * as Yup from 'yup';
 
const EmpresaValidator = Yup.object().shape({
  nome: Yup.string()
    .min(3, 'O mímino de caracteres é 3')
    .max(10, 'O máximo de caracteres é 10')
    .required('Campo obrigatório'),
  logo: Yup.string()
    .min(2, 'O mímino de caracteres é 2'),
  site: Yup.string().url('Digite uma URL válida'),
});

export default EmpresaValidator