import { ChevronLeft, ChevronRight } from "lucide-react";
import { cx } from "@/utils/cx";

interface PaginationPageDefaultProps {
  rounded?: boolean;
}

export function PaginationPageDefault({ rounded = false }: PaginationPageDefaultProps) {
  return (
    <nav className="flex items-center justify-center gap-2" aria-label="Pagination">
      <button
        type="button"
        className={cx(
          "flex items-center justify-center w-10 h-10 border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors",
          rounded ? "rounded-full" : "rounded-md"
        )}
        aria-label="Previous page"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>
      {[1, 2, 3, 4, 5].map((page) => (
        <button
          key={page}
          type="button"
          className={cx(
            "flex items-center justify-center w-10 h-10 border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors",
            page === 1 && "bg-gray-100 dark:bg-gray-700 font-semibold",
            rounded ? "rounded-full" : "rounded-md"
          )}
        >
          {page}
        </button>
      ))}
      <button
        type="button"
        className={cx(
          "flex items-center justify-center w-10 h-10 border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors",
          rounded ? "rounded-full" : "rounded-md"
        )}
        aria-label="Next page"
      >
        <ChevronRight className="w-5 h-5" />
      </button>
    </nav>
  );
}

