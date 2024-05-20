import project1_image_1x from "~/assets/images/project-1-image.jpg";
import project1_image_2x from "~/assets/images/project-1-image@2x.jpg";
import project2_image_1x from "~/assets/images/project-2-image.jpg";
import project2_image_2x from "~/assets/images/project-2-image@2x.jpg";

export const projects = [
  {
    image: {
      x1: project1_image_1x,
      x2: project1_image_2x,
    },
    title: "Дом в скандинавском стиле",
    description:
      "Одноэтажный дом из газобетона габаритными размерами 10.73 х 10.73 м. и жилой площадью 101 кв. м. с вальмовой кровлей<br>Построен по индивидуальному проекту.",
  },
  {
    image: {
      x1: project2_image_1x,
      x2: project2_image_2x,
    },
    title: "Дом из газобетона",
    description:
      "Одноэтажный дом габаритными размерами 15.2 х 9.7м. Приведенная площадь – 127.7 м.кв.<br>Три спальные комнаты, два сан.узла, большая кухня-гостиная с выходом на террасу.",
  },
];