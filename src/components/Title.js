import React from "react";
import PropTypes from "prop-types";

const Title = ({ count }) => (
  <div className="max-w-3xl my-10">
    <h1 className="text-2xl font-medium mb-2">
      Almanya Yazılım İlanları{" "}
      <small className="text-indigo-500">({count})</small>
    </h1>
    <h2 className="font-medium text-sm text-indigo-400 mb-4 uppercase tracking-wide">
      GitHub API'den elde edilmiştir.
    </h2>
  </div>
);

Title.propTypes = {
  count: PropTypes.number.isRequired,
};

export default Title;
