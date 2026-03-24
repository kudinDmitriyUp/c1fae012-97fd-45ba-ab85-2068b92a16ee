"use client";

import { type ReactNode } from "react";
import { X } from "lucide-react";
import { cls } from "@/lib/utils";
import Button from "@/components/button/Button";
import MediaContent from "@/components/shared/MediaContent";
import { useTheme } from "@/providers/themeProvider/ThemeProvider";
import type { InvertedBackground } from "@/providers/themeProvider/config/constants";

// Re-defining ProductCard type here to avoid circular dependency with ProductCardTwo
// In a larger app, this would be in a shared types file.
interface ProductCard {
    id: string;
    brand: string;
    name: string;
    price: string;
    rating: number;
    reviewCount: string;
    imageSrc: string;
    imageAlt?: string;
    isFavorited?: boolean;
    onFavorite?: () => void;
    onProductClick?: () => void;
    fullDescription?: ReactNode;
    projectLink?: string;
    projectLinkText?: string;
}

interface ProjectModalProps {
    isOpen: boolean;
    onClose: () => void;
    project: ProductCard | null;
    useInvertedBackground?: InvertedBackground;
}

export default function ProjectModal({
    isOpen,
    onClose,
    project,
    useInvertedBackground = false,
}: ProjectModalProps) {
    const theme = useTheme();
    const isInverted = useInvertedBackground === "invertDefault";

    if (!isOpen || !project) {
        return null;
    }

    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
            onClick={onClose}
            role="dialog"
            aria-modal="true"
            aria-labelledby="project-modal-title"
            aria-describedby="project-modal-description"
        >
            <div
                className={cls(
                    "relative w-full max-w-screen-md max-h-[90svh] overflow-y-auto rounded-theme-capped p-6 shadow-lg",
                    isInverted ? "bg-background text-foreground" : "bg-card text-card-foreground"
                )}
                onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside modal
            >
                <button
                    onClick={onClose}
                    className={cls(
                        "absolute top-4 right-4 p-2 rounded-full transition-colors",
                        isInverted ? "text-foreground hover:bg-background-accent" : "text-card-foreground hover:bg-accent"
                    )}
                    aria-label="Close project details"
                >
                    <X className="h-6 w-6" />
                </button>

                <div className="flex flex-col gap-6">
                    {project.imageSrc && (
                        <MediaContent
                            imageSrc={project.imageSrc}
                            imageAlt={project.imageAlt || project.name}
                            className="rounded-theme-capped overflow-hidden"
                            imageClassName="w-full h-auto object-cover"
                        />
                    )}

                    <h2 id="project-modal-title" className="text-4xl font-medium leading-[1.15] text-foreground">
                        {project.name}
                    </h2>
                    <p className={cls("text-lg", isInverted ? "text-foreground" : "text-card-foreground")}>
                        <span className="font-semibold">{project.brand}</span> - {project.reviewCount}
                    </p>

                    {project.fullDescription && (
                        <div id="project-modal-description" className={cls("text-base leading-normal", isInverted ? "text-foreground" : "text-card-foreground")}>
                            {project.fullDescription}
                        </div>
                    )}

                    <div className="flex flex-wrap gap-4 mt-4">
                        {project.projectLink && (
                            <Button
                                text={project.projectLinkText || "View Project"}
                                href={project.projectLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={cls(theme.primaryButtonStyle)}
                                aria-label={`View ${project.name} project`}
                            />
                        )}
                        <Button
                            text="Close"
                            onClick={onClose}
                            className={cls(theme.secondaryButtonStyle)}
                            aria-label="Close modal"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}