import AppResource from "../../constants/AppResource";
import { v4 as uuidv4 } from "uuid";
export const AppData = {
  category: [
    {
      name: "Món canh",
      categoryId: 1,
      img: AppResource.images.img_soup_cate,
    },
    {
      name: "Món kho",
      categoryId: 2,
      img: AppResource.images.img_braised_dish_cate,
    },
    {
      name: "Món bánh",
      categoryId: 3,
      img: AppResource.images.img_cake_cate,
    },
    {
      name: "Món chiên",
      categoryId: 4,
      img: AppResource.images.img_fried_food_cate,
    },
    {
      name: "Món chè",
      categoryId: 5,
      img: AppResource.images.img_porridge_cate,
    },
    {
      name: "Món hấp",
      categoryId: 6,
      img: AppResource.images.img_steamed_dish_cate,
    },
    {
      name: "Món xào",
      categoryId: 7,
      img: AppResource.images.img_stir_fried_meal,
    },
    {
      name: "Món nướng",
      categoryId: 7,
      img: AppResource.images.img_grill_cate,
    },
    {
      name: "Món xào",
      categoryId: 7,
      img: AppResource.images.img_stir_fried_meal,
    },
    {
      name: "Món nướng",
      categoryId: 7,
      img: AppResource.images.img_grill_cate,
    },
  ],
  dataCook: [
    {
      idCook: 1,
      categoryId: 1,
      name: "Canh cá quả",
      description: "Cá quả nấu ngon",
      img: AppResource.images.img_banner4,
      Ingredient: ["Cá", "Rau muống"],
    },
    {
      idCook: 2,
      categoryId: 3,
      name: "Bánh mochi",
      description: "Cá quả nấu ngon",
      img: AppResource.images.img_banner3,
      Ingredient: ["Thịt lợn"],
    },
  ],
  dataFilter: [
    {
      id: 1,
      name: "Thịt",
      data: [
        {
          id: 1,
          name: "Thịt bò",
        },
        {
          id: 2,
          name: "Thịt lợn",
        },
        {
          id: 3,
          name: "Thịt gà",
        },
        {
          id: 4,
          name: "Thịt dê",
        },
        {
          id: 5,
          name: "Cá",
        },
      ],
    },
    {
      id: 2,
      name: "Rau",
      data: [
        {
          id: uuidv4(),
          name: "Rau cải",
        },
        {
          id: uuidv4(),
          name: "Rau muống",
        },
        {
          id: uuidv4(),
          name: "Rau rền",
        },
        {
          id: uuidv4(),
          name: "Rau mùng tơi",
        },
        {
          id: uuidv4(),
          name: "Rau diếp cá",
        },
      ],
    },
  ],
};
