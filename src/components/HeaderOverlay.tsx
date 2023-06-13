import React, { useEffect, useState } from "react";
import styles from "../app/page.module.css";
import { HiSearch } from "react-icons/hi";
import { MdAdd, MdClose, MdLocationOn, MdRemove } from "react-icons/md";

interface Data {
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
    setOverlay: (value: boolean) => void;
    location: string | null;
    setLocation: (value: string) => void;
    guests: number;
    setGuests: (value: number) => void;
    optionActive: string;
    setOptionActive: (value: string) => void;
    adults: number;
    setAdults: (value: number) => void;
    children: number;
    setChildren: (value: number) => void;
}

export default function HeaderOverlay({
    setOverlay,
    location,
    setLocation,
    guests,
    setGuests,
    optionActive,
    setOptionActive,
    adults,
    setAdults,
    children,
    setChildren,
}: Props) {
    const data: Data[] = require("../data/stays.json");
    const citys = data
        .map((item) => item.city)
        .filter((value, index, item) => item.indexOf(value) === index);

    function handleAdults(signal: string) {
        signal === "minus" && adults != 0 ? setAdults(adults - 1) : null;
        signal === "plus" ? setAdults(adults + 1) : null;
    }

    function handleChildren(signal: string) {
        signal === "minus" && children != 0 ? setChildren(children - 1) : null;
        signal === "plus" ? setChildren(children + 1) : null;
    }

    function handleGuests() {
        setGuests(adults + children);
    }

    function handleLocation(city: string) {
        location === city ? setLocation("") : setLocation(city);
    }

    useEffect(() => {
        handleGuests();
    }, [adults, children]);

    return (
        <>
            <section className={styles.overlay}>
                <div className={styles.closeOverlay}>
                    <span>Edit your search</span>

                    <MdClose
                        className={styles.closeIcon}
                        onClick={() => setOverlay(false)}
                    />
                </div>

                <div className={styles.overlayOptionsContainer}>
                    <div className={styles.overlayOptions}>
                        <div className={styles.option}>
                            <button
                                className={styles.optionButton}
                                style={
                                    optionActive !== "location"
                                        ? { borderColor: "#ffffff" }
                                        : {}
                                }
                                onClick={() => setOptionActive("location")}
                            >
                                <h6 className={styles.optionTitle}>LOCATION</h6>
                                <span
                                    className={styles.optionValue}
                                    style={location ? {} : { color: "#BDBDBD" }}
                                >
                                    {location
                                        ? location + ", Finland"
                                        : "Add location"}
                                </span>
                            </button>

                            {optionActive === "location" ? (
                                <div className={styles.overlayValues}>
                                    {citys.map((city) => {
                                        return (
                                            <button
                                                className={styles.valueButton}
                                                key={city}
                                                onClick={() =>
                                                    handleLocation(city)
                                                }
                                            >
                                                <MdLocationOn
                                                    className={
                                                        styles.locationIcon
                                                    }
                                                />
                                                <span>{city}, Finland</span>
                                            </button>
                                        );
                                    })}
                                </div>
                            ) : null}
                        </div>

                        <div className={styles.option}>
                            <button
                                className={styles.optionButton}
                                style={
                                    optionActive !== "guests"
                                        ? { borderColor: "#ffffff" }
                                        : {}
                                }
                                onClick={() => setOptionActive("guests")}
                            >
                                <h6 className={styles.optionTitle}>GUESTS</h6>
                                <span
                                    className={styles.optionValue}
                                    style={
                                        guests === 0 ? { color: "#BDBDBD" } : {}
                                    }
                                >
                                    {guests === 0 ? "Add" : guests} guests
                                </span>
                            </button>

                            {optionActive === "guests" ? (
                                <div className={styles.overlayValues}>
                                    <div className={styles.guestsValues}>
                                        <h4
                                            className={styles.guestsValuesTitle}
                                        >
                                            Adults
                                        </h4>

                                        <span
                                            className={
                                                styles.guestsValuesDescription
                                            }
                                        >
                                            Ages 13 or above
                                        </span>

                                        <div>
                                            <button
                                                onClick={() =>
                                                    handleAdults("minus")
                                                }
                                            >
                                                <MdRemove
                                                    className={styles.signal}
                                                />
                                            </button>

                                            <span
                                                className={styles.valuesNumber}
                                            >
                                                {adults}
                                            </span>

                                            <button
                                                onClick={() =>
                                                    handleAdults("plus")
                                                }
                                            >
                                                <MdAdd
                                                    className={styles.signal}
                                                />
                                            </button>
                                        </div>
                                    </div>

                                    <div className={styles.guestsValues}>
                                        <h4
                                            className={styles.guestsValuesTitle}
                                        >
                                            Children
                                        </h4>

                                        <span
                                            className={
                                                styles.guestsValuesDescription
                                            }
                                        >
                                            Ages 2 - 12
                                        </span>

                                        <div>
                                            <button
                                                onClick={() =>
                                                    handleChildren("minus")
                                                }
                                            >
                                                <MdRemove
                                                    className={styles.signal}
                                                />
                                            </button>

                                            <span
                                                className={styles.valuesNumber}
                                            >
                                                {children}
                                            </span>

                                            <button
                                                onClick={() =>
                                                    handleChildren("plus")
                                                }
                                            >
                                                <MdAdd
                                                    className={styles.signal}
                                                />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ) : null}
                        </div>
                    </div>

                    <div>
                        <button className={styles.searchButton}>
                            <HiSearch className={styles.searchIconOverlay} />{" "}
                            <span>Search</span>
                        </button>
                    </div>
                </div>
            </section>
            <button
                className={styles.buttonOverlay}
                onClick={() => setOverlay(false)}
            ></button>
        </>
    );
}
