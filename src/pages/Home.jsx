import TopSales from "../components/TopSales";

export default function Home() {
  return (
    <>
      <TopSales />
      <section className="catalog">
        <h2 className="text-center">Каталог</h2>
        <div className="preloader">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </section>
    </>
  )
}
