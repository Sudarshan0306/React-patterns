import Accordian from "./components/Accordian/Accordian";

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
    </main>
  );
}

export default App;
