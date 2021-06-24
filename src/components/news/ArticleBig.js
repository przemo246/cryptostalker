export const ArticleBig = (props) => {
  const {
    data: {
      title,
      description,
      urlToImage,
      url,
      source: { name },
    },
  } = props;
  return (
    <article className="article">
      <img
        src={urlToImage}
        className="article__img article__img--big"
        alt={title}
      />
      <h4 className="article__title">{title}</h4>
      <h5 className="article__name">{name}</h5>
      <div className="article__description">{description}</div>
      <a href={url} className="article__link">
        Read more <span>→</span>
      </a>
    </article>
  );
};
