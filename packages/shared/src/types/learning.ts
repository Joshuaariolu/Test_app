export interface Lesson {
  id: string;
  title: string;
  description: string;
  level: number;
  order: number;
  type: 'vocabulary' | 'grammar' | 'conversation' | 'culture';
  exercises: Exercise[];
  culturalContext?: string;
  estimatedDuration: number;
}

export interface Exercise {
  id: string;
  lessonId: string;
  type: 'matching' | 'pronunciation' | 'translation' | 'listening';
  question: string;
  options?: string[];
  correctAnswer: string;
  audioUrl?: string;
  imageUrl?: string;
  points: number;
}

export interface UserProgress {
  userId: string;
  currentLevel: number;
  totalPoints: number;
  streakDays: number;
  lessonsCompleted: number;
  totalStudyTime: number;
  achievements: Achievement[];
  lastActiveDate: Date;
}

export interface Achievement {
  id: string;
  title: string;
  description: string;
  iconUrl: string;
  unlockedAt: Date;
}