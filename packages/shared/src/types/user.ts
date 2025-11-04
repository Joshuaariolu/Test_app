export interface User {
  id: string;
  email: string;
  phone?: string;
  name: string;
  role: 'learner' | 'tutor' | 'admin';
  profileImage?: string;
  preferences: UserPreferences;
  createdAt: Date;
  updatedAt: Date;
}

export interface UserPreferences {
  learningGoal: 'basic' | 'conversational' | 'fluent';
  dailyGoalMinutes: number;
  notificationsEnabled: boolean;
  preferredStudyTime: string;
}