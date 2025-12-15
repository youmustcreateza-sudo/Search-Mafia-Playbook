
export const validateEmail = (email: string): boolean => {
  // RFC 5322 compliant regex for robust email validation
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return emailRegex.test(email);
};

export const validatePhone = (phone: string): boolean => {
  // Strips whitespace, dashes, and parentheses
  const cleanPhone = phone.replace(/[\s\-()]/g, '');
  
  // Validates South African numbers:
  // 1. Starts with '0' followed by 9 digits (e.g., 0821234567)
  // 2. Starts with '+27' followed by 9 digits (e.g., +27821234567)
  const saPhoneRegex = /^(\+27|0)[1-9][0-9]{8}$/;
  
  return saPhoneRegex.test(cleanPhone);
};
