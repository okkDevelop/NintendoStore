export const NewsType = {
    GameNews: "GameNews",
    Events: "Events",
    Promotions: "Promotions",
    NintendoSwitchOnline: "NintendoSwitchOnline",
    AskTheDeveloper: "AskTheDeveloper"
} as const;

export type NewsType = typeof NewsType[keyof typeof NewsType];