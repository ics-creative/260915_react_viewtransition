import { addTransitionType, startTransition, useState } from "react";
import { Detail } from "./Detail";
import { Gallery } from "./Gallery";

/** 写真の選択と画面切り替えを管理 */
export const App = () => {
  // null は一覧、数値は写真の番号（0 始まり）
  const [index, setIndex] = useState<number | null>(null);

  /** 写真の選択をアニメーション付きで更新 */
  const show = (target: number, direction?: "next" | "prev") => {
    // 状態更新で ViewTransition を有効にする
    startTransition(() => {
      // 遷移に方向を付け、前後のアニメーションを切り替える
      if (direction) addTransitionType(direction);
      setIndex(target);
    });
  };

  /** 一覧へ戻る */
  const back = () => {
    startTransition(() => {
      setIndex(null);
    });
  };

  return index === null ? (
    <Gallery onSelect={show} />
  ) : (
    <Detail index={index} onSelect={show} onBack={back} />
  );
};
