import { getFeatures, features } from "../../src/utils/features.js";
import en from "../../src/locales/en.js";

describe("features constants", () => {
    it("getFeatures should return an array of 4 features", () => {
        const result = getFeatures(en);
        expect(Array.isArray(result)).toBe(true);
        expect(result).toHaveLength(4);
    });

    it("each feature should have correct structure", () => {
        const result = getFeatures(en);
        result.forEach((feature) => {
            expect(feature).toHaveProperty("icon");
            expect(feature).toHaveProperty("title");
            expect(feature).toHaveProperty("description");

            expect(typeof feature.icon).toBe("string"); // svg path
            expect(typeof feature.title).toBe("string");
            expect(typeof feature.description).toBe("string");
        });
    });

    it("should match locale translations", () => {
        const result = getFeatures(en);
        expect(result[0].title).toBe(en.secondSection.communityTalks.title);
        expect(result[0].description).toBe(en.secondSection.communityTalks.description);

        expect(result[1].title).toBe(en.secondSection.realWorldProject.title);
        expect(result[1].description).toBe(en.secondSection.realWorldProject.description);

        expect(result[2].title).toBe(en.secondSection.communityEvents.title);
        expect(result[2].description).toBe(en.secondSection.communityEvents.description);

        expect(result[3].title).toBe(en.secondSection.performanceTips.title);
        expect(result[3].description).toBe(en.secondSection.performanceTips.description);
    });

    it("the convenience export `features` should equal getFeatures(en)", () => {
        expect(features).toEqual(getFeatures(en));
    });
});