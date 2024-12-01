import { testData } from "./testData.js";
import { testAssertions } from "./testAssertions.js";

export const loginTestCases = [
  {
    user: testData.standard_user,
    password: testData.incorrect_password,
    error_message: testAssertions.wrong_pass_or_user_text,
  },
  {
    user: testData.incorrect_standard_user,
    password: testData.incorrect_password,
    error_message: testAssertions.wrong_pass_or_user_text,
  },
  {
    user: testData.incorrect_standard_user,
    password: testData.password,
    error_message: testAssertions.wrong_pass_or_user_text,
  },
  {
    user: testData.standard_user,
    password: null,
    error_message: testAssertions.required_password_message,
  },
  {
    user: null,
    password: testData.password,
    error_message: testAssertions.required_username_message,
  },
  {
    user: null,
    password: null,
    error_message: testAssertions.required_username_message,
  },
];
