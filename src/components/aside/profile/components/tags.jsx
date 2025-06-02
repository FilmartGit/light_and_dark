import Tag from '../../../ui/tag';
import style from "../../aside.module.css";

const TagsValue = ["frontend", "psyhologie", "action"];

export default function TagsProfile() {
  return (
    <div className={style.tagsContainer}>
      {TagsValue.map((tagName) => (
        <Tag key={tagName}>{tagName}</Tag>
      ))}
    </div>
  );
}