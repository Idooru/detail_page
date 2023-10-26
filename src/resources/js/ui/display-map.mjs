import { displayMyCoordinate } from "./display-my-coordinate.mjs";
import { displayShopCoordinate } from "./display-shop-coordinate.mjs";

export const displayMap = (param) => {
  const { kakao } = window;
  const { shopX, shopY, myX, myY } = param;

  const middleX = (Number(shopX) + Number(myX)) / 2;
  const middleY = (Number(shopY) + Number(myY)) / 2;


  const container = document.querySelector("#map .item_info_body");
  const options = {
    center: new kakao.maps.LatLng(middleY, middleX), level: 4,
  };

  const map = new kakao.maps.Map(container, options);
  displayMyCoordinate(map, { myX, myY });
  displayShopCoordinate(map, { shopX, shopY });
};
