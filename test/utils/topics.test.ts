import { getTopics, topics, Topic } from "../../utils/topics";
import en from "../../src/locales/en";

describe("topics utility", () => {
    it("should return an array of 3 topics", () => {
        const result = getTopics(en);
        expect(Array.isArray(result)).toBe(true);
        expect(result).toHaveLength(3);
    });

    it("should have correct structure", () => {
        const result = getTopics(en);

        result.forEach((topic: Topic) => {
            expect(topic).toHaveProperty("image");
            expect(topic).toHaveProperty("title");
            expect(topic).toHaveProperty("description");

            expect(typeof topic.image).toBeDefined();
            expect(typeof topic.title).toBe("string");
            expect(typeof topic.description).toBe("string");
        });
    });

    it("should match English locale translations", () => {
        const result = getTopics(en);

        expect(result[0].description).toBe(en.thirdSection.medium.description1);
        expect(result[1].description).toBe(en.thirdSection.medium.description2);
        expect(result[2].description).toBe(en.thirdSection.medium.description3);
    });

    it("default export should equal getTopics(en)", () => {
        expect(topics).toEqual(getTopics(en));
    });
});