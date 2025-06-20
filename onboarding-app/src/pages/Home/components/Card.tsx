import React from "react";
import "../styles/Home.css";

export function Card({ children }: { children: React.ReactNode }) {
    return <div className="card">{children}</div>;
}

export function CardContent({ children }: { children: React.ReactNode }) {
    return <div className="card-content">{children}</div>;
}

export function CardImage({ children }: { children: React.ReactNode }) {
    return <div className="cardImage">{children}</div>;
}
