export type user = {
  id: string;
  name: string;
  lastName: string;
  password: string;
  passwordRepeat: string;
  email: string;
  phone: string;
  image: string;
};

export type subject = {
  predmet: string;
  opis: string;
  grad: string;
  vremeTrajanja: string;
  cena: string;
  creatorId: string;
};

const users: user[] = [
  {
    id: "u1",
    name: "Lazar",
    lastName: "Kelić",
    password: "123123",
    passwordRepeat: "123123",
    email: "keliclazar@gmail.com",
    phone: "123456 123",
    image: "badi.jpg",
  },
  {
    id: "u2",
    name: "Ime",
    lastName: "Učenika",
    password: "321321",
    passwordRepeat: "321321",
    email: "ucenik@gmail.com",
    phone: "1234567",
    image: "badi.jpg",
  },
];

const casovi: subject[] = [
  {
    cena: "700",
    predmet: "Engleski jezik",
    creatorId: "u1",
    grad: "Novi Sad",
    opis: "Svojim strpljenjem, stručnošću i individualnim pristupom, garantujem da ćete brzo napredovati u svom znanju engleskog jezika. Bez obzira na vaše ciljeve - poboljšanje govorne veštine, priprema za ispite ili poslovno komuniciranje - pružiću vam podršku i motivaciju tokom celog procesa učenja. Učenje engleskog jezika može biti zabavno i ispunjavajuće iskustvo, i radujem se što ću biti deo vašeg napretka.",
    vremeTrajanja: "60",
  },
  {
    cena: "500",
    predmet: "Informatika",
    creatorId: "u1",
    grad: "Remote",
    opis: "Sa stručnim znanjem iz oblasti informatike i bogatim iskustvom u podučavanju, pružam privatne časove iz informatike prilagođene vašim specifičnim potrebama. Bez obzira da li želite da savladate osnove računarske tehnologije, programiranje, baze podataka ili napredne IT veštine, moj cilj je da vam pružim jasnoću, sigurnost i samopouzdanje u ovim oblastima. Kroz interaktivne lekcije, praktične vežbe i realne primere, naučićete kako efikasno koristiti različite softverske alate i tehnologije. Pridružite mi se i zajedno ćemo razvijati vaše informatičke veštine i otvoriti vrata novim mogućnostima.",
    vremeTrajanja: "45",
  },
  {
    cena: "1000",
    predmet: "Nemački jezik",
    creatorId: "u2",
    grad: "Sombor",
    opis: "Svojim stručnim znanjem i iskustvom u podučavanju nemačkog jezika, pružam individualne časove koji su prilagođeni vašim specifičnim potrebama. Bez obzira da li želite da započnete sa osnovama, poboljšate svoju konverzaciju ili se pripremite za ispit, moj cilj je da vam pomognem da postanete samouvereni u upotrebi nemačkog jezika. Kroz interaktivne vežbe, slušanje, čitanje i razgovor, razvijaćemo vaš vokabular, gramatičke veštine i izgovor. Pridružite mi se i zajedno ćemo ostvariti vaše ciljeve u učenju nemačkog jezika.",
    vremeTrajanja: "45",
  },
  {
    cena: "800",
    predmet: "Matematika",
    creatorId: "u2",
    grad: "Beograd",
    opis: "Sa strpljenjem i pažljivim pristupom, pružam privatne časove matematike koji su prilagođeni vašim potrebama. Bez obzira da li želite da savladate osnove, poboljšate svoje računske veštine ili se pripremite za testove, moj cilj je da vam pomognem da razumete matematičke koncepte i postignete uspeh. Kroz jasno objašnjenje teorije i praktične primene u rešavanju zadataka, razvijaćemo vaše logičko razmišljanje i veštine problematike. Pridružite mi se i zajedno ćemo unaprediti vaše matematičke sposobnosti.",
    vremeTrajanja: "60",
  },
  {
    cena: "600",
    predmet: "Engleski jezik",
    creatorId: "u2",
    grad: "Novi Sad",
    opis: "Sa fokusom na konverzaciji i usmenoj veštini, pružam privatne časove engleskog jezika koji će vam pomoći da postanete sigurni u komunikaciji na engleskom jeziku. Bez obzira da li želite da unapredite svoje razumevanje, izgovor ili gramatiku, moj cilj je da vam pomognem da prevaziđete jezičke barijere. Kroz raznovrsne aktivnosti, simulacije situacija i vežbe slušanja, razgovora i čitanja, razvijaćemo vaše jezičke veštine i samopouzdanje. Pridružite mi se i zajedno ćemo ostvariti vaše ciljeve u učenju engleskog jezika.",
    vremeTrajanja: "60",
  },
  {
    cena: "1200",
    predmet: "Programiranje",
    creatorId: "u1",
    grad: "Zrenjanin",
    opis: "Sa stručnošću u programiranju i iskustvom u podučavanju, pružam privatne časove programiranja prilagođene vašem nivou i ciljevima. Bez obzira da li ste početnik ili želite da unapredite svoje veštine u određenom programskom jeziku, moj cilj je da vam pomognem da razumete koncepte programiranja i razvijete efikasno rešavanje problema. Kroz praktične vežbe, projekte i rad na realnim primerima, naučićete kako da razvijate softverske aplikacije. Pridružite mi se i zajedno ćemo istražiti svet programiranja.",
    vremeTrajanja: "60",
  },
  {
    cena: "900",
    predmet: "Španski jezik",
    creatorId: "u2",
    grad: "Subotica",
    opis: "Kao izvorni govornik španskog jezika, pružam privatne časove španskog jezika za sve nivoe. Bez obzira da li želite da naučite osnove, unapredite svoje jezičke veštine ili se pripremite za ispit, moj cilj je da vam pružim autentično jezičko iskustvo i pomognem vam da postignete napredak. Kroz konverzaciju, vežbe slušanja i čitanja, razvijaćemo vaš vokabular, gramatiku i izgovor. Pridružite mi se i zajedno ćemo istražiti španski jezik i kulturu.",
    vremeTrajanja: "45",
  },
  {
    cena: "700",
    predmet: "Fizika",
    creatorId: "u1",
    grad: "Kragujevac",
    opis: "Sa stručnim znanjem iz oblasti fizike i iskustvom u podučavanju, pružam privatne časove fizike prilagođene vašem nivou i potrebama. Bez obzira da li želite da savladate osnove, rešavate složenije probleme ili se pripremate za testove, moj cilj je da vam pomognem da razumete fizičke principe i primenite ih u praksi. Kroz jasno objašnjenje teorije i vežbe rešavanja zadataka, razvijaćemo vaše logičko razmišljanje i analitičke veštine. Pridružite mi se i zajedno ćemo istražiti svet fizike.",
    vremeTrajanja: "60",
  },
];

export const login = (data: { email: string; password: string }) => {
  const existingUser = users.find((user) => user.email === data.email);

  if (existingUser && existingUser.password === data.password) {
    return { loggedUser: existingUser, ok: true };
  }

  return { loggedUser: null, ok: false };
};

export const register = (user: user) => {
  users.push(user);
  return user;
};

export const postSubject = (data: subject) => {
  casovi.push(data);
};

export type subjectWithCreator = subject & {
  creatorData?: user;
};
export const getSubjects = (): subjectWithCreator[] => {
  const subjects: subjectWithCreator[] = [...casovi];
  console.log(subjects);

  subjects.forEach((subject) => {
    const creatorData = users.find((user) => user.id === subject.creatorId);
    subject.creatorData = creatorData;
  });

  return subjects;
};
