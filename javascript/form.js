function submitForm(event) {
  event.preventDefault();

  const content = document.querySelector(".screen_last");
  content.style.transform = "translateX(0%)";
  const formData = new FormData(document.getElementById("myForm"));

  const submitUrl =
    "https://script.google.com/macros/s/AKfycbwvBiqdizL-YWHgdAOlzYwHce8VQyk0BU6geZvJ-S16D8Ntzj2VDkuxfJM70yTH-ApAew/exec";

  fetch(submitUrl, {
    method: "POST",
    body: formData,
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((data) => {
      console.log("Form submitted successfully:", data);
    })
    .catch((error) => {
      console.error("Error submitting form:", error);
    });
}
