import { getFeatures, features, Feature } from "../../utils/features";
import en from "../../src/locales/en";

describe("features utility", () => {
    it("should return an array of 4 features", () => {
        const result = getFeatures(en);
        expect(Array.isArray(result)).toBe(true);
        expect(result).toHaveLength(4);
    });

    it("should have correct structure", () => {
        const result = getFeatures(en);

        result.forEach((feature: Feature) => {
            expect(feature).toHaveProperty("icon");
            expect(feature).toHaveProperty("title");
            expect(feature).toHaveProperty("description");

            expect(typeof feature.icon).toBeDefined();
            expect(typeof feature.title).toBe("string");
            expect(typeof feature.description).toBe("string");
        });
    });

    it("should match English locale translations", () => {
        const result = getFeatures(en);

        expect(result[0].title).toBe(en.secondSection.communityTalks.title);
        expect(result[1].title).toBe(en.secondSection.realWorldProject.title);
        expect(result[2].title).toBe(en.secondSection.communityEvents.title);
        expect(result[3].title).toBe(en.secondSection.performanceTips.title);
    });

    it("default export should equal getFeatures(en)", () => {
        expect(features).toEqual(getFeatures(en));
    });
});