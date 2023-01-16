// Anything exported from this file is importable by other in-browser modules.
import { atom } from "nanostores";

const isPendingOnboarding = atom(true);
const onboarding = atom({
  name: "Lojinha dos Frontenders",
  email: "lojinha@frontenders.com",
  telefone: "",
  cpnj: "",
  state: "",
});
const products = atom([
  {
    name: "Pão de queijo Tradicional",
    value: "1.00",
    description: "Autêntico Pão de Queijo de MG",
    isActive: true,
  },
  {
    name: "Pão de queijo C/ Frango",
    value: "1.50",
    description: "Autêntico Pão de Queijo de MG",
    isActive: true,
  },
  {
    name: "Pão de queijo C/ Requeijão",
    value: "1.50",
    description: "Autêntico Pão de Queijo de MG",
    isActive: false,
  },
  {
    name: "Pão de queijo C/ Goiabada",
    value: "2.00",
    description: "Autêntico Pão de Queijo de MG",
    isActive: false,
  },
]);
const orders = atom([
  {
    date: "12/10/2022",
    value: 12.0,
    client: "Pedrinho da Silva Sauro",
    product: "Pão de queijo Tradicional",
    quantity: 12,
    wasSend: true,
  },
  {
    date: "04/08/2022",
    value: 120.0,
    client: "Joãozinho da Silva Sauro",
    product: "Pão de queijo C/ Requeijão",
    quantity: 80,
    wasSend: true,
  },
  {
    date: "23/06/2022",
    value: 31.5,
    client: "Luizinho da Silva Sauro",
    product: "Pão de queijo C/ Frango",
    quantity: 21,
    wasSend: true,
  },
  {
    date: "10/06/2022",
    value: 12.0,
    client: "Francisquinho das couves",
    product: "Pão de queijo C/ Goiabada",
    quantity: 6,
    wasSend: false,
  },
  {
    date: "02/05/2022",
    value: 40.5,
    client: "Mariazinha das couves",
    product: "Pão de queijo C/ Requeijão",
    quantity: 27,
    wasSend: false,
  },
]);
const wallet = atom({
  value: 123.45,
  movimentation: [
    {
      date: "01/01/2023",
      value: 123.45,
      type: "Sale",
      description: "Venda realizada",
    },
  ],
});

const formatValueToCurrency = (value) =>
  new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(value);

const tapioca = (value) => {
  return console.log(`Tapioca é mais gostoso que  ${value}`);
};

const states = async () => {
  return await fetch("https://api.tidias.com.br/generals/states-brazil").then(
    (data) => data.json()
  );
};

export {
  tapioca,
  states,
  isPendingOnboarding,
  onboarding,
  products,
  orders,
  wallet,
  formatValueToCurrency,
};
