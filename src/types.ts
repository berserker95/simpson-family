export interface Simpson {
    firstname: string,
    lastname: string,
    email: string,
    birthdate: Date,
    gender: Gender
}

export enum Gender  {
    'M' = 'Male',
    'F' = 'Female',
    'O' = 'Other'
}
