import styles from "./YelnyaSecond.module.css";
import React from "react";


export default function YelnyaSecond() {
    return (
        <div className={styles.btw}>
            <h2 className={styles.btwTitle}>By the way...</h2>
            <p className={styles.btwText}>
                The territory of the Yelnya nature reserve is one of the
                least explored in the country. The reason lies in the difficult accessibility of most of its sites.
                There are almost no deforestation and other agricultural activities, which makes the area ideal
                for ecological recreation. The lakes are filled with fish, a great variety of berries and mushrooms
                grow in forests and swamps.
            </p>
        </div>
    )
}