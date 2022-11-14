import React from "react";
import PropTypes from "prop-types";
import StatisticComponent from "../StatisticComponent/StatisticComponent"
import styles from "../Statistics/Statistics.module.css"

const statistics = [styles.statistics]
const titleStyle = [styles.title]
const stat_list = [styles.stat_list]



const Statistics = ({title, stats}) => {
   return (
     <section className={statistics}>
       {title && 
         <h2 className={titleStyle}>{title}</h2>
       }

  <ul className={stat_list}>


    {stats.map(stat => (
          <StatisticComponent
          label={stat.label}
          percentage={stat.percentage}
          key = {stat.id}
          />
        ))}
  </ul>
</section>
    );
  };

  Statistics.defaultProps = {
    title: ""

  }

  Statistics.propTypes = {
    title: PropTypes.string,

  }

  export default Statistics
