export type University = {
  webPages: string[];
  domains: string[];
  country: string;
  name: string;
  stateProvince: null;
  alphaTwoCode: string;
};

export type Education = {
  university: University | null;
  startDate: string | Date;
  endDate: string | Date;
  description: string;
  isPresent: boolean;
  fieldOfStudy: string;
  added: number;
};
