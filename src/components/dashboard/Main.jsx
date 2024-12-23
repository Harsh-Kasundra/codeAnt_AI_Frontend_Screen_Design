import React from "react";
import RepoCard from "./RepoCard";

const Main = () => {
  return (
    <div>
      <RepoCard
        title={"design-system"}
        lang={"React"}
        size={"7320"}
        type={"Public"}
        updated={"1"}
      />
      <RepoCard
        title={"codeant-ci-app"}
        lang={"Javascript"}
        size={"5871"}
        type={"Private"}
        updated={"2"}
      />
      <RepoCard
        title={"analytics-dashboard"}
        lang={"Python"}
        size={"4521"}
        type={"Private"}
        updated={"5"}
      />
      <RepoCard
        title={"mobile-app"}
        lang={"Swift"}
        size={"3096"}
        type={"Public"}
        updated={"3"}
      />
      <RepoCard
        title={"e-commerce-platform"}
        lang={"Java"}
        size={"6210"}
        type={"Private"}
        updated={"6"}
      />
      <RepoCard
        title={"blog-website"}
        lang={"HTML/CSS"}
        size={"1876"}
        type={"Public"}
        updated={"4"}
      />
      <RepoCard
        title={"social-network"}
        lang={"PHP"}
        size={"5432"}
        type={"Private"}
        updated={"7"}
      />
    </div>
  );
};

export default Main;
