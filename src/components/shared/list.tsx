import { cn } from "@/lib/utils";

const List = ({
  children,
  classList,
}: {
  children: React.ReactNode;
  classList?: string;
}) => {
  return (
    <ul
      className={cn(
        "grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3",
        classList
      )}
    >
      {children}
    </ul>
  );
};

export default List;
