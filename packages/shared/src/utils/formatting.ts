export function formatDuration(minutes: number): string {
  if (minutes < 60) {
    return `${minutes}m`;
  }
  
  const hours = Math.floor(minutes / 60);
  const remainingMinutes = minutes % 60;
  
  if (remainingMinutes === 0) {
    return `${hours}h`;
  }
  
  return `${hours}h ${remainingMinutes}m`;
}

export function formatPoints(points: number): string {
  if (points < 1000) {
    return points.toString();
  }
  
  if (points < 1000000) {
    return `${(points / 1000).toFixed(1)}k`;
  }
  
  return `${(points / 1000000).toFixed(1)}M`;
}

export function formatDate(date: Date): string {
  return new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  }).format(date);
}