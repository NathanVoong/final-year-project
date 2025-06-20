import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Home.css";

interface ButtonProps {
    children: React.ReactNode;
    variant?: "default" | "ghost";
    destination?: string;
}

export function Button({ children, variant = "default", destination }: ButtonProps) {
    const navigate = useNavigate();

    const handleClick = () => {
        if (destination) navigate(destination);
    };

    return (
        <button className={`btn btn-${variant}`} onClick={handleClick}>
            {children}
        </button>
    );
}
