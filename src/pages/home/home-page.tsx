const HomePage = () => {
  return (
    <>
      <section className="grow">
        <header className="flex items-center justify-between px-10 py-4">
          <h1>Inicio</h1>
          <div className="h-20 w-20 overflow-hidden rounded-full bg-transparent">
            <img src="https://www.shareicon.net/data/512x512/2017/01/06/868320_people_512x512.png" alt="" />
          </div>
        </header>

        <section className="flex flex-wrap justify-evenly space-x-10 space-y-10 overflow-y-scroll px-10 py-5">
          <h3 className="mx-auto w-full text-center text-2xl text-white">Citas Disponibles</h3>
          <article className="h-40 basis-[100%] bg-shalimar-main md:basis-2/5 lg:basis-[30%]"></article>
          <article className="h-40 basis-[100%] bg-shalimar-main md:basis-2/5 lg:basis-[30%]"></article>
          <article className="h-40 basis-[100%] bg-shalimar-main md:basis-2/5 lg:basis-[30%]"></article>
          <article className="h-40 basis-[100%] bg-shalimar-main md:basis-2/5 lg:basis-[30%]"></article>
          <article className="h-40 basis-[100%] bg-shalimar-main md:basis-2/5 lg:basis-[30%]"></article>
          <article className="h-40 basis-[100%] bg-shalimar-main md:basis-2/5 lg:basis-[30%]"></article>
          <article className="h-40 basis-[100%] bg-shalimar-main md:basis-2/5 lg:basis-[30%]"></article>
          <article className="h-40 basis-[100%] bg-shalimar-main md:basis-2/5 lg:basis-[30%]"></article>
          <article className="h-40 basis-[100%] bg-shalimar-main md:basis-2/5 lg:basis-[30%]"></article>
        </section>
      </section>
    </>
  );
};

export default HomePage;
