export default function SubTitle({
  children,
}: {
  children: React.ReactNode | string;
}) {
  return (
    <div className="text-secondary  grid">
      <div className="bg-secondary h-1 w-12 p-"></div>
      <h5 className="lg:text-lg font-medium uppercase">{children}</h5>

      
    </div>
  );
}
