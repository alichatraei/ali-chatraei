import workJourney, { workJourneyObjectType } from "@/utils/workJourney";
import Link from "next/link";

const WorkJourney = () => {
  return (
    <div className="text-accent text-3xl  text-left justify-start w-full px-12 py-16">
      <h6 className="text-white text-30">
        <span className="font-bold">Work </span>
        Journey.
      </h6>
      <div className="grid lg:grid-cols-1 xl:grid-cols-2 sm:grid-cols-1 gap-y-3 md:gap-x-16 mt-16">
        {workJourney.map((work: workJourneyObjectType, index: number) => (
          <div key={index} className="flex flex-col justify-start">
            <span className="text-pink font-bold text-lg">
              {work.date} - {work.job_position}
            </span>
            <Link
              href={work.job_company_website_url}
              target="_blank"
              className="text-white text-22 decoration-transparent w-fit"
            >
              {work.job_company}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WorkJourney;
