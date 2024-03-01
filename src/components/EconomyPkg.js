// import React from 'react'
// import "./EconomyPkg.css"

// function EconomyPkg() {
//   return (
// <>
// <br/>
// <div className="shabanpkgs">
// <img className="shabanpkg1" src={"/Images/ShabanPkg.jpeg"} />
// <img className="shabanpkg2" src={"/Images/ShabanPkg2.jpeg"}/>
// </div>
// </>  )
// }

// export default EconomyPkg;

import React from "react";

function EconomyPkg() {
  return (
    <>
      <br />
      <div class="responsive">
        <div class="gallery">
          <a target="_blank" href="/Images/RamzanPkg1.jpeg">
            <img src="/Images/RamzanPkg1.jpeg" alt="RamzanPkg1" />
          </a>
          <div class="desc">Ramzan Package 1</div>
        </div>
      </div>

      <div class="responsive">
        <div class="gallery">
          <a target="_blank" href="/Images/RamzanPkg2.jpeg">
            <img src="/Images/RamzanPkg2.jpeg" alt="RamzanPkg2" />
          </a>
          <div class="desc">Ramzan Package 2</div>
        </div>
      </div>
    </>
  );
}

export default EconomyPkg;
