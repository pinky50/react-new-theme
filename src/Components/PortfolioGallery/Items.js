import React from "react";

export default function Items({ data }) {
  return (
    <div>
      <div className="row ">
        {data.map((value) => {
          const { id, image, title } = value;
          return (
            <div className="col-lg-4 col-md-6 col-sm-12 my-3" key={id}>
              <div className="card bg-light text-center">
                <img
                  src={image}
                  className="img-fluid"
                  alt={title}
                  style={{ height: "200px" }}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
