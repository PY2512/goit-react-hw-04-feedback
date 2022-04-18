import React from "react";
import PropTypes from 'prop-types'; 
import styles from "./statistics.module.css";

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => (
    
    <div>
        <ul className={styles.statistics_list}>
            <li className={styles.statistics_item}>Good: {good}</li>
            <li className={styles.statistics_item}>Neutral: {neutral}</li>
            <li className={styles.statistics_item}>Bad: {bad}</li>
            <li className={styles.statistics_item}>Total: {total}</li>
            <li className={styles.statistics_item}>
            Positive feedback: {positivePercentage}%
            </li>
        </ul>
    </div>
    );

    Statistics.propTypes = {
        good: PropTypes.number.isRequired,
        neutral: PropTypes.number.isRequired,
        bad: PropTypes.number.isRequired,
        total: PropTypes.number.isRequired,
        positivePercentage: PropTypes.number.isRequired,
    };

export default Statistics;