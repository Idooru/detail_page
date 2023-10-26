export const displayDetail = (param) => {
  const ulEle = document.querySelector("#intro .item_info_body ul");
  const liEles = Array.from(ulEle.children);
  const detailInfos = [
    param.placeName,
    param.phone,
    param.categoryName,
    param.addressName,
  ];

  liEles.forEach((liEle, idx) => {
    const spanEle = liEle.querySelector("span:nth-child(2)");
    spanEle.innerText = detailInfos[idx];
  });
};
