"use client";

import List from "@/components/List";
import styles from "./page.module.css";
import Header from "@/components/Header";
import { useState } from "react";
import HeaderOverlay from "@/components/HeaderOverlay";

export default function Home() {
    const [overlay, setOverlay] = useState<boolean>(false);
    const [location, setLocation] = useState<string | null>(null);
    const [guests, setGuests] = useState<number>(0);
    const [stays, setStays] = useState<number>(0);
    const [adults, setAdults] = useState<number>(0);
    const [children, setChildren] = useState<number>(0);
    const [optionActive, setOptionActive] = useState<string>("location");

    return (
        <>
            {overlay ? (
                <HeaderOverlay
                    setOverlay={setOverlay}
                    location={location}
                    setLocation={setLocation}
                    guests={guests}
                    setGuests={setGuests}
                    optionActive={optionActive}
                    setOptionActive={setOptionActive}
                    adults={adults}
                    setAdults={setAdults}
                    children={children}
                    setChildren={setChildren}
                />
            ) : null}
            <Header
                overlay={overlay}
                setOverlay={setOverlay}
                setOptionActive={setOptionActive}
                location={location}
                guests={guests}
            />
            <main className={styles.main}>
                <div className={styles.title}>
                    <div>
                        <h1>Stays in Finland</h1>
                    </div>

                    <div>
                        <span>{stays} stays</span>
                    </div>
                </div>

                <List location={location} guests={guests} setStays={setStays} />
            </main>
        </>
    );
}
