import { PromoItemProps, subjectOption } from "./types";

export const promoList: PromoItemProps[] = [
  {
    title: "Unapredi svoje znanje.",
    description:
      "Otkrij moć privatnih časova koji su prilagođeni tvojim potrebama i ciljevima.",
    img: "Learning.png",
  },
  {
    title: "Podeli svoje znanje.",
    description:
      "Postani deo zajednice stručnih instruktora i zaradi deljenjem znanja.",
    img: "Teaching.png",
  },
  {
    title: "Registruj se i otključaj svoj pun potencijal.",
    description:
      "Napravi prvi korak ka rastu i proširi svoje znanje kroz privatne časove.",
    img: "Grow.png",
    action: true,
  },
];

export const subjectOptions: readonly subjectOption[] = [
  { value: "all", label: "Pretraži sve" },
  { value: "Matematika", label: "Matematika" },
  { value: "Engleski jezik", label: "Engleski jezik" },
  { value: "Informatika", label: "Informatika" },
  { value: "Fizika", label: "Fizika" },
  { value: "Hemija", label: "Hemija" },
  { value: "Statistika", label: "Statistika" },
  { value: "Nemački jezik", label: "Nemački jezik" },
];

export const locationOptions: readonly subjectOption[] = [
  { value: "Remote", label: "Remote" },
  { value: "Sombor", label: "Sombor" },
  { value: "Novi Sad", label: "Novi Sad" },
  { value: "Subotica", label: "Subotica" },
  { value: "Beograd", label: "Beograd" },
  { value: "Zrenjanin", label: "Zrenjanin" },
  { value: "Kragujevac", label: "Kragujevac" },
];
