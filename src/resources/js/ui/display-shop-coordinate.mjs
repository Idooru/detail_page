export const displayShopCoordinate = (map, { shopX, shopY }) => {
  const { kakao } = window;

  const markerPosition = new kakao.maps.LatLng(shopY, shopX);

  const marker = new kakao.maps.Marker({ position: markerPosition });
  marker.setMap(map);

};
