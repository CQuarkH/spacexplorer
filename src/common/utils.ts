export const formatToReadableDate = (isoDate: string): string => {
  const date = new Date(isoDate);

  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  return date.toLocaleDateString("en-US", options);
};

export const youtubeToEmbeddedLink = (link: string): string => {
  let videoID = "";

  if (link.includes("youtu.be")) {
    videoID = link.split("/").pop() || "";
  } else if (link.includes("youtube.com")) {
    const queryParams = new URLSearchParams(link.split("?")[1]);
    videoID = queryParams.get("v") || "";
  }

  return `https://www.youtube.com/embed/${videoID}`;
};

export const capitalizeFirstLetter = (text: string): string => {
  if (text.length === 0) return text;
  const firstLetter = text[0];
  return firstLetter.toUpperCase() + text.slice(1);
};

export const getSuccessRatioColor = (successRatio: number) => {
  if (successRatio >= 90) {
    return "text-green-500";
  } else if (successRatio >= 70) {
    return "text-yellow-400";
  } else if (successRatio >= 50) {
    return "text-yellow-600";
  } else {
    return "text-red-400";
  }
};

export const calculateSuccessRatio = (
  launchAttempts: number,
  launchSuccesses: number
): number => {
  if (launchSuccesses / launchAttempts === 0) return 0;
  return Number(((launchSuccesses / launchAttempts) * 100).toFixed(2));
};
