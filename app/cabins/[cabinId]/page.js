import { getCabin, getCabins } from "@/app/_lib/data-service";
import Reservation from "@/app/_components/reservation/Reservation";
import { Suspense } from "react";
import Spinner from "@/app/_components/loader/Spinner";
import Cabin from "@/app/_components/cabin/Cabin";

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

  const { name } = cabin;

  return (
    <div>
      <div className="max-w-6xl mx-auto mt-8">
        <Cabin cabin={cabin} />
      </div>

      <div>
        <h2 className="text-5xl font-semibold text-center mb-10 text-accent-400">
          Reserve {name} today. Pay on arrival.
        </h2>
        <Suspense fallback={<Spinner />}>
          <Reservation cabin={cabin} />
        </Suspense>
      </div>
    </div>
  );
}
