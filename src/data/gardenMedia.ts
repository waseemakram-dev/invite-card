// Public delivery URLs only. Upload credentials are never bundled in the website.
export const gardenMedia = {
  "envelope": "https://res.cloudinary.com/sergteqh/image/upload/f_auto,q_auto/v1791545658/attique-umaira-invitation-20261009/envelope.webp",
  "heroPoster": "https://res.cloudinary.com/sergteqh/image/upload/f_auto,q_auto/v1791545661/attique-umaira-invitation-20261009/hero-poster.webp",
  "floralLeft": "https://res.cloudinary.com/sergteqh/image/upload/f_auto,q_auto/v1791545662/attique-umaira-invitation-20261009/floral-left.webp",
  "floralRight": "https://res.cloudinary.com/sergteqh/image/upload/f_auto,q_auto/v1791545664/attique-umaira-invitation-20261009/floral-right.webp",
  "paperIntroduction": "https://res.cloudinary.com/sergteqh/image/upload/f_auto,q_auto/v1791545664/attique-umaira-invitation-20261009/paper-introduction.webp",
  "paperSchedule": "https://res.cloudinary.com/sergteqh/image/upload/f_auto,q_auto/v1791545665/attique-umaira-invitation-20261009/paper-schedule.webp",
  "paperFamily": "https://res.cloudinary.com/sergteqh/image/upload/f_auto,q_auto/v1791545666/attique-umaira-invitation-20261009/paper-family.webp",
  "rose": "https://res.cloudinary.com/sergteqh/image/upload/f_auto,q_auto/v1791545667/attique-umaira-invitation-20261009/rose.webp",
  "envelopeOpening": "https://res.cloudinary.com/sergteqh/video/upload/v1791545668/attique-umaira-invitation-20261009/envelope-opening.mp4",
  "gardenSwans": "https://res.cloudinary.com/sergteqh/video/upload/v1791545672/attique-umaira-invitation-20261009/garden-swans.mp4"
} as const;

export function imageAtWidth(url: string, width: number) {
  return url.replace('/upload/f_auto,q_auto/', `/upload/f_auto,q_auto,c_limit,w_${width}/`);
}
