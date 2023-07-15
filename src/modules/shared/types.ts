export type University = {
  web_pages: string[];
  domains: string[];
  country: string;
  name: string;
  ['state-province']: null;
  alpha_two_code: string;
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
