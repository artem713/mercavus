export enum PassionLevel {
  Low = 'Low',
  Medium = 'Medium',
  High = 'High',
  VeryHigh = 'Very-High',
}

export interface IHobby {
  name: string
  level: PassionLevel | string
  date: string
}

