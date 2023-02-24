import React from "react";
import styles from "../styles";

interface IPostItem {
  category: string;
  title: string;
  text: string;
  photo: string;
}

const PostItem: React.FC<IPostItem> = ({ category, title, text, photo }) => {
  return (
    <li className="flex flex-col sm:flex-row bg-gray-400">
      <div className="flex justify-center sm:justify-start">
        <img
          className={`w-full sm:max-w-[350px] max-w-[100%] object-cover`}
          src={photo}
          alt={category}
        />
      </div>
      <div className="flex flex-col justify-evenly px-8 py-8">
        <p className={`${styles.cap1} text-purple mb-3`}>{category}</p>
        <h2
          className={`${styles.heading3} mb-3 hover:underline cursor-pointer sm:text-start`}
        >
          {title}
        </h2>
        <p className={`${styles.paragraph}`}>{text}</p>
      </div>
    </li>
  );
};

export default PostItem;
