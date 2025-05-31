import style from "../../aside.module.css";

const TagsValue = ["frontend", "psyhologie", "action"];

export default function TagsProfile() {
  return (
    <div className={style.tagsContainer}>
      {TagsValue.map((tagName) => (
        <TagItem key={tagName} tagName={tagName} />
      ))}
    </div>
  );
}

export function TagItem({ tagName }) {
  return <div className={style.tagsItem}>{tagName}</div>;
}
