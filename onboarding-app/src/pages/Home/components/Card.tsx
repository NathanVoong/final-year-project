import React from "react";
import "../styles/Home.css";
import {Link} from "react-router-dom";

export function Card({ children, destination }: { children: React.ReactNode, destination: string }) {
    return (
        <Link to={destination} className="card-link">
            <div className="card">{children}</div>
        </Link>
    );
}

export function CardContent({ children }: { children: React.ReactNode }) {
    return <div className="card-content">{children}</div>;
}

export function CardImage({ children, destination }: { children: React.ReactNode, destination: string }) {
    const isExternal = destination.startsWith("http://") || destination.startsWith("https://");
    if (isExternal) {
        return (
            <a
                href={destination}
                className="card-link"
                target="_blank"
                rel="noopener noreferrer"
            >
                <div className="cardImage">{children}</div>
            </a>
        );
    }
    return (
        <Link to={destination} className="card-link">
            <div className="cardImage">{children}</div>
        </Link>
    );
}
