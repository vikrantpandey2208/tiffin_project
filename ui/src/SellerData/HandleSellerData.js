import { Fetch } from "../dbFetch.js";

export default async function SellerAddTiffin() {
  let data = {
    additionalDetail: "Additional details ",
    detailsOfTiffin: "Details of tiffin",
    dishWithCount: "Dish with count ",
    price: 500,
    brand: "Asuman Selling",
    sellerId: "6374e8790e9772be859efcdc",
    photo1:
      "https://res.cloudinary.com/dqdovhtp1/image/upload/v1668608550/5BEA71949_5D_203_20Tier_20Tiffin_l1qsde.png",
    photo2:
      "https://res.cloudinary.com/dqdovhtp1/image/upload/v1668608550/1200px-Lunchbox_-__E0_B4_85_E0_B4_9F_E0_B5_81_E0_B4_95_E0_B5_8D_E0_B4_95_E0_B5_81_E0_B4_AA_E0_B4_BE_E0_B4_A4_E0_B5_8D_E0_B4_B0_E0_B4_99_E0_B5_8D_E0_B4_99_E0_B5_BE_vjmdyx.jpg",
    photo3:
      "https://res.cloudinary.com/dqdovhtp1/image/upload/v1668608549/41g_vUsnxAL._AC_SY580__hiycep.jpg",
    photo4:
      "https://res.cloudinary.com/dqdovhtp1/image/upload/v1668608549/51JEcckV1LS._AC_SY780__xmhwxx.jpg",
    addr: "Near Gokalpur",
    longitude: 79.98362,
    latitude: 23.189228,
  };

  const path = "/api/seller-add-tiffin";
  delete data.initialValues;

  let imageUrl = "";
  let imageUrl2 = "";
  let imageUrl3 = "";
  let imageUrl4 = "";
  let photo = "";

  if (false) {
    const formData = new FormData();
    formData.append("file", photo);
    formData.append("upload_preset", "default-preset");

    const CLOUDINARY_URL =
      "https://api.cloudinary.com/v1_1/dqdovhtp1/image/upload";

    const dataRes = await Fetch(CLOUDINARY_URL, formData, true);
    imageUrl = dataRes.data.url;
    console.log(imageUrl);
    data.photo = imageUrl;
  }

  const response = await Fetch(path, data);
  if (response.success) {
    console.log("Tiffin Saved");
  } else {
    console.log("Tiffin not saved", response.message);
  }
}
