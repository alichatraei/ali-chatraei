import superiorExpertise, {
  superiorExpertiseObjectType,
} from "@/utils/superiorExpertise";

const SuperiorExpertise = () => {
  return (
    <div className="bg-background-gray py-16 w-full px-12 mt-16">
      <h6 className="text-secondary text-30">
        <span className="font-bold">Superior </span>
        Expertise.
      </h6>
      <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3">
        {superiorExpertise.map(
          (expertise: superiorExpertiseObjectType, index: number) => (
            <div
              key={index}
              className="mt-12 flex flex-col justify-start"
            >
              <span className="text-18 text-text-gray">
                {++index}. {expertise.category}
              </span>
              <span className="text-22 text-secondary mt-1">
                {expertise.skill_name}
              </span>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default SuperiorExpertise;
