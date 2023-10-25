export const getUrlParam = () => {
  const urlParams = new URLSearchParams(window.location.search);

  return {
    place_image: urlParams.get("place_image"),
    place_name: urlParams.get("place_name"),
    address_name: urlParams.get("address_name"),
    phone: urlParams.get("phone"),
    category_name: urlParams.get("category_name"),
    place_url: urlParams.get("place_url"),
    review: urlParams.get("review"),
    x: urlParams.get("x"),
    y: urlParams.get("y"),
  };
};
