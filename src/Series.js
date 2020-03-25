import React from "react";
import useFetch from "./UseFetch";
import Loading from "./Loading";

const Series = () => {
  const [response, loading, error] = useFetch(
    "https://raw.githubusercontent.com/StreamCo/react-coding-challenge/master/feed/sample.json"
  );

  console.log(response);
  //   const status = response.status;
  if (loading && response != null) {
    return <Loading />;
  } else if (error) {
    return <div>I am an error</div>;
  }

  return (
    <div className="series" data-testid="series">
      <div>I am the response</div>
    </div>
  );
};

export default Series;
