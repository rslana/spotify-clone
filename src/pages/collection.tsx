import React, { useEffect, useState } from "react";
import { Container } from "../styles/pages";
import { useHistory, useParams } from "react-router-dom";
import Playlist from "./playlist";

type ParamsProps = {
  page: string;
};

const pages = ["playlists", "podcasts", "artists", "albums"];

export default function Collection() {
  const params = useParams<ParamsProps>();
  const history = useHistory();
  const [page, setPage] = useState("");
  useEffect(() => {
    setPage(params.page);
    if (!pages.includes(params.page)) {
      history.push("/");
    }
  }, [history, params]);

  return (
    <Container>
      {page === "playlists" && <Playlist />}
      {page === "podcasts" && <Playlist />}
      {page === "artists" && <Playlist />}
      {page === "albums" && <Playlist />}
    </Container>
  );
}
