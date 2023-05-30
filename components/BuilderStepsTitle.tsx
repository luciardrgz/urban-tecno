type Props = {
  components: Product[];
};

function BuilderSteps({ components }: Props) {
  return (
    <div className="text-white -mt-5 md:mt-0 lg:mt-0 text-2xl lg:text-3xl font-bold">
      {components && components[0] && components[0].category ? (
        <>{components[0].category.name}</>
      ) : null}
      <br />

      <p className="text-[#9c9c9c] w-full text-left md:text-start lg:text-start mt-2 md:mt-2 lg:mt-2 leading-5  md:leading-normal lg:leading-normal text-sm md:text-base lg:text-base font-semibold ">
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
      </p>
    </div>
  );
}

export default BuilderSteps;
