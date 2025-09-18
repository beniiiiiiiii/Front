type Szemely = {
  nev: string;
  kor: number;
  magassag?: number;
};
/*
const ember : Szemely = {
    nev: "valaki",
    kor: 25
    };
const ember2 : Szemely = {
    nev: "valaki mas",
    kor: 30
};
*/

const emberek: Array<Szemely> = [
  { nev: "valaki", kor: 25, magassag: 180 },
  { nev: "valaki mas", kor: 30 },
];

const fuggveny = (a: Szemely, b: Szemely): number => a.kor + b.kor;
