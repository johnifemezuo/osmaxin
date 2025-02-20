export default function PageTitle({
  children,
  className,
}: Readonly<{
  children: React.ReactNode | string;
  className?: string;
}>) {
  return (
    <h1 className={`${className} text-2xl lg:text-3xl font-semibold `}>
      {children}
    </h1>
  );
}
