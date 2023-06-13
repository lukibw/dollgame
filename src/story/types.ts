export interface Story {
  characters: Record<number, StoryCharacter>;
  chapters: Record<string, StoryChapter>;
}

export interface StoryCharacter {
  name: string;
  image?: string;
}

export interface StoryChapter {
  name: string;
  description: string;
  background: string;
  dialogs: Record<number, StoryDialog | StoryEnd>;
}

export interface StoryDialog {
  text: string;
  characterId: number;
  choices: StoryChoice[];
}

export interface StoryChoice {
  text: string;
  next: number;
}

export interface StoryEnd {
  text: string;
  success?: boolean;
}
