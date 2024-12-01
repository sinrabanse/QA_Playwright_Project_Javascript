export const testData = {
  standard_user: "standard_user",
  error_user: "error_user",
  performance_glitch_user: "performance_glitch_user",
  visual_user: "visual_user",
  problem_user: "problem_user",
  locked_out_user: "locked_out_user",
  password: "secret_sauce",
  incorrect_password: "secret_sauc",
  incorrect_standard_user: "standard_use",
  customer_first_name: "Aleks",
  customer_last_name: "Arkhipov",
  customer_postal_code: "4455666",
};

export const validUsers = [
  testData.standard_user,
  testData.error_user,
  testData.performance_glitch_user,
  testData.problem_user,
  testData.visual_user,
];

export const invalidUsers = [testData.locked_out_user];
