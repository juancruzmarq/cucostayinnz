export const Header = () => {
  return (
    <header className="flex flex-row p-8 md:gap-3 bg-background gap-5 border-b-white-primary/30 border-b  justify-items-center align-middle items-center justify-center m-2">
      <h1 className="font-bold text-3xl sm:text-4xl md:text-5xl text-white-primary">
        Cuco stay in{" "}
      </h1>
      <img
        src="/logo.png"
        alt="New zealand leaf logo"
        className="inline-block w-12 sm:w-15 md:w-24"
      />
    </header>
  );
};
