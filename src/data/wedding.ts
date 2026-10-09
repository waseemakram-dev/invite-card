export interface WeddingEvent {
  id: string;
  name: string;
  tagline?: string;
  date: string;
  day: string;
  timeLabel: string;
  scheduleDetails: { label: string; time: string }[];
  venueName: string;
  venueAddress: string;
  city: string;
  mapsUrl: string;
}

export interface WeddingData {
  couple: {
    groom: {
      name: string;
      title: string;
      shortName: string;
      parents: string;
    };
    bride: {
      name: string;
      shortName: string;
      parents: string;
    };
    monogram: string;
  };
  countdownTarget: string; // ISO 8601 with timezone
  timezone: string;
  heroAnnouncement: string;
  invitationIntro: string;
  bismillahArabic: string;
  bismillahEnglish: string;
  quranicVerseArabic: string;
  quranicVerseEnglish: string;
  quranicVerseReference: string;
  events: WeddingEvent[];
  venues: {
    id: string;
    name: string;
    address: string;
    city: string;
    events: string[];
    mapsUrl: string;
  }[];
  contacts?: {
    name: string;
    relationship: string;
    phone?: string;
  }[];
}

export const weddingData: WeddingData = {
  couple: {
    groom: {
      title: "Dr.",
      name: "Dr. Hafiz Muhammad Attique Zahid",
      shortName: "Attique",
      parents: "Mr. & Mrs. Abdul Qayyum Zahid",
    },
    bride: {
      name: "Umaira Mehmood Khan",
      shortName: "Umaira",
      parents: "Mr. & Mrs. Sher Ali",
    },
    monogram: "A & U",
  },
  countdownTarget: "2026-10-31T14:30:00+05:00", // 31 October 2026, 2:30 PM PKT
  timezone: "Asia/Karachi",
  heroAnnouncement: "The Royal Wedding Celebrations of",
  invitationIntro:
    "Together with their beloved families, cordially invite you to celebrate the joyous union and wedding ceremonies of their children",
  bismillahArabic: "بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ",
  bismillahEnglish: "In the name of Allah, the Most Gracious, the Most Merciful",
  quranicVerseArabic:
    "وَمِنْ آيَاتِهِ أَنْ خَلَقَ لَكُم مِّنْ أَنفُسِكُمْ أَزْوَاجًا لِّتَسْكُنُوا إِلَيْهَا وَجَعَلَ بَيْنَكُم مَّوَدَّةً وَرَحْمَةً",
  quranicVerseEnglish:
    "And among His signs is that He created for you mates from among yourselves, that you may dwell in peace with them, and He has put love and mercy between your hearts.",
  quranicVerseReference: "Surah Ar-Rum [30:21]",
  events: [
    {
      id: "mehndi",
      name: "MEHNDI",
      tagline: "An evening of traditional music, joy & henna blossoms",
      date: "30 October 2026",
      day: "Friday",
      timeLabel: "07:00 PM",
      scheduleDetails: [
        { label: "Arrival & Welcome", time: "07:00 PM" },
        { label: "Henna Ceremony & Dinner", time: "08:30 PM" },
      ],
      venueName: "House No. 31-A",
      venueAddress: "Al Noor Garden, Phase-4, Civil Hospital Road",
      city: "Bahawalpur, Pakistan",
      mapsUrl:
        "https://www.google.com/maps/search/?api=1&query=House+No.+31-A+Al+Noor+Garden+Phase-4+Civil+Hospital+Road+Bahawalpur+Pakistan",
    },
    {
      id: "barat",
      name: "BARAT",
      tagline: "The auspicious wedding ceremony & bride's departure",
      date: "31 October 2026",
      day: "Saturday",
      timeLabel: "02:30 PM",
      scheduleDetails: [
        { label: "Sehra Bandi", time: "02:30 PM" },
        { label: "Barat Departure", time: "03:00 PM" },
        { label: "Nikah & Feast", time: "04:30 PM" },
      ],
      venueName: "House No. 31-A",
      venueAddress: "Al Noor Garden, Phase-4, Civil Hospital Road",
      city: "Bahawalpur, Pakistan",
      mapsUrl:
        "https://www.google.com/maps/search/?api=1&query=House+No.+31-A+Al+Noor+Garden+Phase-4+Civil+Hospital+Road+Bahawalpur+Pakistan",
    },
    {
      id: "walima",
      name: "WALIMA",
      tagline: "The Grand Royal Reception & Celebratory Banquet",
      date: "01 November 2026",
      day: "Sunday",
      timeLabel: "07:00 PM",
      scheduleDetails: [
        { label: "Reception of Guests", time: "07:00 PM" },
        { label: "Royal Banquet Dinner", time: "08:00 PM" },
      ],
      venueName: "The Grand Palace Banquet Hall",
      venueAddress: "New Central Jail Road",
      city: "Bahawalpur, Pakistan",
      mapsUrl:
        "https://www.google.com/maps/search/?api=1&query=The+Grand+Palace+Banquet+Hall+New+Central+Jail+Road+Bahawalpur+Pakistan",
    },
  ],
  venues: [
    {
      id: "residence-alnoor",
      name: "House No. 31-A, Al Noor Garden",
      address: "Phase-4, Civil Hospital Road",
      city: "Bahawalpur, Pakistan",
      events: ["Mehndi", "Barat"],
      mapsUrl:
        "https://www.google.com/maps/search/?api=1&query=House+No.+31-A+Al+Noor+Garden+Phase-4+Civil+Hospital+Road+Bahawalpur+Pakistan",
    },
    {
      id: "grand-palace",
      name: "The Grand Palace Banquet Hall",
      address: "New Central Jail Road",
      city: "Bahawalpur, Pakistan",
      events: ["Walima Reception"],
      mapsUrl:
        "https://www.google.com/maps/search/?api=1&query=The+Grand+Palace+Banquet+Hall+New+Central+Jail+Road+Bahawalpur+Pakistan",
    },
  ],
};
