import { getUrlParam } from "../util/get-url-param.mjs";
import { displayDetail } from "../ui/display-detail.mjs";
import { displayImage } from "../ui/display-image.mjs";
import { displayMap } from "../ui/display-map.mjs";
import { displayReview } from "../ui/display-review.mjs";

const pageInit = () => {
  const param = getUrlParam();

  const displayFunctions = [
    displayImage,
    displayDetail,
    displayMap,
    displayReview,
  ];

  displayFunctions.forEach((func) => func(param));
};

window.addEventListener("load", pageInit);
