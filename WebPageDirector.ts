import Field from "./Field";
import WebPageBuilder from "./WebPageBuilder";

export default class WebPageDirector {
  private webPageBuilder: WebPageBuilder;
  private title = "Builder Practise";
  private header = `<link rel="stylesheet" href="style.css">`;
  private footer = "<h1>Copyright 2023 UKTC</h1>";

  constructor() {
    this.webPageBuilder = new WebPageBuilder();
  }

  createArticle = (content: string) =>
    this.webPageBuilder
      .reset()
      .buildHeader(this.header)
      .buildTitle(this.title)
      .buildHeader(this.header)
      .buildContent(content)
      .buildFooter(this.footer)
      .build();

  createForm = (fields: Field[]) => {
    const content =
      "<form>" + fields.map((field) => field.toHTML()).join("\n") + "</form>";

    return this.webPageBuilder
      .reset()
      .buildHeader(this.header)
      .buildTitle(this.title)
      .buildHeader(this.header)
      .buildContent(content)
      .build();
  };
}
