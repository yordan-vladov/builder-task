export default class Field {
  name: string;
  label: string | undefined;
  type: string;
  value: string | undefined;

  constructor(
    name: string,
    label: string | undefined,
    type: string,
    value: string | undefined
  ) {
    this.name = name;
    this.label = label;
    this.type = type;
    this.value = value;
  }

  toHTML = () => {
    const labelHTML = this.label
      ? `<label for="${this.name}">${this.label}</label>`
      : "";
    const inputHTML = `<input type="${this.type}" id="${this.name}" name="${
      this.name
    }" ${this.value ? 'value="' + this.value + '"' : ""}>`;

    return `${labelHTML}\n${inputHTML}`;
  };
}
