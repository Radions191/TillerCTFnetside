export interface Players {
  affiliation?: string;
  fields: [
    {
      value: string;
    },
  ];
  id: number;
  name: string;
  wins: number;
  avatar?: string;
}

export interface HallOfFamers {
  name: string;
  yearOfVictory: number;
  classWhenWon: string;
  avatar?: string;
}
