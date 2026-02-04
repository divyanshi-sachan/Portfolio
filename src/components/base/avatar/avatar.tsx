import { cx } from "@/utils/cx";

interface AvatarProps {
  src?: string;
  alt?: string;
  size?: "sm" | "md" | "lg";
  focusable?: boolean;
  className?: string;
}

const sizeClasses = {
  sm: "w-8 h-8",
  md: "w-10 h-10",
  lg: "w-12 h-12",
};

export function Avatar({ src, alt = "", size = "md", focusable = false, className }: AvatarProps) {
  return (
    <img
      src={src || "https://via.placeholder.com/40"}
      alt={alt}
      className={cx(
        "rounded-full object-cover",
        sizeClasses[size],
        className
      )}
      tabIndex={focusable ? 0 : -1}
    />
  );
}

