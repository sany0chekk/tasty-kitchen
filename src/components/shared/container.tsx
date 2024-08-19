import { cn } from "@/lib/utils";

const Container = ({
  children,
  classList,
}: {
  children: React.ReactNode;
  classList?: string;
}) => {
  return (
    <div
      className={cn(
        "max-w-screen-sm md:max-w-screen-md lg:max-w-[1170px] mx-auto px-4",
        classList
      )}
    >
      {children}
    </div>
  );
};

export default Container;
