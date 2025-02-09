// let options = {
//   method: "GET",
//   headers: {
//     "Content-Type": "application/json",
//   },
// };
// let url = "./public/quiz.json";

// fetch(url, options)
//   .then(function (response) {
//     return response.json();
//   })
//   .then(function (data) {
//     console.log(data);
//   });

export async function fetchQuizData() {
  const options = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  };
  // Assume quiz.json is in the public folder, so use a relative root URL:
  const url = "/quiz.json";

  const response = await fetch(url, options);
  if (!response) {
    throw new Error(`error fetching quiz data: ${response.status}`);
  }
  return response.json();
}
