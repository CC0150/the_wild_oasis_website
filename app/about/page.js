import Image from "next/image";
import Image1 from "@/public/about-1.jpg";
import Image2 from "@/public/about-2.jpg";

export const metadata = {
  title: "About",
};

export default function Page() {
  return (
    <div className="grid grid-cols-5 gap-x-24 gap-y-32 text-lg items-center">
      <div className="col-span-3">
        <h1 className="text-4xl mb-10 text-accent-400 font-medium">
          Welcome to The Wild Oasis
        </h1>

        <div className="space-y-8">
          <p>
            在这里，自然之美与舒适生活完美融合。隐藏在浙江莫干山的中心地带，这里是您远离尘嚣的人间天堂。我们不仅提供豪华的小屋，更致力于为您创造与自然重新连接、与家人共享简单快乐的难忘体验。
          </p>
          <p>
            我们的豪华小屋为您提供温馨的栖息之所，而真正的自由与宁静则藏于周围的群山之中。漫步于郁郁葱葱的森林，呼吸清新的空气，在篝火旁或私人热水浴缸中仰望星空闪烁。
          </p>
          <p>
            这里是创造难忘回忆的地方，被大自然的壮丽所环绕。在这里，您可以放慢脚步，放松身心，在美丽的环境中感受相聚的喜悦。
          </p>
        </div>
      </div>

      <div className="col-span-2">
        <Image
          src={Image1}
          alt="家人围坐在小屋前的篝火旁"
          placeholder="blur"
          quality={80}
        />
      </div>

      <div className="col-span-2 relative aspect-square">
        <Image
          className="object-cover"
          src="/about-2.jpg"
          fill
          alt="管理 The Wild Oasis 的家族成员"
        />
      </div>

      <div className="col-span-3">
        <h1 className="text-4xl mb-10 text-accent-400 font-medium">
          自1962年起，由我们家族精心经营
        </h1>

        <div className="space-y-8">
          <p>
            自1962年以来，The Wild Oasis
            一直是我们家族珍爱的度假胜地。由我们的祖父母创办，这个避风港在爱与关怀中成长，通过家族传承，见证了我们致力于创造温暖、热情环境的初心。
          </p>
          <p>
            多年来，我们始终保持着The Wild Oasis
            的精髓，将山脉永恒的美丽与家族企业独有的个性化服务融为一体。在这里，您不仅是客人，更是我们大家庭的一员。欢迎您莅临The
            Wild Oasis，这里传统与宁静交融，每一次来访都如同回家般温暖。
          </p>

          <div>
            <a
              href="/cabins"
              className="inline-block mt-4 bg-accent-500 px-8 py-5 text-primary-800 text-lg font-semibold hover:bg-accent-600 transition-all"
            >
              Explore our luxurious cabins
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
