import React, { useState, useEffect } from "react";
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
  const { song, setSong } = usePlayer();
  const [audioElement, setAudioElement] = useState<HTMLAudioElement | null>(
    null
  );

  const playSong = () => {
    if (audioElement && song) {
      audioElement.paused ? audioElement.play() : audioElement.pause();
      setSong({ ...song, playing: !song.playing });
    }
  };

  useEffect(() => {
    if (!audioElement && song?.url) {
      const audio = new Audio(song.url);
      audio.src = song.url;
      audio.onloadeddata = () => setAudioElement(audio);
    }
  }, [song, audioElement]);

  return (
    <Container>
      <PlayerControls>
        <Button>
          <SvgIcons.Shuffle />
        </Button>
        <Button>
          <SvgIcons.Backward />
        </Button>
        <Button main={true} onClick={playSong} disabled={!song}>
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
