import React from "react";
import styles from "../../styles";

import { selectedBlogs } from "../../constants";
// import PostItem from "@components/PostItem";
import PostItem from "../../@components/PostItem";

const Home: React.FC = () => {
  return (
    <div className="p-6">
      <h3 className={`${styles.heading3} text-black sm:text-start mb-4`}>
        Home
      </h3>
      <div className="px-4">
        <p className={`${styles.paragraph} text-black pb-4`}>
          Soluta, blanditiis. Maxime repellat, tempore qui nihil itaque pariatur
          eaque magni natus blanditiis dolorem fuga iusto nam consequuntur odit
          accusamus, repudiandae similique culpa quae iure! Accusamus natus
          nostrum vitae repudiandae voluptatum a. Quasi accusantium, optio quia
          ipsam distinctio velit totam odit voluptatem, animi unde dolor sint
          nam autem ea veniam assumenda quidem numquam mollitia ducimus rem
          deleniti delectus? Est ratione delectus nam. Rerum, et eum quidem
          tenetur voluptates dolor veniam rem mollitia, animi dolores minima
          tempore velit laboriosam iure quis architecto enim! Deserunt libero
          aliquam esse quod modi eveniet temporibus consectetur voluptates!
          Rerum ullam qui cumque est, recusandae dolor! Impedit debitis, ullam
          temporibus eos delectus ab nesciunt officiis doloremque maxime hic qui
          placeat, inventore asperiores quia ipsum sit.
        </p>
      </div>
      <ul className="flex flex-col gap-[30px] md:gap-16 my-[64px]">
        {selectedBlogs.map((blog) => (
          <PostItem key={blog.id} {...blog} />
        ))}
      </ul>
    </div>
  );
};

export default Home;
