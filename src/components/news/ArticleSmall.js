import noPicture from "../../img/no_picture.jpg";

export const ArticleSmall = (props) => {
  const {
    data: { title, image_url, link, source_id },
  } = props;
  return (
    <article className="article">
      <img
        src={image_url || noPicture}
        alt={title}
        className="article__img article__img--small"
      />
      <h4 className="article__title">{title}</h4>
      <h5 className="article__name">{source_id}</h5>
      <a href={link} className="article__link">
        Read more <span>→</span>
      </a>
    </article>
  );
};
