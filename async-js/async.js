$(document).on("ready", () => {

  // // make a new XMLHttpRequest object
  // var httpRequest = new XMLHttpRequest();  // Ready state - 0
  //
  // httpRequest.onreadystatechange = () => {
  //   if (httpRequest.readyState == 4 && httpRequest.status == 200) {
  //       console.log(JSON.parse(httpRequest.response));
  //   }
  // };
  //
  // // true is async
  // httpRequest.open("GET", "data/content.json", true); //1
  // httpRequest.send(); //2
  //
  // $.get("data/content.json", (data) => {
  //   console.log(data);
  // });
  //
  // // Ensure Async is actually working
  // console.log("test");

  $.get("data/content.json").then((content) => {
    console.log(content);
    return $.get("data/content.json");
  }).then((content2) => {
    console.log(content2);
    return $.get("data/content.json");
  }).then((content3) => {
    console.log(content3);
    return $.get("data/content.json");
  });

});
