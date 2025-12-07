import { getCabinPrice } from "@/app/_lib/data-service";

async function Price({ cabinId }) {
  const { price, discount } = await getCabinPrice(cabinId);

  return (
    <p className="mt-12 text-3xl flex gap-3 items-baseline justify-end">
      {discount > 0 ? (
        <>
          <span className="text-3xl font-[350]">￥{price - discount}</span>
          <span className="line-through font-semibold text-primary-600">
            ￥{price}
          </span>
        </>
      ) : (
        <span className="text-3xl font-[350]">￥{price}</span>
      )}
      <span className="text-primary-200">/ night</span>
    </p>
  );
}

export default Price;
