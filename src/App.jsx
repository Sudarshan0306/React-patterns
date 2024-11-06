import Accordian from "./components/Accordian/Accordian";
import SearchableList from "./components/SearchableList/SearchableList";

import savannaImg from "./assets/african-savanna.jpg";
import amazonImg from "./assets/amazon-river.jpg";
import caribbeanImg from "./assets/caribbean-beach.jpg";
import desertImg from "./assets/desert-dunes.jpg";
import forestImg from "./assets/forest-waterfall.jpg";
import Place from "./Place";

const PLACES = [
  {
    id: "african-savanna",
    image: savannaImg,
    title: "African Savanna",
    description: "Experience the beauty of nature.",
  },
  {
    id: "amazon-river",
    image: amazonImg,
    title: "Amazon River",
    description: "Get to know the largest river in the world.",
  },
  {
    id: "caribbean-beach",
    image: caribbeanImg,
    title: "Caribbean Beach",
    description: "Enjoy the sun and the beach.",
  },
  {
    id: "desert-dunes",
    image: desertImg,
    title: "Desert Dunes",
    description: "Discover the desert life.",
  },
  {
    id: "forest-waterfall",
    image: forestImg,
    title: "Forest Waterfall",
    description: "Listen to the sound of the water.",
  },
];

function App() {
  return (
    <main>
      <section>
        <h2>Why Work with us?</h2>
        <Accordian className="accordion">
          <Accordian.item id="experience" className="accordion-item">
            <Accordian.title className="accordion-item-title">
              We have 20 years of experience
            </Accordian.title>
            <Accordian.content className="accordion-item-content">
              <article>
                <p>You can&apos;t go wrong with us.</p>
                <p>
                  We are in the business of highly individual vacations trips
                  for more than 20 years.
                </p>
              </article>
            </Accordian.content>
          </Accordian.item>
        </Accordian>

        <Accordian className="accordion">
          <Accordian.item id="local-guides" className="accordion-item">
            <Accordian.title className="accordion-item-title">
              We are working with local guides
            </Accordian.title>
            <Accordian.content className="accordion-item-content">
              <article>
                <p>We are not doing this along from our office.</p>
                <p>
                  Instead, we are working with local guides to ensure a safe and
                  pleasant vacation.
                </p>
              </article>
            </Accordian.content>
          </Accordian.item>
        </Accordian>

        {/* <Accordian className="accordion">
          <Accordian.item
            id="local-guides"
            className="accordion-item"
            title="We have connections with the locals"
          >
            <article>
              <p>You can&apos;t go wrong with us.</p>
              <p>
                We are in the business of highly individual vacations trips for
                more than 20 years.
              </p>
            </article>
          </Accordian.item>
        </Accordian> */}
      </section>
      <section>
        <SearchableList items={PLACES} itemKeyFn={(item) => item.id}>
          {(item) => <Place item={item} />}
        </SearchableList>
        <SearchableList items={["item1", "item2"]} itemKeyFn={(item) => item}>
          {(item) => item}
        </SearchableList>
      </section>
    </main>
  );
}

export default App;
