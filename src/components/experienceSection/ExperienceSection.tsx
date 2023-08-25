import experiences, { experienceObjectType } from "@/utils/tools";

const ExperienceSection = () => {
  return (
    <>
      {experiences.map((item: experienceObjectType, index: number) => (
        <div
          key={index}
          className="text-accent text-3xl text-left justify-start w-full px-12 py-16"
        >
          <span className="">{item.title}</span>
          <div className="grid lg:grid-cols-4 xl:grid-cols-6 grid-cols-3 gap-y-3 md:gap-x-16 mt-16">
            {item.icons.map((icon: any, index: number) => (
              <div
                key={index}
                className="w-20 h-20 bg-accent rounded-md flex items-center justify-center mx-auto"
              >
                {icon}
              </div>
            ))}
          </div>
        </div>
      ))}
    </>
  );
};

export default ExperienceSection;
