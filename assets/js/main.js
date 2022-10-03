let moviesInfo = document.getElementById("moviesInfo");
let search = document.getElementById("search");

function movieThembnail(arry) {
  let result = "";
  arry.forEach((ele) => {
    result += `<div class="col-md-3">
    <div class="card cardheight mb-2">
      <figure class="imgInfo">
        <img
          src="${IMG_PATH}${ele.poster_path}"
          alt="${ele.original_title}"
          title="${ele.original_title}"
          class="img-fluid cardImg"
        />
        <figcaption class="fig p-3 ">
          <div class="row align-items-center">
            <div class="col-sm-9">
              <p class="filmName text-white">
                ${ele.original_title}
              </p>
            </div>
            <div class="col-sm-3">
              <p class="rating text-center ${colors(
                ele.vote_average
              )} font-weight-bold">
                ${ele.vote_average}
              </p>
            </div>
          </div>
        </figcaption>
        <div class="overview text-center">
          <h4>Overview</h4>
          <p>
            ${ele.overview}
          </p>
        </div>
      </figure>
    </div>
  </div>`;
  });
  return result;
}

moviesInfo.innerHTML = movieThembnail(results);

function colors(ele) {
  if (ele >= 8) {
    return "text-success";
  } else if (ele >= 5) {
    return "text-warning";
  } else {
    return "text-danger";
  }
}

search.addEventListener("keyup", onKeyUp);

function onKeyUp(event) {
  let movieArry = [];
  let inputVal = this.value;
  if (inputVal.length) {
    if (event.keyCode === 13) {
      results.forEach(function (ele) {
        if (ele.title.toLowerCase().includes(inputVal.toLowerCase())) {
          // console.log(ele);
          movieArry.push(ele);
          moviesInfo.innerHTML = movieThembnail(movieArry);
        }
      });
      console.log(movieArry);
      // moviesInfo.innerHTML = movieArry;
    }
  } else {
    moviesInfo.innerHTML = movieThembnail(results);
  }
}
