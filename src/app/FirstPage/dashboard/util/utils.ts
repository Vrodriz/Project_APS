// src/app/FirstPage/dashboard/util/utils.ts
export const generateDates = (days: number) => {
    const today = new Date();
    return Array.from({ length: days }, (_, i) => {
      const date = new Date(today);
      date.setDate(today.getDate() + i);
      return date.toLocaleDateString('pt-BR', { weekday: 'short', day: '2-digit' });
    });
  };
  