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
  const { textQuery, numQuery, setTags, tags } = useUserQuery();
  const [selectedTag, setSelectedTag] = useState({});
  const [filteredVideos, setFilteredVideos] = useState([]);

  useEffect(() => {
    let timer;
    timer = setTimeout(() => {
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
          if (status) {
            setVideoList(results);
            let tags = results.map(({ tags }) => [...tags]);
            let alltags = [];
            for (let tag of tags) {
              alltags.push(...tag);
            }
            let obj = {};
            let uniqueTags = {};
            for (let tag of alltags) {
              // o(n)
              if (!obj[tag]) {
                uniqueTags[tag] = false;
                obj[tag] = tag;
              }
            }
            // tags = alltags.filter( o(n2)
            //   (tag, index) => alltags.indexOf(`${tag}`) === index
            // );
            setTags(uniqueTags);
          }
          setLoading(false);
        } catch (error) {
          setLoading(false);
          toastErr(error.message);
        }
      })();
    }, 1000);
    return function () {
      clearTimeout(timer);
    };
  }, [textQuery, numQuery, setTags]);

  useEffect(() => {
    setVideoList((prevState) => {
      let filter = [];
      if (prevState && Array.isArray(prevState) && prevState.length > 0) {
        for (let video of prevState) {
          for (let tag of video.tags) {
            if (selectedTag[tag]) {
              filter.push(video);
              break;
            }
          }
        }
      }
      return filter;
    });
  }, [selectedTag]);

  console.log({ selectedTag });

  return (
    <>
      <ToastContainer />
      {isLoading ? (
        <div className={styles.loader__wrapper}>
          <Loader type="Bars" color="#333" height={100} width={100} />
        </div>
      ) : (
        <>
          {tags &&
            Object.keys(tags).length > 0 &&
            Object.keys(tags).map((tag, index) => {
              return (
                <>
                  <label> {tag} </label>
                  <input
                    type="checkbox"
                    key={index}
                    checked={selectedTag[tag]} // 1
                    onChange={() =>
                      setSelectedTag(
                        (prevState) =>
                          selectedTag[tag] // 1
                            ? { ...prevState, [tag]: false } // 1
                            : { ...prevState, [tag]: true } // 1
                      )
                    }
                  />
                </>
              );
            })}
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
        </>
      )}
    </>
  );
};

export { Videolist };
