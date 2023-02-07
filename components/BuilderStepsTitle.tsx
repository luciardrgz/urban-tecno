type Props = {
  components: Product[];
};

function BuilderSteps({ components }: Props) {
  return (
    <h2 className="text-white text-2xl lg:text-3xl font-bold">
      {components && components[0] && components[0].category ? (
        <>{components[0].category.name}</>
      ) : null}
      <br />

      <span className="text-[#9c9c9c] text-base lg:text-base font-semibold">
        {components[0].category.description &&
        components[0].category.description.length > 0 ? (
          components[0].category.description
        ) : (
          <a
            className="hover:text-[#302f2d] hover:no-underline"
            href={`https://www.google.com/search?q=${components[0].category.name}`}
            target="_blank"
          >
            ¿Qué es?
          </a>
        )}
      </span>
    </h2>
  );
}

export default BuilderSteps;
