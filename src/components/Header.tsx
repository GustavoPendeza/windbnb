import React from "react";
import { HiSearch } from "react-icons/hi";
import styles from "../app/page.module.css";

interface Props {
    overlay: boolean;
    setOverlay: (value: boolean) => void;
    setOptionActive: (value: string) => void;
    location: string | null;
    guests: number;
}

export default function Header({
    overlay,
    setOverlay,
    setOptionActive,
    location,
    guests,
}: Props) {
    return (
        <header className={styles.header}>
            <img src="logo.svg" alt="Logo Windbnb" />

            <div className={styles.filter}>
                <div className={styles.filterOptions}>
                    <button
                        onClick={() => {
                            setOverlay(true);
                            setOptionActive("location");
                        }}
                        style={location ? {} : { color: "#BDBDBD" }}
                    >
                        {location ? location + ", Finland" : "Add location"}
                    </button>
                </div>

                <div className={styles.filterOptions}>
                    <button
                        onClick={() => {
                            setOverlay(true);
                            setOptionActive("guests");
                        }}
                        style={guests === 0 ? { color: "#BDBDBD" } : {}}
                    >
                        {guests === 0 ? "Add" : guests} guests
                    </button>
                </div>

                <div className={styles.filterOptions}>
                    <HiSearch
                        className={styles.searchIcon}
                        onClick={() => setOverlay(true)}
                    />
                </div>
            </div>
        </header>
    );
}
