const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function isValidEmail(value: string) {
  return EMAIL_PATTERN.test(value.trim());
}

export function formatPhone(value: string) {
  const digits = value.replace(/\D/g, "").slice(0, 11);

  if (digits.length === 0) return "";

  const ddd = digits.slice(0, 2);
  if (digits.length <= 2) return `(${ddd}`;

  const rest = digits.slice(2);
  const firstDigit = rest.slice(0, 1);
  const middle = rest.slice(1, 5);
  const last = rest.slice(5, 9);

  let formatted = `(${ddd})`;
  if (firstDigit) formatted += ` ${firstDigit}`;
  if (middle) formatted += ` ${middle}`;
  if (last) formatted += `-${last}`;

  return formatted;
}

// Máscara de CNPJ: 00.000.000/0000-00
export function formatCnpj(value: string) {
  const digits = value.replace(/\D/g, "").slice(0, 14);

  return digits
    .replace(/^(\d{2})(\d)/, "$1.$2")
    .replace(/^(\d{2})\.(\d{3})(\d)/, "$1.$2.$3")
    .replace(/\.(\d{3})(\d)/, ".$1/$2")
    .replace(/(\d{4})(\d)/, "$1-$2");
}

export function isValidCnpjLength(value: string) {
  return value.replace(/\D/g, "").length === 14;
}
