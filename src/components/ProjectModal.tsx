"use client";

import { useEffect, useCallback, type ReactNode } from "react";
import { X } from "lucide-react";
import { cls } from "@/lib/utils";
import Button from "@/components/button/Button";

interface ProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
  project: {
    id: string;
    name: string;
    brand: string;
    fullDescription: ReactNode;
    imageSrc: string;
    imageAlt?: string;
    projectLink?: string;
    projectLinkText?: string;
  } | null;
}

export default function ProjectModal({ isOpen, onClose, project }: ProjectModalProps) {
  const handleEscapeKey = useCallback((event: KeyboardEvent) => {
    if (event.key === "Escape") {
      onClose();
    }
  }, [onClose]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      document.addEventListener("keydown", handleEscapeKey);
    } else {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", handleEscapeKey);
    }
    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", handleEscapeKey);
    };
  }, [isOpen, handleEscapeKey]);

  if (!isOpen || !project) {
    return null;
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background-accent/80 backdrop-blur-sm"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="project-modal-title"
      aria-describedby="project-modal-description"
    >
      <div
        className="relative w-full max-w-content-width max-h-90vh overflow-y-auto rounded-theme-capped bg-card text-card-foreground shadow-lg p-6 md:p-8 flex flex-col gap-6"
        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the modal
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-foreground hover:text-accent transition-colors"
          aria-label="Close project details"
        >
          <X className="h-6 w-6" />
        </button>

        {project.imageSrc && (
          <img
            src={project.imageSrc}
            alt={project.imageAlt || project.name}
            className="w-full h-auto max-h-90 object-cover rounded-theme-capped"
          />
        )}

        <div className="flex flex-col gap-4">
          <p className="text-sm text-foreground/70">{project.brand}</p>
          <h2 id="project-modal-title" className="text-4xl font-medium text-foreground">
            {project.name}
          </h2>
          <div id="project-modal-description" className="text-base text-foreground/80 leading-normal">
            {project.fullDescription}
          </div>

          {project.projectLink && (
            <Button
              text={project.projectLinkText || "View Project"}
              href={project.projectLink}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4"
            />
          )}
        </div>
      </div>
    </div>
  );
}