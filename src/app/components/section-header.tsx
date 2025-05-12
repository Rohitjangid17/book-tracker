import { BookOpen } from "lucide-react";
import { type SectionHeader as SectionHeaderProps } from "../shared/interfaces/common.interface";

const SectionHeader = ({ title, description, icon = true }: SectionHeaderProps) => {
    return (
        <>
            <div className="flex flex-col items-center justify-center mb-10">
                <div className="flex items-center gap-2 mb-4">
                    {icon && <BookOpen className="h-8 w-8" />}
                    <h1 className="text-3xl font-bold">{title}</h1>
                </div>
                <p className="text-muted-foreground text-center max-w-2xl">
                    {description}
                </p>
            </div>
        </>
    )
}

export default SectionHeader;
