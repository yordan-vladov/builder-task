import WebPage from "./WebPage";

export default class WebPageBuilder {
  private webPage: WebPage;

  constructor() {
    this.webPage = new WebPage(undefined, undefined, undefined, undefined);
  }

  buildTitle = (title: string) => {
    this.webPage.title = title;
    return this;
  };

  buildHeader = (header: string) => {
    this.webPage.header = header;
    return this;
  };

  buildContent = (content: string) => {
    this.webPage.content = content;
    return this;
  };

  buildFooter = (footer: string) => {
    this.webPage.footer = footer;
    return this;
  };

  build = () => {
    const result = new WebPage(
      this.webPage.title,
      this.webPage.header,
      this.webPage.content,
      this.webPage.footer
    );

    this.reset();
    return result;
  };

  reset = () => {
    this.webPage = new WebPage();
    return this;
  };
}
