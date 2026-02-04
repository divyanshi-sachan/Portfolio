import { ReactNode } from "react";
import { cx } from "@/utils/cx";

interface TabItem {
  id: string;
  label: string;
}

interface TabsProps {
  className?: string;
  children: ReactNode;
}

export function Tabs({ className, children }: TabsProps) {
  return <div className={cx("w-full", className)}>{children}</div>;
}

interface TabListProps {
  type?: "underline" | "pills";
  size?: "sm" | "md" | "lg";
  items: TabItem[];
  className?: string;
}

export function TabList({ type = "underline", size = "md", items, className }: TabListProps) {
  return (
    <div className={cx("flex gap-4 border-b border-gray-200 dark:border-gray-700", className)}>
      {items.map((item) => (
        <button
          key={item.id}
          type="button"
          className={cx(
            "px-4 py-2 font-medium text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors border-b-2 border-transparent hover:border-gray-300 dark:hover:border-gray-600",
            size === "sm" && "px-2 py-1 text-sm",
            size === "lg" && "px-6 py-3 text-lg"
          )}
        >
          {item.label}
        </button>
      ))}
    </div>
  );
}

