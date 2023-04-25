export const formatViews = (views) => {
    if (views >= 1000000000) {
      return `${(views / 1000000000).toFixed(1)} B`;
    } else if (views >= 1000000) {
      return `${(views / 1000000).toFixed(1)} M`;
    } else if (views >= 100000) {
      return `${(views / 100000).toFixed(1)} K`;
    } else {
      return views.toLocaleString();
    }
  };