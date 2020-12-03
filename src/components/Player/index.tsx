import React from "react";
import {
  Container,
  Button,
  PlayerControls,
  PlaybackBar,
  ProgressBar,
  PlaybackTime,
} from "./styles";
import * as SvgIcons from "../Icons";
import { usePlayer } from "../../contexts/player";

export default function Player() {
  const { song, playSong } = usePlayer();

  return (
    <Container>
      <PlayerControls>
        <Button>
          <SvgIcons.Shuffle />
        </Button>
        <Button>
          <SvgIcons.Backward />
        </Button>
        <Button main={true} onClick={() => playSong()} disabled={!song}>
          {song?.playing ? <SvgIcons.Pause /> : <SvgIcons.Play />}
        </Button>
        <Button>
          <SvgIcons.Forward />
        </Button>
        <Button>
          <SvgIcons.Repeat />
        </Button>
      </PlayerControls>
      <PlaybackBar>
        <PlaybackTime>0:00</PlaybackTime>
        <ProgressBar />
        <PlaybackTime>0:00</PlaybackTime>
      </PlaybackBar>
    </Container>
  );
}
