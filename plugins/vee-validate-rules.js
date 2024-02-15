import { defineRule, configure } from "vee-validate";

export default defineNuxtPlugin(() => {
  configure({
    generateMessage: () => "Maydon to'ldirilishi shart!",
    validateOnBlur: true,
    validateOnChange: true,
    validateOnInput: false,
    validateOnModelUpdate: true,
  });

  defineRule("required", (value) => {
    if (!value || !value.length) {
      return "Maydon to'ldirilishi shart!";
    }
    return true;
  });

  defineRule("email", (value) => {
    if (!value || !value.length) {
      return true;
    }
    if (!/[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}/.test(value)) {
      return "Maydon email formatda to'ldirilishi kerak!";
    }
    return true;
  });

  defineRule("min", (value, [length]) => {
    if (!value || !value.length) {
      return true;
    }
    if (value.length < length) {
      return `Maydon kamida ${length} belgidan iborat bo'lishi kerak!`;
    }
    return true;
  });

  defineRule("max", (value, [length]) => {
    if (!value || !value.length) {
      return true;
    }
    if (value.length > length) {
      return `Maydon maksimum ${length} belgidan iborat bo'lishi kerak!`;
    }
    return true;
  });

  defineRule("confirmpassword", (value, [target]) => {
    const targetValue = document.getElementById(target)?.value;
    return value === targetValue || "Parollar mos kelmaydi";
  });
});
