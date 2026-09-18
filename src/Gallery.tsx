import { ViewTransition } from "react";
import { photos } from "./photos";

type GalleryProps = {
  /** 選択時 */
  onSelect: (index: number) => void;
};

/** 一覧画面 */
export const Gallery = ({ onSelect }: GalleryProps) => (
  <main>
    <h1>Los Angeles</h1>
    <div className="photos">
      {photos.map((photo, index) => (
        <button key={photo.src} onClick={() => onSelect(index)}>
          {/* 同じ name の写真は、位置と大きさが滑らかに変わる */}
          <ViewTransition name={`photo-${index}`} share="photo">
            <img src={photo.src} alt="" />
          </ViewTransition>
          <span>{photo.title}</span>
        </button>
      ))}
    </div>
  </main>
);
