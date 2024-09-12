import useFetch from "./api/useFetch";
import DiceIcon from "./assets/images/icon-dice.svg";
import Divider from "./assets/images/pattern-divider-desktop.svg";
import MobileDivider from "./assets/images/pattern-divider-mobile.svg";

function App() {
  const url = import.meta.env.VITE_ADVICE_API;
  const { data, loading, error, refetch } = useFetch(url);
  const { id, advice } = data?.slip ?? {};

  return (
    <main className="grid place-items-center bg-dark-grayish-blue w-full h-screen">
      <section
        className="bg-grayish-blue rounded-lg grid justify-center text-pretty p-5 relative"
        aria-labelledby=""
      >
        {loading ? (
          <p>loading...</p>
        ) : error ? (
          <p>FetchFailed</p>
        ) : (
          <>
            <h1 className="text-neon-green text-center pb-4">ADVICE #{id}</h1>
            <p className="text-xl text-white">&#34;{advice}&#34;</p>

            <div className="grid justify-center before:content-none py-6">
              <img src={Divider} alt="divider" />
            </div>
          </>
        )}
        <button
          className="absolute left-1/2 bottom-0 translate-x-[-50%] translate-y-[50%] bg-neon-green p-3 rounded-[50%]"
          onClick={refetch}
        >
          <img className="" src={DiceIcon} alt="adviceDice" />
        </button>
      </section>
    </main>
  );
}

export default App;
