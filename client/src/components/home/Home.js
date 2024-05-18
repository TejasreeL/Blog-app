import React from "react";
import "./Home.css";
import articleImage from "../../assets/Article-Writing-1.jpeg";

function Home() {
  return (
    <div className="articleHome">
      <h1>Start Blogging!</h1> {/* Style is handled in CSS */}
      <img src={articleImage} alt="Article Writing" className="articleImage" />
      <p className="lead">
        Blogging is a powerful way to share your thoughts, ideas, and expertise
        with a wide audience. It allows you to create content that can inform,
        entertain, and inspire readers from all over the world. Whether you're
        writing about travel, technology, lifestyle, or any other topic,
        blogging provides a platform to express your unique voice and connect
        with like-minded individuals.
      </p>
      <p className="lead">
        Starting a blog can also be a great way to improve your writing skills
        and build a personal brand. By regularly creating content, you can
        refine your ability to communicate effectively and engage your audience.
        Furthermore, a well-maintained blog can open up opportunities for
        networking, collaborations, and even monetization through advertisements
        and sponsored content.
      </p>
      <p className="lead">
        The key to successful blogging is consistency and authenticity. Write
        about topics you are passionate about and always strive to provide value
        to your readers. With dedication and creativity, your blog can become a
        valuable resource and a rewarding outlet for your creative expression.
      </p>
    </div>
  );
}

export default Home;
