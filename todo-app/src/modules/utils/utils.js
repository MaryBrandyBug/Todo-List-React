// eslint-disable-next-line import/prefer-default-export
export function checkLength(note) {
  if (note) {
    const verification = note.trim();
    if (verification.length !== 0) {
      return true;
    }
  }
  return false;
}
