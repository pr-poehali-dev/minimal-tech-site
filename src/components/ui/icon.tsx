
import React from "react";
import { LucideIcon, icons } from "lucide-react";
import { cn } from "@/lib/utils";

interface IconProps extends React.HTMLAttributes<HTMLElement> {
  name: string;
  color?: string;
  size?: number;
  strokeWidth?: number;
  fallback?: string;
}

const Icon: React.FC<IconProps> = ({
  name,
  color,
  size = 24,
  strokeWidth = 2,
  fallback = "HelpCircle",
  className,
  ...props
}) => {
  // Check if the icon exists in lucide-react
  const LucideIconComponent = icons[name as keyof typeof icons] || icons[fallback as keyof typeof icons];

  return (
    <LucideIconComponent
      color={color}
      size={size}
      strokeWidth={strokeWidth}
      className={cn(className)}
      {...props}
    />
  );
};

export default Icon;
