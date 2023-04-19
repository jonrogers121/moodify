import { useEffect, useState } from 'react';

enum moods {
  CALM = 'calm',
  DEPRESSION = 'depression',
  ENERGETIC = 'energetic',
  EXUBERENT = 'exhuberent',
  HAPPY = 'happy',
  SAD = 'sad',
}

interface IMood {
  mood: moods;
}

export const Mood = ({ mood }: IMood) => {
  const [songMood, setSongMood] = useState<string | undefined>();
  const [emoji, setEmoji] = useState<string | undefined>();

  useEffect(() => {
    if (mood === moods.CALM) {
      setSongMood('Calm');
      setEmoji('😌');
    }
    if (mood === moods.DEPRESSION) {
      setSongMood('Depression');
      setEmoji('😩');
    }
    if (mood === moods.ENERGETIC) {
      setSongMood('Energetic');
      setEmoji('🤗');
    }
    if (mood === moods.HAPPY) {
      setSongMood('Happy');
      setEmoji('😁');
    }
    if (mood === moods.EXUBERENT) {
      setSongMood('Exhuberent');
      setEmoji('🤩');
    }
    if (mood === moods.SAD) {
      setSongMood('Sad');
      setEmoji('😥');
    }
  }, [mood]);
  return (
    <>
      <p>{songMood}</p>
      <p>{emoji}</p>
    </>
  );
};
