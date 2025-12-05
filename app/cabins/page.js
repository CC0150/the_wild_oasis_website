import CabinList from "@/app/_components/cabin/CabinList";
import { Suspense } from "react";
import Spinner from "@/app/_components/loader/Spinner";

export const metadata = {
  title: "Cabins",
};

export default async function Page() {
  return (
    <div>
      <h1 className="text-4xl mb-5 text-accent-400 font-medium">
        Our Luxury Cabins
      </h1>
      <p className="text-primary-200 text-lg mb-10">
        温馨而奢华的小屋，坐落于浙江莫干山的中心地带。想象一下，清晨醒来即可欣赏美丽的山景，日间探索周边茂密的森林，或在星空下的私人热水浴缸中放松身心。在这个远离尘嚣的小家中，尽情享受大自然的美景。这里是您享受宁静假期的完美之地，欢迎来到人间天堂。
      </p>
      <Suspense fallback={<Spinner />}>
        <CabinList />
      </Suspense>
    </div>
  );
}
