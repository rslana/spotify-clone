import React, { useEffect, useState } from "react";
import { format } from "date-fns";
import {
  Container,
  Button,
  PlayerControls,
  PlaybackBar,
  ProgressBar,
  PlaybackTime,
  ProgressBarTrack,
  ProgressBarRange,
  ProgressBarBullet,
} from "./styles";
import * as SvgIcons from "../Icons";
import { usePlayer } from "../../contexts/player";

export default function Player() {
  const {
    song,
    playSong,
    playNextSong,
    playPreviousSong,
    audioElement,
  } = usePlayer();
  const [currentTime, setCurrentTime] = useState<number>(0);
  useEffect(() => {
    if (audioElement) {
      audioElement.ontimeupdate = () => {
        if (Math.floor(currentTime) !== Math.floor(audioElement.currentTime)) {
          setCurrentTime(audioElement.currentTime);
        }
      };

      audioElement.onended = () => {
        playNextSong();
      };
    }
  }, [audioElement, currentTime, playNextSong]);

  function getAudioTime(timeSeconds: number | undefined) {
    if (timeSeconds) {
      const today = new Date();
      today.setHours(0);
      today.setMinutes(0);
      today.setSeconds(timeSeconds);
      today.setMilliseconds(0);

      if (timeSeconds < 600) {
        return format(today, "m:ss");
      } else if (timeSeconds < 3600) {
        return format(today, "mm:ss");
      } else {
        return format(today, "hh:mm");
      }
    }
    return "0:00";
  }

  function getAudioProgess() {
    return audioElement?.duration && currentTime
      ? (Number(currentTime) * 100) / Number(audioElement.duration)
      : 0;
  }

  function handleChangeAudioProgress(e: any) {
    if (audioElement && audioElement.currentTime) {
      audioElement.currentTime = (audioElement.duration * e.target.value) / 100;
    }
  }

  return (
    <Container>
      <PlayerControls>
        <Button>
          <SvgIcons.Shuffle />
        </Button>
        <Button onClick={() => playPreviousSong()}>
          <SvgIcons.Backward />
        </Button>
        <Button main={true} onClick={() => playSong()} disabled={!song}>
          {song?.playing ? <SvgIcons.Pause /> : <SvgIcons.Play />}
        </Button>
        <Button onClick={() => playNextSong()}>
          <SvgIcons.Forward />
        </Button>
        <Button>
          <SvgIcons.Repeat />
        </Button>
      </PlayerControls>
      <PlaybackBar>
        <PlaybackTime>{getAudioTime(currentTime)}</PlaybackTime>
        <ProgressBar>
          <ProgressBarTrack progress={getAudioProgess()} />
          <ProgressBarBullet
            style={{ left: `calc(-4px + ${getAudioProgess()}%)` }}
          />
          <ProgressBarRange
            type="range"
            min="0"
            max="100"
            value={getAudioProgess()}
            onChange={handleChangeAudioProgress}
          />
        </ProgressBar>
        <PlaybackTime>{getAudioTime(audioElement?.duration)}</PlaybackTime>
      </PlaybackBar>
    </Container>
  );
}
