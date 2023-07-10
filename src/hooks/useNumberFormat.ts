export function useNumberFormat() {
    return (num: number) => {
      if (num >= 1.0e+9) {
        return (num / 1.0e+9).toFixed(1) + "B";
      }
      if (num >= 1.0e+6) {
        return (num / 1.0e+6).toFixed(1) + "M";
      }
      return num.toFixed(1);
    }
  }