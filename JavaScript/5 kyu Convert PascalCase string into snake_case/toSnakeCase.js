/*
Write a function to convert a PascalCase string into a snake_case string.

The input will always be a string of one or more words that only contain letters, separated by nothing. Each word starts with an uppercase letter, and the rest are lowercase. The output should be lowercase words separated by underscores.

Examples:

toSnakeCase("TestController")  // returns "test_controller"
toSnakeCase("ThisIsBeautifulDay") // returns "this_is_beautiful_day"
toSnakeCase("Am7Days")          // returns "am7_days"
toSnakeCase("My3CodeIs4Times")  // returns "my3_code_is4_times"
toSnakeCase("AnyoneCanDoThis")  // returns "anyone_can_do_this"
*/

// Solution

function toSnakeCase(str) {
  return str.replace(/(.)([A-Z])/g, "$1_$2").toLowerCase();
}
