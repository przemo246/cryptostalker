export const ArticleSmall = (props) => {
  const {
    data: {
      title,
      urlToImage,
      url,
      source: { name },
    },
  } = props;
  return (
    <article className="article">
      <img
        src={urlToImage}
        alt={title}
        className="article__img article__img--small"
      />
      <h4 className="article__title">{title}</h4>
      <h5 className="article__name">{name}</h5>
      <a href={url} className="article__link">
        Read more <span>→</span>
      </a>
    </article>
  );
};
