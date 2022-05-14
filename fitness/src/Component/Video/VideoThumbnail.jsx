import React from "react";
import { Tags } from "../index";
import styles from "./Video.module.css";

const VideoThumbnail = ({ heading, tags, video }) => {
  return (
    <div className={styles.videothumbnail__wrapper}>
      <video className={styles.video__player} controls>
        <source src={video} type="video/mp4" />
      </video>
      <div className={styles.video__query__details}>
        <p className={styles.query__heading}>
          Heading:
          <span className={styles.query}>{heading.split(":")[0]}</span>
        </p>
        <Tags tags={tags} />
      </div>
    </div>
  );
};

export { VideoThumbnail };
