import FeatureIcon from "../Icons/FeatureIcon";

const FeaturedBtn = ({ title }: { title: string }) => {
  return (
    <div className="inline-flex border items-center space-x-3 lg:space-x-3 bg-white  rounded-full py-1.5 lg:py-2.5 pl-1.5 lg:pl-3 lg:pr-6 pr-4">
      <FeatureIcon />
      <p className="text-zinc-700 font-medium lg:text-base text-sm">{title}</p>
    </div>
  );
};

export default FeaturedBtn;
