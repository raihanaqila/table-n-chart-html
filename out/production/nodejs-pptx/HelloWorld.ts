import pptxgen from "pptxgenjs";

let pres = new pptxgen();
let slide = pres.addSlide();
let textboxOpts = { x: 1, y: 1, w: '80%', h: 0.5, align: 'center', color: '131A1A', fill: 'B2E8ED', fontSize: 20 };
slide.addText("Sample text", textboxOpts);

pres.writeFile("Sample Presentation.pptx");