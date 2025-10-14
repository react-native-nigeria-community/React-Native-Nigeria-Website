import { getWriteUps, writeUp, WriteForUs } from "../../utils/write-for-us";
import en from "../../src/locales/en";

describe("getWriteUps utility", () => {
    it("returns an array of WriteForUs objects", () => {
        const result = getWriteUps();

        expect(Array.isArray(result)).toBe(true);
        expect(result.length).toBe(3);

        result.forEach((item: WriteForUs) => {
            expect(item).toHaveProperty("title");
            expect(item).toHaveProperty("description");
            expect(typeof item.title).toBe("string");
            expect(typeof item.description).toBe("string");
        });
    });

    it("uses the default English locale when no argument is passed", () => {
        const result = getWriteUps();
        expect(result[0].title).toBe(en.sixthSection.communityCard.communityCard1.title);
        expect(result[1].description).toBe(en.sixthSection.communityCard.communityCard2.description);
    });

    it("uses the provided locale when specified", () => {
        const customLocale = {
            sixthSection: {
                communityCard: {
                    communityCard1: { title: "Custom 1", description: "Custom desc 1" },
                    communityCard2: { title: "Custom 2", description: "Custom desc 2" },
                    communityCard3: { title: "Custom 3", description: "Custom desc 3" },
                },
            },
        };

        const result = getWriteUps(customLocale as any);
        expect(result[0].title).toBe("Custom 1");
        expect(result[1].description).toBe("Custom desc 2");
        expect(result[2].title).toBe("Custom 3");
    });

    it("exports a constant writeUp using the English locale", () => {
        expect(Array.isArray(writeUp)).toBe(true);
        expect(writeUp.length).toBe(3);
        expect(writeUp[0].title).toBe(en.sixthSection.communityCard.communityCard1.title);
    });
});