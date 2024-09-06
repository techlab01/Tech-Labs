// Home page
export type homeHeaderType = {
  [key: string]: string;
};

export type homeContentType = {
  [key: string]: string;
};

// About Us page
export type aboutUsContentType = {
  whoAreWe: string;
  bannerText: string;
  bannerImg: string;
  whatWeDo: string;
};

export type aboutUsHeaderType = {
  aboutUs: string;
  whatWeDo: string;
  whoAreWe: string;
  gallery: string;
};

// Services page
export type servicesContentType = {
  services: string;
  bannerText: string;
  bannerImg: string;
};

export type servicesHeaderType = {
  expertise: string;
};

// ATL and PM Shri page
export type collaborateContentType = {
  title: string;
  image: string;
  description: string;
  bannerText: string;
  bannerImg: string;
  conclusionHeader: string;
  conclusion: string;
  pointsHeader: string;
  pointsContent: string;
  visionHeader: string;
  visionContent: string[];
  outcome?: string[];
  singelOutcome?: string;
};

// Button text
export type buttonTextType = {
  learnMore: string;
  explore: string;
  knowMore: string;
  contactUs: string;
};
