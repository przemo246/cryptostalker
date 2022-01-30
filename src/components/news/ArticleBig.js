import noPicture from "../../img/no_picture.jpg";

export const ArticleBig = (props) => {
  const {
    data: { title, description, image_url, link, source_id },
  } = props;
  return (
    <article className="article">
      <img
        src={image_url || noPicture}
        className="article__img article__img--big"
        alt={title}
      />
      <h4 className="article__title">{title}</h4>
      <h5 className="article__name">{source_id}</h5>
      <div className="article__description">{description}</div>
      <a href={link} className="article__link">
        Read more <span>→</span>
      </a>
    </article>
  );
};
