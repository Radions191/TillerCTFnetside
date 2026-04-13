export interface Players {
  affiliation?: string;
  fields: [
    {
      value: string;
    },
  ];
  id: number;
  name: string;
  avatar?: string;
}

export interface HallOfFamers {
  name: string;
  yearOfVictory: number;
  classWhenWon: string;
  avatar?: string;
}

export interface CombinedPlayer extends Players {
  attempts: number[];
  solves: number[];
  place: number;
  score: number;
}
