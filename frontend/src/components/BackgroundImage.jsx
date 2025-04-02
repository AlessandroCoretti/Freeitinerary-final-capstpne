import "../css/BackgroundImages.css";
import AirportSearch from "./AirportSearch";

function BackgroundImages() {
  return (
    <div className="img-container rounded-bottom">
      <img
        src="https://images.unsplash.com/photo-1505697751269-99413df6b7e0?w=600&fm=webp&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzB8fGhpbGxzJTIwaG91c2V8ZW58MHwwfDB8fHww"
        alt="landscape-img"
      />
      <section>
        <h1 className="text-white mb-3">
          Start Your Travel with Us, <br /> find your next Memories
        </h1>
        <div className="form-section bg-white rounded py-3 py-md-4">
          <form action="/flight" className="search-flight d-flex flex-column flex-md-row align-items-top justify-content-between space-y-4 mx-2">
            <AirportSearch />
          </form>
        </div>
      </section>
    </div>
  );
}
export default BackgroundImages;
