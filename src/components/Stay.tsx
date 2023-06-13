import React from "react";
import styles from "../app/page.module.css";
import { MdStarRate } from "react-icons/md";

interface Stay {
    city: string;
    country: string;
    superHost: boolean;
    title: string;
    rating: number;
    maxGuests: number;
    type: string;
    beds: number;
    photo: string;
}

interface Props {
    stay: Stay;
}

export default function Stay({ stay }: Props) {
    return (
        <div className={styles.stay}>
            <img src={stay.photo} alt={stay.title} />

            <div className={styles.info}>
                <div className={styles.infoText}>
                    {stay.superHost ? (
                        <span className={styles.superhost}>SUPER HOST</span>
                    ) : null}

                    <span className={styles.typenbed}>
                        {stay.type}
                        {stay.beds ? ` . ${stay.beds} beds` : null}
                    </span>
                </div>

                <div className={styles.rating}>
                    <MdStarRate className={styles.ratingIcon} />
                    <span>{stay.rating}</span>
                </div>
            </div>

            <h3 className={styles.stayTitle}>{stay.title}</h3>
        </div>
    );
}
