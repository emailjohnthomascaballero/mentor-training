// TODO: Demonstrate conditional types
type SportType = "soccer" | "tennis" | "basketball";

type SoccerPlayer = {
  name: string;
  age: number;
  something1: string;
  sport: "soccer";
};

type TennisPlayer = {
  name: string;
  age: number;
  something2: string;
  sport: "tennis";
};

type BasketballPlayer = {
  name: string;
  age: number;
  sport: "basketball";
};

type Player<TSportType extends SportType> = TSportType extends "soccer"
  ? SoccerPlayer
  : TSportType extends "tennis"
  ? TennisPlayer
  : TSportType extends "basketball"
  ? BasketballPlayer
  : never;

const player1: Player<"soccer"> = {
  name: "John",
  age: 30,
  something1: "something",
  sport: "soccer",
};

const player2: Player<"tennis"> = {
  name: "John",
  age: 30,
  something2: "something",
  sport: "tennis",
};

function getPlayer(sport: SportType) {
  if (sport === "soccer") {
    return {
      name: "Anthony",
      age: 50,
      something1: "something",
      sport: "soccer",
    }}}

console.log(getPlayer("soccer"));