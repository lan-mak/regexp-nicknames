export default class Validator {
  validateUsername(name) {
    const allowable = /^\w*[0-9_-]\w*$|[a-z]*/.test(name);
    const invalid = /^[_\d-]|[_\d-]$|\d{4}/.test(name);

    if (allowable === !invalid) {
      this.name = name;
      return true;
    }
    throw new Error('Никнейм не соответствует правилам');
  }
}
