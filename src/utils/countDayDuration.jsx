  export function countDuration(first, last) {
    let diff = new Date(last).getTime() - new Date(first).getTime();
    return Math.ceil(diff / 1000 / 3600 / 24);
  }