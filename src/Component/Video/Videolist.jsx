import React, { useEffect, useState } from "react";
import { BASE__PATH } from "../../urls";
import { useUserQuery } from "../../Hooks/useUserQuery";
import axios from "axios";
import { VideoThumbnail } from "../index";
import styles from "./Video.module.css";
import Loader from "react-loader-spinner";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { toastErr } from "../../utils";

const Videolist = () => {
  const [videoList, setVideoList] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const { textQuery, numQuery } = useUserQuery();

  useEffect(() => {
    (async function () {
      try {
        if (!textQuery || !numQuery) {
          setVideoList([]);
          return;
        }
        setLoading(true);
        const {
          data: { status, results },
        } = await axios.get(`${BASE__PATH}`, {
          params: { q: textQuery, numResults: numQuery },
        });
        status && setVideoList(results);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        toastErr(error.message);
      }
    })();
  }, [textQuery, numQuery]);

  return (
    <>
      <ToastContainer />
      {isLoading ? (
        <div className={styles.loader__wrapper}>
          <Loader type="Bars" color="#333" height={100} width={100} />
        </div>
      ) : (
        <div className={styles.videolist}>
          {Array.isArray(videoList) && videoList.length > 0 ? (
            videoList.map(({ heading, tags, video }, idx) => {
              return (
                <VideoThumbnail
                  heading={heading}
                  tags={tags}
                  video={video}
                  key={idx}
                />
              );
            })
          ) : (
            <p>No videos to show, Search for videos</p>
          )}
        </div>
      )}
    </>
  );
};

export { Videolist };