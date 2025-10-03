import { getLiveEvents, liveEvents } from "../../src/utils/live-events.js";
import en from "../../src/locales/en.js";

describe("liveEvents constants", () => {
    it("should return an array of 3 live events", () => {
        expect(Array.isArray(liveEvents)).toBe(true);
        expect(liveEvents).toHaveLength(3);
    });

    it("should have correct structure", () => {
        liveEvents.forEach((event) => {
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

    it("should match locale translations", () => {
        expect(liveEvents[0].title).toBe(en.fourthSection.eventCards.eventCard1.title);
        expect(liveEvents[1].title).toBe(en.fourthSection.eventCards.eventCard2.title);
        expect(liveEvents[2].title).toBe(en.fourthSection.eventCards.eventCard3.title);
    });
});

describe("getLiveEvents function", () => {
    it("should return same result as default liveEvents when using en locale", () => {
        const result = getLiveEvents(en);
        expect(result).toEqual(liveEvents);
    });
});