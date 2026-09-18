import { ViewTransition } from "react";
import { photos } from "./photos";

type DetailProps = {
  /** 表示中の写真番号（0 始まり） */
  index: number;
  /** 前後の移動時 */
  onSelect: (index: number, direction: "next" | "prev") => void;
  /** 一覧へ戻るとき */
  onBack: () => void;
};

/** 詳細画面 */
export const Detail = ({ index, onSelect, onBack }: DetailProps) => {
  const photo = photos.at(index)!;
  return (
    <main>
      <nav>
        <button onClick={onBack}>apps</button>
        <button
          onClick={() =>
            onSelect(index === 0 ? photos.length - 1 : index - 1, "prev")
          }
        >
          chevron_left
        </button>
        <button
          onClick={() =>
            onSelect(index === photos.length - 1 ? 0 : index + 1, "next")
          }
        >
          chevron_right
        </button>
      </nav>
      {/*
        key で切り替え前後の写真を別々にアニメーションさせる
        default は操作ごとの CSS クラス名を指定する
        next は右から、prev は左から表示
      */}
      <ViewTransition
        key={index}
        default={{ default: "auto", next: "slide-next", prev: "slide-prev" }}
      >
        <figure>
          <ViewTransition name={`photo-${index}`} share="photo">
            <img src={photo.src} alt="" />
          </ViewTransition>
          <figcaption>
            {photo.title}
            <p>{photo.description}</p>
          </figcaption>
        </figure>
      </ViewTransition>
    </main>
  );
};
