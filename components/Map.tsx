function Map() {
  return (
    <div className="flex w-full pb-12">
      <iframe
        className="ml-1 my-auto w-full border-2 border-hergo-red rounded-lg h-[20rem]"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3143.9481740140677!2d-57.545991699999995!3d-38.001669299999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9584dd2b2f2d5fd7%3A0x2882e7ad9d266c0a!2sUrban%20Tecno!5e0!3m2!1ses!2sar!4v1689636059933!5m2!1ses!2sar"
      >
        <a href="https://www.maps.ie/distance-area-calculator.html">
          area maps
        </a>
      </iframe>
    </div>
  );
}

export default Map;
