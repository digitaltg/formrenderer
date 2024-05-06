/**
 * @jest-environment node
 */

const { renderForm } = require("../lib/formio-render");

describe("Formio Renderer", () => {
    it("Should Render default form", async (done) => {
        const html = await renderForm();
        expect(html).not.toBe(null);
    });
});
