import React from "react";

const Home = () => {
  return (
    <div className="container-fluid">
      {/* <Link to={'/'}></Link> */}
      <div className="row">
        <div className="col-sm-3 abc">
          <nav className="navbar navbar-light bg-light">
            <form className="form-inline">
              <input
                className="form-control mr-sm-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              {/* <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button> */}
            </form>
          </nav>
          <h1>Item 1</h1>

          <h1>Item 2</h1>
        </div>
        <div className="col-sm-9 bbc">
          <img src="images/nature.jpg" />
          <h1>Title : Chocalate</h1>
          <h3>Price : 30rs</h3>
          <h3>Description:--------</h3>:
          <h5>
            The seeds of the cacao tree have an intense bitter taste and must be
            fermented to develop the flavor. After fermentation, the seeds are
            dried, cleaned, and roasted. The shell is removed to produce cocoa
            nibs, which are then ground to cocoa mass, unadulterated chocolate
            in rough form. Once the cocoa mass is liquefied by heating, it is
            called chocolate liquor. The liquor may also be cooled and processed
            into its two components: cocoa solids and cocoa butter. Baking
            chocolate, also called bitter chocolate, contains cocoa solids and
            cocoa butter in varying proportions, without any added sugar.
            Powdered baking cocoa, which contains more fiber than cocoa butter,
            can be processed with alkali to produce dutch cocoa. Much of the
            chocolate consumed today is in the form of sweet chocolate, a
            combination of cocoa solids, cocoa butter or added vegetable oils,
            and sugar. Milk chocolate is sweet chocolate that additionally
            contains milk powder or condensed milk. White chocolate contains
            cocoa butter, sugar, and milk, but no cocoa solids.
          </h5>
        </div>
      </div>
    </div>
  );
};

export default Home;
