import { cn } from "@/lib/utils";

const Title = ({
  children,
  classList,
}: {
  children: React.ReactNode;
  classList?: string;
}) => {
  return <h2 className={cn("font-bold text-xl", classList)}>{children}</h2>;
};

export default Title;
