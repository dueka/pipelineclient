import * as React from "react";
import { ChildDataProps, graphql } from "@apollo/react-hoc";
// import gql from "graphql-tag";
import { gql } from "@apollo/client";
import { ProjectData } from "./ProjectData";
import ProjectsColumn from "./ProjectsColumn";

interface ProjectProps {
  location: any;
  history: any;
}

interface Result {
  candidates: {
    id: number;
    name: string;
    description: string;
    html_url: string;
  };
}

type Props = ChildDataProps<ProjectProps, Result>;
const Projects = (props: any, { location, history }: Props) => {
  const { data, loading } = props;
  const log = data && data.candidates && data.candidates.body;

  if (data && data.candidates && data.candidates.body) {
    return (
      <>
        <div className="user-dashboard">
          <ProjectsColumn />
          <div className="project">
            <div className="project-card-container">
              {data &&
                data.candidates &&
                data.candidates.body.map((data: any) => (
                  <div className="project-card" key={data.id}>
                    <div className="project-card-picture">
                      <div className="project-card-bg">
                        <img
                          src={data.avatar_url}
                          className="project-card-bgImg"
                          alt="backgroundImg"
                        />
                      </div>
                      <div className="project-card-avatar">
                        <img
                          src={data.avatar_url}
                          alt="avatar"
                          className="project-card-img"
                        />
                      </div>
                    </div>

                    <div className="project-card-pad">
                      <div className="project-card-header">
                        <h2 className="heading-5-bold">{data.name}</h2>
                      </div>
                      <div className="project-card-tab">
                        <div className="project-card-tab-1">
                          <div className="project-card-tab-1-top">
                            <p className="body-text-6 text-grey-600">Name</p>
                          </div>
                          <div className="project-card-tab-1-bottom">
                            <p
                              className="body-text-5-bold text-primary-300"
                              style={{ opacity: 0.8, whiteSpace: "nowrap" }}
                            >
                              {data.name}
                            </p>
                          </div>
                        </div>
                        <div className="project-card-tab-2">
                          <div className="project-card-tab-2-top">
                            <p className="body-text-6 text-grey-600">
                              Username
                            </p>
                          </div>
                          <div className="project-card-tab-2-bottom">
                            <p
                              className="body-text-5-bold text-primary-300"
                              style={{ opacity: 0.8 }}
                            >
                              {data.username === ""
                                ? "Not Available"
                                : data.username}
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="project-card-tab">
                        <div className="project-card-tab-1">
                          <div className="project-card-tab-1-top">
                            <p className="body-text-6 text-grey-600">
                              Location
                            </p>
                          </div>
                          <div className="project-card-tab-1-bottom">
                            <p
                              className="body-text-5-bold text-primary-300"
                              style={{ opacity: 0.8 }}
                            >
                              {data.location}
                            </p>
                          </div>
                        </div>
                        <div className="project-card-tab-2">
                          <div className="project-card-tab-2-top">
                            <p className="body-text-6 text-grey-600">
                              GitHub Account
                            </p>
                          </div>
                          <div className="project-card-tab-2-bottom">
                            <p
                              className="body-text-5-bold text-primary-300 project-card-tab-2-bottom-link"
                              style={{
                                opacity: 0.8,
                              }}
                            >
                              <a
                                target="_blank"
                                rel="noreferrer"
                                href={data.real_url}
                                style={{ textDecoration: "none" }}
                              >
                                Github
                              </a>
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="project-card-tab">
                        <div className="project-card-tab-1">
                          <div className="project-card-tab-1-top">
                            <p className="body-text-6 text-grey-600">Email</p>
                          </div>
                          <div className="project-card-tab-1-bottom">
                            <p
                              className="body-text-5-bold text-primary-300"
                              style={{ opacity: 0.8 }}
                            >
                              {data.email === "" ? "Not Available" : data.email}
                            </p>
                          </div>
                        </div>
                        <div className="project-card-tab-2">
                          <div className="project-card-tab-2-top">
                            <p className="body-text-6 text-grey-600">
                              Hireable
                            </p>
                          </div>
                          <div className="project-card-tab-2-bottom">
                            <p
                              className="body-text-5-bold text-primary-300"
                              style={{ opacity: 0.8 }}
                            >
                              {data.hireable === "True" ? "Yes" : "No"}
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="project-card-tab">
                        <div className="project-card-tab-1">
                          <div className="project-card-tab-1-top">
                            <p className="body-text-6 text-grey-600">Stack</p>
                          </div>
                          <div className="project-card-tab-1-bottom">
                            <p
                              className="body-text-6 project-card-tab-1-category text-primary-300"
                              style={{ opacity: 0.8 }}
                            >
                              {" "}
                              {data.stack}
                            </p>
                          </div>
                        </div>
                        <div className="project-card-tab-2">
                          <div className="project-card-tab-2-top">
                            <p className="body-text-6 text-grey-600">
                              Headline
                            </p>
                          </div>
                          <div className="project-card-tab-2-bottom">
                            <p
                              className="body-text-5-bold text-primary-300"
                              style={{
                                whiteSpace: "nowrap",
                                overflow: "hidden",
                                textOverflow: "ellipsis",
                              }}
                            >
                              {data.headline === ""
                                ? "Not Available"
                                : data.headline}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </>
    );
  } else if (data & data.loading) {
    return <div className="body-tex">Loading...</div>;
  } else {
    return null;
  }
};

const query = gql`
  query Candidates {
    candidates @rest(type: "body", path: "/") {
      body
    }
  }
`;

const ApolloProjects = graphql<Result, ProjectProps>(query, {
  options: ({ candidates }) => ({ variables: { candidates } }),
})(Projects);

export { ApolloProjects };
