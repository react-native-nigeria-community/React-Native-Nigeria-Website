import { getLiveEvents, liveEvents, LiveEvent } from "../../src/utils/live-events";
import en from "../../src/locales/en";

describe("liveEvents utility", () => {
    it("should return an array of 3 live events", () => {
        const result = getLiveEvents(en);
        expect(Array.isArray(result)).toBe(true);
        expect(result).toHaveLength(3);
    });

    it("should have correct structure", () => {
        const result = getLiveEvents(en);

        result.forEach((event: LiveEvent) => {
            expect(event).toHaveProperty("label");
            expect(event).toHaveProperty("title");
            expect(event).toHaveProperty("date");
            expect(event).toHaveProperty("time");
            expect(event).toHaveProperty("buttonText");

            expect(typeof event.label).toBe("string");
            expect(typeof event.title).toBe("string");
            expect(typeof event.date).toBe("string");
            expect(typeof event.time).toBe("string");
            expect(typeof event.buttonText).toBe("string");
        });
    });

    it("should match English locale translations", () => {
        const result = getLiveEvents(en);

        expect(result[0].title).toBe(en.fourthSection.eventCards.eventCard1.title);
        expect(result[1].title).toBe(en.fourthSection.eventCards.eventCard2.title);
        expect(result[2].title).toBe(en.fourthSection.eventCards.eventCard3.title);
    });

    it("default export should equal getLiveEvents(en)", () => {
        expect(liveEvents).toEqual(getLiveEvents(en));
    });
});