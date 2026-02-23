import { metadata as aboutMetadata } from "@/app/about/page";
import { metadata as contactMetadata } from "@/app/contact/page";
import { metadata as galleryMetadata } from "@/app/gallery/page";
import { metadata as homeMetadata } from "@/app/page";
import { metadata as productMetadata } from "@/app/product/page";
import { metadata as roiMetadata } from "@/app/roi/page";

const pageMetadata = [
  homeMetadata,
  aboutMetadata,
  contactMetadata,
  productMetadata,
  roiMetadata,
  galleryMetadata,
];

describe("SEO metadata", () => {
  it("provides title and description for each public page", () => {
    for (const meta of pageMetadata) {
      expect(typeof meta.title).toBe("string");
      expect(typeof meta.description).toBe("string");
      expect((meta.title as string).trim().length).toBeGreaterThan(10);
      expect((meta.description as string).trim().length).toBeGreaterThan(40);
    }
  });

  it("uses unique titles per page to avoid SEO duplication", () => {
    const titles = pageMetadata.map((meta) => meta.title as string);
    const uniqueTitles = new Set(titles);
    expect(uniqueTitles.size).toBe(titles.length);
  });

  it("keeps brand mention in all page titles", () => {
    for (const meta of pageMetadata) {
      expect((meta.title as string)).toMatch(/ArogyaSync/i);
    }
  });
});
