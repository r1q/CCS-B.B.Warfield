import React from "react";
import Link from "gatsby-link";
import styled from "styled-components";
import Helmet from "react-helmet";

import HeaderBlock from "../components/homepage/headerBlock";
import ServiceTimes from "../components/homepage/serviceTimes";
import WhiteContentBlock from "../components/shared/whiteContentBlock";
import SummaryBlock from "../components/homepage/summaryBlock";
import CalendarWidget from "../components/homepage/calendarWidget";
import CoreValues from "../components/homepage/coreValues";
import StayInTouch from "../components/homepage/stayInTouch";
import PreFooterImg from "../components/homepage/preFooterImg";

const IndexPage = ({ data: { contentYaml } }) => (
  <div>
    <Helmet
      title="You've made it to the homepage"
      meta={[
        { name: "description", content: "Sample" },
        { name: "keywords", content: "sample, something" }
      ]}
    />
    <HeaderBlock
      missionStatement={contentYaml.mission.mission_statement}
      pretext={contentYaml.mission.pretext}
    />
    <WhiteContentBlock title={"Service Times"}>
      <ServiceTimes serviceTimes={contentYaml.service_times} />
    </WhiteContentBlock>
    <SummaryBlock />
    <CalendarWidget />
    <CoreValues />
    <StayInTouch />
    <PreFooterImg />
  </div>
);

export default IndexPage;

export const query = graphql`
  query HomepageQuery {
    contentYaml {
      mission {
        pretext
        mission_statement
      }
      service_times
    }
  }
`;
