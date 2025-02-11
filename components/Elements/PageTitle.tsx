export default function PageTitle({
  children,
  className,
}: Readonly<{
  children: React.ReactNode | string;
  className?: string;
}>) {
  return (
    <h1 className={`${className} text-xl lg:text-3xl font-semibold `}>
      {children}
    </h1>
  );
}
