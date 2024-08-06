export default function fetchData(type) {
  let title, src, expertise;

  switch (type) {
    case 0:
      title = "Brand Identity";
      expertise = "Branding";
      src = "https://www.konceptslab.com/assets/img/homepage-mobile.jpg";
      break;
    case 1:
      title = "Mobile & Web App";
      expertise = "Branding";
      src = "./images/expertise-1.svg";

      break;
    case 2:
      title = "Videography, Animation and Photography";
      src = "https://www.konceptslab.com/assets/img/homepage-photography.jpg";
      break;
    case 3:
      title = "Responsive Website";
      expertise = "Branding";
      src = "https://www.konceptslab.com/assets/img/homepage-website.jpg";
      break;
    case 4:
      title = "Digital Marketing";
      expertise = "Branding";
      src = "https://www.konceptslab.com/assets/img/homepage-digital.jpg";
      break;
    case 5:
      title = "Custom eCommerce";
      expertise = "Branding";
      src = "https://www.konceptslab.com/assets/img/homepage-ecommerce.jpg";
      break;
    case 6:
      title = "SEO and PPC";
      expertise = "Branding";
      src = "https://www.konceptslab.com/assets/img/homepage-ecommerce.jpg";
      break;
    case 7:
      title = "Course on digital marketing and basic of web development";
      expertise = "Branding";
      src = "https://www.konceptslab.com/assets/img/homepage-seo.jpg";
      break;

    default:
      throw new Error("Undefined Type");
  }

  return { title, src, expertise };
}
