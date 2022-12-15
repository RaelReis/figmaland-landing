function App() {
  return (
    <div className="App">
      <header className="w-screen fixed z-50 py-12">
        <nav className="container flex items-center justify-between">
          <ul className="flex items-center gap-x-5">
            <li>
              <a className="p-3">Home</a>
            </li>
            <li>
              <a className="p-3">Contact</a>
            </li>
            <li>
              <a className="p-3">Pricing</a>
            </li>
            <li>
              <a className="p-3">About</a>
            </li>
            <li>
              <a className="p-3">Contact</a>
            </li>
          </ul>
          <ul>
            <li>
              <a>F</a>
            </li>
            <li>
              <a>T</a>
            </li>
            <li>
              <a>I</a>
            </li>
          </ul>
        </nav>
      </header>
      <section className="h-screen bg-hero bg-center bg-cover hero-clip pt-44">
        <div className="hero-content-animation max-w-md mt-20 sm:max-w-2xl px-4 mx-auto text-center">
          <h1 className="text-5xl sm:text-7xl sm:font-bold leading-tight">
            The best products start with Figma
          </h1>
          <p className="text-xl font-normal mt-4">
            Most calendars are designed for teams. Slate is designed for freelancers
          </p>
          <button className="mt-16 bg-primary rounded-full py-4 px-16 text-xl">Try for free</button>
        </div>
      </section>
    </div>
  );
}

export default App;
