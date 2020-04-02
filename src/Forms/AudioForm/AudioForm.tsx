import React, { FC, useState } from "react";
import useDropdown from "../useDropdown";
import { genre, format } from "./audioListing";
import { Container, Center } from "./audioFormCSS";
import { condition } from "../formListing";

const AudioForm: FC = () => {
  const [audioFormat, FormatDropdown] = useDropdown("Format", "LP", format);
  const [audioGenre, GenreDropdown] = useDropdown("Genre", "Rock", genre);
  const [audioCondition, ConditionDropdown] = useDropdown(
    "Condition",
    "Good",
    condition
  );

  const [keyword, setKeyword] = useState([]);
  const [note, setNote] = useState();

  return (
    <div>
      <Center>
        <Container>
          <form>
            <label htmlFor="artist">
              <input
                id="artist"
                value={artist}
                placeholder="artist"
                onChange={(e) => setName(e.target.value)}
              />
            </label>

            <label htmlFor="album">
              <input
                id="album"
                value={album}
                placeholder="album"
                onChange={(e) => setName(e.target.value)}
              />
            </label>

            <label htmlFor="year">
              <input
                id="year"
                value={year}
                placeholder="year"
                onChange={(e) => setName(e.target.value)}
              />
            </label>

            {audioFormat}

            <FormatDropdown />
            {audioGenre}
            <GenreDropdown />
            {audioCondition}
            <ConditionDropdown />
            <label htmlFor="keyword">
              <input
                id="keyword"
                value={keyword}
                placeholder="keyword"
                onChange={(e) => setName(e.target.value)}
              />
            </label>

            <label htmlFor="notes">
              <input
                id="notes"
                value={notes}
                placeholder="notes"
                onChange={(e) => setName(e.target.value)}
              />
            </label>
          </form>
        </Container>
      </Center>
    </div>
  );
};
export default AudioForm;
