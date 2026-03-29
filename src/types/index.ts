export interface FamilyMember {
  id: string;
  name: string;
  nickname?: string;
  role: string; // "Ayah" | "Ibu" | "Anak ke-1" dst
  photo: string;
  bio: string;
  birthDate: string;
  quotes: string[];
  slug: string;
}

export interface Memory {
  id: string;
  type: "photo" | "video";
  url: string;
  thumbnail?: string;
  date: string;
  description?: string;
  memberId?: string; // siapa yang ada di foto ini
  isFavorite?: boolean;
}

export interface MusicTrack {
  id: string;
  title: string;
  artist?: string;
  url: string;
  cover?: string;
}