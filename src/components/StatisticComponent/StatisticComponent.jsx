import React from "react";
import PropTypes from "prop-types";
import styles from "../Statistics/Statistics.module.css"

const labelStyles = [styles.label]
const percentageStyles = [styles.percentage]
const item = [styles.item]

const StatisticComponent = ({label, percentage}) => {
return( 
<li className={item}>
<span className={labelStyles}>{label}</span>
<span className={percentageStyles}>{percentage}%</span>
</li>
)
    

}

export default StatisticComponent

StatisticComponent.propTypes = {
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired ,

  }
