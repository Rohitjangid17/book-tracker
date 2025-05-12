import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface CustomButtonProps {
    title?: string;
    isMode?: boolean;
    variant?: "default" | "outline";
    onClick?: () => void;
    disabled?: boolean;
    className?: string;
    icon?: ReactNode;
    children?: ReactNode;
    type?: "button" | "submit" | "reset";
}

const CustomButton = ({
    title,
    isMode = true,
    variant = "default",
    onClick,
    disabled = false,
    className = "",
    icon,
    children,
    type = "button"
}: CustomButtonProps) => {
    const baseStyle = isMode
        ? "bg-gray-900 text-white hover:bg-gray-800"
        : "bg-white text-gray-900 border border-gray-300 hover:bg-gray-100";

    return (
        <Button
            type={type}
            onClick={onClick}
            variant={variant}
            disabled={disabled}
            className={cn(
                "cursor-pointer transition-colors",
                disabled && "cursor-not-allowed opacity-70",
                variant === "default" ? baseStyle : "",
                className
            )}>
            {icon && <span className="mr-2">{icon}</span>}
            {children || title}
        </Button>
    );
};

export default CustomButton;