import { useEffect, useState } from "react";
import styles from "./banner.module.css";
import Request from "../../utils/request";
import Instance from "../../utils/Axios";
function Banner() {
  const [movie, setmovie] = useState({});
  useEffect(() => {
    Instance.get(Request.fetchPopuar).then((res) =>
      setmovie(res.data.results[

        Math.floor(Math.random() * res.data.results.length)

      ])
    );
  }, []);

  const url =
    "https://image.tmdb.org/t/p/original/";
  function trancate(str, char) {
    return str?.length > char ? str.slice(0, 150) + "...." : str
  }
  return (
    <>
      <div
        style={{ backgroundImage: `url(${url}${movie.backdrop_path})` }}
        className={styles.banner_container}
      >
        <div className={styles.banner_container_content}>
          <h2>{movie.original_title || movie.title}</h2>
          <div className={styles.banner_button}>
            <button>Play</button>
            <button>My LIst</button>
          </div>
          <div>
            <p>{trancate(movie.overview, 150)}</p>
          </div>
        </div>
        <div className={styles.shadow}></div>
      </div>
    </>
  );
}

export default Banner;
