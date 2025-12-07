"use client";

import { usePathname, useSearchParams, useRouter } from "next/navigation";
import Button from "./Button";

export default function Filter() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();

  const activeFilter = searchParams.get("capacity") ?? "all";

  /**
   * 处理筛选按钮点击事件
   * @param {string} filterValue - 筛选值，可以是 "all", "small", "medium" 或 "large"
   */
  function handleClick(filterValue) {
    // 创建一个新的 URLSearchParams 对象，基于当前的搜索参数
    const params = new URLSearchParams(searchParams);
    // 设置 capacity 参数为传入的筛选值
    params.set("capacity", filterValue);
    // 使用 router.push 更新当前路径，添加或修改查询参数
    router.push(`${pathname}?${params.toString()}`);
  }

  return (
    <div className="flex border border-primary-800">
      <Button
        filter="all"
        activeFilter={activeFilter}
        handleClick={handleClick}
      >
        All cabins
      </Button>

      <Button
        filter="small"
        activeFilter={activeFilter}
        handleClick={handleClick}
      >
        1&mdash;4 guests
      </Button>

      <Button
        filter="medium"
        activeFilter={activeFilter}
        handleClick={handleClick}
      >
        5&mdash;7 guests
      </Button>

      <Button
        filter="large"
        activeFilter={activeFilter}
        handleClick={handleClick}
      >
        8+ guests{" "}
      </Button>
    </div>
  );
}
