import React, { useEffect, useState } from "react";
import Stay from "./Stay";
import styles from "../app/page.module.css";

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
    location: string | null;
    guests: number;
    setStays: (value: number) => void;
}

export default function List({ location, guests, setStays }: Props) {
    const data: Data[] = require("../data/stays.json");
    const [filter, setFilter] = useState<Array<Data> | null>(null);

    useEffect(() => {
        if (location) {
            var newData = data.filter(function (d) {
                return d.city == location && d.maxGuests >= guests;
            });

            setFilter(newData);
        } else {
            var newData = data.filter(function (d) {
                return d.maxGuests >= guests;
            });

            location || guests ? setFilter(newData) : setFilter(data);
        }
    }, [location, guests]);

    useEffect(() => {
        filter ? setStays(filter!.length) : setStays(data.length);
    }, [filter]);

    return (
        <section className={styles.section}>
            {filter
                ? filter.map((stay) => {
                      return (
                          <Stay
                              stay={stay}
                              key={stay.city + stay.country + stay.title}
                          />
                      );
                  })
                : null}
        </section>
    );
}
