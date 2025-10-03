import { getTopics } from "../../src/utils/topics.js";
import en from "../../src/locales/en.js";

describe("topics constants", () => {
    const topics = getTopics(en); // ✅ dynamic access to localized data

    it("should return an array of 3 topics", () => {
        expect(Array.isArray(topics)).toBe(true);
        expect(topics).toHaveLength(3);
    });

    it("should have correct structure for each topic", () => {
        topics.forEach((topic) => {
            expect(topic).toHaveProperty("image");
            expect(topic).toHaveProperty("title");
            expect(topic).toHaveProperty("description");

            expect(typeof topic.title).toBe("string");
            expect(typeof topic.description).toBe("string");
        });
    });

    it("should match locale translations", () => {
        expect(topics[0].description).toBe(en.thirdSection.medium.description1);
        expect(topics[1].description).toBe(en.thirdSection.medium.description2);
        expect(topics[2].description).toBe(en.thirdSection.medium.description3);
    });
});