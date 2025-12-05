import CabinCard from "./CabinCard";
import { getCabins } from "@/app/_lib/data-service";

export default async function CabinList() {
  const cabins = await getCabins();

  if (!cabins || cabins.length === 0) {
    return (
      <p className="text-center text-2xl text-primary-200">
        No cabins available
      </p>
    );
  }
  return (
    <>
      <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:gap-12 xl:gap-14">
        {cabins.map((cabin) => (
          <CabinCard key={cabin.id} cabin={cabin} />
        ))}
      </div>
    </>
  );
}
