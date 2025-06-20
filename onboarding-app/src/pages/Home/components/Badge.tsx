import React from "react";
import "../styles/Home.css";

interface BadgeProps {
    children: React.ReactNode;
    variant?: "destructive" | "success" | "secondary";
}

export function Badge({ children, variant = "secondary" }: BadgeProps) {
    return <span className={`badge badge-${variant}`}>{children}</span>;
}
