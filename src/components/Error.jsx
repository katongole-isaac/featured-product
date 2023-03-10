import React from "react";

export default function ErrorPage() {
  return (
    <div className="container border border-primary vh-100 p-0 ">
      <div className="d-flex flex-column error p-0 ">
        <span class="material-symbols-outlined">error</span>
        <h3 className="display-5">Oops Something went Wrong</h3>
        <button
          className="btn btn-sm btn-primary mt-2"
          onClick={() => location.reload()}
        >
          reload
        </button>
      </div>
    </div>
  );
}
