export type workJourneyObjectType = {
  date: string;
  job_position: string;
  job_company: string;
  job_company_website_url: string;
};
const workJourney: Array<workJourneyObjectType> = [
  {
    date: "2020 to 2021",
    job_position: "React.js developer",
    job_company: "Fanap Co",
    job_company_website_url: "https://www.fanap.ir",
  },
  {
    date: "2021 to 2022",
    job_position: "Front-End developer",
    job_company: "Bimer",
    job_company_website_url: "https://www.bimer.ir",
  },
  {
    date: "2021 to Present",
    job_position: "Front-End lecturer & teaching assistant",
    job_company: "MaktabSharif",
    job_company_website_url: "https://www.maktabsharif.ir",
  },
  {
    date: "2023 to Present",
    job_position: "Front-End developer",
    job_company: "Graph-inc",
    job_company_website_url: "https://www.graph-inc.ir",
  },
];

export default workJourney;
