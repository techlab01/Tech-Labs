export type navListsType = { name: string; link: string };

export type footerLinkType = { name: string; link: string };

export type socialsType = { icon: string; link: string };

export type urlListType = {
  [key: string]: string;
};

export type formData = {
  name: string;
  contactNumber: string;
  email: string;
  message: string;
};

export type contactDetailsType = {
  name: string;
  contact: string;
  email: string;
};

export type addressDetailsType = {
  title: string;
  address: string[];
};

export type feedbackDetailsType = {
  id: number;
  name: string;
  school: string;
  image: string;
  description: string;
};

export type serviceType = {
  id: number;
  img: string;
  title: string;
  description: string;
};

export type affiliateImageType = string[];

export type aboutUsImageType = string[];

export type solutionType = {
  icon: string;
  title: string;
};

export type galleryType = string[];

export type filterType = string[];
