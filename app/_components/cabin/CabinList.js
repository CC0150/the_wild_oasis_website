import CabinCard from "./CabinCard";
import { getCabins } from "@/app/_lib/data-service";

export default async function CabinList({ filter }) {
  const cabins = await getCabins();

  if (!cabins || cabins.length === 0) {
    return (
      <p className="text-center text-2xl text-primary-200">
        No cabins available
      </p>
    );
  }

  let filterCabins;

  if (filter === "all") {
    filterCabins = cabins;
  } else if (filter === "small") {
    filterCabins = cabins.filter((cabin) => cabin.maxCapacity <= 4);
  } else if (filter === "medium") {
    filterCabins = cabins.filter(
      (cabin) => cabin.maxCapacity > 4 && cabin.maxCapacity <= 7
    );
  } else if (filter === "large") {
    filterCabins = cabins.filter((cabin) => cabin.maxCapacity > 7);
  }

  return (
    <>
      <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:gap-12 xl:gap-14">
        {filterCabins.map((cabin) => (
          <CabinCard key={cabin.id} cabin={cabin} />
        ))}
      </div>
    </>
  );
}
