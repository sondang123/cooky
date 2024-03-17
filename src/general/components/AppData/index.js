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
      categoryId: 2,
      name: "Thịt kho tàu",

      description:
        "Thịt kho nước dừa hột vịt hay còn gọi là thịt kho Tàu là món kho rất được ưa chuộng không chỉ trong những ngày lễ Tết",
      content: (
        <div>
          <h3>Cách chế biến Thịt kho tàu</h3>
          <h5>1: Ướp thịt </h5>
          <p>
            Thịt ba chỉ hay thịt chân giò sau khi mua về thì rửa sạch với nước
            muối, để ráo sau đó cắt miếng vừa ăn rồi cho vào tô, nên chọn thịt
            có da mỏng để kho được ngon, mau mềm hơn và không bị ngấy. Lần lượt
            nêm vào tô 1 muỗng canh hành băm, 1 muỗng canh tỏi băm, 3 muỗng canh
            nước mắm, 2 muỗng canh đường, 1/3 muỗng canh hạt nêm và 1 muỗng cà
            phê tiêu, trộn đều. Dùng màng bọc thực phẩm bọc tô thịt lại, ướp ít
            nhất trong 1 tiếng cho thịt thấm gia vị.
          </p>
          <h5>2: Thắng nước màu </h5>
          <p>
            Bắc nồi lên bếp, cho vào nồi 1 muỗng cà phê đường đun với lửa vừa,
            cùng lúc đó dùng đũa khuấy đều đến khi nước đường trở màu nâu cánh
            gián thì tắt bếp. Chờ đường nguội thì màu sẽ đậm hơn, đổ thêm 1/2
            chén (chén ăn cơm) nước lọc cho loãng bớt.
          </p>
          <h5>3: Kho thịt</h5>
          <p>
            Bạn gắp thịt đã ướp cho vào nồi nước màu vừa thắng, đảo với lửa lớn
            cho đến khi thịt săn lại thì đổ 400ml nước dừa vào. Đậy nắp nồi lại
            rồi kho thịt với lửa nhỏ trong vòng 30 phút. Sau 30 phút, nếu thấy
            nước cạn quá thì cho thêm nước, cho 5 quả trứng vịt luộc đã bóc vỏ
            vào nồi, đậy nắp và đun tiếp trong 30 phút cho thịt chín mềm rồi tắt
            bếp.
          </p>
          <h5>4: Thành phẩm</h5>
          <p>
            Vậy là món thịt kho Tàu thơm ngon đã hoàn thành và có thể dùng nóng
            được rồi. Món ăn có màu nâu cánh gián rất bắt mắt, hương vị đậm đà
            cực hấp dẫn. Thịt heo được kho mềm có vị béo nhẹ kết hợp với trứng
            vịt bùi bùi cực đưa cơm đấy nhé!
          </p>
        </div>
      ),
      img: AppResource.images.img_braised_dish_cate,
      Ingredient: [
        "Thịt lợn",
        "Nước dừa",
        "Trứng vịt luộc",
        "Tỏi băm",
        "Nước mắm",
        "Gia vị thông dụng",
      ],
    },
    {
      idCook: 2,
      categoryId: 1,
      name: "Canh rau muống cà chua ",
      description:
        "Canh rau muống cà chua là món canh mang hương vị dân dã, đậm vị quê ",
      img: AppResource.images.img_rau_muong,
      content: (
        <div>
          <h3>Cách chế biến canh rau muống cà chua</h3>
          <h5>1: Sơ chế nguyên liệu</h5>
          <p>
            Chuẩn bị nguyên liệu xong, bạn bắc nồi lên bếp cùng 1 muỗng canh dầu
            ăn với lửa vừa. Dầu lăn tăn sôi bạn cho 2 trái cà chua đã cắt vào,
            dùng đũa xào đều 3 phút. Khi cà chua mềm, thì bạn tiếp tục cho 500ml
            nước, toàn bộ phần nước cốt me, 3 muỗng canh nước mắm, 1 muỗng canh
            hạt nêm, 1/2 muỗng canh bột ngọt vào, đồng thời tăng lên lửa lớn rồi
            nấu trong vòng 7 - 10 phút. Thấy nước sôi, thì bạn thêm nốt 300gr
            rau muống vào, dùng vá ấn nhẹ nhàng phần rau ngập trong nước, nấu
            thêm 3 phút rồi nêm nếm gia vị vừa ăn, tắt bếp cho ra tô.
          </p>
          <h5>2: Nấu canh </h5>
          <p>
            Bắc nồi lên bếp, cho vào nồi 1 muỗng cà phê đường đun với lửa vừa,
            cùng lúc đó dùng đũa khuấy đều đến khi nước đường trở màu nâu cánh
            gián thì tắt bếp. Chờ đường nguội thì màu sẽ đậm hơn, đổ thêm 1/2
            chén (chén ăn cơm) nước lọc cho loãng bớt.
          </p>
          <h5>3: Thành phẩm</h5>
          <p>
            Canh rau muống cà chua tuy đơn giản nhưng độ thơm ngon thì lại thật
            khó khước từ. Tô canh nóng hổi với màu xanh mướt của rau muống giòn
            giòn, quyện cùng màu đỏ bắt mắt từ cà chua, chấm phá thêm phần nước
            canh đậm đà, chua thanh đúng là trên cả tuyệt vời!
          </p>
        </div>
      ),
      Ingredient: ["Cà chua", "Rau muống", "Gia vị đi kèm"],
    },
    {
      idCook: 3,
      categoryId: 1,
      name: "Canh cua rau mùng tơi",
      description:
        "Bữa cơm gia đình chẳng cần gì nhiều, chỉ cần có một món canh, một món xào và được quây",
      img: AppResource.images.img_banner3,
      content: (
        <div>
          <h3>Cách chế biến canh rau muống cà chua</h3>
          <h5>1: Sơ chế cua và lọc riêu cua</h5>
          <p>
            Cua đồng lột mai, bỏ yếm và rửa sạch, lọc phần gạch cua bỏ ra chén
            nhỏ. Tiếp đến cho cua và 2 chén nước lọc (chén ăn cơm) vào máy xay,
            xay nhuyễn ở mức lớn trong vòng 3 phút đến khi thấy cua mịn thì tắt
            máy. Sau đó lấy rây lọc lấy nước riêu cua và bỏ phần xác.
          </p>
          <h5>2: Sơ chế các nguyên liệu khác</h5>
          <p>
            Rau mồng tơi nhặt lấy phần ngọn và phần lá tươi, bỏ phần gốc, lá già
            và lá vàng. Tiếp đó rửa sạch rau mồng tơi rồi cho ra rổ để ráo, cắt
            nhỏ. Mướp bào vỏ, rửa sạch rồi dùng dao cắt xéo thành các miếng nhỏ
            vừa ăn.
          </p>
          <h5>3: Nấu canh cua rau mồng tơi</h5>
          <p>
            Bắc nồi lên bếp, cho 500ml nước lọc, phần riêu cua đã lọc và chén
            gạch cua vào nồi rồi nấu ở lửa vừa. Sau khoảng 5 - 10 phút, thấy
            nước sôi và nổi bọt thì vớt riêu tảng cho ra tô để riêng. Để cho
            mướp chín và tiết nước ngọt, bạn cho mướp vào nồi và đun với lửa vừa
            trong vòng 5 phút. Kế đến, thêm rau mồng tơi vào nồi, để rau chín
            nhanh, có màu xanh bắt mắt thì bạn vặn lửa lớn và đun trong khoảng 3
            phút. Cuối cùng, cho riêu tảng lại vào nồi, nêm nếm canh cùng với 1
            muỗng canh muối và 1 muỗng canh nước mắm. Nêm nếm lại cho hợp với
            khẩu vị của gia đình, tắt bếp và múc canh ra tô là hoàn thành.
          </p>
          <h5>4: Thành phẩm</h5>
          <p>
            Vậy là ta đã có món canh cua rau mồng tơi mướp hấp dẫn, vị ngọt của
            mướp, của rau mồng tơi kết hợp với riêu cua giúp cho món canh không
            chỉ thơm ngon mà còn đầy đủ chất dinh dưỡng. Với món canh này, Điện
            máy XANH bảo đảm cả nhà ăn sẽ phải khen nức nở, vậy còn chờ gì nữa
            mà hãy vào bếp làm ngay đi nhé!
          </p>
        </div>
      ),
      Ingredient: ["Cua đồng", "Mướp", "Rau mùng tơi", "Gia vị đi kèm"],
    },
    {
      idCook: 4,
      categoryId: 4,
      name: "Ức gà chiên nước mắm",
      description:
        "Thịt gà thơm ngon và giàu chất dinh dưỡng, các món ngon từ gà thì vô cùng đa dạng",
      img: AppResource.images.img_fried_food_cate,
      content: (
        <div>
          <h3>Cách chế biến canh rau muống cà chua</h3>
          <h5>1: Sơ chế ức gà</h5>
          <p>
            Ức gà mua về bạn nên ngâm với nước muối pha loãng khoảng 7 - 10
            phút, dùng tay mát xa nhẹ nhàng để thịt gà sạch chất bẩn. Sau đó rửa
            sạch ức gà lại với nước sạch và để ráo. Chờ cho thịt gà ráo nước thì
            cho thịt gà ra dĩa, ướp vào đó 1 muỗng canh muối và 1 muỗng canh
            giấm ăn. Dùng tay thoa đều muối và giấm lên khắp mặt thịt, rồi để
            yên khoảng 10 - 15 phút cho thịt gà thấm vị.
          </p>
          <h5>2:Chiên ức gà</h5>
          <p>
            Bắc chảo lên bếp và cho vào chảo 1 chén dầu ăn, rồi tiến hành đun
            nóng. Dầu ăn nóng lên thì bạn cho ức gà đã ướp gia vị vào chảo và
            chiên ở lửa vừa để ức gà chín đều và đẹp mắt nhé. Tiếp tục chiên cho
            đến khi gà vàng đều 2 mặt là được. Có thể đậy nắp trong khi chiên để
            không bị bắn dầu.
          </p>
          <h5>3: Làm nước sốt</h5>
          <p>
            Bắc chảo lên bếp, cho vào chảo 1 muỗng cà phê dầu ăn rồi đun nóng.
            Sau đó cho vào chảo 3 muỗng canh nước mắm, 3 muỗng canh giấm rồi
            khuấy đều. Cho thêm bột ngô đã pha loãng với 1 muỗng cà phê nước
            lọc. Tiếp tục đun cho đến khi hỗn hợp sệt lại là được.
          </p>
          <h5>4: Thành phẩm</h5>
          <p>
            Ức gà chiên theo công thức này sẽ vô cùng thơm ngon và hấp dẫn. Ức
            gà chiên bên ngoài vàng giòn, bên trong thì mềm và giữ được độ ngọt
            đặc trưng, kết hợp với nước sốt chua chua ngọt ngọt. Bạn có thể ăn
            kèm với tương ớt và nhâm nhi vào những ngày cuối tuần thì rất tuyệt
            vời.
          </p>
        </div>
      ),
      Ingredient: ["Thịt gà", "Bột ngô", "Ớt bộ", "Gia vị đi kèm"],
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
