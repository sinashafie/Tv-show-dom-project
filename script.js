const url = "https://api.tvmaze.com/shows/82/episodes";

const select = document.querySelector("#aa");
const container = document.querySelector("#cc");
const allOption = document.querySelector("#allOption");
const search = document.querySelector("#bb");

fetch(url)
  .then((ff) => ff.json())
  .then((data) => {
    showImage(data);
    select.addEventListener("change", () => {
      console.log(select.value);
      if (select.value === allOption.value) {
        clear();
        showImage(data);
      } else {
        const dd = data.filter((ss) => ss.name === select.value);
        clear();
        showImage(dd);
      }
    });

    search.addEventListener("search", () => {
      console.log(search.value);
      const hh = data.filter((qq) => qq.name.includes(search.value));
      clear();
      showImage(hh);
    });
  });

const clear = () => {
  container.innerHTML = "";
};

const showImage = (data) => {
  for (const movie of data) {
    const div = document.createElement("div");
    div.id = "jj";

    const img = document.createElement("img");
    img.src = movie.image.medium;

    const p = document.createElement("p");
    p.id = "vv";

    if (movie.number < 10) {
      p.textContent =
        movie.name + " S" + movie.season + " E" + "0" + movie.number;
    } else {
      p.textContent = movie.name + " S" + movie.season + " E" + movie.number;
    }
    div.append(img, p);

    const option = document.createElement("option");
    option.textContent = movie.name;
    option.value = movie.name;
    select.append(option);

    container.append(div);
  }

  console.log(data);
};
