export default class WebPage {
  title: string | undefined;
  header: string | undefined;
  content: string | undefined;
  footer: string | undefined;

  public constructor(
    title?: string,
    header?: string,
    content?: string,
    footer?: string
  ) {
    this.title = title;
    this.header = header;
    this.content = content;
    this.footer = footer;
  }

  public toString() {
    return `<!DOCTYPE html> <html lang="en"> <head> <meta charset="UTF-8"> <meta name="viewport" content="width=device-width, initial-scale=1.0"> <title>${
      this.title
    }</title> ${this.header}</head> <body> ${this.content} </body> ${
      this.footer ? "<footer><h1>" + this.footer + "</h1></footer>" : ""
    }</html>`;
  }
}
