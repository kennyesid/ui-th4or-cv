interface NavbarContent {
  home: string;
  job: string;
  service: string;
  contactMe: string;
  reference: string;
}

interface InitHomeContent {
  title: string;
  contactMe: string;
  contactMeDescription: string;
  descriptionTitle: string;
  descriptionBodyOne: string;
  descriptionBodyTwo: string;
  descriptionBodyThree: string;
  descriptionBodyFor: string;
}

interface HeaderContent {
  title: string;
}

interface JobExperience {
  jobTitle: string;
  one: string;
  two: string;
  three: string;
  for: string;
}

interface JobContent {
  jobConsultorFreelance: JobExperience;
  jobGanadero: JobExperience;
  jobBMSC: JobExperience;
  jobBnb: JobExperience;
  jobBCP: JobExperience;
}

interface LanguageContent {
  language: string;
  click: string;
  navbar: NavbarContent;
  initHome: InitHomeContent;
  header: HeaderContent;
  job: JobContent;
  downloadCV: string;
}

export interface DataInformation {
  spanish: LanguageContent;
  english: LanguageContent;
}
