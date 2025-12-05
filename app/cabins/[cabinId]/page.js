import { EyeSlashIcon, MapPinIcon, UsersIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import { getCabin, getCabins } from "@/app/_lib/data-service";
import TextExpander from "@/app/_components/TextExpander";

/* export const metadata = {
  title: "Cabin Details",
}; */

// 重新验证, 15 秒重新验证一次, 每次请求时都重新验证, 以确保数据是最新的
// revalidate 是 Next.js 提供的一个属性, 用于指定重新验证的时间间隔
// revalidate的值是常量, 单位是秒, 默认值是 0, 即不重新验证
export const revalidate = 15;

// 动态元数据, 每个路由都有一个不同的标题
export async function generateMetadata({ params }) {
  const cabin = await getCabin(params.cabinId);
  const { name } = cabin;

  return {
    title: `Cabin ${name}`,
  };
}

// 静态生成参数, 预渲染所有可能的路由
export async function generateStaticParams() {
  const cabins = await getCabins();
  const ids = cabins.map((cabin) => ({
    cabinId: String(cabin.id),
  }));
  return ids;
}

export default async function Page({ params }) {
  const cabin = await getCabin(params.cabinId);
  const { name, maxCapacity, image, description } = cabin;

  return (
    <div className="max-w-6xl mx-auto mt-8">
      <div className="grid grid-cols-[3fr_4fr] gap-20 border border-primary-800 py-3 px-10 mb-24">
        <div className="relative scale-[1.15] translate-x-3">
          <Image
            src={image}
            alt={`Cabin ${name}`}
            fill
            className="object-cover"
          />
        </div>

        <div>
          <h3 className="text-accent-100 font-black text-7xl mb-5 translate-x-[-254px] bg-primary-950 p-6 pb-1 w-[150%]">
            Cabin {name}
          </h3>

          <p className="text-lg text-primary-300 mb-10">
            <TextExpander>{description}</TextExpander>
          </p>

          <ul className="flex flex-col gap-4 mb-7">
            <li className="flex gap-3 items-center">
              <UsersIcon className="h-5 w-5 text-primary-600" />
              <span className="text-lg">
                For up to <span className="font-bold">{maxCapacity}</span>{" "}
                guests
              </span>
            </li>
            <li className="flex gap-3 items-center">
              <MapPinIcon className="h-5 w-5 text-primary-600" />
              <span className="text-lg">
                位于浙江莫干山中心一带{" "}
                <span className="font-semibold text-sm">
                  (中国 浙江 莫干山)
                </span>
              </span>
            </li>
            <li className="flex gap-3 items-center">
              <EyeSlashIcon className="h-5 w-5 text-primary-600" />
              <span className="text-lg">
                Privacy <span className="font-bold">100%</span> guaranteed
              </span>
            </li>
          </ul>
        </div>
      </div>

      <div>
        <h2 className="text-5xl font-semibold text-center">
          Reserve today. Pay on arrival.
        </h2>
      </div>
    </div>
  );
}
