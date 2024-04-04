import React from "react";

export default function Post({ id, title, content, authorName }) {
  return (
    <div className="border-black border-2 p-4">
      <h1 className="">{authorName}</h1>
      <h4>{title}</h4>
      <p className="">{content}</p>
    </div>
  );
}
