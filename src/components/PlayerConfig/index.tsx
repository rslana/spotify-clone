import React, { useEffect, useState } from "react";
// import { format } from "date-fns";
import {
  Container,
  Button,
  VolumeBar,
  ProgressBar,
  ProgressBarTrack,
  ProgressBarRange,
  ProgressBarBullet,
} from "./styles";
import * as SvgIcons from "../Icons";
import { usePlayer } from "../../contexts/player";

export default function PlayerConfig() {
  const { audioElement } = usePlayer();
  const [currentVolume, setCurrentVolume] = useState<number>(
    audioElement?.volume || 0
  );
  const [muted, setMuted] = useState<boolean>(false);

  useEffect(() => {
    if (audioElement) {
      audioElement.onvolumechange = () => {
        if (!muted) setCurrentVolume(audioElement.volume);
      };
    }
  }, [audioElement, currentVolume, muted]);

  function getVolumeProgess() {
    return audioElement ? Number(audioElement.volume) * 100 : 100;
  }

  function handleChangeVolumeProgress(e: any) {
    if (audioElement && typeof audioElement.volume === "number") {
      if (muted) setMuted(false);
      audioElement.volume = e.target.value / 100;
    }
  }

  function handleMute(muted: boolean) {
    setMuted(muted);
    if (audioElement) {
      if (muted) {
        audioElement.volume = 0;
      } else {
        audioElement.volume = currentVolume;
      }
    }
  }

  return (
    <Container>
      <Button>
        <SvgIcons.Queue />
      </Button>
      <Button>
        <SvgIcons.Devices />
      </Button>
      <Button onClick={() => handleMute(!muted)}>
        {currentVolume === 0 || muted ? (
          <SvgIcons.MutedAudio />
        ) : (
          <SvgIcons.Audio />
        )}
      </Button>
      <VolumeBar>
        <ProgressBar>
          <ProgressBarTrack progress={getVolumeProgess()} />
          <ProgressBarBullet
            style={{ left: `calc(-4px + ${getVolumeProgess()}%)` }}
          />
          <ProgressBarRange
            type="range"
            min="0"
            max="100"
            value={getVolumeProgess()}
            onChange={handleChangeVolumeProgress}
          />
        </ProgressBar>
      </VolumeBar>
    </Container>
  );
}
