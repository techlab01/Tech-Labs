export type middleSectionTypes = {
  noImage: boolean;
  disableButton: boolean;
  imgAlt?: string;
  imgSrc?: string;
  className?: string;
  header: string;
  buttonText?: string;
  content: string;
  btnLink?: string;
  showBg?: boolean;
};

export type CommonSectionProps = {
  header?: string;
  content: string | string[] | undefined;
  className?: string;
  key?: number;
  buttonText?: string;
  onBtnClick?: () => void;
  children?: React.ReactNode;
  disableButton?: boolean;
  reverseRow?: boolean;
};

export type heroSectionTypes = {
  imgAlt?: string;
  imgSrc?: string;
  className?: string;
  content: string;
};
