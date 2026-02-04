import { useState, useRef, useEffect, ReactNode } from "react";
import { ChevronDown } from "lucide-react";
import { cx } from "@/utils/cx";

interface SelectItem {
  id: string;
  label: string;
}

interface SelectProps {
  "aria-label"?: string;
  size?: "sm" | "md" | "lg";
  selectedKey?: string;
  onSelectionChange?: (value: string) => void;
  items: SelectItem[];
  children: (item: SelectItem) => ReactNode;
}

export function Select({
  "aria-label": ariaLabel,
  size = "md",
  selectedKey,
  onSelectionChange,
  items,
  children,
}: SelectProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState(selectedKey || items[0]?.id);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (selectedKey !== undefined) {
      setSelected(selectedKey);
    }
  }, [selectedKey]);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const selectedItem = items.find((item) => item.id === selected);

  const handleSelect = (id: string) => {
    setSelected(id);
    setIsOpen(false);
    onSelectionChange?.(id);
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        type="button"
        aria-label={ariaLabel}
        onClick={() => setIsOpen(!isOpen)}
        className={cx(
          "flex w-full items-center justify-between rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 px-3 py-2 text-sm",
          size === "sm" && "px-2 py-1 text-xs",
          size === "lg" && "px-4 py-3 text-base"
        )}
      >
        <span className="text-gray-900 dark:text-white">{selectedItem?.label}</span>
        <ChevronDown className={cx("h-4 w-4 text-gray-500 transition-transform", isOpen && "rotate-180")} />
      </button>
      {isOpen && (
        <div className="absolute z-10 mt-1 w-full rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 shadow-lg">
          {items.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => handleSelect(item.id)}
              className={cx(
                "w-full px-3 py-2 text-left text-sm hover:bg-gray-100 dark:hover:bg-gray-700",
                selected === item.id && "bg-gray-100 dark:bg-gray-700",
                size === "sm" && "px-2 py-1 text-xs",
                size === "lg" && "px-4 py-3 text-base"
              )}
            >
              {children(item)}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

Select.Item = function SelectItem({ id, children }: { id: string; children: ReactNode }) {
  return <span>{children}</span>;
};

