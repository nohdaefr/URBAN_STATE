export const israeliPhonePattern = /^0\d{1,2}-?\d{7}$/;

export function validateIsraeliPhone(value: string): string | undefined {
  if (!value.trim()) return 'נא להזין מספר טלפון';
  if (!israeliPhonePattern.test(value.trim())) return 'מספר הטלפון אינו תקין';
  return undefined;
}